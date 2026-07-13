import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, Phone, Mail, ArrowRight } from 'lucide-react';

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order_id?: string }>;
}) {
  const { order_id } = await searchParams;

  if (!order_id) {
    redirect('/pricing');
  }

  const purchase = await prisma.purchase.findUnique({
    where: { razorpayOrderId: order_id },
    include: {
      plan: true,
      customer: true,
    },
  });

  if (!purchase || purchase.status === 'PENDING') {
    redirect('/pricing');
  }

  const isPaid = purchase.status === 'PAID' || purchase.status === 'ACTIVATED';
  const baseRupees = purchase.baseAmount / 100;
  const taxRupees = purchase.taxAmount / 100;
  const totalRupees = purchase.totalAmount / 100;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${
            isPaid ? 'bg-[#C6A87C]/15' : 'bg-red-50'
          }`}>
            {isPaid ? (
              <Check className="w-12 h-12 text-[#C6A87C]" strokeWidth={3} />
            ) : (
              <span className="text-4xl">⚠️</span>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">
            {isPaid ? 'Welcome to DMD Gold!' : 'Payment Issue'}
          </h1>
          <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
            {isPaid
              ? 'Your payment has been received successfully. Our team will contact you within 24 hours with your login credentials and onboarding schedule.'
              : 'There was an issue with your payment. If money was deducted from your account, it will be refunded automatically within 5-7 business days.'}
          </p>

          {/* Order Details Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-left mb-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Order Details
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Plan</span>
                <span className="font-bold text-[#1A1A1A]">{purchase.plan.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Customer</span>
                <span className="font-semibold text-[#1A1A1A]">{purchase.customer.name}</span>
              </div>
              {purchase.customer.company && (
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-sm text-gray-500">Business</span>
                  <span className="font-semibold text-[#1A1A1A]">{purchase.customer.company}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Base Price</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(baseRupees)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">GST (18%)</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(taxRupees)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Total Paid</span>
                <span className="text-xl font-bold text-[#C6A87C]">{formatPrice(totalRupees)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Order ID</span>
                <span className="font-mono text-xs text-gray-400">{purchase.razorpayOrderId}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-gray-500">Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isPaid
                    ? 'bg-[#C6A87C]/10 text-[#C6A87C] border border-[#C6A87C]/20'
                    : 'bg-red-50 text-red-600 border border-red-200'
                }`}>
                  {purchase.status}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors flex items-center gap-2">
                Return to Home <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Support Info */}
          <div className="bg-[#2C2C2C] text-white rounded-2xl p-8">
            <h4 className="font-serif text-lg mb-4">Need Help?</h4>
            <p className="text-gray-400 text-sm mb-6">
              Our support team is available Monday–Saturday, 10 AM – 7 PM IST.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919371123699" className="flex items-center gap-2 text-sm text-[#C6A87C] hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +91 9371123699
              </a>
              <a href="mailto:info@dmdgold.com" className="flex items-center gap-2 text-sm text-[#C6A87C] hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@dmdgold.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
