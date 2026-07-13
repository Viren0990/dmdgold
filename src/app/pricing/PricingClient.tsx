'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { pricingData } from '@/lib/constants';

// --- DATA ---


// --- COMPONENT: PACKAGE CARD ---
const PackageCard = ({
  pkg,
  onBuy,
  loading
}: {
  pkg: typeof pricingData.retail[0];
  onBuy: (slug: string) => void;
  loading: string | null;
}) => {
  const isLoading = loading === pkg.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`
        relative p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full
        ${pkg.highlight
          ? 'bg-gradient-to-b from-[#262220] to-[#1a1817] border-2 border-[#D4B888] shadow-[0_20px_60px_-15px_rgba(198,168,124,0.45)] md:z-10'
          : 'bg-[#2a2a2a] border border-white/10 shadow-2xl shadow-black/30 hover:border-[#C6A87C]/60'
        }
        text-white
      `}
    >
      {/* Ambient glow for highlighted card */}
      {pkg.highlight && (
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-[#D4B888]/20 blur-3xl rounded-full" />
      )}

      {/* Header */}
      <div className="relative space-y-4 mb-8 mt-2 text-center">
        <div
          className={`inline-block px-4 py-1.5 rounded-full mb-2 ${
            pkg.highlight
              ? 'bg-gradient-to-r from-[#D4B888] via-[#F0DCB8] to-[#D4B888] shadow-md shadow-[#D4B888]/30'
              : 'bg-[#C6A87C]/10 border border-[#C6A87C]/25'
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              pkg.highlight ? 'text-[#2C2C2C]' : 'text-[#C6A87C]'
            }`}
          >
            {pkg.badge}
          </p>
        </div>

        <h3 className="text-3xl lg:text-4xl font-serif text-white tracking-wide">
          {pkg.name}
        </h3>
        <p className="text-sm text-gray-400 italic">
          {pkg.tagline}
        </p>

        <div className="pt-5 pb-2">
          <div className="flex items-start justify-center gap-1">
            <span className={`text-2xl lg:text-3xl font-bold mt-1 ${pkg.highlight ? 'text-[#D4B888]' : 'text-[#C6A87C]'}`}>
              ₹
            </span>
            <span className="text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight">
              {pkg.price.replace('₹', '')}
            </span>
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            {pkg.priceLabel}
          </div>
          <div
            className={`font-semibold mt-4 py-2 px-4 rounded-lg inline-block text-sm ${
              pkg.highlight
                ? 'text-[#F0DCB8] bg-[#D4B888]/15 border border-[#D4B888]/30'
                : 'text-[#C6A87C] bg-[#C6A87C]/10 border border-[#C6A87C]/20'
            }`}
          >
            {pkg.amc}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* Features */}
      <div className="mb-8 flex-1">
        <ul className="space-y-5">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${
                  pkg.highlight ? 'bg-[#D4B888]/20' : 'bg-[#C6A87C]/10'
                }`}
              >
                <svg
                  className={`w-3 h-3 ${pkg.highlight ? 'text-[#F0DCB8]' : 'text-[#C6A87C]'}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-300 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <button
          onClick={() => onBuy(pkg.id)}
          disabled={isLoading}
          className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
            pkg.highlight
              ? 'bg-gradient-to-r from-[#D4B888] to-[#C6A87C] text-[#1a1817] hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-[#D4B888]/20'
              : 'bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-[#1a1817] hover:border-white hover:scale-[1.02]'
          } ${isLoading ? 'opacity-70 cursor-not-allowed scale-100' : ''}`}
        >
          {isLoading ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            'Buy Now'
          )}
        </button>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
export default function PricingContent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'retail' | 'wholesale'>('retail');
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleBuy = (planSlug: string) => {
    setLoadingPlan(planSlug);
    router.push(`/checkout?plan=${planSlug}`);
  };

  return (
    <main className="w-full bg-[#FAF9F6]">
      <Navbar />

      {/* 1. HEADER */}
      <section className="pt-40 pb-12 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Simple & Transparent Pricing
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C]">
            Choose Your <span className="italic text-[#C6A87C]">Edition</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Complete jewellery shop software — billing, stock, schemes, hallmarking & more. Pick the plan that fits your business model.
          </p>
        </div>
      </section>

      {/* 2. TOGGLE */}
      <section className="pb-12 px-6 md:px-12 flex justify-center">
        <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex gap-2">
          <button
            onClick={() => setActiveTab('retail')}
            className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
              activeTab === 'retail'
                ? 'bg-[#2C2C2C] text-white shadow-md'
                : 'text-gray-500 hover:text-[#2C2C2C] hover:bg-gray-50'
            }`}
          >
            Retailers (B2C)
          </button>
          <button
            onClick={() => setActiveTab('wholesale')}
            className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
              activeTab === 'wholesale'
                ? 'bg-[#2C2C2C] text-white shadow-md'
                : 'text-gray-500 hover:text-[#2C2C2C] hover:bg-gray-50'
            }`}
          >
            Wholesalers (B2B)
          </button>
        </div>
      </section>

      {/* 3. PACKAGE CARDS */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-stretch">
          <AnimatePresence mode="wait">
            {pricingData[activeTab].map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onBuy={handleBuy} loading={loadingPlan} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <div id="contact" className="bg-white">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}