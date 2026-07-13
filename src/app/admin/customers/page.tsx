import { prisma } from '@/lib/prisma';
import CustomersTable from './CustomersTable';

export const dynamic = 'force-dynamic';

export default async function AdminCustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      purchases: {
        select: { id: true, status: true },
      },
    },
  });

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif text-[#1A1A1A] mb-8">Customers</h1>
      <CustomersTable initialCustomers={customers} />
    </div>
  );
}
