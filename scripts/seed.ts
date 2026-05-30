/**
 * Seed script — Run once to ingest the USP file into the KnowledgeBase.
 * 
 * Usage:
 *   npx tsx scripts/seed.ts
 * 
 * This reads data/usp_and_demo_pitch.md, chunks it, embeds it via Gemini,
 * and stores everything in your Neon PostgreSQL database.
 */
import { config } from 'dotenv';

// Load .env.local (Next.js style) before any other imports
config({ path: '.env.local' });

async function main() {
  // Dynamic import so env vars are available when modules load
  const { ingest } = await import('../src/lib/knowledge/service');

  console.log('🌱 Starting seed...\n');

  const result = await ingest('data/usp_and_demo_pitch.md');

  console.log(`\n✅ Seed complete!`);
  console.log(`   Chunks inserted: ${result.chunksInserted}`);
  console.log(`\n📋 Chunk preview:`);
  result.chunks.forEach((c, i) => {
    console.log(`   [${i}] ${c.metadata}`);
    console.log(`       ${c.contentPreview}\n`);
  });

  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
