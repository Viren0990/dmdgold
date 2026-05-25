'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is DMD Gold jewellery software?",
    answer: "DMD Gold is India's #1 all-in-one jewellery management software. It combines multi-category inventory management, GST-compliant billing & POS, karigar (artisan) tracking, B2B eCommerce wholesale marketplace, E-Invoice generation, HUID hallmark tracking, and much more — into a single secure platform built specifically for Indian jewellers."
  },
  {
    question: "Is DMD Gold available in Pune and across India?",
    answer: "Yes! DMD Gold is built in Pune, Maharashtra, and is available to jewellers across all of India. Whether you're running a jewellery shop in a small town or managing a multi-city chain, DMD Gold is designed to serve jewellers everywhere — from metro cities like Mumbai, Delhi, Bangalore, and Hyderabad to tier-2 and tier-3 cities."
  },
  {
    question: "Does DMD Gold support GST billing and E-Invoice?",
    answer: "Absolutely. DMD Gold supports 8 types of GST-compliant invoices including Jewellery Invoice, Metal Invoice, Diamond Invoice, URD (Old Gold Purchase), Labour Invoice, Challan, and full E-Invoice generation synced directly with the government portal. Auto CGST/SGST/IGST calculation, e-way bill generation, and Tally-ready Excel exports are all built in."
  },
  {
    question: "Can I manage karigars and artisans with DMD Gold?",
    answer: "Yes. DMD Gold has a complete Karigar Management module. You can maintain artisan profiles with Aadhaar, PAN, and GST details, track inward and outward challans, monitor ghat (gold loss), view full transaction and payment history, and manage multiple karigars across different locations — all from one dashboard."
  },
  {
    question: "Does DMD Gold have a B2B wholesale marketplace?",
    answer: "Yes. DMD Gold includes a full B2B eCommerce platform where your retailers get a Flipkart-like buying experience. They can browse your digital catalogue with advanced filters, save favourites to wishlists, add items to cart, complete multi-step checkout with purchase order support, track orders, rate & review products, and download GST-compliant invoices — all from their browser or mobile device."
  },
  {
    question: "What makes DMD Gold different from other jewellery software in India?",
    answer: "DMD Gold was built by someone with 25+ years of firsthand experience in India's jewellery trade — not by a generic IT company. This means every feature is designed around real jeweller workflows. Unlike other software, DMD Gold combines B2B wholesale eCommerce, showroom POS, karigar management, multi-category inventory (Gold, Diamond, Silver, Platinum, Titanium, Gems & Bullion), GST E-Invoicing, and HUID tracking — all in one unified platform."
  },
  {
    question: "Does DMD Gold support HUID and hallmark tracking?",
    answer: "Yes. DMD Gold has built-in HUID (Hallmark Unique Identification) tracking. Every product can be tagged with its HUID number during creation or via bulk upload. You can search, filter, and trace any piece by its HUID across your entire inventory. Barcode and QR code generation with HUID embedding is also supported."
  },
  {
    question: "How can I get a demo of DMD Gold jewellery software?",
    answer: "You can book a free, personalized demo by filling out the contact form on our website or reaching out directly via WhatsApp at +91 9371123699. Our team will walk you through every module and show you how DMD Gold can transform your jewellery business. There's no commitment required — just real value."
  },
];

const FAQAccordion = ({ item, index }: { item: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3 className="text-base md:text-lg font-semibold text-[#2C2C2C] group-hover:text-[#C6A87C] transition-colors duration-300 pr-4">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-[#C6A87C] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-500 text-sm md:text-base leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </motion.div>
  );
};

export default function FAQ() {
  // Build FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-6 md:px-12 relative z-30">
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase flex items-center justify-center space-x-4">
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
            <span>Frequently Asked Questions</span>
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
            Everything About <span className="italic text-[#C6A87C]">DMD Gold</span> Jewellery Software
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Have questions about India&apos;s leading jewellery management platform? Find your answers below.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-6 md:px-10 divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <FAQAccordion key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a
              href="https://api.whatsapp.com/send?phone=919371123699&text=Hello%20DMD%20Gold%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A87C] font-bold hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
