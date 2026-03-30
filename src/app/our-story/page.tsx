import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Discover the journey behind DMD Gold — born from 25 years of firsthand experience in the Indian jewelry industry.',
};

export default function OurStoryPage() {
  return (
    <main className="w-full bg-[#FAF9F6]">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Subtle decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C6A87C]/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C6A87C]/5 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Our Story
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] leading-tight">
            From the <span className="italic text-[#C6A87C]">Shop Floor</span><br />
            to the Digital World
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A quarter-century of lived experience in India's jewelry trade — the dust of the road, the weight of gold, and the dream of something better.
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDER'S JOURNEY — Opening */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Visual: Image Placeholder */}
          <div className="w-full md:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 bg-gray-200 rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col items-center justify-center text-gray-400">
               <Image src="/images/pp.webp" alt="Founder" width={500} height={500} />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
              Where It All Began
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] leading-tight">
              Experienced the heart of India's jewelry trade.
            </h3>
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
              <p>
                Our founder didn't come from a tech company or a corporate boardroom. He came from behind the glass counter of a jewelry shop — a place where trust is earned in grams and carats, and where a single handshake can seal a deal worth lakhs.
              </p>
              <p>
                For over <strong className="text-[#2C2C2C]">25 years</strong>, he worked in the Indian jewelry industry, building relationships with artisans, vendors, and customers across the country. He understood the rhythm of the trade — the festivals that drive demand, the delicate art of gold-testing, the meticulous craft of keeping stock ledgers by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM — Travel and Sourcing */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
              The Problem He Lived
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] leading-tight">
              Endless travel, uncertain returns.
            </h3>
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
              <p>
                In the traditional jewelry trade, sourcing inventory meant packing a bag and boarding a train. Jewelers from tier-2 and tier-3 cities across India would travel for days to major wholesale hubs — Mumbai's Zaveri Bazaar, Rajkot's gold markets, Jaipur for gemstones — spending weeks away from their families and businesses.
              </p>
              <p>
                The process was exhausting and risky. Carrying cash through crowded stations. Negotiating prices without real-time market data. Returning home with stock that sometimes didn't match customer demand. And while they were away, their shops ran without them — bills went unsent, inventory went uncounted, and opportunities were lost.
              </p>
              <p>
                He saw it with his own eyes, felt it in his own bones. And he knew: <em className="text-[#2C2C2C] font-medium">there had to be a better way.</em>
              </p>
            </div>
          </div>

          {/* Visual: Pain Point Cards */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {[
                { icon: '🚂', title: 'Days of Travel', desc: 'Jewelers spent 3–7 days per trip travelling to wholesale hubs, often multiple times a month.' },
                { icon: '💰', title: 'Cash Risk', desc: 'Carrying lakhs of rupees in cash on public transport was dangerous but unavoidable.' },
                { icon: '📉', title: 'Blind Buying', desc: 'Without real-time data, jewelers purchased stock based on guesswork, not demand.' },
                { icon: '🏪', title: 'Unattended Shops', desc: 'While the owner travelled, the business ran on autopilot — and suffered for it.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-[#FAF9F6] rounded-2xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-sm border border-gray-50">{item.icon}</div>
                  <div>
                    <div className="text-[#2C2C2C] font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TURNING POINT */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6] to-white pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            The Turning Point
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] leading-tight">
            &ldquo;What if the market <span className="italic text-[#C6A87C]">came to us?</span>&rdquo;
          </h3>
          <div className="w-16 h-1 bg-[#C6A87C] mx-auto rounded-full" />
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
            After years of watching fellow jewelers struggle with the same cycle — travel, buy, return, manage, repeat — our founder asked a simple but revolutionary question: What if jewelers could access trusted wholesale vendors, manage their inventory, and run their billing from a single, elegant platform — without ever leaving the shop?
          </p>
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
            That question became the seed for <strong className="text-[#2C2C2C]">DMD Gold</strong>. He partnered with a team of passionate engineers who shared his vision and, together, they set out to build a platform that truly understood the jeweler's world — because it was built by someone who had lived it.
          </p>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4">The Journey</h2>
            <h3 className="text-3xl font-serif text-[#2C2C2C]">Milestones Along the Way</h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C6A87C]/20 -translate-x-1/2 hidden md:block" />

            {[
              { year: '1998', title: 'The Beginning', desc: 'Our founder opens his first jewelry shop. The ledger book is his only software.' },
              { year: '2008', title: 'A Decade In', desc: 'After 10 years in the industry, the inefficiencies become impossible to ignore. Basic spreadsheets replace handwritten entries, but they are still not enough.' },
              { year: '2015', title: 'The Vision Takes Shape', desc: 'Conversations with hundreds of fellow jewelers confirm it: the entire industry is starving for a modern, secure, all-in-one solution.' },
              { year: '2018', title: 'DMD Gold is Born', desc: 'The first version launches. Inventory tracking, billing, and GST compliance — all in one place. Early adopters call it a game-changer.' },
              { year: '2021', title: 'B2B Marketplace', desc: 'The platform expands to include a digital B2B network, connecting retailers directly with trusted wholesale vendors. The days of travel begin to end.' },
              { year: 'Today', title: '500+ Shops & Growing', desc: 'DMD Gold powers hundreds of jewelry businesses across India, processing over ₹250Cr in annual transactions with 99.9% uptime.' },
            ].map((milestone, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-serif text-[#2C2C2C] mb-2">{milestone.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-[#C6A87C] border-4 border-white shadow-lg absolute left-1/2 -translate-x-1/2 z-10" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE VISION TODAY */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left: Stats Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { number: '25+', label: 'Years of Industry Experience' },
              { number: '500+', label: 'Shops Powered' },
              { number: '10M+', label: 'Inventory Items Tracked' },
              { number: '24/7', label: 'Dedicated Support' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-serif text-[#C6A87C] mb-2">{stat.number}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
              The Vision Today
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] leading-tight">
              Technology that respects tradition.
            </h3>
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
              <p>
                DMD Gold isn't just software — it's a promise. A promise that the wisdom of generations of Indian jewelers won't be lost to outdated processes and unnecessary hardship.
              </p>
              <p>
                We believe every jeweler — whether running a single shop in a small town or managing a multi-city chain — deserves tools that are as refined and trustworthy as the gold they sell. Tools that give them their time back, their peace of mind back, and their competitive edge back.
              </p>
              <p>
                Our founder's journey from the shop floor to the tech world is the foundation of everything we build. Every feature we ship, every line of code we write, is guided by one question: <em className="text-[#2C2C2C] font-medium">&ldquo;Would this make a real jeweler's life easier?&rdquo;</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-white">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
