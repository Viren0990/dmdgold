import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueStatement from '@/components/ValueStatement';
import Features from '@/components/Features';
import PlatformCapabilities from '@/components/PlatformCapabilities';
import RetailerFeatures from '@/components/RetailerFeatures';
import Compliance from '@/components/Compliance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMD Gold Premier Jewelry Management Solution',
  description: 'Discover DMD Gold, the ultimate software for luxury jewelry businesses. Multi-category product management, GST-compliant invoicing, karigar tracking, and B2B wholesale — all in one platform.',
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <ValueStatement />
      <Features />
      <PlatformCapabilities />
      <RetailerFeatures />
      <Compliance />
      <Contact />
      <Footer />
    </main>
  );
}