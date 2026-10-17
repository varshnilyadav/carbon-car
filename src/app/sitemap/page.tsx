import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { services } from "@/data/siteData";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Sitemap.module.css";

export const metadata: Metadata = {
  title: "Sitemap | CARBON Automotive Studio Hyderabad",
  description: "Complete architectural sitemap of CARBON detailing studio. Explore services, PPF packages, transformations, and studio information.",
  alternates: {
    canonical: `${siteConfig.url}/sitemap`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/sitemap`,
    title: "Sitemap | CARBON Automotive Studio Hyderabad",
    description: "Complete architectural sitemap of CARBON detailing studio. Explore services, PPF packages, transformations, and studio information.",
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CARBON Website Directory & Sitemap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | CARBON Automotive Studio Hyderabad",
    description: "Complete architectural sitemap of CARBON detailing studio.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
};

const mainPages = [
  { name: "Home", href: "/", badge: "Main" },
  { name: "About Us", href: "/#about", badge: "Studio" },
  { name: "Why Choose CARBON", href: "/#why-choose-carbon", badge: "Advantage" },
  { name: "Services Overview", href: "/#services", badge: "Directory" },
  { name: "Transformation Process", href: "/#process", badge: "6-Steps" },
  { name: "The Carbon Lab", href: "/#studio", badge: "Facility" },
  { name: "Car Transformation Gallery", href: "/#transformations", badge: "16 Projects" },
  { name: "Client Reviews", href: "/#reviews", badge: "5.0 Rating" },
  { name: "Consultation & Booking", href: "/#consultation", badge: "Direct" },
  { name: "FAQ", href: "/#faq", badge: "Support" },
  { name: "Studio Location & Map", href: "/#contact", badge: "Directions" },
];

const packagesAndSolutions = [
  { name: "Essential PPF (5-Year)", href: "/services/ppf#packages", badge: "Warranty" },
  { name: "Advance PPF (7-Year)", href: "/services/ppf#packages", badge: "Most Popular" },
  { name: "Ultimate PPF (10-Year)", href: "/services/ppf#packages", badge: "Top Tier" },
  { name: "Claro PPF Proprietary Film", href: "/services/ppf#claro-ppf", badge: "In-House" },
  { name: "Nano-Ceramic 9H Shield", href: "/services/ceramic-coating", badge: "Hydrophobic" },
  { name: "Graphene Matrix Coating", href: "/services/graphene-coating", badge: "Heat Defense" },
  { name: "Multi-Stage Paint Correction", href: "/services/interior-exterior-detailing", badge: "Swirl-Free" },
  { name: "High-IR Sun Protection Films", href: "/services/sun-films", badge: "99% UV Block" },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main className={styles.sitemapPage}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>DIRECTORY & ARCHITECTURE</span>
            <h1 className={styles.title}>WEBSITE SITEMAP</h1>
            <p className={styles.subtitle}>
              Navigate the full structure of the CARBON website. Access individual service pages, packages, photo galleries, and booking channels.
            </p>
          </header>

          <div className={styles.grid}>
            {/* Column 1: Core Navigation */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h2 className={styles.categoryTitle}>MAIN SECTIONS</h2>
              </div>
              <ul className={styles.linksList}>
                {mainPages.map((item) => (
                  <li key={item.name} className={styles.linkItem}>
                    <Link href={item.href} className={styles.linkAnchor}>
                      <span className={styles.linkArrow}>→</span>
                      {item.name}
                    </Link>
                    {item.badge && <span className={styles.linkBadge}>{item.badge}</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Individual Service Pages */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h2 className={styles.categoryTitle}>AUTOMOTIVE SERVICES</h2>
              </div>
              <ul className={styles.linksList}>
                {services.map((service) => (
                  <li key={service.id} className={styles.linkItem}>
                    <Link href={`/services/${service.slug}`} className={styles.linkAnchor}>
                      <span className={styles.linkArrow}>→</span>
                      {service.title}
                    </Link>
                    <span className={styles.linkBadge}>Dedicated</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Packages & Specialized Solutions */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 className={styles.categoryTitle}>PACKAGES & TECH</h2>
              </div>
              <ul className={styles.linksList}>
                {packagesAndSolutions.map((item) => (
                  <li key={item.name} className={styles.linkItem}>
                    <Link href={item.href} className={styles.linkAnchor}>
                      <span className={styles.linkArrow}>→</span>
                      {item.name}
                    </Link>
                    {item.badge && <span className={styles.linkBadge}>{item.badge}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* XML Machine-Readable Sitemap Banner for Search Engines */}
          <div className={styles.xmlBanner}>
            <div className={styles.xmlInfo}>
              <h3>XML SITEMAP FOR SEARCH ENGINES</h3>
              <p>
                Looking for the machine-readable XML index for Google Search Console, Bing Webmaster, or SEO crawlers?
              </p>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.xmlBtn}
            >
              VIEW SITEMAP.XML ↗
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
