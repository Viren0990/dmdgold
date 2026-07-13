import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import CheckoutClient from './CheckoutClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planSlug } = await searchParams;

  if (!planSlug) {
    redirect('/pricing');
  }

  // Fetch plan details from the database securely
  const plan = await prisma.plan.findUnique({
    where: { slug: planSlug },
  });

  if (!plan) {
    redirect('/pricing');
  }

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <CheckoutClient plan={plan} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
