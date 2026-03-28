'use client';

import Link from 'next/link';
import logo from "@/images/logo.png"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] pt-20 pb-10 px-6 md:px-12 -mt-12 relative z-0">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        
        {/* COLUMN 1: BRAND */}
        <div className="lg:col-span-1 space-y-4">
            <div className="z-50 relative flex items-center gap-3">
                <div className="w-16 h-14 rounded-lg items-center justify-center">
                    <Image src={logo} alt="dd" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#C6A87C] transition-colors cursor-pointer">
                    DMD GOLD
                </div>
            </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            The digital heart of your jewelry business. Precision, security, and elegance in one platform.
          </p>
        </div>

        {/* COLUMN 2: PRODUCT */}
        <div className="space-y-4 lg:ml-8">
          <h4 className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Inventory</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Billing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
          </ul>
        </div>

        {/* COLUMN 3: COMPANY */}
        <div className="space-y-4">
          <h4 className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* COLUMN 4: CONTACT US */}
        <div className="space-y-4">
          <h4 className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest">Contact Us</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C6A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="leading-snug">Office No-01, Amaryllis Domkhel Rd, Wagholi, Pune, Maharashtra 412207</span>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0 text-[#C6A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+91 9371123699</span>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0 text-[#C6A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:info@dmdgold.com" className="hover:text-white transition-colors">info@dmdgold.com</a>
            </p>
          </div>
        </div>

        {/* COLUMN 5: CONNECT */}
        

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 text-xs">
          © {new Date().getFullYear()} DMD Gold. All rights reserved.
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-500">Systems Operational</span>
          </div>
        </div>
      </div>

    </footer>
  );
}