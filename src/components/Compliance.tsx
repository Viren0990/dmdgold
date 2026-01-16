'use client';

import React from 'react';

const CheckIcon = () => (
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C6A87C]/20 flex items-center justify-center mt-1">
    <svg className="w-3 h-3 text-[#C6A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default function Compliance() {
  return (
    <section className="w-full bg-[#1A1A1A] py-16 md:py-20 px-6 md:px-12 -mt-12 relative z-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 pb-8">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1 space-y-6 z-10 w-full">
          <div>
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Uncompromising Security
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Compliance is <br />
              <span className="italic text-[#C6A87C]">Always On</span>
            </h3>
          </div>
          
          <p className="text-gray-400 text-base leading-relaxed max-w-lg">
            Navigate the complexities of the jewelry trade with confidence. 
            DMD Gold automates your statutory requirements, ensuring you remain 
            compliant without lifting a finger.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex gap-3">
              <CheckIcon />
              <div>
                <h4 className="text-white font-medium text-base">HUID & Hallmark Integration</h4>
                <p className="text-gray-500 text-sm">Seamless syncing with BIS portal for transparency.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckIcon />
              <div>
                <h4 className="text-white font-medium text-base">GST & e-Invoicing</h4>
                <p className="text-gray-500 text-sm">Automated tax calculations and e-way bill generation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckIcon />
              <div>
                <h4 className="text-white font-medium text-base">Vendor Data Validation</h4>
                <p className="text-gray-500 text-sm">Real-time MSME and PAN verification.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONNECTED NETWORK VISUAL (Hidden on Mobile) */}
        {/* 'hidden md:flex' ensures this entire block vanishes on small screens */}
        <div className="hidden md:flex flex-1 w-full relative h-[400px] items-center justify-center mt-0">
          
          {/* 1. BACKGROUND GLOW */}
          <div className="absolute w-[300px] h-[300px] bg-[#C6A87C] rounded-full blur-[100px] opacity-[0.08]" />

          {/* 2. CONNECTING LINES (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="70%" y1="20%" x2="50%" y2="50%" stroke="#C6A87C" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="#C6A87C" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="70%" y1="20%" x2="25%" y2="80%" stroke="#C6A87C" strokeWidth="1" strokeOpacity="0.1" />
          </svg>

          {/* 3. CARD 1: HUID READY (Top Right) */}
          <div className="absolute top-4 right-10 bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl w-56 shadow-2xl transform hover:-translate-y-1 transition-transform duration-500">
            <div className="text-[#C6A87C] text-[0.65rem] font-bold tracking-widest uppercase mb-2">Verified</div>
            <div className="text-xl font-serif text-white mb-1">HUID Ready</div>
            <div className="text-xs text-gray-400">BIS Portal Connected</div>
          </div>

          {/* 4. CARD 2: SYSTEM STATUS (Bottom Left) */}
          <div className="absolute bottom-4 left-6 bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl w-60 shadow-2xl z-10 transform hover:-translate-y-1 transition-transform duration-500 delay-75">
             <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <div className="text-[#C6A87C] text-[0.65rem] font-bold tracking-widest uppercase">System Status</div>
             </div>
            <div className="text-lg font-serif text-white mb-2">100% Compliant</div>
            <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#C6A87C]"></div>
            </div>
          </div>

          {/* 5. CARD 3: ENCRYPTED VAULT (Center / Floating) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C6A87C]/10 border border-[#C6A87C]/30 backdrop-blur-md p-4 rounded-xl w-40 shadow-2xl z-20 transform hover:scale-105 transition-transform duration-500 text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-6 h-6 text-[#C6A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-sm font-bold text-white mb-0.5">Encrypted</div>
            <div className="text-[0.65rem] text-gray-300">256-bit Security</div>
          </div>

        </div>

      </div>
    </section>
  );
}