import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { siteConfig } from "@/data/siteConfig";
import styles from "@/components/ui/ArticlePage.module.css";

// TODO(owner): review and update verified pricing ranges for Hyderabad luxury car segments

export const metadata: Metadata = {
  title: "PPF Cost in Hyderabad (2026 Price Guide) | CARBON",
  description:
    "Comprehensive guide to PPF cost in Hyderabad. Compare package prices, front vs full-body protection, film grades and warranty options at CARBON Studio.",
  alternates: {
    canonical: `${siteConfig.url}/ppf-cost-in-hyderabad`,
  },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}/ppf-cost-in-hyderabad`,
    title: "PPF Cost in Hyderabad (2026 Price Guide) | CARBON",
    description:
      "Comprehensive guide to PPF cost in Hyderabad. Compare package prices, front vs full-body protection, film grades and warranty options at CARBON Studio.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF Cost in Hyderabad (2026 Price Guide) | CARBON",
    description:
      "Comprehensive guide to PPF cost in Hyderabad. Compare package prices, front vs full-body protection, film grades and warranty options at CARBON Studio.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
};

const faqs = [
  {
    question: "How much does full body PPF cost in Hyderabad?",
    answer:
      "Full body PPF installation for premium sedans and luxury SUVs in Hyderabad typically ranges from ₹X,XX,XXX to ₹X,XX,XXX depending on vehicle size, panel complexity, and whether a 5, 7, or 10-year TPU warranty tier is chosen. // TODO(owner): confirm exact starting price.",
  },
  {
    question: "Is front-end PPF cheaper than full-body protection?",
    answer:
      "Yes. A high-impact front package (bumper, complete hood, front fenders, mirrors, and headlights) covers approximately 80% of high-speed stone chip risks while costing significantly less (typically starting from ₹XX,XXX). // TODO(owner): confirm front package pricing.",
  },
  {
    question: "Why do some car detailing shops quote under ₹50,000 for full PPF?",
    answer:
      "Shops offering ultra-cheap full PPF quotes typically install thin PVC or TPH (hybrid plastic) film rather than 100% aliphatic TPU. Low-grade films turn yellow within 12 months, crack under Hyderabad's heat, and can severely tear the factory clear coat upon removal.",
  },
  {
    question: "Does PPF cost include machine paint correction and prep?",
    answer:
      "At CARBON Studio, all professional PPF packages include multi-stage chemical decontamination and single-stage machine polishing to refine the clear coat beneath the film before installation.",
  },
];

export default function PPFCostPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "PPF in Hyderabad",
        item: `${siteConfig.url}/services/ppf`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PPF Cost in Hyderabad",
        item: `${siteConfig.url}/ppf-cost-in-hyderabad`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className={styles.articlePage}>
        {/* HERO */}
        <header className={styles.hero}>
          <div className="container">
            <div className={styles.backNav}>
              <Link href="/services/ppf" className={styles.backLink}>
                ← BACK TO PPF IN HYDERABAD
              </Link>
            </div>
            <span className={styles.eyebrow}>2026 PRICING GUIDE • HYDERABAD</span>
            <h1 className={styles.title}>PPF Cost in Hyderabad (2026 Price Guide)</h1>
            <p className={styles.subtitle}>
              Everything you need to know about Paint Protection Film pricing in Telangana: coverage tiers, vehicle segment breakdowns, TPU quality grades, and how to avoid costly cheap film traps.
            </p>
            <div className={styles.metaBar}>
              <span className={styles.metaItem}>Updated for 2026</span>
              <span>•</span>
              <span className={styles.metaItem}>CARBON Studio Jubilee Hills</span>
              <span>•</span>
              <span className={styles.metaItem}>7 Min Read</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentContainer}>
              {/* KEY TAKEAWAYS */}
              <div className={styles.takeaways}>
                <h2 className={styles.takeawaysTitle}>Quick Summary: PPF Cost at a Glance</h2>
                <ul className={styles.takeawaysList}>
                  <li>
                    High-impact front packages protect 80% of road chip zones at a fraction of full-wrap cost.
                  </li>
                  <li>
                    Vehicle size, panel curves, and prep work are the three largest determinants of final pricing.
                  </li>
                  <li>
                    Genuine 100% aliphatic TPU films cost more upfront but last 5 to 10 years without yellowing.
                  </li>
                  <li>
                    Preserving original factory paint protects 15% to 30% of luxury car resale value.
                  </li>
                </ul>
              </div>

              <div className={styles.prose}>
                <h2>How Much Does Paint Protection Film Really Cost in Hyderabad?</h2>
                <p>
                  If you have recently taken delivery of a new car in Hyderabad or are planning to shield your vehicle from stone chips on the Outer Ring Road (ORR), you have likely noticed dramatic variations in quotes from different detailing studios. Prices can range anywhere from ₹35,000 for partial kits to upwards of ₹2,50,000 for full-body coverage on exotic supercars.
                </p>
                <p>
                  Understanding what drives this price gap is essential before entrusting your vehicle to any installer. Explore our core <Link href="/services/ppf">Paint Protection Film (PPF) in Hyderabad</Link> studio page to review our clean-bay methodology and technical film specifications.
                </p>

                <h2>Key Factors That Influence PPF Installation Pricing</h2>
                <p>
                  The final investment required for a professional PPF installation reflects several tangible engineering factors:
                </p>
                <ol>
                  <li>
                    <strong>Vehicle Size & Geometry:</strong> A compact luxury sedan like a BMW 3 Series or Mercedes C-Class requires significantly less square footage of film than a full-sized SUV like a Range Rover, Land Rover Defender, or Toyota Vellfire.
                  </li>
                  <li>
                    <strong>Coverage Package:</strong> Choosing between a partial frontal kit (hood, bumper, mirrors, fenders) versus complete full-body panel wrapping.
                  </li>
                  <li>
                    <strong>Film Technology & Warranty:</strong> Authentic aliphatic Thermoplastic Polyurethane (TPU) with elastomeric shape-memory topcoats and integrated UV inhibitors commands a higher price than entry-level hybrid films.
                  </li>
                  <li>
                    <strong>Edge Wrapping & Craftsmanship:</strong> Hand-tailored panel wrapping with tucked edges requires skilled labor, panel disassembly where appropriate, and 3 to 5 days of clean-bay studio time.
                  </li>
                </ol>

                <h2>Estimated PPF Price Ranges by Vehicle Segment</h2>
                <p>
                  Below is an estimated breakdown of professional TPU PPF pricing across popular vehicle classes in Hyderabad:
                </p>
              </div>

              <div className={styles.todoNotice}>
                {"// TODO(owner): review and verify exact package price ranges for your 2026 pricing cards"}
              </div>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Vehicle Segment</th>
                      <th>Front Impact Package</th>
                      <th className={styles.highlightCol}>Full Body TPU Wrap</th>
                      <th>Warranty Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Compact Luxury Sedans</strong><br />(BMW 2/3, Audi A4, Merc C-Class)</td>
                      <td>₹XX,XXX – ₹XX,XXX*</td>
                      <td className={styles.highlightCol}>₹X,XX,XXX – ₹X,XX,XXX*</td>
                      <td>5 – 7 Years</td>
                    </tr>
                    <tr>
                      <td><strong>Executive Sedans & Mid SUVs</strong><br />(BMW 5/X3, Merc E/GLC, Audi A6/Q5)</td>
                      <td>₹XX,XXX – ₹XX,XXX*</td>
                      <td className={styles.highlightCol}>₹X,XX,XXX – ₹X,XX,XXX*</td>
                      <td>5 – 10 Years</td>
                    </tr>
                    <tr>
                      <td><strong>Full-Size Flagship SUVs</strong><br />(Range Rover, Defender, X7, GLS)</td>
                      <td>₹XX,XXX – ₹XX,XXX*</td>
                      <td className={styles.highlightCol}>₹X,XX,XXX – ₹X,XX,XXX*</td>
                      <td>7 – 10 Years</td>
                    </tr>
                    <tr>
                      <td><strong>Exotics & Supercars</strong><br />(Porsche 911, Ferrari, Urus, Huracan)</td>
                      <td>Bespoke Quote</td>
                      <td className={styles.highlightCol}>₹X,XX,XXX – ₹X,XX,XXX*</td>
                      <td>10 Years / Flagship</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.prose}>
                <p>
                  <em>*Note: All prices are indicative estimates subject to paint inspection. Contact CARBON Studio for an accurate, vehicle-specific quotation.</em>
                </p>

                <h2>The Danger of Cheap PPF: Why Bargain Films Cost More</h2>
                <p>
                  Several shops in Hyderabad market &quot;full body PPF&quot; at rock-bottom prices below ₹50,000. These installations almost invariably utilize TPH (a blend of cheap PVC plastic with minor urethane plasticizers) or straight vinyl.
                </p>
                <p>
                  The risks of low-grade films include:
                </p>
                <ul>
                  <li><strong>Rapid Yellowing:</strong> Non-aliphatic resins degrade within 6 to 12 months under Telangana&apos;s intense UV rays.</li>
                  <li><strong>Zero Self-Healing:</strong> Scratches and wash swirls remain permanently etched into the film.</li>
                  <li><strong>Clear Coat Delamination:</strong> Aggressive adhesives fuse with the clear coat, ripping factory paint off panels upon attempted removal.</li>
                </ul>

                <h2>Is PPF Worth the Investment for Your Car?</h2>
                <p>
                  When factoring in the cost of high-speed stone chip repair, repainting panels, and the subsequent 15% to 30% drop in luxury car resale value due to non-original paint meter readings, professional PPF pays for itself. Learn more about our dedicated <Link href="/services/ppf">PPF in Hyderabad</Link> studio facilities or review our guide on <Link href="/ppf-vs-ceramic-coating">PPF vs Ceramic Coating</Link>.
                </p>
              </div>

              {/* FAQ BLOCK */}
              <div className={styles.faqBlock}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions About PPF Cost</h2>
                {faqs.map((faq, i) => (
                  <div key={i} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CTA BLOCK */}
              <div className={styles.ctaBox}>
                <h2 className={styles.ctaTitle}>Get an Exact PPF Quote for Your Car</h2>
                <p className={styles.ctaText}>
                  Visit CARBON Studio in Jubilee Hills, Hyderabad for a free paint inspection and customized proposal tailored to your driving habits.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/services/ppf" className={styles.primaryCta}>
                    View PPF Packages
                  </Link>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappCta}
                  >
                    WhatsApp: +91 7416393300
                  </a>
                  <a href={`tel:${siteConfig.telephoneRaw}`} className={styles.callCta}>
                    Call: +91 9959517361
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
