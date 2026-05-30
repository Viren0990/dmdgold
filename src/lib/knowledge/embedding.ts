import { embed, embedMany } from 'ai';
import type { GoogleGenerativeAIProvider } from '@ai-sdk/google';

/**
 * Embeds a single text string using Gemini's embedding model.
 * Used at query time to embed the user's question.
 *
 * @returns A 3072-dimensional vector
 */
export async function embedSingleText(
  google: GoogleGenerativeAIProvider,
  text: string,
): Promise<number[]> {
  const response = await embed({
    model: google.textEmbeddingModel('gemini-embedding-001'),
    value: text,
  });
  return response.embedding;
}

/**
 * Embeds multiple texts in a single batch API call using Gemini's embedding model.
 * Used during ingestion to embed all chunks efficiently.
 *
 * @returns Parallel array of 3072-dimensional vectors
 */
export async function embedTexts(
  google: GoogleGenerativeAIProvider,
  texts: string[],
): Promise<number[][]> {
  const response = await embedMany({
    model: google.textEmbeddingModel('gemini-embedding-001'),
    values: texts,
  });
  return response.embeddings;
}
