import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMD Gold — #1 Jewellery Management Software | Book Free Demo',
  description: 'India\'s leading jewellery ERP software — GST billing, inventory management, karigar tracking, B2B wholesale & E-Invoice. Built for Indian jewellers. Book your free demo today.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.dmdgold.com/landing',
  },
  openGraph: {
    title: 'DMD Gold — #1 Jewellery Management Software | Book Free Demo',
    description: 'India\'s leading jewellery ERP — GST billing, inventory, karigar tracking, B2B wholesale & E-Invoice. Book your free demo today.',
    url: 'https://www.dmdgold.com/landing',
    type: 'website',
    images: [
      {
        url: 'https://www.dmdgold.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'DMD Gold — Jewellery Management Software',
      },
    ],
  },
};

export default function LandingRoute() {
  return <LandingPage />;
}
