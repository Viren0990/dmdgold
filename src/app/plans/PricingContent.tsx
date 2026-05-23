'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

// --- DATA ---
const packages = [
  {
    id: 'retailer',
    name: 'Retailer Edition',
    tagline: 'For Showroom Owners & Single-Store Jewelers',
    description: 'Everything you need to run a modern retail jewelry showroom — billing, inventory, GST compliance, and customer management.',
    featureSections: [
      {
        category: "B2B eCommerce Access",
        items: [
          "Browse wholesaler catalogues & check live stock",
          "Save favourites to Wishlist for later",
          "Multi-step Checkout & Purchase Orders",
          "Track orders from rate confirmation to delivery",
          "Rate and review sellers",
        ]
      },
      {
        category: "Billing system",
        items: [
          "SKU scan & auto-calculating billing desk",
          "Quotation Desk with instant invoice conversion",
          "Old Gold Exchange & URD Purchases",
        ]
      },
      {
        category: "Inventory & Reporting",
        items: [
          "Multi-Category Stock (Gold, Diamond, Silver)",
          "Standard Tax Reports & Excel Export",
        ]
      },
      {
        category: "Hardware & Equipment",
        items: [
          "Premium Barcode Printer",
          "High-speed Barcode Scanner",
          "Complete starter kit (Ribbons & Rolls)",
        ]
      },
      {
        category: "Annual Maintenance (AMC)",
        items: [
          "24/7 Priority Technical Support",
          "Free Software & Security Updates",
          "GST Rule Compliance Updates",
          "Regular Data Backups & Server Maintenance",
          "Available in 1-Year or 3-Year packages (Save 20% on 3-Year)"
        ]
      }
    ],
  },
  {
    id: 'wholesaler',
    name: 'Wholesaler Edition',
    tagline: 'For B2B Dealers, Manufacturers & Multi-Branch Brands',
    description: 'Full platform access including B2B eCommerce, digital catalogue, karigar management, party network, and multi-branch operations.',
    featureSections: [
      {
        category: "Everything in Retailer Edition, Plus:",
        items: [
          "1-Click E-Invoice Generation directly for GST compliance",
          "Comprehensive Excel Reports for all data (Orders, Stock, Parties, etc.)",
        ]
      },
      {
        category: "Advanced B2B Platform",
        items: [
          "Digital Catalogue with Carousels & Themed Collections",
          "Party Management with Buyer/Seller KYC & Approvals",
          "Advanced Order Tracking (Rate confirmation to delivery)",
        ]
      },
      {
        category: "Karigar & Inventory Operations",
        items: [
          "Karigar (Artisan) Management & Inward/Outward Challans",
          "Advanced Product Stepper with 4C Support & HUID",
          "Bulk Jewellery Upload for 100+ items at once",
          "Multi-Branch operations & Franchise Sync",
        ]
      },
      {
        category: "Comprehensive Billing & GST",
        items: [
          "Full GST System (8 Invoice Types including Metal & Labour)",
          "Automatic fine weight & multi-metal price calculation",
        ]
      },
      {
        category: "Hardware & Equipment",
        items: [
          "Premium Barcode Printer",
          "High-speed Barcode Scanner",
          "Complete starter kit (Ribbons & Rolls)",
        ]
      },
      {
        category: "Annual Maintenance (AMC)",
        items: [
          "Dedicated Account Manager & Priority Tech Support",
          "Free Software & Security Updates",
          "GST Rule Compliance Updates",
          "Regular Data Backups & Secure Cloud Hosting",
          "Available in 1-Year or 3-Year packages (Save 20% on 3-Year)"
        ]
      }
    ],
  },
];

// --- COMPONENT: PACKAGE CARD ---
const PackageCard = ({ pkg }: { pkg: typeof packages[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        relative p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col
        bg-[#333333] border border-[#C6A87C]/30 shadow-2xl shadow-black/20 text-white hover:border-[#C6A87C]
      `}
    >
      {/* Header */}
      <div className="space-y-6 mb-10 mt-2 text-center">
        <h3 className="text-4xl font-serif text-white tracking-wide">
          {pkg.name}
        </h3>
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#C6A87C]/10 border border-[#C6A87C]/20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A87C]">
            {pkg.tagline}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-gray-300">
          {pkg.description}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* Feature Sections */}
      <div className="space-y-8 mb-8 flex-1">
        {pkg.featureSections.map((section, sIdx) => (
          <div key={sIdx}>
            <div className="bg-gradient-to-r from-[#222222] to-transparent py-2.5 px-4 rounded-l-lg mb-4 border-l-2 border-[#C6A87C]">
              <h4 className="text-[#C6A87C] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                {section.category}
              </h4>
            </div>
            <ul className="space-y-3">
              {section.items.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 shrink-0 mt-0.5 text-[#C6A87C]"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <a href="#contact" className="block w-full">
          <button
            className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors duration-300 bg-[#C6A87C] text-white hover:bg-white hover:text-[#2C2C2C]"
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
  return (
    <main className="w-full bg-[#FAF9F6]">
      <Navbar />

      {/* 1. HEADER */}
      <section className="pt-40 pb-12 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Simple Pricing
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C]">
            Choose Your <span className="italic text-[#C6A87C]">Edition</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Two focused packages built for the way you do business. Pick the edition that fits your buisness — retailer or wholesaler.
          </p>
        </div>
      </section>

      {/* 2. PACKAGE CARDS */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 3. FOOTER CTA */}
      <div id="contact" className="bg-white">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
