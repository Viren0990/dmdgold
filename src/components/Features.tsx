'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ScanBarcode, 
  Users, 
  Hammer, 
  Receipt, 
  Briefcase,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Package,
  Gem,
  UserCheck,
  Layers,
  Store
} from 'lucide-react';
import { motion } from 'framer-motion';

// Visual Components for each feature
const InventoryVisual = () => (
  <div className="flex items-center justify-center h-full w-full relative">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#C6A87C]/10 to-transparent rounded-2xl"></div>
    <div className="relative flex flex-col items-center space-y-3 p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-[#C6A87C]/20 group-hover:-translate-y-2 transition-transform duration-500">
      <ScanBarcode className="w-8 h-8 text-[#C6A87C] mb-2" />
      <div className="flex space-x-1 w-full justify-center opacity-80">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`w-1.5 h-6 bg-gray-400 rounded-sm ${i % 2 === 0 ? 'h-8' : ''}`}></div>
        ))}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-[#C6A87C] font-semibold mt-1">Scan Complete</div>
    </div>
  </div>
);

const MobileVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="w-24 h-40 bg-white border-[4px] border-gray-100 shadow-xl rounded-[1.5rem] relative overflow-hidden group-hover:scale-105 transition-transform duration-500 group-hover:shadow-2xl">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-200 rounded-full"></div>
      <div className="mt-6 px-3 space-y-2">
        <div className="flex justify-between items-center">
          <div className="w-4 h-4 rounded-full bg-[#C6A87C]/20 flex items-center justify-center">
             <TrendingUp className="w-2 h-2 text-[#C6A87C]" />
          </div>
          <div className="w-8 h-2 bg-gray-100 rounded"></div>
        </div>
        <div className="h-10 w-full bg-gradient-to-br from-[#C6A87C]/10 to-[#C6A87C]/30 rounded-lg"></div>
        <div className="flex space-x-1">
          <div className="h-6 flex-1 bg-gray-50 rounded-md"></div>
          <div className="h-6 flex-1 bg-gray-50 rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
);

const CRMVisual = () => (
  <div className="flex items-center justify-center h-full w-full relative">
    <div className="relative group-hover:scale-110 transition-transform duration-500">
      <div className="w-12 h-12 rounded-full bg-white shadow-md border-2 border-[#FAF9F6] absolute -left-8 -top-4 flex items-center justify-center z-10">
        <Users className="w-5 h-5 text-[#C6A87C]" />
      </div>
      <div className="w-12 h-12 rounded-full bg-[#C6A87C]/10 shadow-sm border-2 border-white absolute -right-8 top-4 flex items-center justify-center z-20 backdrop-blur-md">
        <div className="w-6 h-6 rounded-full bg-[#C6A87C]/30"></div>
      </div>
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C6A87C] to-[#E3CDAA] shadow-lg flex items-center justify-center z-30 text-white relative">
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white"></div>
        <Users className="w-7 h-7" />
      </div>
    </div>
  </div>
);

const KarigarVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="w-full max-w-[200px] bg-white rounded-xl shadow-md p-4 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-500">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#C6A87C]/10 flex items-center justify-center">
          <Hammer className="w-4 h-4 text-[#C6A87C]" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-700">Gold Bangle #120</div>
          <div className="text-[10px] text-gray-400">In Production</div>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-[#C6A87C] w-[65%] rounded-full group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
      </div>
      <div className="flex justify-between text-[9px] text-gray-400 font-medium">
        <span>Ghat: 2.5%</span>
        <span className="text-[#C6A87C]">65% Done</span>
      </div>
    </div>
  </div>
);

const FinanceVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="relative group-hover:rotate-[-2deg] group-hover:scale-105 transition-transform duration-500">
      {/* Background paper */}
      <div className="absolute top-2 left-2 w-28 h-36 bg-[#C6A87C]/10 rounded-lg transform rotate-6 border border-[#C6A87C]/20"></div>
      {/* Foreground paper */}
      <div className="w-28 h-36 bg-white border border-gray-100 shadow-xl rounded-lg p-3 relative z-10 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <Receipt className="w-5 h-5 text-[#C6A87C]" />
          <div className="w-6 h-2 bg-[#C6A87C]/30 rounded"></div>
        </div>
        <div className="space-y-1.5 mb-auto">
          <div className="w-full h-1.5 bg-gray-100 rounded"></div>
          <div className="w-4/5 h-1.5 bg-gray-100 rounded"></div>
          <div className="w-full h-1.5 bg-gray-100 rounded"></div>
        </div>
        <div className="border-t border-dashed border-gray-200 pt-2 mt-2 flex justify-between items-center">
          <div className="w-8 h-2 bg-gray-200 rounded"></div>
          <div className="text-[10px] font-bold text-[#C6A87C]">GST</div>
        </div>
      </div>
    </div>
  </div>
);

const B2BVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="grid grid-cols-2 gap-2 group-hover:scale-110 transition-transform duration-500">
      <div className="w-12 h-12 bg-white rounded-lg shadow border border-gray-50 flex items-center justify-center">
        <Package className="w-5 h-5 text-gray-300" />
      </div>
      <div className="w-12 h-12 bg-white rounded-lg shadow border border-gray-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C6A87C]/20 to-transparent"></div>
        <Briefcase className="w-5 h-5 text-[#C6A87C] relative min-w-5 min-h-5" />
      </div>
      <div className="w-12 h-12 bg-[#C6A87C] rounded-lg shadow-md flex items-center justify-center text-white">
        <CreditCard className="w-5 h-5" />
      </div>
      <div className="w-12 h-12 bg-white rounded-lg shadow border border-gray-50 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
);

