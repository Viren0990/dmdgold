import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesScroll from '@/components/ServicesScroll';
import PlatformCapabilities from '@/components/PlatformCapabilities';
import RetailerFeatures from '@/components/RetailerFeatures';

import { Metadata } from 'next';
import Link from 'next/link';
import { featurePages } from '@/lib/featurePages';

export const metadata: Metadata = {
   title: 'Features — Retailer & Wholesaler Jewellery Software',
   description: 'Explore DMD Gold\'s feature-rich jewellery software in two tailored editions — Retailer (billing, inventory, CRM, URD, karigar) and Wholesaler (KYC, cataloging, bulk management, E-invoicing, order tracking). Built for Indian jewellers.',
   alternates: {
     canonical: 'https://www.dmdgold.com/services',
   },
   keywords: ['jewellery software features', 'retailer jewellery software', 'wholesaler jewellery software', 'jewellery inventory management india', 'karigar management software', 'jewellery GST billing', 'B2B jewellery platform', 'HUID tracking software', 'jewellery POS software india', 'jewellery ERP modules'],
};

export default function ServicesPage() {
   return (
      <main className="w-full bg-white">
         <Navbar />

         {/* 1. SIMPLE HEADER HERO */}
         <section className="pt-40 pb-20 px-6 md:px-12 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto text-center">
               <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] mb-6">
                  Precision Tools for <br />
                  <span className="italic text-[#C6A87C]">Modern</span> Jewellers
               </h1>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Explore the full suite of jewellery software modules designed to streamline every aspect of your business — from inventory and billing to karigar management and B2B wholesale.
               </p>
               <nav aria-label="Feature guides" className="mt-10 flex flex-wrap justify-center gap-3">
                  {featurePages.map((p) => (
                     <Link key={p.slug} href={p.path} className="px-4 py-2 rounded-full border border-[#C6A87C]/30 bg-white text-xs font-bold tracking-wide text-[#2C2C2C] hover:border-[#C6A87C] hover:text-[#8B6220] transition-colors">
                        {p.navLabel}
                     </Link>
                  ))}
               </nav>
            </div>
         </section>

         {/* 2. THE STICKY SCROLL SECTION */}
          <ServicesScroll />

          {/* 3. PLATFORM CAPABILITIES */}
          <PlatformCapabilities />

          {/* 4. RETAILER FEATURES */}
          <RetailerFeatures />
         <Footer />
      </main>
   );
}