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

  // 1. Retailer Edition
  await prisma.plan.upsert({
    where: { slug: 'retailer-edition' },
    update: {
      name: 'Retailer Edition',
      description: 'Complete software for jewellery retailers',
      licensePrice: 600000,   // ₹6,000
    },
    create: {
      name: 'Retailer Edition',
      slug: 'retailer-edition',
      description: 'Complete software for jewellery retailers',
      licensePrice: 600000,
    },
  });

  // 2. Wholesaler Edition
  await prisma.plan.upsert({
    where: { slug: 'wholesaler-edition' },
    update: {
      name: 'Wholesaler Edition',
      description: 'For wholesalers & manufacturers',
      licensePrice: 1200000,   // ₹12,000
    },
    create: {
      name: 'Wholesaler Edition',
      slug: 'wholesaler-edition',
      description: 'For wholesalers & manufacturers',
      licensePrice: 1200000,
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
