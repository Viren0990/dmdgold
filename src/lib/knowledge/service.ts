import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { prisma } from '@/lib/prisma';
import { chunkMarkdown } from './chunker';
import { embedSingleText, embedTexts } from './embedding';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Returns a configured Google Generative AI provider instance.
 */
function getGoogleProvider() {
  return createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
  });
}

/**
 * Ingests a markdown file: reads → chunks → embeds → stores in KnowledgeBase.
 * Idempotent — clears existing rows before inserting.
 */
export async function ingest(filePath: string) {
  console.log(`[Knowledge] Starting ingestion of: ${filePath}`);

  // 1. Read the markdown file
  const absolutePath = path.resolve(filePath);
  const rawContent = await fs.readFile(absolutePath, 'utf-8');
  console.log(`[Knowledge] File read: ${rawContent.length} characters`);

  // 2. Chunk the markdown
  const chunks = chunkMarkdown(rawContent);
  console.log(`[Knowledge] Chunking complete: ${chunks.length} chunks created`);

  // 3. Batch embed all chunk contents
  const google = getGoogleProvider();
  const contents = chunks.map((c) => c.content);
  console.log(`[Knowledge] Embedding ${contents.length} chunks...`);
  const vectors = await embedTexts(google, contents);
  console.log(`[Knowledge] Embedding complete: ${vectors.length} vectors generated`);

  // 4. Clear existing data (idempotent re-ingestion)
  await prisma.$executeRaw`DELETE FROM "KnowledgeBase"`;
  console.log('[Knowledge] Cleared existing KnowledgeBase rows');

  // 5. Insert all chunks with their embeddings
  for (let i = 0; i < chunks.length; i++) {
    const vectorString = `[${vectors[i].join(',')}]`;

    await prisma.$executeRaw`
      INSERT INTO "KnowledgeBase" (id, content, metadata, embedding, "createdAt")
      VALUES (
        gen_random_uuid(),
        ${chunks[i].content},
        ${chunks[i].metadata},
        ${vectorString}::vector,
        NOW()
      )
    `;
  }

  console.log(`[Knowledge] Inserted ${chunks.length} chunks into KnowledgeBase`);

  return {
    chunksInserted: chunks.length,
    chunks: chunks.map((c) => ({
      metadata: c.metadata,
      contentPreview: c.content.substring(0, 100) + '...',
    })),
  };
}

/**
 * Answers a user's question using RAG:
 * embeds the query → vector search for top 3 chunks → generates a contextual answer.
 */
export async function chat(question: string) {
  const google = getGoogleProvider();

  // 1. Embed the user's question
  const queryVector = await embedSingleText(google, question);
  const vectorString = `[${queryVector.join(',')}]`;

  // 2. Vector search — find the top 3 most similar chunks using cosine distance
  const results: { id: string; content: string; metadata: string; similarity: number }[] =
    await prisma.$queryRaw`
      SELECT 
        id,
        content,
        metadata,
        1 - (embedding <=> ${vectorString}::vector) AS similarity
      FROM "KnowledgeBase"
      ORDER BY embedding <=> ${vectorString}::vector
      LIMIT 3
    `;

  // 3. Assemble the context string from retrieved chunks
  const contextString = results
    .map(
      (r) =>
        `--- Section: ${r.metadata} ---\n${r.content}`,
    )
    .join('\n\n');

  // 4. Generate the answer using the RAG prompt
  const response = await generateText({
    model: google('gemini-2.5-flash'),
    system: `You are the Lead Sales Engineer for DMD Gold Prosperity, India's first complete B2B jewellery commerce platform.

Use ONLY the following internal documentation to answer the user's question.
If the information is not in the provided data, state clearly that you don't have that specific information.
Do NOT include any source citations or references in your answer.
Answer in the same language as the user's question (Hindi or English).
Be professional, concise, and persuasive.
Keep answers focused and under 200 words unless the question requires more detail.`,
    prompt: `--- PRODUCT DATA ---\n${contextString}\n\n--- USER QUERY ---\n${question}`,
  });

  return {
    answer: response.text,
    sources: results.map((r) => ({
      metadata: r.metadata,
      similarity: Number(r.similarity),
    })),
  };
}
