'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- MOCK UI COMPONENTS (Visuals for the Right Side) ---

const LoginVisual = () => (
  <div className="w-full h-full bg-slate-50 rounded-3xl border border-gray-200 p-6 flex items-center justify-center shadow-2xl relative overflow-hidden">
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative z-10">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <span className="text-[#C6A87C] font-bold border-b-2 border-[#C6A87C] pb-4 -mb-4 px-2">Admin / Seller</span>
        <span className="text-gray-400 font-medium px-2 cursor-pointer hover:text-gray-600">B2B Buyer</span>
      </div>
      <div className="space-y-5">
        <div>
          <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Store Code / GSTIN</label>
          <div className="h-10 w-full bg-gray-50 rounded-lg border border-gray-200 mt-1 flex items-center px-3 text-gray-700 text-sm font-medium">DMD-JEWELS-01</div>
        </div>
        <div>
          <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Registered Mobile / Staff ID</label>
          <div className="h-10 w-full bg-gray-50 rounded-lg border border-gray-200 mt-1 flex items-center px-3 text-gray-700 text-sm flex justify-between">
            <span className="font-medium">+91 98765 43210</span>
            <span className="text-[#C6A87C] text-xs font-bold cursor-pointer">Get OTP</span>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Security PIN / OTP</label>
          <div className="flex gap-2 mt-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`h-10 flex-1 rounded-lg border flex items-center justify-center text-lg font-bold ${i < 4 ? 'border-[#C6A87C] text-[#2C2C2C] bg-white' : 'border-gray-200 bg-gray-50 text-transparent'}`}>
                {i < 4 ? '•' : ''}
              </div>
            ))}
          </div>
        </div>
        <div className="h-11 w-full bg-[#2C2C2C] rounded-lg mt-6 flex items-center justify-center text-white font-bold text-sm shadow-md cursor-pointer hover:bg-black transition-colors">
          Secure Login
        </div>
        <div className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
          <span>🔒</span> End-to-end encrypted connection
        </div>
      </div>
    </div>
    {/* Background decorative elements */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C6A87C]/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#2C2C2C]/5 rounded-full blur-3xl"></div>
  </div>
);

const InventoryVisual = () => {
  const stockCategories = [
    { name: "Gold", symbol: "Au" },
    { name: "Diamond", symbol: "Di" },
    { name: "Gemstones", symbol: "Gm" },
    { name: "Platinum", symbol: "Pt" },
    { name: "Silver", symbol: "Ag" },
    { name: "Titanium", symbol: "Ti" },
    { name: "Semi Prec.", symbol: "Sp" },
  ];

  return (
    <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-8 flex flex-col relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C6A87C]/30" />
      <div className="flex justify-between items-center mb-8">
        <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Live Stock View</div>
        <div className="px-3 py-1 bg-[#1A1A1A] text-[#C6A87C] text-[10px] tracking-wider font-bold rounded-full border border-[#C6A87C]/30 shadow-sm uppercase">Active Scanner</div>
      </div>
      <div className="grid grid-cols-4 gap-3">
         {stockCategories.map((cat, i) => (
           <div key={i} className="h-24 rounded-xl border border-[#C6A87C]/20 bg-white flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer p-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#C6A87C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-2xl mb-1 font-serif text-[#C6A87C] group-hover:scale-110 transition-transform duration-300 z-10">{cat.symbol}</div>
              <div className="text-gray-500 group-hover:text-[#2C2C2C] transition-colors text-[9px] font-bold uppercase tracking-wider text-center z-10">{cat.name}</div>
           </div>
         ))}
         {[...Array(5)].map((_, i) => (
           <div key={`empty-${i}`} className="h-24 rounded-xl border border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center">
              <div className="text-gray-300 font-light text-xl">+</div>
           </div>
         ))}
      </div>
      <div className="mt-auto flex justify-between items-center text-sm text-gray-500 bg-white p-4 rounded-xl border shadow-sm">
         <div>
           <div className="text-xs uppercase font-bold text-gray-400">Total Pieces</div>
           <div className="font-bold text-[#2C2C2C] text-lg">570</div>
         </div>
         <div className="text-right">
           <div className="text-xs uppercase font-bold text-gray-400">Stock Value</div>
           <div className="font-bold text-[#C6A87C] text-lg">₹4.2 Cr</div>
         </div>
      </div>
    </div>
  );
};

const DetailsVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 p-8 flex flex-col shadow-2xl">
    <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase mb-6">Product Specifications</div>
    <div className="flex gap-6 items-center mb-8">
      <div className="w-24 h-24 rounded-full border-2 border-[#C6A87C] border-dashed flex items-center justify-center relative">
        <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-3xl">💍</div>
        <div className="absolute -bottom-2 -right-2 bg-[#C6A87C] text-[#1A1A1A] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Custom</div>
      </div>
      <div>
        <div className="text-xl text-white font-serif">Bridal Choker Set</div>
        <div className="text-xs text-[#C6A87C] mt-2 font-mono bg-[#C6A87C]/10 inline-block px-2 py-1 rounded border border-[#C6A87C]/30">HUID: ABCD56</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 flex-1 mt-2">
      <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#C6A87C]/50 transition-colors">
        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Purity</div>
        <div className="text-white font-medium mt-1 text-sm">22K (916)</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#C6A87C]/50 transition-colors">
        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Gross Weight</div>
        <div className="text-white font-medium mt-1 text-sm">45.500 g</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/10 col-span-2 hover:border-[#C6A87C]/50 transition-colors">
        <div className="text-[10px] text-[#C6A87C] uppercase font-bold tracking-wider mb-2">Diamond 4C Specifications</div>
        <div className="grid grid-cols-4 gap-2 text-xs">
          <div className="bg-black/30 p-2 rounded text-center border border-white/5">
            <div className="text-gray-500 mb-1 text-[10px] uppercase font-bold">Color</div>
            <div className="text-white font-bold">D-E</div>
          </div>
          <div className="bg-black/30 p-2 rounded text-center border border-white/5">
            <div className="text-gray-500 mb-1 text-[10px] uppercase font-bold">Cut</div>
            <div className="text-white font-bold">Ideal</div>
          </div>
          <div className="bg-black/30 p-2 rounded text-center border border-white/5">
            <div className="text-gray-500 mb-1 text-[10px] uppercase font-bold">Clarity</div>
            <div className="text-white font-bold">VVS1</div>
          </div>
          <div className="bg-black/30 p-2 rounded text-center border border-white/5">
            <div className="text-gray-500 mb-1 text-[10px] uppercase font-bold">Carat</div>
            <div className="text-white font-bold">2.50 ct</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CreationVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-100 p-6 shadow-2xl flex flex-col relative overflow-hidden">
    <div className="flex justify-between items-center mb-6">
      <div className="text-[#2C2C2C] text-lg font-bold">Add to Master Stock</div>
      <div className="bg-blue-50 text-blue-600 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">RFID Scanned</div>
    </div>
    
    <div className="space-y-4 flex-1">
      <div className="flex gap-4">
        <div className="flex-1 h-20 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 text-sm cursor-pointer hover:border-[#C6A87C] transition-colors">
          <span className="text-xl mb-1">📷</span>
          <span className="text-[10px] font-bold uppercase">Upload Photo</span>
        </div>
        <div className="flex-1 flex flex-col justify-center space-y-2">
          <div className="h-9 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3 text-sm font-medium"><span className="text-gray-400 w-12 text-xs">SKU:</span> RN-882</div>
          <div className="h-9 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3 text-sm font-medium"><span className="text-gray-400 w-12 text-xs">HUID:</span> AB123C</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Category</label>
          <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center px-3 text-sm font-medium text-gray-700">
            Gold Ring <span className="text-gray-400 text-xs">▼</span>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Purity</label>
          <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center px-3 text-sm font-medium text-gray-700">
            22K (916) <span className="text-gray-400 text-xs">▼</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 bg-[#FAF9F6] p-3 rounded-xl border border-[#C6A87C]/20">
        <div>
          <label className="text-[10px] text-gray-500 uppercase font-bold">Gross Wt</label>
          <div className="text-sm font-bold mt-1 text-[#2C2C2C]">12.500 g</div>
        </div>
        <div>
          <label className="text-[10px] text-gray-500 uppercase font-bold">Stone Wt</label>
          <div className="text-sm font-bold mt-1 text-red-500">-1.200 g</div>
        </div>
        <div>
          <label className="text-[10px] text-[#C6A87C] uppercase font-bold">Net Wt</label>
          <div className="text-sm font-bold mt-1 text-green-700 border-b border-green-700 inline-block">11.300 g</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
            <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Making Charge</label>
            <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3 text-sm font-bold text-gray-700">₹450 / gm</div>
        </div>
        <div>
            <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Stone Value</label>
            <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-3 text-sm font-bold text-gray-700">₹2,500</div>
        </div>
      </div>
    </div>

    <div className="h-12 w-full bg-[#C6A87C] rounded-lg mt-4 flex items-center justify-center text-white font-bold shadow-lg shadow-[#C6A87C]/30 cursor-pointer hover:bg-[#b0956b] transition-colors">
      Save & Print Barcode
    </div>
  </div>
);

const URDVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl flex flex-col">
    <div className="text-center mb-6">
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 text-orange-600 font-bold">URD</div>
      <div className="font-bold text-[#2C2C2C]">Old Gold Purchase</div>
    </div>
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-4">
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-500">Item Received</span>
        <span className="font-medium text-[#2C2C2C]">Old Bangles</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-500">Gross Wt. / Purity</span>
        <span className="font-medium text-[#2C2C2C]">20.00g / 75%</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-500">Fine Gold Yield</span>
        <span className="font-bold text-[#C6A87C]">15.00g</span>
      </div>
    </div>
    <div className="mt-auto border-t pt-4 text-center">
      <div className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-bold">Exchange Value Adjusted</div>
      <div className="text-3xl font-black text-[#2C2C2C]">₹93,000</div>
    </div>
  </div>
);

const TrackingVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
     <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase mb-8">Order Lifecycle</div>
     
     <div className="space-y-8 relative z-10">
        <div className="flex gap-4 items-center">
           <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center shadow-lg shadow-green-500/20">✓</div>
           <div className="text-gray-300 font-medium">Order Confirmed & Advance</div>
        </div>
        <div className="flex gap-4 items-center">
           <div className="w-8 h-8 rounded-full bg-[#C6A87C] text-[#1A1A1A] font-bold flex items-center justify-center animate-pulse shadow-lg shadow-[#C6A87C]/30">2</div>
           <div className="text-white font-bold">In Production / Processing</div>
        </div>
        <div className="flex gap-4 items-center opacity-30">
           <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">3</div>
           <div className="text-gray-500">Quality Inspection</div>
        </div>
        <div className="flex gap-4 items-center opacity-30">
           <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">4</div>
           <div className="text-gray-500">Ready for Delivery</div>
        </div>
     </div>

     <div className="absolute left-[2.2rem] top-20 w-0.5 h-48 bg-gray-800 -z-0">
        <div className="w-full h-[40%] bg-[#C6A87C]"></div>
     </div>
  </div>
);

