import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesScroll from '@/components/ServicesScroll';
import Contact from '@/components/Contact'; // Reusing your high-converting form

import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Our Services',
   description: 'Explore the comprehensive services offered by DMD Gold, from inventory management to customer relationship handling.',
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
                  <span className="italic text-[#C6A87C]">Modern</span> Jewelers
               </h1>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Explore the full suite of modules designed to streamline every aspect of your business, from the back office to the showroom floor.
               </p>
            </div>
         </section>

         {/* 2. THE STICKY SCROLL SECTION */}
         <ServicesScroll />

         {/* 3. CALL TO ACTION (Reusing Contact) */}
         <div className="bg-[#FAF9F6]">
            <Contact />
         </div>

         <Footer />
      </main>
   );
}