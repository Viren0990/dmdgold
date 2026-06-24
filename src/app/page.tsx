import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueStatement from '@/components/ValueStatement';
import Features from '@/components/Features';
import Compliance from '@/components/Compliance';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMD Gold — Jewellery Software for Billing, Inventory & B2B | India',
  description: 'DMD Gold is India\'s #1 jewellery management software. Multi-category inventory, GST-compliant billing & POS, karigar tracking, B2B wholesale marketplace, E-Invoice — all-in-one platform built in Pune for Indian jewellers. Book a free demo today.',
  alternates: {
    canonical: 'https://www.dmdgold.com',
  },
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <ValueStatement />
      <Features />
      <Compliance />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}