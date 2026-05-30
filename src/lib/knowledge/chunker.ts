import { marked, type Token, type Tokens } from 'marked';

/**
 * Represents a single chunk of content extracted from a markdown file.
 */
export interface Chunk {
  /** The cleaned text content of the chunk */
  content: string;
  /** The header breadcrumb path, e.g. "USP Wholesalers > Billing Desk (POS)" */
  metadata: string;
}

interface ChunkingOptions {
  /** Maximum characters per chunk (default: 1200) */
  maxChunkSize?: number;
  /** Minimum characters for a chunk to stand alone — smaller ones merge upward (default: 200) */
  minChunkSize?: number;
}

// ─── Internal helpers ────────────────────────────────────────────────────────

/**
 * Strips markdown formatting syntax while preserving readable text.
 * Keeps table rows pipe-delimited for readability.
 */
function stripMarkdownSyntax(text: string): string {
  return (
    text
      // Remove images: ![alt](url)
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      // Convert links: [text](url) → text
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      // Remove bold/italic markers
      .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
      // Remove heading markers (# ## ###)
      .replace(/^#{1,6}\s+/gm, '')
      // Remove horizontal rules
      .replace(/^-{3,}$/gm, '')
      .replace(/^\*{3,}$/gm, '')
      // Remove table separator rows (|---|---|)
      .replace(/^\|[\s\-:|]+\|$/gm, '')
      // Clean up excessive blank lines
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  );
}

/**
 * Extracts the raw text content from a marked token, recursively handling nested tokens.
 */
function tokenToText(token: Token): string {
  // For tokens with a `text` property that is a string
  if ('text' in token && typeof token.text === 'string') {
    // Table tokens need special handling
    if (token.type === 'table') {
      const table = token as Tokens.Table;
      const headerRow = table.header.map((cell) => cell.text).join(' | ');
      const bodyRows = table.rows.map((row) =>
        row.map((cell) => cell.text).join(' | '),
      );
      return [headerRow, ...bodyRows].join('\n');
    }
    return token.text;
  }
  // For tokens with raw content
  if ('raw' in token && typeof token.raw === 'string') {
    return token.raw;
  }
  return '';
}

/**
 * Splits text at paragraph boundaries (\n\n), then at sentence boundaries if still too large.
 */
function splitOversizedText(text: string, maxSize: number): string[] {
  if (text.length <= maxSize) {
    return [text];
  }

  // First attempt: split by paragraphs
  const paragraphs = text.split(/\n\n+/);
  if (paragraphs.length > 1) {
    const results: string[] = [];
    let currentBuffer = '';

    for (const para of paragraphs) {
      if (
        currentBuffer.length > 0 &&
        currentBuffer.length + para.length + 2 > maxSize
      ) {
        results.push(currentBuffer.trim());
        currentBuffer = para;
      } else {
        currentBuffer += (currentBuffer.length > 0 ? '\n\n' : '') + para;
      }
    }
    if (currentBuffer.trim().length > 0) {
      results.push(currentBuffer.trim());
    }
    return results;
  }

  // Fallback: split by sentences
  const sentences = text.split(/(?<=\.)\s+/);
  const results: string[] = [];
  let currentBuffer = '';

  for (const sentence of sentences) {
    if (
      currentBuffer.length > 0 &&
      currentBuffer.length + sentence.length + 1 > maxSize
    ) {
      results.push(currentBuffer.trim());
      currentBuffer = sentence;
    } else {
      currentBuffer += (currentBuffer.length > 0 ? ' ' : '') + sentence;
    }
  }
  if (currentBuffer.trim().length > 0) {
    results.push(currentBuffer.trim());
  }

  return results;
}

// ─── Main export ─────────────────────────────────────────────────────────────

/**
 * Parses a markdown string into semantically meaningful chunks using
 * recursive structural chunking.
 */
export function chunkMarkdown(
  raw: string,
  options: ChunkingOptions = {},
): Chunk[] {
  const maxChunkSize = options.maxChunkSize ?? 1200;
  const minChunkSize = options.minChunkSize ?? 200;

  const tokens = marked.lexer(raw);

  // Intermediate representation: sections grouped by heading
  interface Section {
    metadata: string; // breadcrumb
    rawParts: string[]; // accumulated raw text parts
  }

  const sections: Section[] = [];
  const headingStack: { depth: number; text: string }[] = [];
  let currentSection: Section | null = null;
  let skipSection = false;

  function getBreadcrumb(): string {
    return headingStack.map((h) => h.text).join(' > ');
  }

  function flushSection(): void {
    if (currentSection && currentSection.rawParts.length > 0) {
      const combinedText = currentSection.rawParts.join('\n\n');
      const cleaned = stripMarkdownSyntax(combinedText);
      if (cleaned.length > 0) {
        currentSection.rawParts = [cleaned];
        sections.push(currentSection);
      }
    }
  }

  for (const token of tokens) {
    if (token.type === 'heading') {
      const heading = token as Tokens.Heading;
      const headingText = heading.text;

      // Skip "Table of Contents" section entirely
      if (
        headingText.includes('Table of Contents') ||
        headingText.includes('📋')
      ) {
        flushSection();
        skipSection = true;
        continue;
      }

      // Flush the previous section before starting a new one
      flushSection();
      skipSection = false;

      // Update the heading stack based on depth
      const depth = heading.depth;
      while (
        headingStack.length > 0 &&
        headingStack[headingStack.length - 1].depth >= depth
      ) {
        headingStack.pop();
      }
      headingStack.push({ depth, text: headingText });

      // Start a new section
      currentSection = {
        metadata: getBreadcrumb(),
        rawParts: [],
      };
    } else if (!skipSection) {
      // Accumulate content into the current section
      if (!currentSection) {
        // Content before any heading — use file title or generic metadata
        currentSection = {
          metadata: 'Introduction',
          rawParts: [],
        };
      }

      const text = tokenToText(token);
      if (text.trim().length > 0) {
        currentSection.rawParts.push(text);
      }
    }
  }

  // Flush the last section
  flushSection();

  // Now convert sections to chunks with size constraints
  const rawChunks: Chunk[] = sections.map((s) => ({
    content: s.rawParts.join('\n\n'),
    metadata: s.metadata,
  }));

  // Phase A: Split oversized chunks
  const splitChunks: Chunk[] = [];
  for (const chunk of rawChunks) {
    if (chunk.content.length > maxChunkSize) {
      const parts = splitOversizedText(chunk.content, maxChunkSize);
      for (let i = 0; i < parts.length; i++) {
        splitChunks.push({
          content: parts[i],
          metadata:
            parts.length > 1
              ? `${chunk.metadata} (part ${i + 1})`
              : chunk.metadata,
        });
      }
    } else {
      splitChunks.push(chunk);
    }
  }

  // Phase B: Merge tiny chunks into the previous chunk
  const finalChunks: Chunk[] = [];
  for (const chunk of splitChunks) {
    if (
      chunk.content.length < minChunkSize &&
      finalChunks.length > 0
    ) {
      // Merge into the previous chunk
      const prev = finalChunks[finalChunks.length - 1];
      prev.content += '\n\n' + chunk.content;
      prev.metadata += ' + ' + chunk.metadata;
    } else {
      finalChunks.push({ ...chunk });
    }
  }

  return finalChunks;
}
