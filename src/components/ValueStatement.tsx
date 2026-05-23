'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, CreditCard, Hammer, FileText, ShoppingCart, BarChart3 } from 'lucide-react';

const pillars = [
  { icon: Store, label: 'B2B eCommerce' },
  { icon: CreditCard, label: 'Showroom POS' },
  { icon: Hammer, label: 'Karigar Management' },
  { icon: FileText, label: 'GST & E-Invoices' },
  { icon: ShoppingCart, label: 'Full Billing' },
];

export default function ValueStatement() {
  return (
    <section className="relative z-30 w-full bg-[#1A1A1A] py-16 md:py-20 px-6 md:px-12 -mt-1">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#C6A87C]/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center justify-center space-x-4"
        >
          <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
          <span>What is DMD Gold?</span>
          <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
        </motion.h2>

        {/* Main statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl font-serif text-white leading-relaxed md:leading-relaxed"
        >
          DMD Gold is the{' '}
          <span className="italic text-[#C6A87C]">first unified platform</span>{' '}
          built exclusively for Indian jewellers — combining everything from{' '}
          <span className="text-white font-semibold">B2B wholesale</span> and{' '}
          <span className="text-white font-semibold">showroom billing</span> to{' '}
          <span className="text-white font-semibold">karigar tracking</span> to{' '}
          <span className="text-white font-semibold">GST E-Invoicing and much more!</span>{' '}
          into one secure system.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-[2px] bg-[#C6A87C]/40 mx-auto my-8 origin-center"
        />

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#C6A87C]/30 hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-[#C6A87C]" />
                <span className="text-white text-xs font-bold tracking-wide">{pillar.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
