import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';

export default async function AdminPurchasesPage() {
  const purchases = await prisma.purchase.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      customer: true,
      plan: true,
    },
  });

  const formatPrice = (pricePaise: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(pricePaise / 100);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
      case 'ACTIVATED':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'FAILED':
      case 'CANCELLED':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif text-[#1A1A1A] mb-8">Purchases</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Plan</th>
                <th className="px-6 py-4 font-semibold">Total Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(purchase.createdAt), 'dd MMM yyyy, HH:mm')}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-400">
                    {purchase.razorpayOrderId || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-[#1A1A1A]">{purchase.customer.name}</div>
                    <div className="text-xs text-gray-400">{purchase.customer.email}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#1A1A1A]">
                    {purchase.plan.name}
                  </td>
                  <td className="px-6 py-4 font-bold text-[#1A1A1A]">
                    {formatPrice(purchase.totalAmount)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(purchase.status)}`}>
                      {purchase.status}
                    </span>
                  </td>
                </tr>
              ))}
              
              {purchases.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No purchases found.
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
