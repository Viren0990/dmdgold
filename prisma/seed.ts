import * as dotenv from 'dotenv';
// Load variables from .env.local
dotenv.config({ path: '.env.local' });

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Create a direct PrismaClient with pg adapter for seeding
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding plans into the database...');

  // 1. DMD Retail Classic
  await prisma.plan.upsert({
    where: { slug: 'retail-classic' },
    update: {
      name: 'DMD Retail Classic',
      description: 'For shops running manual tag systems',
      licensePrice: 1500000,   // ₹15,000
    },
    create: {
      name: 'DMD Retail Classic',
      slug: 'retail-classic',
      description: 'For shops running manual tag systems',
      licensePrice: 1500000,
    },
  });

  // 2. DMD Retail Pro
  await prisma.plan.upsert({
    where: { slug: 'retail-pro' },
    update: {
      name: 'DMD Retail Pro',
      description: 'Barcode-powered speed & accuracy',
      licensePrice: 2400000,   // ₹24,000
    },
    create: {
      name: 'DMD Retail Pro',
      slug: 'retail-pro',
      description: 'Barcode-powered speed & accuracy',
      licensePrice: 2400000,
    },
  });

  // 3. DMD Business Essential
  await prisma.plan.upsert({
    where: { slug: 'business-essential' },
    update: {
      name: 'DMD Business Essential',
      description: 'For wholesalers & manufacturers',
      licensePrice: 3000000,   // ₹30,000
    },
    create: {
      name: 'DMD Business Essential',
      slug: 'business-essential',
      description: 'For wholesalers & manufacturers',
      licensePrice: 3000000,
    },
  });

  // 4. DMD Business Prime
  await prisma.plan.upsert({
    where: { slug: 'business-prime' },
    update: {
      name: 'DMD Business Prime',
      description: 'With built-in E-invoicing compliance',
      licensePrice: 4000000,   // ₹40,000
    },
    create: {
      name: 'DMD Business Prime',
      slug: 'business-prime',
      description: 'With built-in E-invoicing compliance',
      licensePrice: 4000000,
    },
  });

  // 5. DMD Live Test Plan
  await prisma.plan.upsert({
    where: { slug: 'test-payment' },
    update: {
      name: 'DMD Live Test Plan',
      description: 'Internal testing plan (₹5.00 + GST)',
      licensePrice: 500, // ₹5.00 in paise
    },
    create: {
      name: 'DMD Live Test Plan',
      slug: 'test-payment',
      description: 'Internal testing plan (₹5.00 + GST)',
      licensePrice: 500,
    },
  });

  console.log('✅ Plans seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
