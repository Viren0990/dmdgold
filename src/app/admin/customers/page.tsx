import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';

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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">Joined</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Business / GST</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((customer) => {
                const hasPaid = customer.purchases.some(
                  (p) => p.status === 'PAID' || p.status === 'ACTIVATED'
                );

                return (
                  <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                      {format(new Date(customer.createdAt), 'dd MMM yyyy')}
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4">
                      <div>{customer.email}</div>
                      <div className="text-gray-400">{customer.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[#1A1A1A]">{customer.company || '-'}</div>
                      <div className="text-xs text-gray-400 uppercase font-mono mt-0.5">{customer.gstNumber || '-'}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {customer.city ? `${customer.city}, ${customer.state}` : '-'}
                    </td>
                    <td className="px-6 py-4">
                      {hasPaid ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
                          Paying
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-200">
                          Lead
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}

              {customers.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
