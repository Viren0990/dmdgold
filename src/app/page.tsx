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
  title: 'DMD Gold — #1 Jewellery Software for Billing, Inventory & B2B | India',
  description: 'DMD Gold is India\'s top jewellery software for billing, inventory, and B2B wholesale. From GST compliance to karigar tracking, this jewellery management software is built for Indian jewellers. Book a free demo today.',
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
    title: 'DMD Gold — #1 Jewellery Software for Billing, Inventory & B2B | India',
    description: 'DMD Gold is India\'s top jewellery software for billing, inventory, and B2B wholesale.',
    url: 'https://www.dmdgold.com',
    siteName: 'DMD Gold',
    type: 'website',
    images: [
      {
        url: 'https://www.dmdgold.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'DMD Gold — Jewellery Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMD Gold — #1 Jewellery Software',
    description: 'India\'s top jewellery software for billing, inventory, and B2B wholesale.',
    images: ['https://www.dmdgold.com/images/logo.png'],
  }
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