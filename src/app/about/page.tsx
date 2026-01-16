import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about DMD Gold and our mission to revolutionize the luxury jewelry industry with cutting-edge software.',
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FAF9F6]">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Our Story
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] leading-tight">
            Bridging the Gap Between <br />
            <span className="italic text-[#C6A87C]">Tradition</span> & Technology
          </h1>
        </div>
      </section>

      {/* 2. THE MISSION (Split Screen) */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl">
            {/* You can replace this gray div with an actual <img> later */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-transparent opacity-20" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-xs uppercase tracking-widest mb-2">Established 2018</div>
              <div className="text-2xl font-serif">Built for Jewelers, by Jewelers.</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-3xl font-serif text-[#2C2C2C]">
              We saw a problem in the showroom.
            </h3>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                The jewelry industry is built on trust and precision. Yet, the software running it was often clunky, outdated, and disconnected. Jewelers were spending more time fighting with spreadsheets than serving their customers.
              </p>
              <p>
                We built DMD Gold to change that. We wanted a system that was as elegant as the products it managed—fast, beautiful, and secure.
              </p>
              <p>
                Today, we power hundreds of showrooms across the country, helping them track inventory with RFID precision and manage billing with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST SIGNALS (Glass Strip) */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#C6A87C]">500+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Showrooms</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#C6A87C]">10M+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Inventory Items</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#C6A87C]">₹250Cr</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Transactions/Yr</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#C6A87C]">99.9%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Uptime</div>
          </div>
        </div>
      </section>

      {/* 4. VALUES GRID */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-[#2C2C2C]">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-[#C6A87C]/10 rounded-full flex items-center justify-center text-[#C6A87C] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h4 className="text-xl font-serif text-[#2C2C2C] mb-3">Security First</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We understand the value of your data. We use bank-grade encryption to ensure your business secrets stay secret.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-[#C6A87C]/10 rounded-full flex items-center justify-center text-[#C6A87C] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-xl font-serif text-[#2C2C2C] mb-3">Speed & Efficiency</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Time is money. Our software is optimized to load instantly, scan inventory in seconds, and bill customers in moments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-[#C6A87C]/10 rounded-full flex items-center justify-center text-[#C6A87C] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h4 className="text-xl font-serif text-[#2C2C2C] mb-3">Dedicated Support</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't disappear after the sale. Our support team is available to help you navigate GST updates, new features, and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="bg-white">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}