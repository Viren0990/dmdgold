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

        {/* Global WhatsApp Floating Button */}
        <a 
          href="https://api.whatsapp.com/send?phone=919371123699&text=Hello%20DMD%20Gold%2C%20I%20would%20like%20to%20know%20more." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
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
