import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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

        {/* Global WhatsApp Floating Button */}
        <a 
          href="https://api.whatsapp.com/send?phone=919371123699&text=Hello%20DMD%20Gold%2C%20I%20would%20like%20to%20know%20more." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact DMD Gold jewellery software team on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.382 0 12.028c0 2.112.551 4.17 1.6 5.986L.045 23.951l6.101-1.601c1.761.947 3.754 1.447 5.885 1.447 6.645 0 12.032-5.384 12.032-12.029C24.063 5.382 18.676 0 12.031 0zm0 21.782c-1.841 0-3.644-.495-5.216-1.429l-.373-.221-3.877 1.018 1.036-3.777-.243-.386c-1.026-1.63-1.567-3.522-1.567-5.467 0-5.645 4.593-10.239 10.24-10.239 5.645 0 10.237 4.594 10.237 10.239 0 5.646-4.592 10.262-10.237 10.262zm5.63-7.662c-.309-.155-1.831-.904-2.115-1.008-.284-.105-.49-.155-.697.155-.207.309-.801 1.008-.98 1.213-.181.206-.359.232-.669.077-2.149-1.077-3.565-2.008-4.9-3.95-.18-.261 0-.395.155-.548.136-.134.309-.361.464-.542.155-.18.207-.309.309-.516.104-.207.051-.387-.025-.541-.078-.155-.697-1.68-.955-2.301-.252-.605-.506-.523-.697-.533-.18-.01-.387-.01-.593-.01-.207 0-.542.078-.826.387-.284.31-1.085 1.059-1.085 2.581 0 1.522 1.111 2.992 1.266 3.198.155.207 2.179 3.324 5.276 4.588 3.097 1.263 3.097.842 3.665.79.567-.052 1.831-.749 2.089-1.472.259-.724.259-1.343.181-1.472-.077-.13-.284-.207-.593-.362z"/></svg>
          <span className="absolute right-full mr-4 bg-white text-[#2C2C2C] text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
            Chat with us
          </span>
        </a>
      </body>
    </html>
  );
}
