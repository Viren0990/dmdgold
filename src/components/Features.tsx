'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ScanBarcode, 
  Smartphone, 
  Users, 
  Hammer, 
  Receipt, 
  Briefcase,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Package
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
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <Link href="/services" className="mt-auto flex w-fit items-center text-xs font-semibold tracking-widest text-[#2C2C2C] uppercase opacity-0 md:-translate-x-4 md:translate-y-0 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out relative z-20">
        <span className="mr-2 border-b border-[#C6A87C]">Learn More</span>
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
      subtitle: "Inventory",
      title: "QR Precision",
      description: "Use our visually appealing barcode tags for instant identification, or upgrade to RFID for rapid, error-free bulk scanning.",
      icon: ScanBarcode,
      visual: <InventoryVisual />,
      className: "md:col-span-2",
    },
    {
      subtitle: "App Access",
      title: "Business on the Go",
      description: "Stay connected from anywhere. Check sales and quick analytics securely on your phone.",
      icon: Smartphone,
      visual: <MobileVisual />,
      className: "md:col-span-1",
    },
    {
      subtitle: "CRM Suite",
      title: "Client Relationships",
      description: "Track purchase history and automatically send personalized birthday offers to build lasting loyalty.",
      icon: Users,
      visual: <CRMVisual />,
      className: "md:col-span-1",
    },
    {
      subtitle: "Manufacturing",
      title: "Karigar Insight",
      description: "Bridge the gap between producers and artisans. Track raw material issuance, monitor ghat, and get live status updates.",
      icon: Hammer,
      visual: <KarigarVisual />,
      className: "md:col-span-2",
    },
    {
      subtitle: "Finance",
      title: "Smart Invoicing & GST",
      description: "Create beautiful invoices that showcase stone details and purity clearly, all fully GST/VAT compliant.",
      icon: Receipt,
      visual: <FinanceVisual />,
      className: "md:col-span-2",
    },
    {
      subtitle: "B2B Options",
      title: "Wholesale Orders",
      description: "Streamline bulk orders with a stunning digital catalog. Offer custom pricing tiers seamlessly.",
      icon: Briefcase,
      visual: <B2BVisual />,
      className: "md:col-span-1",
    }
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
            Everything You Need to Shine
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From tracking every gram of gold to generating instant E-invoices. Built to cut the clutter, with visuals you'll understand instantly.
          </p>
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

        {/* Bottom Spacing */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}