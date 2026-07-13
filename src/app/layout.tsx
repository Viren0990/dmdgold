import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ChatBot from "@/components/ChatBot";
import DemoModal from "@/components/DemoModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dmdgold.com"),
  title: {
    default: "DMD Gold — #1 Jewellery Software in India | Billing, Inventory & B2B Platform",
    template: "%s | DMD Gold",
  },
  description: "DMD Gold is India's leading jewellery management software — built in Pune for Indian jewellers. GST billing, inventory, karigar tracking, B2B wholesale, E-Invoice & more. Free demo.",
  keywords: [
    "jewellery software", "jewellery software india", "jewellery software pune",
    "jewelry software", "dmd gold", "dmd", "gold software india",
    "jewelry billing software", "jewellery billing software india",
    "karigar management software", "jewellery inventory management",
    "jewellery shop software", "jewellery accounting software",
    "B2B jewellery platform india", "jewellery GST billing",
    "HUID tracking software", "gold shop software pune",
    "jewellery ERP india", "ornament software",
    "jewelry POS", "multi-category jewelry management",
    "GST jewelry invoice", "E-Invoice jewelry",
    "jewelry quotation", "bulk jewelry upload",
    "diamond 4C software", "silver platinum titanium jewelry",
    "jewelry order management", "party management jewelry",
    "jewellery software for retailers", "gold billing software",
  ],
  authors: [{ name: "DMD Green Tech" }],
  creator: "DMD Green Tech",
  publisher: "DMD Gold",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "en-IN": "https://www.dmdgold.com",
      "en-US": "https://www.dmdgold.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dmdgold.com",
    siteName: "DMD Gold",
    title: "DMD Gold — #1 Jewellery Software in India | Billing, Inventory & B2B",
    description: "India's leading jewellery management software. GST billing, inventory, karigar tracking, B2B wholesale, E-Invoice & more. Built in Pune for Indian jewellers.",
    images: [
      {
        url: "https://www.dmdgold.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DMD Gold — India's #1 Jewellery Software for Billing, Inventory & B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMD Gold — #1 Jewellery Software in India",
    description: "India's leading jewellery management software. GST billing, inventory, karigar tracking, B2B wholesale & more. Built in Pune.",
    images: ["https://www.dmdgold.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DMD Gold",
      "alternateName": "DMD Green Tech",
      "url": "https://www.dmdgold.com",
      "logo": "https://www.dmdgold.com/images/logo.png",
      "description": "India's leading jewellery management software — built in Pune for Indian jewellers.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9371123699",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No-01, Amaryllis Domkhel Rd, Wagholi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412207",
        "addressCountry": "IN"
      },
      "sameAs": []
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DMD Gold",
      "image": "https://www.dmdgold.com/images/logo.png",
      "url": "https://www.dmdgold.com",
      "telephone": "+91-9371123699",
      "email": "info@dmdgold.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No-01, Amaryllis Domkhel Rd, Wagholi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412207",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5804,
        "longitude": 73.9822
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DMD Gold",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "India's #1 jewellery management software. Multi-category inventory, GST-compliant billing & POS, karigar tracking, B2B wholesale marketplace, E-Invoice, HUID tracking — all-in-one platform built in Pune for Indian jewellers.",
      "url": "https://www.dmdgold.com",
      "publisher": {
        "@type": "Organization",
        "name": "DMD Green Tech",
        "logo": "https://www.dmdgold.com/images/logo.png"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.dmdgold.com/plans"
      },
      "featureList": [
        "Multi-category jewellery inventory management",
        "GST-compliant billing & POS",
        "Karigar / artisan management",
        "B2B eCommerce wholesale marketplace",
        "E-Invoice & E-Way bill generation",
        "HUID hallmark tracking",
        "Diamond 4C specifications",
        "Quotation desk with invoice conversion",
        "Excel & Tally export",
        "Real-time notifications",
        "Mobile app access"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DMD Gold",
      "url": "https://www.dmdgold.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.dmdgold.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Head */}
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8NJD65X');`,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1004810829136849');
fbq('track', 'PageView');`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YJ83ECFN0Z`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YJ83ECFN0Z');
            `,
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8NJD65X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1004810829136849&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ChatBot />
        <DemoModal />
      </body>
    </html>
  );
}
