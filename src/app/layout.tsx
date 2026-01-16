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
    default: "DMD Gold | Luxury Jewelry Software",
    template: "%s | DMD Gold",
  },
  description: "DMD Gold offers premium luxury jewelry software solutions tailored for modern jewelers. Manage inventory, sales, and customers with elegance and efficiency.",
  keywords: ["jewelry software", "luxury jewelry management", "jewelry inventory", "DMD Gold", "jewelry POS", "gold software"],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dmdgold.com",
    siteName: "DMD Gold",
    title: "DMD Gold | Luxury Jewelry Software",
    description: "Experience the ultimate in jewelry management with DMD Gold. Designed for luxury, built for efficiency.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DMD Gold Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMD Gold | Luxury Jewelry Software",
    description: "Premium software for luxury jewelry businesses.",
    images: ["/images/logo.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DMD Gold",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Premium luxury jewelry software solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "DMD Green Tech",
      "logo": "https://www.dmdgold.com/images/logo.png"
    }
  };

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
      </body>
    </html>
  );
}
