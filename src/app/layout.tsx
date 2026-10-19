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
  keywords: "car detailing Hyderabad, premium car detailing Hyderabad, PPF Hyderabad, paint protection film Hyderabad, ceramic coating Hyderabad, car wrapping Hyderabad, car modification Hyderabad",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/carbon-nav-logo.png`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  description: siteConfig.description,
  telephone: siteConfig.telephoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    addressCountry: siteConfig.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4253809,
    longitude: 78.3951665,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.facebookUrl,
    siteConfig.googleMapsUrl,
  ],
  priceRange: "$$$$",
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
