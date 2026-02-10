import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const DESCRIPTION =
  "Due rifugi nel cuore delle Alpi. Weekend in montagna per sciare, fare trekking e visitare cascate. Prenota su Airbnb.";

export const metadata: Metadata = {
  title: {
    template: "%s | Villa Alma",
    default: "Villa Alma — Rifugio in Montagna",
  },
  description: DESCRIPTION,
  keywords:
    "rifugio montagna, villa vacanze alpi, weekend montagna, sci alpi, trekking montagna, cascate, airbnb montagna italia",
  openGraph: {
    title: "Villa Alma — Rifugio in Montagna",
    description: DESCRIPTION,
    type: "website",
    locale: "it_IT",
    siteName: "Villa Alma",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "villa Alma — Rifugio in Montagna nelle Alpi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "villa Alma",
  description: DESCRIPTION,
  url: "https://www.villaalma.it",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via della Montagna, 12",
    addressLocality: "Località da definire",
    addressCountry: "IT",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
  },
  numberOfRooms: 2,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
