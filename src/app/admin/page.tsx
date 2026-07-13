import { prisma } from '@/lib/prisma';
import { IndianRupee, ShoppingBag, Users, AlertTriangle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Fetch some basic stats
  const [totalPurchases, totalPaidPurchases, totalCustomers] = await Promise.all([
    prisma.purchase.count(),
    prisma.purchase.count({ where: { status: { in: ['PAID', 'ACTIVATED'] } } }),
    prisma.customer.count(),
  ]);

  // Aggregate revenue from PAID purchases
  const paidPurchases = await prisma.purchase.findMany({
    where: { status: { in: ['PAID', 'ACTIVATED'] } },
    select: { totalAmount: true },
  });

  const totalRevenue = paidPurchases.reduce((acc, curr) => acc + curr.totalAmount, 0) / 100;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-serif text-[#1A1A1A] mb-8">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Revenue Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <IndianRupee className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-semibold text-sm tracking-wide uppercase">Total Revenue</span>
          </div>
          <span className="text-3xl font-bold text-[#1A1A1A]">{formatPrice(totalRevenue)}</span>
        </div>

        {/* Paid Purchases Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-semibold text-sm tracking-wide uppercase">Paid Orders</span>
          </div>
          <span className="text-3xl font-bold text-[#1A1A1A]">{totalPaidPurchases}</span>
        </div>

        {/* Total Customers Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className="font-semibold text-sm tracking-wide uppercase">Customers</span>
          </div>
          <span className="text-3xl font-bold text-[#1A1A1A]">{totalCustomers}</span>
        </div>

        {/* Abandoned / Failed Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <span className="font-semibold text-sm tracking-wide uppercase">Abandoned / Failed</span>
          </div>
          <span className="text-3xl font-bold text-[#1A1A1A]">{totalPurchases - totalPaidPurchases}</span>
        </div>

      </div>
    </div>
  );
}
