'use server';

import { chat } from './service';

/**
 * Server Action — called directly from the ChatBot client component.
 * No API route needed — Next.js handles the RPC automatically.
 */
export async function askQuestion(question: string): Promise<{
  answer: string;
  sources: { metadata: string; similarity: number }[];
}> {
  if (!question || question.trim().length === 0) {
    return {
      answer: 'Please ask a question about DMD Gold Prosperity.',
      sources: [],
    };
  }

  try {
    const result = await chat(question.trim());
    return result;
  } catch (error) {
    console.error('[Knowledge] Chat error:', error);
    return {
      answer: 'Sorry, I encountered an error processing your question. Please try again.',
      sources: [],
    };
  }
}
