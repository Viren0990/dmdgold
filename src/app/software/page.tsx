import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DMD Gold #1 Jewellery Software in India | Book Free Demo',
  description: 'Looking for the best jewellery software? DMD Gold is India\'s leading jewellery software and ERP solution. Manage GST billing, inventory, karigar tracking, and B2B wholesale. Book your free demo today.',
  alternates: {
    canonical: 'https://www.dmdgold.com/software',
  },
  openGraph: {
    title: 'DMD Gold #1 Jewellery Software in India | Book Free Demo',
    description: 'Looking for the best jewellery software? DMD Gold is India\'s leading jewellery software and ERP solution. Manage GST billing, inventory, karigar tracking, and B2B wholesale. Book your free demo today.',
    url: 'https://www.dmdgold.com/software',
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
  return (
    <>
      {/* Google tag (gtag.js) event */}
      <Script id="gtag-event-lead" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'lead ganaretions', {
              // <event_parameters>
            });
          }
        `}
      </Script>
      <LandingPage />
    </>
  );
}
