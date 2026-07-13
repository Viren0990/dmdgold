import Link from 'next/link';
import { LayoutDashboard, ShoppingCart, Users, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-serif text-[#1A1A1A] font-bold">DMD Admin</h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Control Panel</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-[#C6A87C] transition-colors font-medium">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/purchases" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-[#C6A87C] transition-colors font-medium">
            <ShoppingCart className="w-5 h-5" /> Purchases
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-[#C6A87C] transition-colors font-medium">
            <Users className="w-5 h-5" /> Customers
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium">
            <LogOut className="w-5 h-5" /> Exit to Main Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
