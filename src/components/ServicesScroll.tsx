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

const InventoryVisual = () => (
  <div className="w-full h-full bg-[#FAF9F6] rounded-3xl border border-[#C6A87C]/20 p-8 flex flex-col relative overflow-hidden shadow-2xl">
    <div className="absolute top-0 left-0 w-full h-1 bg-[#C6A87C]/30" />
    <div className="flex justify-between items-center mb-8">
      <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">Live Stock View</div>
      <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active Scanner</div>
    </div>
    <div className="grid grid-cols-4 gap-4">
       {[...Array(12)].map((_, i) => (
         <div key={i} className={`h-24 rounded-xl border flex items-center justify-center transition-all duration-500 ${i < 8 ? 'bg-[#C6A87C] border-[#C6A87C] shadow-md shadow-[#C6A87C]/20' : 'bg-white border-dashed border-gray-300'}`}>
            {i < 8 && <div className="text-white font-serif text-xl">Au</div>}
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

const DetailsVisual = () => (
  <div className="w-full h-full bg-[#1A1A1A] rounded-3xl border border-white/10 p-8 flex flex-col shadow-2xl">
    <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase mb-6">Product Specifications</div>
    <div className="flex gap-6 items-center mb-8">
      <div className="w-24 h-24 rounded-full border-2 border-[#C6A87C] border-dashed flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gray-800" />
      </div>
      <div>
        <div className="text-xl text-white font-serif">Bridal Choker Set</div>
        <div className="text-xs text-[#C6A87C] mt-1 font-mono bg-[#C6A87C]/10 inline-block px-2 py-1 rounded">HUID: ABCD56</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 flex-1">
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Purity</div>
        <div className="text-white font-medium mt-1">22K (916)</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Gross Weight</div>
        <div className="text-white font-medium mt-1">45.500 g</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Diamond Quality</div>
        <div className="text-white font-medium mt-1">VVS / E-F</div>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Making Charge</div>
        <div className="text-white font-medium mt-1">12% / gm</div>
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
           <div className="text-gray-300 font-medium">Order Placed & Advance</div>
        </div>
        <div className="flex gap-4 items-center">
           <div className="w-8 h-8 rounded-full bg-[#C6A87C] text-[#1A1A1A] font-bold flex items-center justify-center animate-pulse shadow-lg shadow-[#C6A87C]/30">2</div>
           <div className="text-white font-bold">With Karigar (Casting)</div>
        </div>
        <div className="flex gap-4 items-center opacity-30">
           <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">3</div>
           <div className="text-gray-500">Hallmarking (HUID)</div>
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
      <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium"><span>GST (3%)</span><span>₹7,350</span></div>
      <div className="flex justify-between text-xs text-green-600 font-bold mb-3 border-b border-gray-100 pb-3"><span>Festive Discount</span><span>-₹2,350</span></div>
      <div className="flex justify-between items-center text-[#2C2C2C] pt-1">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Net Payable</span>
        <span className="text-2xl font-black text-[#2C2C2C]">₹2,50,000</span>
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


// --- MAIN COMPONENT ---

const features = [
  {
    id: 1,
    title: "Safe Login for Staff & Buyers",
    subtitle: "Verified Access",
    description: "Keep your business safe with two separate login portals. Your wholesale (B2B) buyers get their own secure login to see pricing and designs, while your retail showroom staff use a different login for daily sales. We verify every user so your designs and prices stay completely hidden from outsiders.",
    visual: <LoginVisual />
  },
  {
    id: 2,
    title: "Track Stock Instantly",
    subtitle: "Zero Discrepancy",
    description: "Know exactly how many rings, chains, or necklaces you have at any moment. Our system tracks every item from your safe vault to your display trays. When an item is sold, it gets removed from the stock automatically. You can always see the exact total value of your jewelry without manual counting.",
    visual: <InventoryVisual />
  },
  {
    id: 3,
    title: "Full Jewelry Details",
    subtitle: "Master Catalog",
    description: "Store every important detail about your jewelry in one place. You can save the gold purity (like 18K, 22K, 24K), diamond quality (VVS, E-F color), exact HUID numbers required by the government, and the specific making charges for every single piece in your shop.",
    visual: <DetailsVisual />
  },
  {
    id: 4,
    title: "Add New Items Fast",
    subtitle: "Easy Uploads",
    description: "Adding new jewelry from the karigar (maker) to your system is very fast and easy. Just take a picture from your phone or tablet, type in the total weight and pure net weight, select what type of jewelry it is, and it instantly shows up in your stock ready to be sold.",
    visual: <CreationVisual />
  },
  {
    id: 5,
    title: "Old Gold Exchange & Purchase",
    subtitle: "Old Gold Handling",
    description: "Easily handle customers who bring in old gold to exchange or sell (URD purchases). The system helps you create the proper purchase receipt, calculates the exact melt value of the old gold based on today's rate, and automatically updates your pure fine gold balance.",
    visual: <URDVisual />
  },
  {
    id: 6,
    title: "Track Customer Orders",
    subtitle: "Manufacturing",
    description: "Never lose track of a special customer order. You can track the order from the day the customer gives an advance payment, see when it goes to the karigar for making, track the melting loss (ghat), and know exactly when it goes for HUID hallmarking and is ready for the customer.",
    visual: <TrackingVisual />
  },
  {
    id: 7,
    title: "Easy GST Invoices",
    subtitle: "100% GST Ready",
    description: "Create correct tax invoices that follow all Indian government rules. The software automatically calculates the right CGST, SGST, or IGST for cash memos and wholesale (B2B) bills. You can also send the data directly to the government portal for E-invoicing with one click.",
    visual: <EInvoiceVisual />
  },
  {
    id: 8,
    title: "Excel Support",
    subtitle: "Tally Export",
    description: "Save time for yourself and your accountant (CA). You can quickly download all your daily sales, purchase bills, and stock reports in Excel format. These files are perfectly made so they can be directly uploaded into Tally software without any extra typing work.",
    visual: <ExcelVisual />
  },
  {
    id: 9,
    title: "Quick Billing Desk",
    subtitle: "Invoice & Print",
    description: "Make bills for your customers very easily. The system automatically takes today's live gold rate and calculates the total price including making charges and GST. You can make an estimate first, then change it to a final bill, and print it on large A4 paper or small thermal receipt paper.",
    visual: <BillingDeskVisual />
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