const EInvoiceVisual = () => (
  <div className="w-full h-full bg-slate-50 rounded-3xl border border-gray-200 p-8 shadow-2xl flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <div>
        <div className="text-xl font-serif font-bold text-[#2C2C2C]">TAX INVOICE</div>
        <div className="text-xs text-gray-500 mt-1 font-mono">GSTIN: 27AADCB2230M1Z2</div>
      </div>
      <div className="w-16 h-16 bg-white p-1 border rounded-lg shadow-sm">
        <div className="w-full h-full bg-gray-800 grid grid-cols-3 gap-0.5 p-0.5">
          {[...Array(9)].map((_, i) => <div key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-transparent'} />)}
        </div>
      </div>
    </div>
    <div className="space-y-3 bg-white p-5 rounded-xl border shadow-sm flex-1">
       <div className="flex justify-between text-sm">
         <span className="text-gray-600 font-medium">Taxable Value</span>
         <span className="font-bold text-[#2C2C2C]">₹1,00,000</span>
       </div>
       <div className="flex justify-between text-sm border-t border-dashed pt-2">
         <span className="text-gray-500">CGST (1.5%)</span>
         <span className="font-medium">₹1,500</span>
       </div>
       <div className="flex justify-between text-sm">
         <span className="text-gray-500">SGST (1.5%)</span>
         <span className="font-medium">₹1,500</span>
       </div>
       <div className="flex justify-between text-sm border-t pt-2 mt-2">
         <span className="text-gray-800 font-bold uppercase text-[10px] tracking-wider">Invoice Total</span>
         <span className="font-black text-[#2C2C2C]">₹1,03,000</span>
       </div>
    </div>
    <div className="mt-6">
      <div className="w-full bg-green-100 text-green-700 h-10 rounded-lg flex items-center justify-center text-xs font-bold tracking-wider uppercase border border-green-200">
        ✓ Govt Portal Synced
      </div>
    </div>
  </div>
);

const ExcelVisual = () => (
  <div className="w-full h-full bg-[#f0f9f4] rounded-3xl border border-green-200 p-8 shadow-2xl flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">X</div>
      <div className="text-green-800 font-bold text-lg">Excel & Tally Ready</div>
    </div>
    <div className="bg-white border border-green-100 rounded-xl overflow-hidden flex-1 shadow-sm">
      <div className="flex bg-gray-50 border-b border-gray-200 text-[10px] uppercase tracking-wider font-bold text-gray-500 p-3">
        <div className="flex-1">Date</div>
        <div className="flex-1">Inv No.</div>
        <div className="flex-1 text-right">Amount</div>
      </div>
      {[...Array(5)].map((_, i) => {
        const staticAmounts = ['37,494', '28,192', '45,291', '15,302', '53,920'];
        return (
          <div key={i} className="flex border-b border-gray-50 text-xs text-gray-600 p-3 hover:bg-gray-50 transition-colors">
            <div className="flex-1 font-medium">12 Oct</div>
            <div className="flex-1 font-mono text-gray-400">INV-00{i+1}</div>
            <div className="flex-1 text-right font-bold text-[#2C2C2C]">₹{staticAmounts[i]}</div>
          </div>
        );
      })}
    </div>
    <div className="mt-6 bg-green-600 text-white h-12 rounded-xl flex items-center justify-center font-bold cursor-pointer hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
      Export Data (.xlsx)
    </div>
  </div>
);

const BillingDeskVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-gray-200 p-6 shadow-2xl flex flex-col relative">
    <div className="flex justify-between items-center mb-4">
      <div className="text-[#C6A87C] font-bold text-xs tracking-widest uppercase">Billing & POS</div>
      <div className="px-2 py-1 bg-[#2C2C2C] text-white text-[10px] rounded flex items-center gap-1 font-bold shadow-md">
        <span>LIVE RATE:</span>
        <span className="text-[#C6A87C]">₹6,200/g</span>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
      <div className="flex justify-between items-end border-b border-gray-100 pb-3 mb-3">
        <div>
          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Customer Info</div>
          <div className="font-bold text-[#2C2C2C] mt-1 text-sm">Mrs. Anjali Sharma</div>
          <div className="text-[10px] text-gray-500 mt-1">+91 99887 76655 | PAN: ABCDE1234F</div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between font-bold text-[#2C2C2C] text-sm">
          <span>1. Gold Choker Set (22K)</span>
          <span>₹2,45,000</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 ml-3">
          <span>Net: 35.2g | MC: 12% | Stone: ₹15k</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4 flex-1">
      <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium"><span>Subtotal</span><span>₹2,45,000</span></div>
      <div className="flex justify-between text-xs text-green-600 font-bold mb-2"><span>Festive Discount</span><span>-₹5,000</span></div>
      <div className="flex justify-between text-xs text-gray-500 mb-3 border-b border-gray-100 pb-3 font-medium"><span>GST (3%) on ₹2.40L</span><span>₹7,200</span></div>
      <div className="flex justify-between items-center text-[#2C2C2C] pt-1">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Net Payable</span>
        <span className="text-2xl font-black text-[#2C2C2C]">₹2,47,200</span>
      </div>
    </div>

    {/* Action Buttons: Invoice Generation, Print, Download */}
    <div className="mt-auto grid grid-cols-2 gap-3">
      <div className="col-span-2 h-11 bg-[#2C2C2C] text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-black/20 cursor-pointer hover:bg-black transition-colors text-sm">
        Generate Final Invoice
      </div>
      <div className="h-10 bg-white border border-gray-200 text-gray-700 rounded-lg flex items-center justify-center text-xs font-bold gap-2 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Download PDF
      </div>
      <div className="h-10 bg-white border border-gray-200 text-gray-700 rounded-lg flex items-center justify-center text-xs font-bold gap-2 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
        Print (A4 / Thermal)
      </div>
    </div>
  </div>
);


const B2BCatalogVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-8 flex flex-col shadow-2xl relative overflow-hidden">
    <div className="flex justify-between items-center mb-6 border-b border-[#C6A87C]/20 pb-4">
      <div>
        <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Wholesale Portal</div>
        <div className="text-xl font-serif text-[#2C2C2C] mt-1">Digital Catalog</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
        <span className="text-xl">🏬</span>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-4 flex-1">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col group cursor-pointer hover:border-[#C6A87C] transition-colors">
          <div className="h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-3">
             <div className="w-12 h-12 rounded-full border border-dashed border-[#C6A87C]/50 flex items-center justify-center text-xl">💍</div>
          </div>
          <div className="text-sm font-bold text-[#2C2C2C]">Design #{1040 + i}</div>
          <div className="flex justify-between items-center mt-auto pt-2">
            <span className="text-[10px] text-gray-400 font-bold uppercase">In Stock: {i * 5 + 2}</span>
            <span className="text-xs text-[#C6A87C] font-bold">View</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 flex justify-center">
      <div className="px-6 py-2 bg-[#2C2C2C] text-white text-xs font-bold tracking-wider rounded-full shadow-lg cursor-pointer hover:bg-black transition-colors">
        Share Catalog Link
      </div>
    </div>
  </div>
);

// --- NEW VISUAL COMPONENTS ---

const MultiCategoryHubVisual = () => {
  const categories = [
    { sym: "Au", name: "Gold", bg: "#C6A87C" },
    { sym: "Di", name: "Diamond", bg: "#1A1A1A" },
    { sym: "Ag", name: "Silver", bg: "#9CA3AF" },
    { sym: "Pt", name: "Platinum", bg: "#6B7280" },
    { sym: "Ti", name: "Titanium", bg: "#475569" },
    { sym: "Gm", name: "Gems", bg: "#059669" },
    { sym: "Sp", name: "Semi Prec.", bg: "#7C3AED" },
    { sym: "Bu", name: "Bullion", bg: "#B45309" },
  ];
  return (
    <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-8 flex flex-col shadow-2xl relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Product Hub</div>
        <div className="px-3 py-1 bg-[#C6A87C] text-white text-[10px] tracking-wider font-bold rounded-full shadow-sm uppercase">7+ Categories</div>
      </div>
      <div className="text-xl font-serif text-[#2C2C2C] mb-4">Jewellery → Necklace → Choker</div>
      <div className="text-[10px] text-gray-500 mb-4 bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm font-mono">
        SKU: <span className="text-[#C6A87C] font-bold">DMD-NK-CH-001</span> | HUID: <span className="font-bold">AB34XY</span> | 22K (916)
      </div>
      <div className="grid grid-cols-4 gap-2 flex-1">
        {categories.map((cat, i) => (
          <div key={i} className="rounded-xl flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer p-2 border border-white/50"
               style={{ backgroundColor: cat.bg + '20' }}>
            <div className="text-xl font-serif font-bold" style={{ color: cat.bg }}>{cat.sym}</div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-center mt-0.5" style={{ color: cat.bg }}>{cat.name}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-[8px] font-bold uppercase tracking-wider text-center">
        <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
          <div className="text-gray-400">Carat</div>
          <div className="text-[#2C2C2C] text-sm mt-0.5">22K</div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
          <div className="text-gray-400">Weight</div>
          <div className="text-[#2C2C2C] text-sm mt-0.5">45.5g</div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
          <div className="text-gray-400">Purity</div>
          <div className="text-[#2C2C2C] text-sm mt-0.5">916</div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
          <div className="text-gray-400">Gender</div>
          <div className="text-[#2C2C2C] text-sm mt-0.5">Unisex</div>
        </div>
      </div>
    </div>
  );
};

const PartyManagementVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl flex flex-col">
    <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase mb-6">Party Network</div>
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Buyer Party</div>
          <div className="text-sm font-bold text-[#2C2C2C] mt-1">Sharma Jewellers</div>
          <div className="text-[10px] text-gray-500 mt-0.5">GSTIN: 27AADCS1234M1Z5</div>
        </div>
        <div className="px-2 py-1 bg-green-100 text-green-700 text-[9px] font-bold rounded-full border border-green-200">✓ Approved</div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="text-[8px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">KYC Verified</div>
        <div className="text-[8px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">12 Orders</div>
      </div>
    </div>
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Seller Party</div>
          <div className="text-sm font-bold text-[#2C2C2C] mt-1">Zaveri Manufacturers</div>
          <div className="text-[10px] text-gray-500 mt-0.5">PAN: ABCDE1234F</div>
        </div>
        <div className="px-2 py-1 bg-yellow-100 text-yellow-700 text-[9px] font-bold rounded-full border border-yellow-200">⏳ In Review</div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="text-[8px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">Docs Uploaded</div>
        <div className="text-[8px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">Pending</div>
      </div>
    </div>
    <div className="mt-auto bg-gray-50 rounded-xl p-4 border border-gray-100">
      <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-3">Approval Workflow</div>
      <div className="flex items-center gap-1.5 justify-between">
        {['Draft', 'Submitted', 'In Review', 'Approved'].map((step, i) => (
          <React.Fragment key={i}>
            <div className={`text-[8px] font-bold px-2 py-1 rounded-full ${i < 2 ? 'bg-green-100 text-green-700' : i === 2 ? 'bg-[#C6A87C]/20 text-[#C6A87C]' : 'bg-gray-200 text-gray-400'}`}>
              {step}
            </div>
            {i < 3 && <div className="w-3 h-0.5 bg-gray-200 flex-shrink-0"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const QuotationVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-8 shadow-2xl flex flex-col relative overflow-hidden">
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Quotation Desk</div>
        <div className="text-lg font-serif text-[#2C2C2C] mt-1">Quick Estimate</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow border border-gray-100">
        <span className="text-lg">📋</span>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex-1">
      <div className="flex justify-between border-b border-gray-100 pb-3 mb-3">
        <div>
          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Customer</div>
          <div className="text-sm font-bold text-[#2C2C2C] mt-0.5">Mr. Rajesh Patel</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Quote #</div>
          <div className="text-sm font-mono text-[#C6A87C] font-bold mt-0.5">QT-2024-089</div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">22K Gold Necklace (45g)</span>
          <span className="font-bold text-[#2C2C2C]">₹2,79,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Diamond Studs (1.2ct)</span>
          <span className="font-bold text-[#2C2C2C]">₹85,000</span>
        </div>
        <div className="flex justify-between text-xs text-gray-400 border-t border-dashed pt-2">
          <span>Making Charges</span>
          <span>₹12,500</span>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#FAF9F6] p-3 rounded-lg border border-[#C6A87C]/20">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Estimated Total</span>
        <span className="text-xl font-black text-[#2C2C2C]">₹3,76,500</span>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3">
      <div className="h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
        📄 Download PDF
      </div>
      <div className="h-10 bg-[#C6A87C] rounded-lg flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:bg-[#b0956b] transition-colors shadow-lg shadow-[#C6A87C]/20">
        → Convert to Invoice
      </div>
    </div>
  </div>
);

const NotificationVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 p-8 shadow-2xl flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Notifications</div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
        <div className="text-white text-xs font-bold">4 New</div>
      </div>
    </div>
    <div className="space-y-3 flex-1">
      {[
        { icon: '📦', title: 'New Order Received', desc: 'Sharma Jewellers placed order #1089 — ₹4.2L', time: '2 min ago', color: 'bg-blue-500/20 border-blue-500/30', unread: true },
        { icon: '💰', title: 'Payment Confirmed', desc: 'Payment of ₹1,50,000 received for Order #1085', time: '15 min ago', color: 'bg-green-500/20 border-green-500/30', unread: true },
        { icon: '🚚', title: 'Shipment Ready', desc: 'Order #1082 packed and ready for dispatch', time: '1 hour ago', color: 'bg-orange-500/20 border-orange-500/30', unread: true },
        { icon: '✅', title: 'E-Invoice Generated', desc: 'E-Invoice synced with govt portal — INV-2024-456', time: '2 hours ago', color: 'bg-purple-500/20 border-purple-500/30', unread: false },
        { icon: '⭐', title: 'New Review Posted', desc: 'Sharma Jewellers rated you 5 stars', time: '3 hours ago', color: 'bg-yellow-500/20 border-yellow-500/30', unread: false },
      ].map((notif, i) => (
        <div key={i} className={`p-3 rounded-xl border ${notif.color} backdrop-blur-sm flex items-start gap-3 ${notif.unread ? '' : 'opacity-50'}`}>
          <div className="text-lg flex-shrink-0">{notif.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <div className="text-white text-xs font-bold">{notif.title}</div>
              {notif.unread && <div className="w-1.5 h-1.5 rounded-full bg-[#C6A87C]"></div>}
            </div>
            <div className="text-gray-400 text-[10px] mt-0.5 truncate">{notif.desc}</div>
            <div className="text-gray-600 text-[9px] mt-1">{notif.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const B2BEcommerceStoreVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 p-6 shadow-2xl flex flex-col relative overflow-hidden">
    {/* Browser Chrome */}
    <div className="bg-[#1A1A1A] rounded-xl px-4 py-2 flex items-center gap-2 mb-4">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 bg-white/10 rounded-md h-5 mx-2 flex items-center px-3">
        <span className="text-[9px] text-gray-400">🔒 dmdgold.com/b2b-store</span>
      </div>
    </div>

    {/* Store Header */}
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
      <div>
        <div className="text-[#C6A87C] text-[10px] font-bold tracking-widest uppercase">B2B eCommerce</div>
        <div className="text-lg font-serif text-[#2C2C2C]">Digital Wholesale Store</div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="relative">
          <div className="text-[9px] text-gray-500 flex items-center gap-1">❤️ <span className="font-bold">12</span></div>
        </div>
        <div className="relative">
          <div className="text-[9px] text-gray-500 flex items-center gap-1">🛒 <span className="font-bold text-[#C6A87C]">5</span></div>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#C6A87C]/10 flex items-center justify-center text-[9px]">👤</div>
      </div>
    </div>

    {/* Filter Bar */}
    <div className="flex gap-2 mb-4 overflow-hidden">
      {['All', 'Gold 22K', 'Diamond', 'Necklace', 'Rings'].map((f, i) => (
        <div key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold whitespace-nowrap ${i === 0 ? 'bg-[#C6A87C] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
          {f}
        </div>
      ))}
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-3 gap-3 flex-1 mb-4">
      {[
        { name: 'Gold Choker Set', price: '₹2.8L', tag: '22K', fav: true },
        { name: 'Diamond Studs', price: '₹85,000', tag: '1.2ct', fav: false },
        { name: 'Temple Necklace', price: '₹3.2L', tag: '22K', fav: true },
      ].map((item, i) => (
        <div key={i} className="bg-[#FAF9F6] rounded-xl p-2.5 border border-gray-100 flex flex-col group/card hover:border-[#C6A87C]/30 transition-colors cursor-pointer">
          <div className="h-16 bg-gradient-to-br from-gray-50 to-[#C6A87C]/10 rounded-lg flex items-center justify-center mb-2 relative">
            <span className="text-xl">💍</span>
            {item.fav && <div className="absolute top-1 right-1 text-red-500 text-[8px]">❤️</div>}
          </div>
          <div className="text-[9px] font-bold text-[#2C2C2C] truncate">{item.name}</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[8px] text-[#C6A87C] font-bold">{item.tag}</span>
            <span className="text-[9px] font-black text-[#2C2C2C]">{item.price}</span>
          </div>
          <div className="mt-1.5 h-5 bg-[#2C2C2C] rounded text-[7px] text-white flex items-center justify-center font-bold opacity-0 group-hover/card:opacity-100 transition-opacity">
            Add to Cart
          </div>
        </div>
      ))}
    </div>

    {/* Checkout Flow Steps */}
    <div className="bg-[#FAF9F6] rounded-xl p-3 border border-[#C6A87C]/20">
      <div className="flex items-center justify-between mb-2">
        {['Browse', 'Wishlist', 'Cart', 'Checkout', 'Track'].map((step, i) => (
          <React.Fragment key={i}>
            <div className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${i < 3 ? 'bg-[#C6A87C] text-white' : 'bg-gray-200 text-gray-400'}`}>
              {step}
            </div>
            {i < 4 && <div className={`w-4 h-0.5 ${i < 2 ? 'bg-[#C6A87C]' : 'bg-gray-200'}`}></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[8px] text-gray-500">⭐ Rate & Review sellers • 📄 Download GST invoices</div>
        <div className="text-[9px] font-bold text-[#C6A87C]">24/7 Open</div>
      </div>
    </div>
  </div>
);

// --- PRODUCT DASHBOARD VISUAL ---
const ProductDashboardVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 p-6 shadow-2xl flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <div>
        <div className="text-[#C6A87C] text-[10px] font-bold tracking-widest uppercase">Product Dashboard</div>
        <div className="text-lg font-serif text-[#2C2C2C]">Stock Overview</div>
      </div>
      <div className="flex gap-2">
        <div className="px-2 py-1 bg-gray-100 rounded-md text-[8px] font-bold text-gray-600">Grid View</div>
        <div className="px-2 py-1 bg-[#C6A87C]/10 rounded-md text-[8px] font-bold text-[#C6A87C]">All Products</div>
      </div>
    </div>
    {/* Mini product grid */}
    <div className="space-y-2 flex-1">
      {[
        { name: 'Gold Choker Set', sku: 'DMD-NK-CH-001', status: 'Visible', huid: 'AB34XY', price: '₹2.8L' },
        { name: 'Diamond Ring 1.5ct', sku: 'DMD-RG-DI-042', status: 'Hidden', huid: 'CD56WZ', price: '₹1.2L' },
        { name: 'Silver Anklet Pair', sku: 'DMD-AK-AG-019', status: 'Visible', huid: 'EF78UV', price: '₹4,500' },
        { name: 'Platinum Band', sku: 'DMD-BD-PT-007', status: 'Disabled', huid: 'GH90ST', price: '₹45,000' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5 border border-gray-100">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#C6A87C]/10 to-[#C6A87C]/20 flex items-center justify-center text-sm flex-shrink-0">💍</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-[#2C2C2C] truncate">{item.name}</div>
            <div className="text-[8px] text-gray-400 font-mono">{item.sku} · HUID: {item.huid}</div>
          </div>
          <div className="text-[9px] font-bold text-[#2C2C2C] flex-shrink-0">{item.price}</div>
          <div className={`px-1.5 py-0.5 rounded text-[7px] font-bold flex-shrink-0 ${item.status === 'Visible' ? 'bg-green-100 text-green-700' : item.status === 'Hidden' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-600'}`}>{item.status}</div>
        </div>
      ))}
    </div>
    {/* Bottom actions */}
    <div className="mt-3 flex justify-between items-center pt-3 border-t border-gray-100">
      <div className="flex gap-2">
        <div className="px-2 py-1 bg-[#2C2C2C] text-white rounded text-[8px] font-bold">Edit Selected</div>
        <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[8px] font-bold">Print Barcode</div>
      </div>
      <div className="text-[9px] text-gray-400">Showing 4 of 342 products</div>
    </div>
  </div>
);

// --- KARIGAR MANAGEMENT VISUAL ---
const KarigarVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-6 shadow-2xl flex flex-col">
    <div className="flex justify-between items-center mb-5">
      <div>
        <div className="text-[#C6A87C] text-[10px] font-bold tracking-widest uppercase">Karigar Management</div>
        <div className="text-lg font-serif text-[#2C2C2C]">Artisan Network</div>
      </div>
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow border border-gray-100 text-sm">🔨</div>
    </div>
    {/* Karigar Profile Card */}
    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-3 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-lg flex-shrink-0">👨‍🔧</div>
        <div className="flex-1">
          <div className="text-sm font-bold text-[#2C2C2C]">Ramesh Soni</div>
          <div className="text-[9px] text-gray-500">Firm: Soni Jewellery Works · Jaipur</div>
          <div className="flex gap-2 mt-1.5">
            <div className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Aadhaar ✓</div>
            <div className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">PAN ✓</div>
            <div className="text-[7px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">GST ✓</div>
          </div>
        </div>
      </div>
    </div>
    {/* Challan Summary */}
    <div className="grid grid-cols-2 gap-2 mb-3">
      <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm text-center">
        <div className="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Outward Challans</div>
        <div className="text-xl font-bold text-[#C6A87C] mt-1">23</div>
        <div className="text-[8px] text-gray-500 mt-0.5">Gold: 450g sent</div>
      </div>
      <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm text-center">
        <div className="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Inward Challans</div>
        <div className="text-xl font-bold text-emerald-600 mt-1">18</div>
        <div className="text-[8px] text-gray-500 mt-0.5">Items: 42 received</div>
      </div>
    </div>
    {/* Recent Activity */}
    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm mt-auto">
      <div className="text-[8px] text-gray-400 uppercase font-bold tracking-wider mb-2">Recent Transactions</div>
      <div className="space-y-1.5">
        <div className="flex justify-between text-[9px]"><span className="text-gray-600">Outward: 22K Gold 85g</span><span className="text-orange-600 font-bold">Sent</span></div>
        <div className="flex justify-between text-[9px]"><span className="text-gray-600">Inward: 5 Necklaces</span><span className="text-green-600 font-bold">Received</span></div>
        <div className="flex justify-between text-[9px]"><span className="text-gray-600">Invoice: ₹28,500 Labour</span><span className="text-[#C6A87C] font-bold">Paid</span></div>
      </div>
    </div>
  </div>
);

// --- BULK UPLOAD VISUAL ---
const BulkUploadVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 p-6 shadow-2xl flex flex-col">
    <div className="flex justify-between items-center mb-5">
      <div>
        <div className="text-[#C6A87C] text-[10px] font-bold tracking-widest uppercase">Bulk Upload</div>
        <div className="text-lg font-serif text-[#2C2C2C]">Batch Import</div>
      </div>
      <div className="px-3 py-1 bg-indigo-100 text-indigo-700 text-[9px] font-bold rounded-full">500+ Items</div>
    </div>
    {/* Upload Zone */}
    <div className="border-2 border-dashed border-[#C6A87C]/30 rounded-xl p-5 text-center bg-[#FAF9F6] mb-4">
      <div className="text-2xl mb-2">📁</div>
      <div className="text-sm font-bold text-[#2C2C2C]">Drop Excel / CSV File</div>
      <div className="text-[9px] text-gray-500 mt-1">or click to browse files</div>
    </div>
    {/* Progress */}
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold text-[#2C2C2C]">Uploading Products...</span>
        <span className="text-[10px] font-bold text-[#C6A87C]">78%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-[78%] h-full bg-gradient-to-r from-[#C6A87C] to-[#b0956b] rounded-full"></div>
      </div>
      <div className="flex justify-between mt-2 text-[8px] text-gray-500">
        <span>390 of 500 products imported</span>
        <span>~2 min remaining</span>
      </div>
    </div>
    {/* Summary Stats */}
    <div className="grid grid-cols-3 gap-2 mt-auto">
      <div className="bg-green-50 rounded-lg p-2 text-center border border-green-100">
        <div className="text-sm font-bold text-green-600">390</div>
        <div className="text-[7px] font-bold text-green-600 uppercase">Success</div>
      </div>
      <div className="bg-yellow-50 rounded-lg p-2 text-center border border-yellow-100">
        <div className="text-sm font-bold text-yellow-600">8</div>
        <div className="text-[7px] font-bold text-yellow-600 uppercase">Warnings</div>
      </div>
      <div className="bg-red-50 rounded-lg p-2 text-center border border-red-100">
        <div className="text-sm font-bold text-red-500">2</div>
        <div className="text-[7px] font-bold text-red-500 uppercase">Failed</div>
      </div>
    </div>
  </div>
);

// --- COLLECTIONS & CAROUSELS VISUAL ---
const CollectionsVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col">
    <div className="flex justify-between items-center mb-5">
      <div>
        <div className="text-[#C6A87C] text-[10px] font-bold tracking-widest uppercase">Collections</div>
        <div className="text-lg font-serif text-white">Digital Showroom</div>
      </div>
      <div className="px-2 py-1 bg-white/10 rounded-md text-[8px] text-gray-400 font-bold">+ New Collection</div>
    </div>
    {/* Collection Cards */}
    <div className="space-y-3 flex-1">
      {[
        { name: 'Wedding Collection 2024', items: 48, color: 'from-pink-500/20 to-rose-500/20', emoji: '💒', border: 'border-pink-500/30' },
        { name: 'Diwali Special', items: 32, color: 'from-amber-500/20 to-orange-500/20', emoji: '🪔', border: 'border-amber-500/30' },
        { name: 'Daily Wear Essentials', items: 65, color: 'from-blue-500/20 to-cyan-500/20', emoji: '✨', border: 'border-blue-500/30' },
      ].map((col, i) => (
        <div key={i} className={`bg-gradient-to-r ${col.color} rounded-xl p-4 border ${col.border} flex items-center gap-3`}>
          <div className="text-2xl flex-shrink-0">{col.emoji}</div>
          <div className="flex-1">
            <div className="text-white text-sm font-bold">{col.name}</div>
            <div className="text-gray-400 text-[9px]">{col.items} products · Active</div>
          </div>
          <div className="text-[#C6A87C] text-[9px] font-bold">View →</div>
        </div>
      ))}
    </div>
    {/* Carousel Preview */}
    <div className="mt-4 bg-white/5 rounded-xl p-3 border border-white/10">
      <div className="text-[9px] text-gray-500 mb-2 font-bold uppercase tracking-wider">Image Carousel Preview</div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`h-12 flex-1 rounded-md bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center text-sm ${i === 1 ? 'ring-1 ring-[#C6A87C]' : ''}`}>
            💎
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- ORDER & PAYMENT HISTORY VISUAL ---
const OrderHistoryVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-6 shadow-2xl flex flex-col">
    <div className="flex justify-between items-center mb-5">
      <div>
        <div className="text-[#C6A87C] text-[10px] font-bold tracking-widest uppercase">History</div>
        <div className="text-lg font-serif text-[#2C2C2C]">Orders & Payments</div>
      </div>
      <div className="flex gap-2">
        <div className="px-2 py-1 bg-white rounded-md text-[8px] font-bold text-gray-600 shadow-sm border border-gray-100">📅 Last 30 Days</div>
        <div className="px-2 py-1 bg-[#C6A87C] rounded-md text-[8px] font-bold text-white shadow-sm">Export ↓</div>
      </div>
    </div>
    {/* History Table */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex-1">
      {/* Header Row */}
      <div className="grid grid-cols-5 gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100">
        {['Order #', 'Party', 'Amount', 'Paid', 'Status'].map((h, i) => (
          <div key={i} className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">{h}</div>
        ))}
      </div>
      {/* Data Rows */}
      {[
        { id: '#1089', party: 'Sharma Jewellers', amount: '₹4.2L', paid: '₹4.2L', status: 'Delivered', color: 'text-green-600 bg-green-50' },
        { id: '#1085', party: 'Patel & Sons', amount: '₹1.8L', paid: '₹1.5L', status: 'Partial', color: 'text-yellow-600 bg-yellow-50' },
        { id: '#1082', party: 'Mumbai Gold Co.', amount: '₹6.5L', paid: '₹6.5L', status: 'Delivered', color: 'text-green-600 bg-green-50' },
        { id: '#1079', party: 'Zaveri Exports', amount: '₹2.1L', paid: '₹0', status: 'Pending', color: 'text-red-500 bg-red-50' },
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-5 gap-1 px-3 py-2 border-b border-gray-50 last:border-0">
          <div className="text-[9px] font-mono font-bold text-[#C6A87C]">{row.id}</div>
          <div className="text-[9px] text-[#2C2C2C] font-medium truncate">{row.party}</div>
          <div className="text-[9px] font-bold text-[#2C2C2C]">{row.amount}</div>
          <div className="text-[9px] text-gray-600">{row.paid}</div>
          <div className={`text-[7px] font-bold px-1.5 py-0.5 rounded ${row.color} w-fit`}>{row.status}</div>
        </div>
      ))}
    </div>
    {/* Summary Footer */}
    <div className="mt-3 grid grid-cols-3 gap-2">
      <div className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm">
        <div className="text-[8px] text-gray-400 uppercase font-bold">Total Orders</div>
        <div className="text-sm font-bold text-[#2C2C2C]">1,089</div>
      </div>
      <div className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm">
        <div className="text-[8px] text-gray-400 uppercase font-bold">Revenue</div>
        <div className="text-sm font-bold text-green-600">₹3.2Cr</div>
      </div>
      <div className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm">
        <div className="text-[8px] text-gray-400 uppercase font-bold">Pending</div>
        <div className="text-sm font-bold text-orange-500">₹8.4L</div>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const features = [
  // 🔐 ACCESS
  {
    id: 1,
    title: "Safe Login for Staff & Buyers",
    subtitle: "Verified Access",
    description: "Keep your business safe with two separate login portals. Your wholesale (B2B) buyers get their own secure login to see pricing and designs, while your retail showroom staff use a different login for daily sales. We verify every user so your designs and prices stay completely hidden from outsiders.",
    visual: <LoginVisual />
  },
  // 📦 PRODUCTS
  {
    id: 2,
    title: "Multi-Category Product Hub",
    subtitle: "Every Metal Type",
    description: "Gold, Diamond, Silver, Platinum, Titanium, Gems & Bullion — all in one unified catalogue. Full 4C diamond support, carat tracking (24K to 9K), HUID hallmarking, and auto-generated SKUs. Step-by-step product creation with guided stepper flow makes adding new items effortless.",
    visual: <MultiCategoryHubVisual />
  },
  {
    id: 3,
    title: "Add New Items Fast",
    subtitle: "Stepper-Based Creation",
    description: "A guided step-by-step flow walks you through adding any product. Select category hierarchy (Super Category → Category → Sub Category, e.g., Jewellery → Necklace → Choker), enter specifications, upload images, and review before going live. Auto-generated SKU numbers, HUID Hallmark tracking, gem & diamond specification entry, visibility controls, sales channel selection (Online/Offline/Both), and gender tags — all in one smooth stepper flow.",
    visual: <CreationVisual />
  },
  {
    id: 4,
    title: "Product Dashboard",
    subtitle: "Total Stock Control",
    description: "Your entire inventory in one powerful grid view. Edit, update, and manage all listed products. One-click show/hide visibility control for retailer-facing products. Disable live products temporarily without deleting them. Total price view with metal + gems + diamonds + making charges computed automatically. HUID Hallmark tracking (BIS compliant) and printable barcode generation for every item.",
    visual: <ProductDashboardVisual />
  },
  {
    id: 5,
    title: "Full Jewelry Details",
    subtitle: "Master Catalog",
    description: "Store every important detail about your jewelry in one place. Fully customize and fill in exactly the details you need—tailored perfectly to your unique showroom requirements, whether that's gold purity, exact 4C diamond specifications, or HUID numbers.",
    visual: <DetailsVisual />
  },
  {
    id: 6,
    title: "Collections & Carousels",
    subtitle: "Digital Showroom",
    description: "Create your own digital showroom with themed collections. Group products into curated sets — Wedding Collection, Diwali Special, Daily Wear Essentials. Build stunning image carousels to showcase your best pieces in professional sliders. Rich media presentation with collection details. No more WhatsApp catalogue sharing — give your business a website-quality look.",
    visual: <CollectionsVisual />
  },
  // 🏪 SELLING
  {
    id: 7,
    title: "B2B Digital Catalog",
    subtitle: "Wholesale Showcase",
    description: "Empower your wholesale business by freely showcasing your products to retailers. Let your B2B clients browse your latest designs, check real-time availability, and securely place orders from anywhere without exposing your pricing to the public.",
    visual: <B2BCatalogVisual />
  },
  {
    id: 8,
    title: "B2B eCommerce Platform",
    subtitle: "Your Digital Wholesale Store",
    description: "Give your retailers a premium B2B shopping experience — right from their browser. They can browse your full digital catalogue with advanced filters (category, carat, colour), save favourites to wishlists, add products to cart, and complete orders through a multi-step checkout with purchase order support. After ordering, they track deliveries in real-time, download GST-compliant invoices, rate products, review sellers, and reorder past purchases instantly.",
    visual: <B2BEcommerceStoreVisual />
  },
  {
    id: 9,
    title: "Quick Billing Desk",
    subtitle: "Invoice & Print",
    description: "Make bills for your customers very easily. You can enter your gold rate and the system automatically calculates the total price including making charges and GST. You can make an estimate first, then change it to a final bill, and print it on large A4 paper or small thermal receipt paper.",
    visual: <BillingDeskVisual />
  },
  {
    id: 10,
    title: "Quotation Desk",
    subtitle: "Quick Estimates",
    description: "When a customer asks for a rate — give them a professional digital quotation. Create detailed estimates with product selection and pricing, track all quotations in a list view, and convert to a final invoice with one click when the customer confirms.",
    visual: <QuotationVisual />
  },
  // 📋 OPERATIONS
  {
    id: 11,
    title: "Track Customer Orders",
    subtitle: "Order Management",
    description: "Never lose track of a special customer order again. Bring total transparency to your business by tracking every order's progress — from the initial advance payment, through processing and quality checks, right up to the moment it's ready for the customer.",
    visual: <TrackingVisual />
  },
  {
    id: 12,
    title: "Order & Payment History",
    subtitle: "Complete Records",
    description: "Every transaction, instantly accessible — whether it was 3 days or 3 years ago. Complete order history with filters, search, and date ranges. Payment history for each order with remaining amount visibility. Both seller and buyer views show relevant information. Excel export for offline analysis and tax filing compliance.",
    visual: <OrderHistoryVisual />
  },
  {
    id: 13,
    title: "Track Stock Instantly",
    subtitle: "Zero Discrepancy",
    description: "Know exactly how many rings, chains, or necklaces you have at any moment. Our system tracks every item from your safe vault to your display trays. When an item is sold, it gets removed from the stock automatically.",
    visual: <InventoryVisual />
  },
  {
    id: 14,
    title: "Old Gold Exchange & Purchase",
    subtitle: "Old Gold Handling",
    description: "Easily handle customers who bring in old gold to exchange or sell (URD purchases). The system helps you create the proper purchase receipt, calculates the exact melt value of the old gold based on today's rate, and automatically updates your pure fine gold balance.",
    visual: <URDVisual />
  },
  // 🤝 NETWORK
  {
    id: 15,
    title: "Party & Network Management",
    subtitle: "Your Digital Rolodex",
    description: "Manage your entire business network digitally. Register buyer and seller parties with complete KYC document upload, track approval workflows from Draft to Approved, and maintain full transaction history. Every contact, every document, every deal — systematically organized.",
    visual: <PartyManagementVisual />
  },
  {
    id: 16,
    title: "Karigar Management",
    subtitle: "Artisan Tracking",
    description: "Complete artisan management — every piece tracked, every payment logged. Create karigar profiles with personal details, firm name, Aadhaar, PAN, and GST verification. Track goods movement with Inward and Outward Challan Desk. View complete karigar invoice lists and full transaction history. From sending raw gold to receiving finished pieces — every gram is accounted for.",
    visual: <KarigarVisual />
  },
  // 📊 FINANCE
  {
    id: 17,
    title: "Easy GST Invoices",
    subtitle: "100% GST Ready",
    description: "Create correct tax invoices that follow all Indian government rules. The software automatically calculates the right CGST, SGST, or IGST for cash memos and wholesale (B2B) bills. You can also send the data directly to the government portal for E-invoicing with one click.",
    visual: <EInvoiceVisual />
  },
  {
    id: 18,
    title: "Excel Support",
    subtitle: "Tally Export",
    description: "Save time for yourself and your accountant (CA). You can quickly download all your daily sales, purchase bills, and stock reports in Excel format. These files are perfectly made so they can be directly uploaded into Tally software without any extra typing work.",
    visual: <ExcelVisual />
  },
  // 🔔 SYSTEM
  {
    id: 19,
    title: "Real-Time Notifications",
    subtitle: "Never Miss a Beat",
    description: "Stay on top of every business event with real-time notifications. New orders, payment confirmations, shipment updates, E-Invoice status — all delivered instantly. Detailed notification pages ensure you never miss an important update, whether it's a new order or a completed payment.",
    visual: <NotificationVisual />
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
        start: "top center",
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
                      ? 'opacity-100 translate-y-0 scale-100 rotate-0 pointer-events-auto' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-y-10 scale-95 pointer-events-none' 
                        : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
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

