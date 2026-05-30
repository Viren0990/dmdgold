import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ChatBot from "@/components/ChatBot";

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
    canonical: "https://www.dmdgold.com",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ChatBot />


      </body>
    </html>
  );
}
