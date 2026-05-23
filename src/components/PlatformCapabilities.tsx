'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Gem,
  Layers,
  BarChart3,
  FileText,
  Hammer,
  CreditCard,
  ClipboardList,
  Upload,
  Users,
  Image as ImageIcon,
  ShoppingCart,
  History,
  Bell,
  FileSpreadsheet,
} from 'lucide-react';

interface ModuleItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  color: string;
}

const modules: ModuleItem[] = [
  { icon: Gem, title: 'Multi-Category Products', tagline: 'Gold, Diamond, Silver, Platinum, Titanium, Gems & Bullion', color: 'from-[#C6A87C] to-[#b0956b]' },
  { icon: Layers, title: 'Stepper-Based Creation', tagline: 'Guided product listing with auto-SKU & HUID', color: 'from-blue-500 to-blue-600' },
  { icon: BarChart3, title: 'Product Dashboard', tagline: 'Full stock control with visibility & pricing', color: 'from-purple-500 to-purple-600' },
  { icon: FileText, title: 'Invoice System', tagline: '8 invoice types, GST-compliant, E-Invoice ready', color: 'from-emerald-500 to-emerald-600' },
  { icon: Hammer, title: 'Karigar Management', tagline: 'Artisan tracking, challans & payment records', color: 'from-orange-500 to-orange-600' },
  { icon: CreditCard, title: 'Billing Desk (POS)', tagline: 'Phone lookup, SKU scan, instant billing', color: 'from-[#C6A87C] to-[#96784e]' },
  { icon: ClipboardList, title: 'Quotation Desk', tagline: 'Quick estimates, one-click convert to invoice', color: 'from-cyan-500 to-cyan-600' },
  { icon: Upload, title: 'Bulk Upload', tagline: 'Hundreds of products uploaded in minutes', color: 'from-indigo-500 to-indigo-600' },
  { icon: Users, title: 'Party Management', tagline: 'Buyer/Seller network with KYC & approval', color: 'from-rose-500 to-rose-600' },
  { icon: ImageIcon, title: 'Collections & Carousels', tagline: 'Themed showroom with rich media display', color: 'from-pink-500 to-pink-600' },
  { icon: ShoppingCart, title: 'Order Management', tagline: 'Full lifecycle from order to delivery', color: 'from-amber-500 to-amber-600' },
  { icon: History, title: 'Order & Payment History', tagline: 'Complete records with search & export', color: 'from-teal-500 to-teal-600' },
  { icon: Bell, title: 'Notifications', tagline: 'Real-time alerts for every business event', color: 'from-violet-500 to-violet-600' },
  { icon: FileSpreadsheet, title: 'Excel & Data Export', tagline: 'Tally-ready downloads, tax-filing made easy', color: 'from-green-500 to-green-600' },
];

export default function PlatformCapabilities() {
  return (
    <section className="w-full bg-[#1A1A1A] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#C6A87C 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A87C]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A87C]/3 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase flex items-center justify-center space-x-4">
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
            <span>Complete Platform</span>
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">
            14 Modules, <span className="italic text-[#C6A87C]">One Platform</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Every tool a jeweller needs — from multi-category product listing to GST-compliant invoicing, karigar management to B2B wholesale.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: '7+', label: 'Metal Types' },
            { value: '8', label: 'Invoice Types' },
            { value: '14', label: 'Core Modules' },
            { value: '100%', label: 'GST Compliant' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-[#C6A87C]">{stat.value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Module Icon Grid — compact, no expandable details */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C6A87C]/30 rounded-2xl p-4 text-center transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-lg mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-bold text-[11px] leading-tight mb-1">{mod.title}</h4>
                <p className="text-gray-500 text-[9px] leading-snug hidden md:block">{mod.tagline}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-6">
            Want the full deep-dive on each module?
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 border border-[#C6A87C] text-[#C6A87C] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all duration-300">
            Explore All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