// NEW: Multi-Category Product Visual — Periodic table style grid
const MultiCategoryVisual = () => {
  const metals = [
    { sym: "Au", name: "Gold", color: "bg-[#C6A87C]", text: "text-white" },
    { sym: "Di", name: "Diamond", color: "bg-[#1A1A1A]", text: "text-white" },
    { sym: "Ag", name: "Silver", color: "bg-gray-300", text: "text-gray-800" },
    { sym: "Pt", name: "Platinum", color: "bg-gray-500", text: "text-white" },
    { sym: "Ti", name: "Titanium", color: "bg-slate-600", text: "text-white" },
    { sym: "Gm", name: "Gems", color: "bg-emerald-600", text: "text-white" },
  ];
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="grid grid-cols-3 gap-2 group-hover:scale-105 transition-transform duration-500">
        {metals.map((m, i) => (
          <div key={i} className={`w-16 h-16 ${m.color} ${m.text} rounded-xl shadow-md flex flex-col items-center justify-center group-hover:shadow-lg transition-all duration-300`}
               style={{ transitionDelay: `${i * 50}ms` }}>
            <div className="text-lg font-serif font-bold leading-none">{m.sym}</div>
            <div className="text-[7px] uppercase tracking-wider mt-0.5 opacity-80">{m.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// NEW: Order Management Visual — Order lifecycle steps
const OrderVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[200px] group-hover:-translate-y-2 transition-transform duration-500">
      <div className="text-[10px] text-[#C6A87C] font-bold uppercase tracking-wider mb-3">Order #1042</div>
      <div className="space-y-2">
        {[
          { label: "Rate Confirmed", done: true },
          { label: "Payment Verified", done: true },
          { label: "In Transit", active: true },
          { label: "Delivered", done: false },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0 ${
              step.done ? 'bg-green-500 text-white' : 
              step.active ? 'bg-[#C6A87C] text-white animate-pulse' : 
              'border border-gray-300 text-gray-300'
            }`}>
              {step.done ? '✓' : i + 1}
            </div>
            <span className={`text-[10px] font-medium ${step.done ? 'text-gray-700' : step.active ? 'text-[#2C2C2C] font-bold' : 'text-gray-400'}`}>{step.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between text-[9px]">
        <span className="text-gray-400">Fine Wt: 42.3g</span>
        <span className="text-[#C6A87C] font-bold">₹3,12,000</span>
      </div>
    </div>
  </div>
);

// NEW: Party Management Visual — Network nodes
const PartyVisual = () => (
  <div className="flex items-center justify-center h-full w-full relative">
    <div className="relative group-hover:scale-105 transition-transform duration-500">
      {/* Buyer node */}
      <div className="absolute -left-6 top-0 w-14 h-14 rounded-xl bg-white shadow-md border border-gray-100 flex flex-col items-center justify-center">
        <UserCheck className="w-4 h-4 text-[#C6A87C] mb-0.5" />
        <div className="text-[7px] font-bold text-gray-600">Buyer</div>
      </div>
      {/* Center hub */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C6A87C] to-[#b0956b] shadow-lg flex items-center justify-center text-white z-10 relative">
        <Layers className="w-7 h-7" />
      </div>
      {/* Seller node */}
      <div className="absolute -right-6 top-0 w-14 h-14 rounded-xl bg-[#1A1A1A] shadow-md flex flex-col items-center justify-center">
        <Users className="w-4 h-4 text-[#C6A87C] mb-0.5" />
        <div className="text-[7px] font-bold text-gray-400">Seller</div>
      </div>
      {/* Approval badge */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-[7px] font-bold px-2 py-0.5 rounded-full border border-green-200">
        ✓ Approved
      </div>
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ left: '-24px', width: 'calc(100% + 48px)' }}>
        <line x1="14" y1="28" x2="32" y2="32" stroke="#C6A87C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
        <line x1="80" y1="28" x2="62" y2="32" stroke="#C6A87C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
      </svg>
    </div>
  </div>
);

// NEW: Billing Desk POS Visual
const POSVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[200px] group-hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-3">
        <div className="text-[10px] text-[#C6A87C] font-bold uppercase tracking-wider">POS</div>
        <div className="px-1.5 py-0.5 bg-[#1A1A1A] text-[#C6A87C] text-[8px] font-bold rounded">₹6,200/g</div>
      </div>
      <div className="bg-gray-50 rounded-lg p-2 mb-2 border border-gray-100">
        <div className="text-[9px] font-bold text-gray-700">Mrs. Anjali Sharma</div>
        <div className="text-[7px] text-gray-400">+91 99887 76655</div>
      </div>
      <div className="space-y-1 mb-2">
        <div className="flex justify-between text-[8px]">
          <span className="text-gray-600">Gold Choker 22K</span>
          <span className="font-bold text-[#2C2C2C]">₹2.45L</span>
        </div>
        <div className="flex justify-between text-[7px] text-green-600">
          <span>Discount</span>
          <span>-₹5,000</span>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-200 pt-2 flex justify-between items-center">
        <span className="text-[7px] text-gray-400 uppercase font-bold">Total</span>
        <span className="text-sm font-black text-[#2C2C2C]">₹2.47L</span>
      </div>
    </div>
  </div>
);

// NEW: B2B eCommerce Visual — Digital storefront
const B2BEcommerceVisual = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="w-full max-w-[220px] group-hover:-translate-y-2 transition-transform duration-500">
      {/* Browser chrome */}
      <div className="bg-[#1A1A1A] rounded-t-xl px-3 py-1.5 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
        <div className="flex-1 bg-white/10 rounded h-3.5 mx-2 flex items-center px-2">
          <span className="text-[6px] text-gray-400">dmdgold.com/store</span>
        </div>
      </div>
      {/* Store content */}
      <div className="bg-white rounded-b-xl border border-gray-100 shadow-lg p-3 space-y-2">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="text-[8px] font-bold text-[#C6A87C] tracking-wider">B2B STORE</div>
          <div className="flex gap-2">
            <div className="relative">
              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full text-[4px] text-white flex items-center justify-center font-bold">3</div>
            </div>
            <div className="relative">
              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C6A87C] rounded-full text-[4px] text-white flex items-center justify-center font-bold">5</div>
            </div>
          </div>
        </div>
        {/* Product mini-grid */}
        <div className="grid grid-cols-3 gap-1">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-gray-50 rounded-md p-1 border border-gray-100">
              <div className="h-8 bg-gradient-to-br from-[#C6A87C]/5 to-[#C6A87C]/15 rounded flex items-center justify-center text-[8px]">💍</div>
              <div className="text-[5px] font-bold text-gray-700 mt-0.5 truncate">Design #{1040+i}</div>
              <div className="text-[5px] text-[#C6A87C] font-bold">22K • In Stock</div>
            </div>
          ))}
        </div>
        {/* Checkout bar */}
        <div className="bg-[#C6A87C] rounded-md px-2 py-1 flex justify-between items-center">
          <span className="text-[6px] text-white font-bold">Cart: 5 items</span>
          <span className="text-[7px] text-white font-black">Checkout →</span>
        </div>
      </div>
    </div>
  </div>
);

// Reusable Card Component
const BentoCard = ({
  title,
  subtitle,
  description,
  visual,
  icon: Icon,
  className = "",
  delay = 0
}: {
  title: string;
  subtitle: string;
  description: string;
  visual: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: delay * 0.1, ease: "easeOut" }}
    className={`
      group relative overflow-hidden rounded-3xl p-8 flex flex-col md:flex-row
      bg-[#FAF9F6] border border-[#C6A87C]/20 
      hover:shadow-2xl hover:shadow-[#C6A87C]/15 hover:-translate-y-1 
      transition-all duration-500 ease-out h-full
      ${className}
    `}
  >
    {/* Hover Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#C6A87C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="relative z-10 flex flex-col md:w-3/5 justify-between pr-4 h-full md:items-start items-center text-center md:text-left">
      <div>
        <div className="flex items-center space-x-2 mb-3 justify-center md:justify-start">
          <div className="p-2 bg-white rounded-lg shadow-sm border border-[#C6A87C]/10">
            <Icon className="w-5 h-5 text-[#C6A87C]" />
          </div>
          <h4 className="text-[#C6A87C] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            {subtitle}
          </h4>
        </div>
        <h3 className="text-xl md:text-2xl font-serif text-[#2C2C2C] mb-3 group-hover:text-[#C6A87C] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>
      
      <Link href="/services" className="mt-auto flex w-fit items-center text-xs font-semibold tracking-widest text-[#2C2C2C] uppercase opacity-0 md:-translate-x-4 md:translate-y-0 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out relative z-20" aria-label={`Learn more about ${title}`}>
        <span className="mr-2 border-b border-[#C6A87C]">Explore {subtitle}</span>
        <ChevronRight className="w-4 h-4 text-[#C6A87C]" />
      </Link>
    </div>
    
    <div className="w-full md:w-2/5 mt-8 md:mt-0 relative z-0 min-h-[160px] flex items-center justify-center">
       {/* Background glow behind visual */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#C6A87C]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100"></div>
       {visual}
    </div>
  </motion.div>
);

export default function Features() {
  const featuresData = [
    {
      subtitle: "B2B eCommerce",
      title: "Your Digital Wholesale Store",
      description: "Give your retailers a premium B2B shopping experience. Digital catalogue with advanced filters, wishlist, cart & multi-step checkout, order tracking, ratings & reviews, and GST-compliant invoice downloads — all from their browser.",
      icon: Store,
      visual: <B2BEcommerceVisual />,
      className: "md:col-span-2",
    },
    {
      subtitle: "Billing & POS",
      title: "Digital Counter",
      description: "Phone lookup, SKU scan, auto GST calculation, and quotation-to-invoice conversion. Your counter, now digital.",
      icon: CreditCard,
      visual: <POSVisual />,
      className: "md:col-span-1",
    },
    {
      subtitle: "Inventory",
      title: "QR & Barcode Precision",
      description: "QR and barcode generation for instant product identification, billing, and stock audits.",
      icon: ScanBarcode,
      visual: <InventoryVisual />,
      className: "md:col-span-1",
    },
    {
      subtitle: "Multi-Category",
      title: "Every Metal, One Platform",
      description: "Gold, Diamond, Silver, Platinum, Titanium, Gems & Bullion — manage all product categories with full specifications, purity tracking, and 4C diamond support in a single unified catalogue.",
      icon: Gem,
      visual: <MultiCategoryVisual />,
      className: "md:col-span-2",
    },
    {
      subtitle: "Manufacturing",
      title: "Karigar Insight",
      description: "Complete artisan management — profiles, Aadhaar/PAN/GST info, inward & outward challans, and full transaction history. Every piece tracked from karigar to counter.",
      icon: Hammer,
      visual: <KarigarVisual />,
      className: "md:col-span-2",
    },
    {
      subtitle: "CRM Suite",
      title: "Client Relationships",
      description: "Track purchase history and automatically send personalized birthday offers to build lasting loyalty.",
      icon: Users,
      visual: <CRMVisual />,
      className: "md:col-span-1",
    },
  ];

  return (
    <div className="relative z-20 bg-white w-full py-24 px-6 md:px-12 shadow-[0_-50px_100px_rgba(0,0,0,0.05)] rounded-t-[3rem] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#C6A87C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase flex items-center justify-center space-x-4">
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
            <span>Powerful Features</span>
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
            Everything Your Jewellery Business Needs
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From tracking every gram of gold to generating instant E-invoices. Multi-category product management, GST-compliant billing, karigar tracking, and B2B wholesale — all in one platform.
          </p>
        </motion.div>

        {/* TWO EDITIONS CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 w-full bg-gradient-to-br from-[#FAF9F6] to-white rounded-[2rem] border border-[#C6A87C]/20 p-8 md:p-12 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A87C]/5 rounded-full blur-[80px]"></div>
          
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left side text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-[#C6A87C]/10 text-[#C6A87C] text-xs font-bold tracking-widest uppercase rounded-full border border-[#C6A87C]/20 mb-4">
                Two Tailored Plans
              </span>
              <h4 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-4">
                Built for <span className="italic text-[#C6A87C]">Retailers</span> &amp; <span className="italic text-[#C6A87C]">Wholesalers</span>
              </h4>
              <p className="text-gray-500 leading-relaxed mb-6">
                Whether you run a fast-paced retail showroom or manage a high-volume B2B manufacturing business, we have a specialized edition designed exactly for your workflow. Explore the glimpse of shared features below, or dive into the complete plans.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 border border-[#C6A87C] text-[#C6A87C] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all duration-300">
                Compare Both Editions
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Right side cards */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Retailer Card */}
              <Link href="/services" className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-[#C6A87C]/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C6A87C]/10 flex items-center justify-center">
                    <Store className="w-5 h-5 text-[#C6A87C]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#2C2C2C]">Retailer Edition</div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">For Showrooms</div>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-500 mb-4">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C6A87C]"></div> CRM & Customer Tracking</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C6A87C]"></div> URD Purchases & Exchanges</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C6A87C]"></div> Smart Billing & POS</li>
                </ul>
                <div className="text-[10px] font-bold text-[#C6A87C] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  View Edition <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </Link>

              {/* Wholesaler Card */}
              <Link href="/services" className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-[#C6A87C]/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C6A87C]/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#C6A87C]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#2C2C2C]">Wholesaler Edition</div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">For B2B Mfg.</div>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-gray-500 mb-4">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C6A87C]"></div> B2B Digital Storefront</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C6A87C]"></div> Bulk Management</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C6A87C]"></div> Role-Based Access</li>
                </ul>
                <div className="text-[10px] font-bold text-[#C6A87C] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  View Edition <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* SHARED FEATURES DIVIDER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] flex-1 bg-gray-200"></div>
          <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
            A Glimpse of Shared Features
          </span>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {featuresData.map((feature, i) => (
            <BentoCard
              key={i}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              icon={feature.icon}
              visual={feature.visual}
              className={feature.className}
              delay={i}
            />
          ))}
        </div>

        {/* EXPLORE ALL FEATURES CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[#C6A87C] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Features
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-gray-400 text-xs mt-3 tracking-wide">E-Invoicing, Bulk Management, CRM, B2B Store & much more</p>
        </motion.div>

        
        
      </div>
    </div>
  );
}