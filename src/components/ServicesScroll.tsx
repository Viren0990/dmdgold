'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- MOCK UI COMPONENTS (Visuals for the Right Side) ---

// 1. INVENTORY VISUAL: A grid of "tags" that light up
const InventoryVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-8 flex flex-col relative overflow-hidden shadow-2xl">
    <div className="absolute top-0 left-0 w-full h-1 bg-[#C6A87C]/30" />
    <div className="flex justify-between items-center mb-8">
      <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Live Stock View</div>
      <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</div>
    </div>
    {/* Grid of Dots */}
    <div className="grid grid-cols-4 gap-4">
       {[...Array(12)].map((_, i) => (
         <div key={i} className={`h-24 rounded-xl border flex items-center justify-center transition-all duration-500 ${i < 8 ? 'bg-[#C6A87C] border-[#C6A87C]' : 'bg-white border-dashed border-gray-300'}`}>
            {i < 8 && <div className="text-white font-serif text-xl">Au</div>}
         </div>
       ))}
    </div>
    <div className="mt-auto flex justify-between text-sm text-gray-500">
       <span>Total Items: 1,240</span>
       <span>Value: ₹4.2Cr</span>
    </div>
  </div>
);

// 2. BILLING VISUAL: A clean invoice sliding up
const BillingVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-100 p-8 shadow-2xl flex flex-col relative">
    <div className="text-center mb-6">
      <div className="text-2xl font-serif font-bold text-[#2C2C2C]">DMD JEWELERS</div>
      <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Tax Invoice</div>
    </div>
    <div className="space-y-4 flex-1">
       <div className="flex justify-between border-b border-gray-100 pb-2">
         <span className="text-gray-600">Gold Bangle (22k)</span>
         <span className="font-bold text-[#2C2C2C]">₹45,000</span>
       </div>
       <div className="flex justify-between border-b border-gray-100 pb-2">
         <span className="text-gray-600">Diamond Ring (VVS)</span>
         <span className="font-bold text-[#2C2C2C]">₹1,20,000</span>
       </div>
       <div className="flex justify-between border-b border-gray-100 pb-2 text-sm text-gray-400">
         <span>Making Charges</span>
         <span>₹12,500</span>
       </div>
    </div>
    <div className="mt-auto bg-[#1A1A1A] text-white p-4 rounded-xl flex justify-between items-center">
      <span className="text-xs uppercase tracking-widest">Total Amount</span>
      <span className="text-xl font-bold">₹1,77,500</span>
    </div>
  </div>
);

// 3. KARIGAR VISUAL: A timeline flow
const KarigarVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
     <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase mb-8">Production Status</div>
     
     <div className="space-y-8 relative z-10">
        {/* Step 1 */}
        <div className="flex gap-4 items-center opacity-50">
           <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">1</div>
           <div className="text-gray-400">Gold Issued (50g)</div>
        </div>
        {/* Step 2 */}
        <div className="flex gap-4 items-center">
           <div className="w-8 h-8 rounded-full bg-[#C6A87C] text-[#1A1A1A] font-bold flex items-center justify-center">2</div>
           <div className="text-white font-bold">In Production</div>
        </div>
        {/* Step 3 */}
        <div className="flex gap-4 items-center opacity-30">
           <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">3</div>
           <div className="text-gray-500">Quality Check</div>
        </div>
     </div>

     {/* Animated Progress Line */}
     <div className="absolute left-[2.2rem] top-20 w-0.5 h-32 bg-gray-800 -z-0">
        <div className="w-full h-1/2 bg-[#C6A87C] animate-pulse"></div>
     </div>
  </div>
);


// --- MAIN COMPONENT ---

const features = [
  {
    id: 1,
    title: "RFID Inventory",
    subtitle: "Speed & Accuracy",
    description: "Forget manual counting. With our RFID integration, you can scan trays of jewelry in seconds. The system instantly detects missing items, tallies stock value, and updates your database in real-time.",
    visual: <InventoryVisual />
  },
  {
    id: 2,
    title: "Smart Billing",
    subtitle: "GST Ready",
    description: "Generate compliant tax invoices with a single click. The system automatically fetches the daily gold rate, calculates making charges, applies discounts, and splits GST/IGST seamlessly.",
    visual: <BillingVisual />
  },
  {
    id: 3,
    title: "Karigar Tracking",
    subtitle: "Manufacturing",
    description: "Track every gram of gold issued to your artisans. Monitor wastage (ghat), manage deadlines, and ensure that the weight you give is the weight you get back (minus approved loss).",
    visual: <KarigarVisual />
  }
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.service-step');
    
    sections.forEach((section: any, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center", // When top of section hits center of viewport
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        
        {/* LEFT COLUMN: SCROLLING TEXT */}
        <div className="w-full md:w-1/2 py-[10vh]">
          {features.map((feature, index) => (
            <div key={feature.id} className="service-step min-h-[80vh] flex flex-col justify-center">
              <div className={`transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}>
                <h4 className="text-[#C6A87C] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  {feature.subtitle}
                </h4>
                <h3 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                  {feature.description}
                </p>
                <button className="mt-8 text-[#2C2C2C] border-b border-[#C6A87C] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#C6A87C] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: STICKY VISUAL */}
        <div className="hidden md:block w-1/2 relative">
          <div className="sticky top-24 h-[600px] w-full perspective-1000">
             
             {/* Render Active Visual with Transition */}
             {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                    ${activeIndex === index 
                      ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-y-10 scale-95' 
                        : 'opacity-0 translate-y-10 scale-95'
                    }
                  `}
                >
                  {feature.visual}
                </div>
             ))}

          </div>
        </div>

      </div>
    </div>
  );
}