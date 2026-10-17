import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/ui/FloatingContact";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CarbonTextureTracker from "@/components/motion/CarbonTextureTracker";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CARBON | Premium Car Detailing, PPF, Ceramic Coating & Performance in Hyderabad",
  description: "Carbon is Hyderabad's automotive transformation studio specializing in PPF, ceramic coating, detailing, wrapping, bodykits, restoration, paint and performance upgrades.",
  keywords: "car detailing Hyderabad, premium car detailing Hyderabad, PPF Hyderabad, paint protection film Hyderabad, ceramic coating Hyderabad, car wrapping Hyderabad, car modification Hyderabad",
  openGraph: {
    title: "CARBON | Automotive Transformation Studio",
    description: "Hyderabad's premium automotive transformation studio.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
