'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/images/logo.png"
import { usePathname } from 'next/navigation';

const navLinks = [
   { name: 'Home', href: '/'},
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle Entrance Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
          <Link href="/#contact" className="hidden md:block">
            <button className="border border-[#C6A87C] px-6 py-2 rounded-full text-xs font-bold text-[#C6A87C] uppercase tracking-widest hover:bg-[#C6A87C] hover:text-white transition-all">
              Book Demo
            </button>
          </Link>

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

        <Link 
          href="/#contact"
          onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
          className="bg-[#2C2C2C] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#C6A87C] transition-all shadow-lg"
        >
          Book Demo
        </Link>
      </div>
    </>
  );
}