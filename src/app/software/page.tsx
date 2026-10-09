import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DMD Gold Jewellery Software — Built by a Jeweller | Book Free Demo',
  description: 'Looking for the best jewellery software? DMD Gold is jewellery software built by a jeweller and trusted by 500+ shops. Manage GST billing, inventory, karigar tracking, and B2B wholesale. Book your free demo today.',
  alternates: {
    canonical: 'https://www.dmdgold.com/software',
  },
  openGraph: {
    title: 'DMD Gold Jewellery Software — Built by a Jeweller | Book Free Demo',
    description: 'Looking for the best jewellery software? DMD Gold is jewellery software built by a jeweller and trusted by 500+ shops. Manage GST billing, inventory, karigar tracking, and B2B wholesale. Book your free demo today.',
    url: 'https://www.dmdgold.com/software',
    type: 'website',
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
