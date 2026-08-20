'use client';

import { Suspense } from 'react';
import { redirect, useSearchParams } from 'next/navigation';
import CheckoutClient from './CheckoutClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pricingData } from '@/lib/constants';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planSlug = searchParams.get('plan');

  if (!planSlug) {
    redirect('/pricing');
  }

  // Find the plan instantly from static data instead of waiting for a database query!
  const allPlans = [...pricingData.plans, ...(pricingData.test || [])];
  const foundPlan = allPlans.find((p) => p.id === planSlug);

  if (!foundPlan) {
    redirect('/pricing');
  }

  // Adapt the static plan to match the expected Prisma Plan structure for CheckoutClient
  const adaptedPlan = {
    id: foundPlan.id,
    slug: foundPlan.id,
    name: foundPlan.name,
    licensePrice: foundPlan.pricePaise,
    amcPrice: 0, // Not used in checkout client currently
    features: foundPlan.features,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return (
    <div className="flex-1 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <CheckoutClient plan={adaptedPlan as any} />
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-1 pt-32 pb-24 px-6 md:px-12 text-center text-gray-500 font-medium">Loading checkout securely...</div>}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </main>
  );
}
