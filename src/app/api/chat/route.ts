import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { prisma } from '@/lib/prisma';
import { embedSingleText } from '@/lib/knowledge/embedding';

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question || question.trim().length === 0) {
    return new Response('Please ask a question.', { status: 400 });
  }

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

  const contextString = results
    .map((r) => `--- Section: ${r.metadata} ---\n${r.content}`)
    .join('\n\n');

  const result = await streamText({
    model: google('gemini-2.5-flash'),
    system: `You are the Lead Sales Engineer for DMD Gold Prosperity, India's first complete B2B jewellery commerce platform.

Use ONLY the following internal documentation to answer the user's question.
If the information is not in the provided data, state clearly that you don't have that specific information, and kindly advise the user to contact our team directly via WhatsApp or phone at **+91 9371123699** for their specific questions.
Do NOT include any source citations or references in your answer.
Answer STRICTLY in the EXACT language used in the USER QUERY. If the user asks in English, reply ONLY in English. If the user asks in Hindi (even in Latin script), reply ONLY in Hindi. Do NOT mix languages.
Be professional, concise, and persuasive.
Keep answers focused and under 150 words.`,
    prompt: `--- PRODUCT DATA ---\n${contextString}\n\n--- USER QUERY ---\n${question}`,
  });

  return result.toTextStreamResponse();
}
