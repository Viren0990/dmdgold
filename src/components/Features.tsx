'use client';

import React from 'react';

// Reusable Card Component for consistent "Luxury Glass" feel
const BentoCard = ({
  title,
  subtitle,
  description,
  className = "",
  delay = "0ms"
}: {
  title: string,
  subtitle: string,
  description: string,
  className?: string,
  delay?: string
}) => (
  <div
    className={`
      group relative overflow-hidden rounded-3xl p-8 
      bg-[#FAF9F6] border border-[#C6A87C]/20 
      hover:shadow-lg hover:shadow-[#C6A87C]/10 hover:-translate-y-1 
      transition-all duration-500 ease-out 
      ${className}
    `}
    style={{ transitionDelay: delay }}
  >
    {/* Hover Gradient Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#C6A87C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
      <div>
        <h4 className="text-[#C6A87C] text-xs font-bold tracking-[0.2em] uppercase mb-2">
          {subtitle}
        </h4>
        <h3 className="text-2xl font-serif text-[#2C2C2C]">
          {title}
        </h3>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function Features() {
  return (
    <div className="relative z-20 bg-white w-full py-24 px-6 md:px-12 shadow-[0_-50px_100px_rgba(0,0,0,0.05)] rounded-t-[3rem]">

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Powerful Features
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
            Everything You Need to Shine
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From tracking every gram of gold to printing GST bills in seconds—DMD Gold is the easy-to-use software built by jewelers, for jewelers.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

          {/* 1. RFID INVENTORY (Large) */}
          <BentoCard
            className="md:col-span-2"
            subtitle="Inventory Management"
            title="RFID & QR Precision Stock"
            description="Tracking stock shouldn't be a headache. Use our visually appealing barcode and QR code tags for instant identification, or upgrade to RFID for rapid, error-free bulk scanning. Know exactly what you have, where it is, and when to restock."
          />

          {/* 2. MOBILE APP (Standard) */}
          <BentoCard
            className="md:col-span-1"
            subtitle="Mobile Access"
            title="Business on the Go"
            description="Stay connected to your showroom from anywhere. Our mobile-responsive interface lets you check sales, approve orders, and view analytics from your tablet or phone."
          />

          {/* 3. CRM (Standard) */}
          <BentoCard
            className="md:col-span-1"
            subtitle="CRM Suite"
            title="Client Relationships"
            description="Turn one-time buyers into lifelong patrons. Centralize customer data, track purchase history, and send personalized offers on birthdays or anniversaries to build lasting loyalty."
          />

          {/* 4. KARIGAR MGMT (Large) */}
          <BentoCard
            className="md:col-span-2"
            subtitle="Manufacturing"
            title="Karigar & Artisan Tracking"
            description="A dedicated module to bridge the gap between producers and artisans. Track raw material issuance, monitor wastage (ghat), manage labor costs, and get real-time status updates on every custom piece in production."
          />

          {/* 5. BILLING (Large) */}
          <BentoCard
            className="md:col-span-2"
            subtitle="Finance"
            title="Smart Invoicing & GST"
            description="Create beautiful, customized invoices that showcase stone details, purity, and making charges clearly. Fully compliant with GST/VAT regulations, ensuring your accounts are always audit-ready without the manual math."
          />

          {/* 6. B2B WHOLESALE (Standard) */}
          <BentoCard
            className="md:col-span-1"
            subtitle="B2B & Catalog"
            title="Wholesale Orders"
            description="Streamline bulk orders with a digital catalog. Offer custom pricing tiers to different retailers, sync inventory in real-time, and prevent overbooking with our automated order management system."
          />

        </div>

        {/* Bottom Spacing */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}