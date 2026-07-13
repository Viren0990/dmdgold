import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { AlertCircle, ArrowRight } from 'lucide-react';

export default function TestPaymentPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
          
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-blue-500" />
          </div>

          <h1 className="text-3xl font-serif text-[#2C2C2C] mb-4">
            Live Testing Mode
          </h1>
          
          <p className="text-gray-500 mb-8 leading-relaxed">
            This is a secret, unlisted route used strictly for testing the production Razorpay integration. 
            By proceeding, you will check out using the <strong className="text-[#1A1A1A]">DMD Live Test Plan</strong>.
          </p>

          <div className="bg-[#FAF9F6] p-6 rounded-2xl mb-8 text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">
              Pricing Breakdown
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Base Price</span>
                <span className="font-semibold">₹5.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">GST (18%)</span>
                <span className="font-semibold">₹0.90</span>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between">
                <span className="font-bold text-[#1A1A1A]">Total Payable</span>
                <span className="font-bold text-[#C6A87C] text-lg">₹5.90</span>
              </div>
            </div>
          </div>

          <Link href="/checkout?plan=test-payment">
            <button className="w-full bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
              Proceed to Test Checkout <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

        </div>
      </div>

      <Footer />
    </main>
  );
}
