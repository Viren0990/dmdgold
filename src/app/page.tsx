import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Compliance from '@/components/Compliance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMD Gold Premier Jewelry Management Solution',
  description: 'Discover DMD Gold, the ultimate software for luxury jewelry businesses. streamline operations and elevate customer experience.',
};

export default function Home() {
  return (
    <main className="relative w-full bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <Features />
      <Compliance />
      <Contact />
      <Footer />
    </main>
  );
}