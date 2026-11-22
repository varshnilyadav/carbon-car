import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/ui/FloatingContact";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CarbonTextureTracker from "@/components/motion/CarbonTextureTracker";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CARBON — Automotive Transformation Studio Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

// TODO(owner): Add aggregateRating only if it matches confirmed Google reviews count and score
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/carbon-nav-logo.png`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  description: siteConfig.description,
  telephone: siteConfig.telephoneRaw,
  hasMap: siteConfig.googleMapsUrl,
  areaServed: {
    "@type": "City",
    name: siteConfig.areaServed.name,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: siteConfig.hours.openingHoursSpecification,
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.facebookUrl,
    siteConfig.googleMapsUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <SmoothScroll>
          <CarbonTextureTracker />
          <Preloader />
          {children}
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
