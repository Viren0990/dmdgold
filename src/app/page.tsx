import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ValueStatement from '@/components/ValueStatement';
import FounderNote from '@/components/FounderNote';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import Compliance from '@/components/Compliance';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMD Gold — Jewellery Software for Billing, Inventory & B2B | Built by a Jeweller',
  description: 'DMD Gold is jewellery software for billing, inventory, karigar tracking and B2B wholesale orders — built by a jeweller, for jewellers. Trusted by 500+ shops. From ₹6,000/year. Book a free demo.',
  keywords: [
    'jewellery software',
    'jewellery software india',
    'jewellery management software',
    'jewellery billing software',
    'jewellery erp'
  ],
  alternates: {
    canonical: 'https://www.dmdgold.com',
  },
  openGraph: {
    title: 'DMD Gold — Jewellery Software for Billing, Inventory & B2B | Built by a Jeweller',
    description: 'Billing, stock, karigars and wholesale orders in one software. Built by a jeweller, for jewellers. Trusted by 500+ shops.',
    url: 'https://www.dmdgold.com',
    siteName: 'DMD Gold',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMD Gold — Jewellery Software Built by a Jeweller',
    description: 'Billing, stock, karigars and wholesale orders in one software. Trusted by 500+ jewellery shops.',
  }
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ValueStatement />
      <FounderNote />
      <Features />
      <Testimonials />
      <Compliance />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}