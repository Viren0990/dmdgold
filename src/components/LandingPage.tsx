'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  Store,
  CreditCard,
  ScanBarcode,
  Hammer,
  FileText,
  Bell,
  Shield,
  Server,
  Lock,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Users,
  BarChart3,
  Receipt,
  Gem,
  TrendingUp,
} from 'lucide-react';

// ─────────────────────────────────────────────
// ANIMATED COUNTER HOOK
// ─────────────────────────────────────────────
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!startOnView || !isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
}

// ─────────────────────────────────────────────
// LEAD FORM COMPONENT (reused in hero + final CTA)
// ─────────────────────────────────────────────
function LeadForm({ variant = 'light', id }: { variant?: 'light' | 'dark'; id: string }) {
  const [formState, setFormState] = useState({ Name: '', Business: '', Phone: '', Email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setFormState({ Name: '', Business: '', Phone: '', Email: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className={`text-2xl font-serif ${variant === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
          We&apos;ll Be In Touch!
        </h3>
        <p className={variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
          Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#C6A87C] font-bold text-sm uppercase tracking-widest mt-4 hover:underline cursor-pointer"
        >
          Send Another
        </button>
      </div>
    );
  }

  const isDark = variant === 'dark';
  const inputClass = `w-full bg-transparent border-b ${
    isDark ? 'border-white/20 text-white' : 'border-gray-300 text-[#2C2C2C]'
  } py-3 focus:outline-none focus:border-[#C6A87C] transition-colors peer placeholder-transparent`;
  const labelClass = `absolute left-0 top-3 ${
    isDark ? 'text-gray-500' : 'text-gray-400'
  } text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id={id}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">
          <input type="text" name="Name" required value={formState.Name} className={inputClass} placeholder=" " onChange={handleChange} />
          <label className={labelClass}>Your Name *</label>
        </div>
        <div className="relative">
          <input type="tel" name="Phone" required value={formState.Phone} className={inputClass} placeholder=" " onChange={handleChange} />
          <label className={labelClass}>Phone Number *</label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">
          <input type="text" name="Business" required value={formState.Business} className={inputClass} placeholder=" " onChange={handleChange} />
          <label className={labelClass}>Business Name *</label>
        </div>
        <div className="relative">
          <input type="email" name="Email" required value={formState.Email} className={inputClass} placeholder=" " onChange={handleChange} />
          <label className={labelClass}>Email Address *</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#C6A87C] text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#b0956b] transition-all duration-300 shadow-lg shadow-[#C6A87C]/25 hover:shadow-xl hover:shadow-[#C6A87C]/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm flex items-center justify-center gap-2 group"
      >
        {status === 'submitting' ? (
          'Submitting...'
        ) : (
          <>
            Book Free Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
      )}

      <p className={`text-center text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'} flex items-center justify-center gap-1`}>
        <Lock className="w-3 h-3" /> Your information is secure and never shared.
      </p>
    </form>
  );
}

// ─────────────────────────────────────────────
// FADE-IN WRAPPER
// ─────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// FEATURE CARD VISUALS
// ─────────────────────────────────────────────

const B2BVisual = () => (
  <div className="w-full h-32 relative group-hover:scale-[1.03] transition-transform duration-500">
    {/* Mini browser chrome */}
    <div className="bg-[#1A1A1A] rounded-t-lg px-2 py-1 flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      <div className="flex-1 bg-white/10 rounded h-2.5 mx-1 flex items-center px-1.5">
        <span className="text-[5px] text-gray-400">dmdgold.com/store</span>
      </div>
    </div>
    {/* Store content */}
    <div className="bg-white rounded-b-lg border border-gray-100 p-2 space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="text-[6px] font-bold text-[#C6A87C] tracking-wider">B2B STORE</div>
        <div className="flex gap-1">
          <div className="text-[5px] text-gray-400">❤️ 12</div>
          <div className="text-[5px] text-[#C6A87C] font-bold">🛒 5</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-50 rounded p-1 border border-gray-100">
            <div className="h-5 bg-gradient-to-br from-[#C6A87C]/5 to-[#C6A87C]/15 rounded flex items-center justify-center text-[6px]">💍</div>
            <div className="text-[4px] font-bold text-gray-700 mt-0.5 truncate">Design #{1040+i}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#C6A87C] rounded px-1.5 py-0.5 flex justify-between items-center">
        <span className="text-[4px] text-white font-bold">Cart: 5 items</span>
        <span className="text-[5px] text-white font-black">Checkout →</span>
      </div>
    </div>
  </div>
);

const POSVisual = () => (
  <div className="w-full h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-3 group-hover:-translate-y-1 transition-transform duration-500 flex flex-col">
    <div className="flex justify-between items-center mb-2">
      <div className="text-[7px] text-[#C6A87C] font-bold uppercase tracking-wider">POS</div>
      <div className="px-1 py-0.5 bg-[#1A1A1A] text-[#C6A87C] text-[6px] font-bold rounded">₹6,200/g</div>
    </div>
    <div className="bg-gray-50 rounded p-1.5 mb-1.5 border border-gray-100">
      <div className="text-[7px] font-bold text-gray-700">Mrs. Anjali Sharma</div>
      <div className="text-[5px] text-gray-400">+91 99887 76655</div>
    </div>
    <div className="space-y-0.5 mb-1.5 flex-1">
      <div className="flex justify-between text-[6px]">
        <span className="text-gray-600">Gold Choker 22K</span>
        <span className="font-bold text-[#2C2C2C]">₹2.45L</span>
      </div>
      <div className="flex justify-between text-[5px] text-green-600">
        <span>Discount</span>
        <span>-₹5,000</span>
      </div>
    </div>
    <div className="border-t border-dashed border-gray-200 pt-1 flex justify-between items-center">
      <span className="text-[5px] text-gray-400 uppercase font-bold">Total</span>
      <span className="text-[10px] font-black text-[#2C2C2C]">₹2.47L</span>
    </div>
  </div>
);

const InventoryMiniVisual = () => (
  <div className="w-full h-32 flex flex-col items-center justify-center group-hover:scale-[1.03] transition-transform duration-500">
    <div className="bg-white rounded-xl shadow-sm border border-[#C6A87C]/20 p-3 w-full">
      <div className="flex items-center justify-between mb-2">
        <ScanBarcode className="w-5 h-5 text-[#C6A87C]" />
        <div className="px-1.5 py-0.5 bg-[#1A1A1A] text-[#C6A87C] text-[5px] tracking-wider font-bold rounded-full uppercase">Scanner Active</div>
      </div>
      <div className="grid grid-cols-4 gap-1 mb-2">
        {[
          { sym: 'Au', name: 'Gold', bg: 'bg-[#C6A87C]', text: 'text-white' },
          { sym: 'Di', name: 'Diamond', bg: 'bg-[#1A1A1A]', text: 'text-white' },
          { sym: 'Ag', name: 'Silver', bg: 'bg-gray-300', text: 'text-gray-800' },
          { sym: 'Pt', name: 'Platinum', bg: 'bg-gray-500', text: 'text-white' },
        ].map((m, i) => (
          <div key={i} className={`${m.bg} ${m.text} rounded-md p-1 flex flex-col items-center justify-center`}>
            <div className="text-[9px] font-serif font-bold leading-none">{m.sym}</div>
            <div className="text-[4px] uppercase tracking-wider mt-0.5 opacity-80">{m.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-1.5 border border-gray-100">
        <div>
          <div className="text-[5px] uppercase font-bold text-gray-400">Total Items</div>
          <div className="text-[9px] font-bold text-[#2C2C2C]">570</div>
        </div>
        <div className="text-right">
          <div className="text-[5px] uppercase font-bold text-gray-400">Stock Value</div>
          <div className="text-[9px] font-bold text-[#C6A87C]">₹4.2 Cr</div>
        </div>
      </div>
    </div>
  </div>
);

const KarigarMiniVisual = () => (
  <div className="w-full h-32 group-hover:-translate-y-1 transition-transform duration-500">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[8px]">👨‍🔧</div>
        <div>
          <div className="text-[7px] font-bold text-gray-700">Ramesh Soni</div>
          <div className="text-[5px] text-gray-400">Soni Jewellery Works</div>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        <div className="text-[5px] bg-green-100 text-green-700 px-1 py-0.5 rounded font-bold">Aadhaar ✓</div>
        <div className="text-[5px] bg-green-100 text-green-700 px-1 py-0.5 rounded font-bold">PAN ✓</div>
        <div className="text-[5px] bg-blue-100 text-blue-700 px-1 py-0.5 rounded font-bold">GST ✓</div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <Hammer className="w-3 h-3 text-[#C6A87C]" />
          <div className="text-[6px] font-bold text-gray-700">Gold Bangle #120</div>
          <div className="text-[5px] text-gray-400 ml-auto">In Production</div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-[#C6A87C] w-[65%] rounded-full group-hover:w-[85%] transition-all duration-1000 ease-out" />
        </div>
        <div className="flex justify-between text-[5px] text-gray-400 font-medium mt-0.5">
          <span>Ghat: 2.5%</span>
          <span className="text-[#C6A87C]">65% Done</span>
        </div>
      </div>
    </div>
  </div>
);

const EInvoiceMiniVisual = () => (
  <div className="w-full h-32 group-hover:-translate-y-1 transition-transform duration-500">
    <div className="relative">
      {/* Background paper */}
      <div className="absolute top-1 left-1 w-full h-full bg-[#C6A87C]/10 rounded-lg transform rotate-3 border border-[#C6A87C]/20" />
      {/* Foreground paper */}
      <div className="w-full bg-white border border-gray-100 shadow-sm rounded-lg p-3 relative z-10 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="text-[8px] font-serif font-bold text-[#2C2C2C]">TAX INVOICE</div>
            <div className="text-[5px] text-gray-400 font-mono">GSTIN: 27AADCB2230M1Z2</div>
          </div>
          <div className="w-6 h-6 bg-gray-800 grid grid-cols-3 gap-px p-0.5 rounded">
            {[...Array(9)].map((_, i) => <div key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-transparent'} />)}
          </div>
        </div>
        <div className="space-y-1 mb-2">
          <div className="flex justify-between text-[6px]">
            <span className="text-gray-600">Taxable Value</span>
            <span className="font-bold text-[#2C2C2C]">₹1,00,000</span>
          </div>
          <div className="flex justify-between text-[5px] border-t border-dashed pt-0.5">
            <span className="text-gray-400">CGST + SGST (3%)</span>
            <span>₹3,000</span>
          </div>
          <div className="flex justify-between text-[6px] border-t pt-0.5">
            <span className="text-gray-800 font-bold uppercase text-[5px] tracking-wider">Invoice Total</span>
            <span className="font-black text-[#2C2C2C]">₹1,03,000</span>
          </div>
        </div>
        <div className="w-full bg-green-100 text-green-700 h-4 rounded flex items-center justify-center text-[5px] font-bold tracking-wider uppercase border border-green-200">
          ✓ Govt Portal Synced
        </div>
      </div>
    </div>
  </div>
);

const CRMMiniVisual = () => (
  <div className="w-full h-32 group-hover:scale-[1.03] transition-transform duration-500">
    <div className="bg-[#1A1A1A] rounded-xl p-3 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="text-[6px] text-[#C6A87C] font-bold tracking-widest uppercase">Notifications</div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <div className="text-white text-[6px] font-bold">4 New</div>
        </div>
      </div>
      <div className="space-y-1.5 flex-1">
        {[
          { icon: '📦', title: 'New Order', desc: 'Sharma Jewellers — ₹4.2L', color: 'bg-blue-500/20 border-blue-500/30' },
          { icon: '💰', title: 'Payment Confirmed', desc: '₹1.5L received', color: 'bg-green-500/20 border-green-500/30' },
          { icon: '🎂', title: 'Birthday Alert', desc: 'Mrs. Patel — Send offer', color: 'bg-purple-500/20 border-purple-500/30' },
          { icon: '⭐', title: 'New Review', desc: '5-star rating posted', color: 'bg-yellow-500/20 border-yellow-500/30' },
        ].map((notif, i) => (
          <div key={i} className={`p-1 rounded-lg border ${notif.color} backdrop-blur-sm flex items-center gap-1.5 ${i >= 3 ? 'opacity-50' : ''}`}>
            <div className="text-[8px] flex-shrink-0">{notif.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[6px] font-bold truncate">{notif.title}</div>
              <div className="text-gray-400 text-[5px] truncate">{notif.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// FEATURES DATA
// ─────────────────────────────────────────────
const features = [
  {
    title: 'B2B eCommerce',
    description: 'Digital wholesale store with catalogue, wishlist, cart & multi-step checkout for your retailers.',
    visual: <B2BVisual />,
  },
  {
    title: 'Billing & POS',
    description: 'Live rate integration, auto GST calculation, phone lookup & instant invoice generation.',
    visual: <POSVisual />,
  },
  {
    title: 'Smart Inventory',
    description: 'Multi-category stock with QR/barcode generation, HUID tracking & real-time audits.',
    visual: <InventoryMiniVisual />,
  },
  {
    title: 'Karigar Management',
    description: 'Artisan profiles, inward/outward challans, ghat tracking & full transaction history.',
    visual: <KarigarMiniVisual />,
  },
  {
    title: 'GST & E-Invoicing',
    description: 'Automated tax calculations, e-way bills & one-click government portal sync.',
    visual: <EInvoiceMiniVisual />,
  },
  {
    title: 'CRM & Notifications',
    description: 'Birthday offers, purchase history, real-time order alerts & customer engagement tools.',
    visual: <CRMMiniVisual />,
  },
];


// ─────────────────────────────────────────────
// MAIN LANDING PAGE COMPONENT
// ─────────────────────────────────────────────
export default function LandingPage() {
  const scrollToForm = () => {
    const el = document.getElementById('final-cta-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#FAF9F6]">
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO — DARK, WITH INLINE FORM
          ═══════════════════════════════════════════ */}
      <section className="relative w-full bg-[#1A1A1A] overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C6A87C]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C6A87C]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#C6A87C 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-36 md:pb-32">
          {/* Top bar — logo + phone */}
          <div className="flex justify-between items-center mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="DMD Gold Logo" width={48} height={42} className="w-12 h-auto" />
              <span className="text-xl font-serif font-bold text-white tracking-widest">DMD GOLD</span>
            </div>
            <a
              href="tel:+919371123699"
              className="hidden sm:flex items-center gap-2 text-[#C6A87C] text-sm font-bold hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 93711 23699
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div className="flex-1 space-y-6 lg:pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#C6A87C]/10 border border-[#C6A87C]/20 rounded-full px-4 py-1.5 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A87C]" />
                  <span className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">All-in-One Jewellery ERP</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-white leading-[1.15] tracking-tight"
              >
                India&apos;s #1{' '}
                <span className="italic text-[#C6A87C]">Jewellery Management</span>{' '}
                Software
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
              >
                From tracking every gram of gold to generating instant GST invoices — billing, inventory, karigar tracking, B2B wholesale & E-Invoice — all in one secure platform built for Indian jewellers.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {[
                  { icon: Shield, label: 'GST Compliant' },
                  { icon: Server, label: 'Secure Servers' },
                  { icon: Phone, label: '24/7 Support' },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-[#C6A87C]" />
                    <span className="text-white/80 text-xs font-bold tracking-wide">{badge.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Mobile CTA — shows only on mobile below copy */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                onClick={scrollToForm}
                className="lg:hidden w-full bg-[#C6A87C] text-white py-4 rounded-full font-bold uppercase tracking-widest shadow-lg shadow-[#C6A87C]/25 text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-[#b0956b] transition-colors"
              >
                Book Free Demo <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Right: Inline Form */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[480px] flex-shrink-0"
            >
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C6A87C]/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-xl font-serif text-white mb-1">Book a Free Demo</h2>
                  <p className="text-gray-500 text-sm mb-6">See DMD Gold in action — no commitment required.</p>
                  <LeadForm variant="dark" id="hero-form" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80V40C200 10 400 0 600 10C800 20 1000 50 1200 40V80H0Z" fill="#FAF9F6" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: SOCIAL PROOF STRIP
          ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#FAF9F6] px-6 md:px-12 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Designed by Jewellers', desc: 'Built with deep industry expertise for Indian businesses.', icon: Gem },
              { title: 'Zero Hidden Fees', desc: 'Transparent pricing with no setup or hidden costs.', icon: CreditCard },
              { title: 'Dedicated Support', desc: 'Lightning fast 24/7 assistance whenever you need it.', icon: Phone },
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#C6A87C]/10 flex items-center justify-center group-hover:bg-[#C6A87C]/20 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-[#C6A87C]" />
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-serif font-bold text-[#2C2C2C] mb-1">
                    {feature.title}
                  </div>
                  <div className="text-gray-500 text-sm font-medium tracking-wide max-w-xs mx-auto">
                    {feature.desc}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: FEATURES GRID
          ═══════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#C6A87C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
                <span className="w-8 h-[1px] bg-[#C6A87C]/50" />
                <span>Powerful Features</span>
                <span className="w-8 h-[1px] bg-[#C6A87C]/50" />
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
                Everything Your Jewellery Business Needs
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group relative bg-[#FAF9F6] border border-[#C6A87C]/10 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#C6A87C]/10 transition-all duration-500 h-full">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#C6A87C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  <div className="relative z-10">
                    {/* Custom Visual */}
                    <div className="mb-4">
                      {feature.visual}
                    </div>
                    <h4 className="text-lg font-serif text-[#2C2C2C] mb-2 group-hover:text-[#C6A87C] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA below features */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-[#2C2C2C] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#C6A87C] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
              >
                See All Features In A Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: VISUAL SHOWCASE (DARK)
          ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#1A1A1A] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C6A87C]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Feature bullets */}
            <div className="flex-1 space-y-8">
              <FadeIn>
                <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4">Built For Indian Jewellers</h2>
                <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                  One Platform.<br />
                  <span className="italic text-[#C6A87C]">Infinite Possibilities.</span>
                </h3>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-5">
                  {[
                    { title: 'Multi-Category Support', desc: 'Gold, Diamond, Silver, Platinum, Titanium, Gems & Bullion — all in one catalogue.' },
                    { title: 'Live Gold Rate Integration', desc: 'Real-time pricing that auto-updates across billing, quotations & B2B store.' },
                    { title: 'Role-Based Access', desc: 'Owner, manager, staff — each sees only what they need. Full audit trail.' },
                    { title: 'Mobile Ready', desc: 'Access your complete business dashboard from any device, anywhere.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-[#C6A87C]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#C6A87C]/30 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A87C]" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm mb-0.5">{item.title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 border border-[#C6A87C] text-[#C6A87C] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all duration-300 cursor-pointer group"
                >
                  See It In Action
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </FadeIn>
            </div>

            {/* Right: Dashboard Mockup */}
            <FadeIn delay={0.15} className="flex-1 w-full">
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-md h-6 mx-2 flex items-center px-3">
                    <span className="text-[10px] text-gray-500">🔒 app.dmdgold.com/dashboard</span>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="space-y-3">
                  {/* Top stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Today\'s Sales', value: '₹4.8L', trend: '+12%' },
                      { label: 'Stock Value', value: '₹2.1 Cr', trend: '' },
                      { label: 'Pending Orders', value: '23', trend: '' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">{stat.label}</div>
                        <div className="text-white font-bold text-sm mt-1 flex items-center gap-1">
                          {stat.value}
                          {stat.trend && <span className="text-green-400 text-[9px]">{stat.trend}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent orders table */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-[10px] text-[#C6A87C] uppercase font-bold tracking-wider mb-2">Recent Invoices</div>
                    <div className="space-y-1.5">
                      {[
                        { inv: 'INV-1089', customer: 'Sharma Jewellers', amount: '₹3,45,000', status: 'Paid' },
                        { inv: 'INV-1088', customer: 'Zaveri Mfg.', amount: '₹1,28,500', status: 'Pending' },
                        { inv: 'INV-1087', customer: 'Patel & Sons', amount: '₹5,67,200', status: 'Paid' },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between text-[10px] py-1.5 border-b border-white/5 last:border-0">
                          <span className="text-gray-400 font-mono w-16">{row.inv}</span>
                          <span className="text-white flex-1 mx-2 truncate">{row.customer}</span>
                          <span className="text-white font-bold w-20 text-right">{row.amount}</span>
                          <span className={`ml-2 px-1.5 py-0.5 rounded text-[8px] font-bold ${row.status === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">Live Gold Rate</div>
                      <div className="text-[#C6A87C] font-bold text-lg flex items-center gap-1">
                        ₹6,245<span className="text-[9px] text-gray-500">/g</span>
                        <TrendingUp className="w-3 h-3 text-green-400 ml-1" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">Categories</div>
                      <div className="flex gap-1 flex-wrap">
                        {['Au', 'Di', 'Ag', 'Pt'].map((m) => (
                          <span key={m} className="text-[9px] bg-[#C6A87C]/15 text-[#C6A87C] px-1.5 py-0.5 rounded font-bold">{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WHO IT'S FOR
          ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#FAF9F6] py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4">
                <span className="w-8 h-[1px] bg-[#C6A87C]/50" />
                <span>Two Tailored Editions</span>
                <span className="w-8 h-[1px] bg-[#C6A87C]/50" />
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
                Built for <span className="italic text-[#C6A87C]">Retailers</span> &amp; <span className="italic text-[#C6A87C]">Wholesalers</span>
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Retailer */}
            <FadeIn delay={0.1}>
              <div className="group bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm hover:border-[#C6A87C]/30 hover:shadow-xl hover:shadow-[#C6A87C]/10 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#C6A87C]/10 flex items-center justify-center group-hover:bg-[#C6A87C]/20 transition-colors">
                    <Store className="w-6 h-6 text-[#C6A87C]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-[#2C2C2C] font-bold">Retailer Edition</h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">For Showrooms</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'CRM & Customer Tracking with birthday automation',
                    'URD Purchases & Old Gold Exchanges',
                    'Smart Billing & POS with live gold rates',
                    'Quotation desk with one-click invoice conversion',
                    'Walk-in customer management',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C6A87C] flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToForm}
                  className="w-full border border-[#C6A87C] text-[#C6A87C] py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  Book Demo for Retailers
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>

            {/* Wholesaler */}
            <FadeIn delay={0.2}>
              <div className="group bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm hover:border-[#C6A87C]/30 hover:shadow-xl hover:shadow-[#C6A87C]/10 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#C6A87C]/10 flex items-center justify-center group-hover:bg-[#C6A87C]/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-[#C6A87C]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-[#2C2C2C] font-bold">Wholesaler Edition</h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">For B2B Manufacturing</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'B2B Digital Storefront with catalogue & checkout',
                    'Karigar & artisan management with challans',
                    'Bulk inventory management & uploads',
                    'Role-based access & multi-branch control',
                    'Order lifecycle tracking & dispatch',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C6A87C] flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToForm}
                  className="w-full border border-[#C6A87C] text-[#C6A87C] py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  Book Demo for Wholesalers
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: COMPLIANCE & SECURITY
          ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#1A1A1A] py-14 md:py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Server,
                title: 'Secure Private Servers',
                desc: 'Hosted on secure, privately managed in-house servers — your data never leaves our control.',
              },
              {
                icon: Shield,
                title: 'GST & E-Invoice Ready',
                desc: 'Automated tax calculations, e-way bills, and one-click government portal sync.',
              },
              {
                icon: Lock,
                title: '256-bit Encryption',
                desc: 'Bank-grade encryption for all data in transit and at rest. Complete audit trail.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[#C6A87C]/10 border border-[#C6A87C]/20 flex items-center justify-center mb-4 group-hover:bg-[#C6A87C]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#C6A87C]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: FINAL CTA FORM
          ═══════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#C6A87C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Copy */}
            <div className="flex-1 space-y-6 lg:pt-4">
              <FadeIn>
                <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4">Get Started Today</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C2C2C] leading-tight">
                  Ready to <span className="italic text-[#C6A87C]">Transform</span> Your Jewellery Business?
                </h3>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-gray-500 text-base leading-relaxed">
                  Book a personalized demo with our experts. We&apos;ll walk you through every feature and show you how DMD Gold fits your business — whether you&apos;re a retailer or a wholesaler.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C6A87C]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#C6A87C]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Us</div>
                      <a href="tel:+919371123699" className="text-[#2C2C2C] font-bold hover:text-[#C6A87C] transition-colors">
                        +91 93711 23699
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C6A87C]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#C6A87C]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</div>
                      <a href="mailto:info@dmdgold.com" className="text-[#2C2C2C] font-bold hover:text-[#C6A87C] transition-colors">
                        info@dmdgold.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C6A87C]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#C6A87C]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Office</div>
                      <div className="text-[#2C2C2C] text-sm">
                        Office No-01, Amaryllis, Wagholi,<br />Pune, Maharashtra 412207
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <FadeIn delay={0.1} className="w-full lg:w-[480px] flex-shrink-0">
              <div className="bg-[#FAF9F6] border border-[#C6A87C]/10 rounded-3xl p-6 sm:p-10 shadow-sm">
                <h4 className="text-xl font-serif text-[#2C2C2C] mb-1">Book Your Free Demo</h4>
                <p className="text-gray-500 text-sm mb-6">Fill in your details and we&apos;ll reach out within 24 hours.</p>
                <LeadForm variant="light" id="final-cta-form" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: MINIMAL FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="w-full bg-[#1A1A1A] py-8 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="DMD Gold" width={32} height={28} className="w-8 h-auto opacity-70" />
            <span className="text-white/60 text-sm font-serif tracking-wider">DMD GOLD</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="tel:+919371123699" className="hover:text-[#C6A87C] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 93711 23699
            </a>
            <a href="mailto:info@dmdgold.com" className="hover:text-[#C6A87C] transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" /> info@dmdgold.com
            </a>
          </div>

          <div className="text-xs text-gray-600">
            © {new Date().getFullYear()} DMD Green Tech. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════
          FLOATING MOBILE CTA
          ═══════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button
          onClick={scrollToForm}
          className="w-full bg-[#C6A87C] text-white py-3 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:bg-[#b0956b] transition-colors"
        >
          Book Free Demo <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </main>
  );
}
