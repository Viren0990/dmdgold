'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---
const pricingData = {
  retail: [
    {
      id: 'classic',
      name: 'DMD Retail Classic',
      badge: 'STARTER PLAN',
      tagline: 'For shops running manual tag systems',
      price: '₹15,000',
      priceLabel: 'one-time license',
      amc: 'AMC ₹8,000 / year',
      features: [
        "POS billing with gold-rate integration",
        "Stock register — gross / net weight, purity",
        "Old-gold exchange & GST invoicing",
        "Customer and Karigar management",
        "Quotation desk and management",
        "Phone & remote support via AMC"
      ],
      highlight: false
    },
    {
      id: 'pro',
      name: 'DMD Retail Pro',
      badge: '★ MOST POPULAR ★',
      tagline: 'Barcode-powered speed & accuracy',
      price: '₹24,000',
      priceLabel: 'one-time license',
      amc: 'AMC ₹12,000 / year',
      features: [
        "Everything in Retail Classic",
        "Barcode tag printing & scan billing",
        "Instant stock-take — scan entire showroom",
        "Hallmarking (HUID) tag tracking",
        "Works with DMD barcode printers & scanners",
        "Priority support via AMC"
      ],
      highlight: true
    }
  ],
  wholesale: [
    {
      id: 'essential',
      name: 'DMD Business Essential',
      badge: 'ESSENTIAL PLAN',
      tagline: 'For wholesalers & manufacturers',
      price: '₹30,000',
      priceLabel: 'one-time license',
      amc: 'AMC ₹18,000 / year',
      features: [
        "Order booking & GST invoicing",
        "Stock register — gross / net weight, purity",
        "Customer and Karigar management",
        "Excel Support",
        "Job-work & making-charge management",
        "B2B marketplace — showcase your jewellery to retailers & receive orders online",
        "Enrol your retailers free on the DMD platform",
        "Phone & remote support via AMC"
      ],
      highlight: false
    },
    {
      id: 'prime',
      name: 'DMD Business Prime',
      badge: '★ RECOMMENDED ★',
      tagline: 'With built-in E-invoicing compliance',
      price: '₹40,000',
      priceLabel: 'one-time license',
      amc: 'AMC ₹24,000 / year',
      features: [
        "Everything in Business Essential",
        "Integrated E-invoice module (IRN & QR code)",
        "E-invoice packs at volume rates",
        "Bulk invoicing & GST reports",
        "Works with DMD barcode printers & scanners",
        "B2B marketplace — showcase your jewellery to retailers & receive orders online",
        "Enrol your retailers free on the DMD platform",
        "Priority support via AMC"
      ],
      highlight: true
    }
  ]
};

const accessories = [
  { item: 'Barcode label printer', price: '₹24,000' },
  { item: 'Barcode scanner', price: '₹3,000' },
  { item: 'Carbon ribbon roll — 300 m', price: '₹2,000 each' },
  { item: 'Cricket-bat white barcode labels — 2,000 labels/roll', price: '₹1,700 per roll' },
];

const eInvoices = [
  { pack: '1,000 e-invoices', price: '₹3,000', perInvoice: '₹3.00' },
  { pack: '2,500 e-invoices', price: '₹6,250', perInvoice: '₹2.50' },
  { pack: '5,000 e-invoices', price: '₹11,250', perInvoice: '₹2.25' },
  { pack: '10,000 e-invoices', price: '₹19,500', perInvoice: '₹1.95' },
];

// --- COMPONENT: PACKAGE CARD ---
const PackageCard = ({ pkg }: { pkg: typeof pricingData.retail[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`
        relative p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col
        ${pkg.highlight 
          ? 'bg-[#222222] border-2 border-[#C6A87C] shadow-2xl shadow-[#C6A87C]/20' 
          : 'bg-[#333333] border border-[#C6A87C]/30 shadow-2xl shadow-black/20 hover:border-[#C6A87C]'
        }
        text-white
      `}
    >
      {/* Header */}
      <div className="space-y-4 mb-8 mt-2 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#C6A87C]/10 border border-[#C6A87C]/20 mb-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A87C]">
            {pkg.badge}
          </p>
        </div>
        <h3 className="text-3xl lg:text-4xl font-serif text-white tracking-wide">
          {pkg.name}
        </h3>
        <p className="text-sm text-gray-400 italic">
          {pkg.tagline}
        </p>
        
        <div className="pt-4 pb-2">
          <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{pkg.price}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">{pkg.priceLabel}</div>
          <div className="text-[#C6A87C] font-semibold mt-3 bg-[#C6A87C]/10 py-2 px-4 rounded-lg border border-[#C6A87C]/20 inline-block">
            {pkg.amc}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* Features */}
      <div className="space-y-4 mb-8 flex-1">
        <ul className="space-y-4">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <svg
                className="w-5 h-5 shrink-0 mt-0.5 text-[#C6A87C]"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <a href="#contact" className="block w-full">
          <button
            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors duration-300 ${
              pkg.highlight 
                ? 'bg-[#C6A87C] text-[#222222] hover:bg-white' 
                : 'bg-white/10 text-white hover:bg-[#C6A87C] hover:text-[#222222]'
            }`}
          >
            Contact Sales
          </button>
        </a>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
export default function PricingContent() {
  const [activeTab, setActiveTab] = useState<'retail' | 'wholesale'>('retail');

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
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {pricingData[activeTab].map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. ADD-ONS / TABLES */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* E-Invoices for Wholesalers */}
          {activeTab === 'wholesale' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#C6A87C]"></span>
                E-Invoice Packages
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-500 font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4 rounded-tl-xl whitespace-nowrap">E-Invoice Pack</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4 rounded-tr-xl">Per Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {eInvoices.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-[#2C2C2C]">{item.pack}</td>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="px-6 py-4">{item.perInvoice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">
                * E-invoice packs valid for Business Prime edition.
              </p>
            </motion.div>
          )}

          {/* Accessories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#2C2C2C] rounded-3xl p-8 md:p-10 shadow-2xl text-white"
          >
            <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C6A87C]"></span>
              Accessories <span className="text-sm font-sans text-gray-400 font-normal italic">(as per requirement)</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="text-xs uppercase bg-[#333333] text-gray-400 font-bold tracking-wider border-b border-[#C6A87C]/20">
                  <tr>
                    <th className="px-6 py-4 rounded-tl-xl whitespace-nowrap">Item</th>
                    <th className="px-6 py-4 rounded-tr-xl text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {accessories.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{item.item}</td>
                      <td className="px-6 py-4 text-right text-[#C6A87C] font-semibold whitespace-nowrap">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="text-center text-sm text-gray-500 max-w-3xl mx-auto space-y-2 pt-4">
            <p>GST and delivery charges applicable separately on all software and accessories.</p>
            <p>AMC covers software updates, GST-rule changes, remote support and data backup assistance.</p>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <div id="contact" className="bg-white">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
