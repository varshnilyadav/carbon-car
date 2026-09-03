import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
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
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
