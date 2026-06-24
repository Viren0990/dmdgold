'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  Package,
  History,
  Star,
  FileText,
  Store,
} from 'lucide-react';

interface RetailerFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
}

const retailerFeatures: RetailerFeature[] = [
  {
    icon: Search,
    title: 'Digital Catalogue',
    description: 'Browse thousands of designs with advanced filters — category, carat, colour, stock status. Like Flipkart, but for B2B jewellery.',
    highlight: 'Filter by 24K, 22K, 18K & more',
  },
  {
    icon: Heart,
    title: 'Wishlist',
    description: 'Save favourite products across different sellers. Add to cart directly from wishlist when you\'re ready to order.',
    highlight: 'Multi-seller wishlists',
  },
  {
    icon: ShoppingBag,
    title: 'Cart & Checkout',
    description: 'Multi-step checkout — cart review, shipping info, order confirmation. Purchase order number support with complete price breakdown.',
    highlight: 'Amazon-like B2B checkout',
  },
  {
    icon: Package,
    title: 'Product Details',
    description: 'Full product pages with multiple images, gem specifications, metal purity, and weight info. Make informed purchase decisions.',
    highlight: 'Complete 4C specifications',
  },
  {
    icon: History,
    title: 'Order History',
    description: 'Access complete order history with dates, amounts, and status. Reorder past products easily and track trends.',
    highlight: 'Instant reorder capability',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Rate products and review sellers. Community-driven quality improvement — good sellers get good ratings.',
    highlight: 'Seller trust scores',
  },
  {
    icon: FileText,
    title: 'Invoice Access',
    description: 'View and download GST-compliant invoices for all purchases. Proper tax breakdowns for easy CA handoff and filing.',
    highlight: 'Tax-ready PDF downloads',
  },
  {
    icon: Store,
    title: 'Seller Profiles',
    description: 'Browse seller business details, read reviews from other retailers, and explore product ranges before purchasing.',
    highlight: 'Transparent marketplace',
  },
];

// Simulated mobile phone frame with feature visuals
const PhoneMockup = () => (
  <div className="relative mx-auto w-48 md:w-56">
    {/* Phone frame */}
    <div className="bg-[#1A1A1A] rounded-[2.5rem] p-2 shadow-2xl border border-gray-700">
      <div className="bg-white rounded-[2rem] overflow-hidden relative">
        {/* Status bar */}
        <div className="bg-[#FAF9F6] px-4 py-2 flex justify-between items-center">
          <div className="text-[8px] font-bold text-gray-600">9:41</div>
          <div className="w-16 h-4 bg-black rounded-full"></div>
          <div className="flex gap-0.5">
            <div className="w-3 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-1.5 h-2 bg-gray-300 rounded-sm"></div>
          </div>
        </div>

        {/* App content */}
        <div className="px-3 py-2 space-y-2 bg-[#FAF9F6] min-h-[280px]">
          {/* Search bar */}
          <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm border border-gray-100">
            <Search className="w-3 h-3 text-gray-400" />
            <span className="text-[8px] text-gray-400">Search designs...</span>
          </div>

          {/* Category pills */}
          <div className="flex gap-1.5 overflow-hidden">
            {['Gold', 'Diamond', 'Silver'].map((cat, i) => (
              <div key={i} className={`px-2 py-0.5 rounded-full text-[7px] font-bold whitespace-nowrap ${i === 0 ? 'bg-[#C6A87C] text-white' : 'bg-gray-100 text-gray-500'}`}>
                {cat}
              </div>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-1.5 shadow-sm border border-gray-50">
                <div className="h-14 bg-gradient-to-br from-gray-50 to-[#C6A87C]/5 rounded-md mb-1 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-dashed border-[#C6A87C]/40 flex items-center justify-center text-[10px]">💍</div>
                </div>
                <div className="text-[7px] font-bold text-gray-700 truncate">Design #{1040 + i}</div>
                <div className="flex justify-between items-center mt-0.5">
                  <span className="text-[6px] text-[#C6A87C] font-bold">22K Gold</span>
                  <Heart className="w-2.5 h-2.5 text-gray-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around py-1.5 border-t border-gray-100 mt-auto">
            {[Search, Heart, ShoppingBag, Store].map((NavIcon, i) => (
              <NavIcon key={i} className={`w-3.5 h-3.5 ${i === 0 ? 'text-[#C6A87C]' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Floating notification badges */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: 'spring' }}
      className="absolute -top-2 -right-4 bg-red-500 text-white text-[8px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
    >
      3
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      className="absolute top-16 -left-12 bg-white rounded-lg shadow-xl px-3 py-2 border border-gray-100"
    >
      <div className="text-[8px] text-gray-500">New Collection</div>
      <div className="text-[9px] font-bold text-[#2C2C2C]">Diwali Special ✨</div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9 }}
      className="absolute bottom-20 -right-10 bg-green-50 rounded-lg shadow-xl px-3 py-2 border border-green-200"
    >
      <div className="text-[8px] text-green-600 font-bold">Order Placed ✓</div>
      <div className="text-[7px] text-gray-500">₹4.2L • 12 items</div>
    </motion.div>
  </div>
);

export default function RetailerFeatures() {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C6A87C]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C6A87C]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase flex items-center justify-center space-x-4">
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
            <span>For Retailers</span>
            <span className="w-8 h-[1px] bg-[#C6A87C]/50"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-[#2C2C2C]">
            A <span className="italic text-[#C6A87C]">Premium</span> B2B Jewellery Buying Experience
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Your B2B buyers get a Flipkart-like shopping experience — browse catalogues, save favourites, place orders, and track deliveries, all from their device.
          </p>
        </motion.div>

        {/* Content: Features Grid + Phone Mockup */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 order-2 lg:order-1"
          >
            <PhoneMockup />
          </motion.div>

          {/* Right: Features Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {retailerFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#C6A87C]/30 hover:shadow-lg hover:shadow-[#C6A87C]/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF9F6] border border-[#C6A87C]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6A87C]/10 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#C6A87C]" />
                    </div>
                    <div>
                      <h4 className="text-[#2C2C2C] font-bold text-sm mb-1 group-hover:text-[#C6A87C] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed mb-2">
                        {feature.description}
                      </p>
                      <span className="inline-block bg-[#C6A87C]/10 text-[#C6A87C] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto bg-[#1A1A1A] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A87C]/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6A87C]/5 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
              Ready to Upgrade Your <span className="italic text-[#C6A87C]">Jewellery Business?</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Experience the power of DMD Gold's Retailer and Wholesaler editions firsthand. Get a personalized walkthrough tailored to your operations.
            </p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-demo-modal'));
              }}
              className="inline-flex items-center gap-2 bg-[#C6A87C] text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#b0956b] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#C6A87C]/20 cursor-pointer"
            >
              Book a Free Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
