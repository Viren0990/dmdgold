'use client';

import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white -mt-12 z-40 py-24 px-6 md:px-12 shadow-[0_-50px_100px_rgba(0,0,0,0.1)] scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-8">
           <div>
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Get Started
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] leading-tight">
              Ready to <span className="italic text-[#C6A87C]">Transform</span> Your Jewelry Business?
            </h3>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Book a personalized demo with our experts.
          </p>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="flex-1 bg-[#FAF9F6] p-8 md:p-12 rounded-3xl border border-[#C6A87C]/10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}