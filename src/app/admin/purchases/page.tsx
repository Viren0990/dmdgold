import { prisma } from '@/lib/prisma';
import PurchasesTable from './PurchasesTable';

export const dynamic = 'force-dynamic';

export default async function AdminPurchasesPage() {
  const purchases = await prisma.purchase.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      customer: true,
      plan: true,
    },
  });

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif text-[#1A1A1A] mb-8">Purchases</h1>
      <PurchasesTable initialPurchases={purchases} />
    </div>
  );
}
