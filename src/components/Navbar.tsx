'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/images/logo.png"
import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';

const navLinks = [
   { name: 'Home', href: '/'},
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();

  // Handle Entrance Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when mobile menu or popup is open
  useEffect(() => {
    if (isMobileMenuOpen || isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isPopupOpen]);

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 w-full z-50 
          border-b border-[#C6A87C]/30 
          backdrop-blur-md bg-white/70
          will-change-transform 
          transition-all duration-700 ease-out
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex justify-between items-center">
          
          {/* 1. LOGO */}
          <Link href="/" className="z-50 relative flex items-center gap-3">
            <div className="w-14 h-12 rounded-lg items-center justify-center">
              <Image src={logo} alt="dd" />
            </div>
            <div className="text-2xl font-serif font-bold text-[#2C2C2C] tracking-widest hover:text-[#C6A87C] transition-colors cursor-pointer">
              DMD GOLD
            </div>
          </Link>

          {/* 2. DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`
                  text-xs font-bold uppercase tracking-widest transition-colors duration-300
                  ${pathname === link.href ? 'text-[#C6A87C]' : 'text-[#2C2C2C] hover:text-[#C6A87C]'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* 3. DESKTOP CTA (Hidden on Mobile) */}
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="hidden md:block border border-[#C6A87C] px-6 py-2 rounded-full text-xs font-bold text-[#C6A87C] uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all cursor-pointer"
          >
            Book Demo
          </button>

          {/* 4. MOBILE HAMBURGER TOGGLE */}
          <button 
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`h-0.5 bg-[#2C2C2C] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2 bg-[#C6A87C]' : 'w-8'}`} />
            <span className={`h-0.5 bg-[#2C2C2C] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`} />
            <span className={`h-0.5 bg-[#2C2C2C] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2 bg-[#C6A87C]' : 'w-4'}`} />
          </button>

        </div>
      </nav>

      {/* 5. MOBILE MENU OVERLAY */}
      <div 
        className={`
          fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif font-medium text-[#2C2C2C] hover:text-[#C6A87C] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        
        <div className="w-12 h-px bg-[#C6A87C]/30 my-4" />

        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            setTimeout(() => setIsPopupOpen(true), 300); // slight delay for smooth transition
          }} 
          className="bg-[#2C2C2C] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#C6A87C] transition-all shadow-lg cursor-pointer"
        >
          Book Demo
        </button>
      </div>

      {/* 6. BOOKING POPUP OVERLAY */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-left">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm cursor-pointer"
             onClick={() => setIsPopupOpen(false)}
           />
           
           {/* Popup Content */}
           <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
              {/* Form Side */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto scrollbar-hide">
                <div className="flex justify-between items-start mb-8">
                   <div>
                     <h3 className="text-3xl font-serif text-[#2C2C2C]">Book a Demo</h3>
                     <p className="text-gray-500 mt-2">See how DMD Gold can transform your business.</p>
                   </div>
                   <button 
                     onClick={() => setIsPopupOpen(false)} 
                     className="text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer"
                   >
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
                </div>
                <ContactForm />
              </div>
              
              {/* Direct Contact Side */}
              <div className="md:w-[40%] bg-[#FAF9F6] p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
                 <h4 className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest mb-6">Contact Us Directly</h4>
                 <div className="space-y-8 text-sm text-[#2C2C2C]">
                    <div>
                       <div className="font-bold mb-2 flex items-center gap-2">
                         <span className="text-[#C6A87C] text-lg">📍</span> Address
                       </div>
                       <div className="text-gray-500 leading-snug">Office No-01, Amaryllis Domkhel Rd,<br />Wagholi, Pune, Maharashtra 412207</div>
                    </div>
                    <div>
                       <div className="font-bold mb-2 flex items-center gap-2">
                         <span className="text-[#C6A87C] text-lg">📞</span> Phone
                       </div>
                       <div className="text-gray-500 font-medium">+91 9371123699</div>
                    </div>
                    <div>
                       <div className="font-bold mb-2 flex items-center gap-2">
                         <span className="text-[#C6A87C] text-lg">✉️</span> Email
                       </div>
                       <a href="mailto:info@dmdgold.com" className="text-[#C6A87C] font-medium hover:underline transition-colors">info@dmdgold.com</a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </>
  );
}