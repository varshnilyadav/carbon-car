import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { siteConfig } from "@/data/siteConfig";
import styles from "@/components/ui/ArticlePage.module.css";

// TODO(owner): review technical comparison points and warranty specifications

export const metadata: Metadata = {
  title: "PPF vs Ceramic Coating: Which Is Better? | CARBON",
  description:
    "Detailed comparison of PPF vs ceramic coating for cars in Hyderabad. Understand scratch resistance, stone chip protection, gloss, longevity and cost.",
  alternates: {
    canonical: `${siteConfig.url}/ppf-vs-ceramic-coating`,
  },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}/ppf-vs-ceramic-coating`,
    title: "PPF vs Ceramic Coating: Which Is Better? | CARBON",
    description:
      "Detailed comparison of PPF vs ceramic coating for cars in Hyderabad. Understand scratch resistance, stone chip protection, gloss, longevity and cost.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF vs Ceramic Coating: Which Is Better? | CARBON",
    description:
      "Detailed comparison of PPF vs ceramic coating for cars in Hyderabad. Understand scratch resistance, stone chip protection, gloss, longevity and cost.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
};

const faqs = [
  {
    question: "Can ceramic coating stop stone chips like PPF does?",
    answer:
      "No. Ceramic coatings form a microscopic sacrificial layer (around 1 to 3 microns thick). While they provide excellent chemical resistance and UV defense, they cannot absorb high-velocity physical impact from road gravel. Only high-tensile TPU PPF (~200 microns) stops stone chips.",
  },
  {
    question: "Can I install ceramic coating over Paint Protection Film?",
    answer:
      "Yes! In fact, applying ceramic coating or graphene over PPF is our flagship luxury recommendation. It pairs the physical rock-chip resistance of TPU with the ultra-slick, hydrophobic water-beading performance of a ceramic topcoat.",
  },
  {
    question: "Which lasts longer: PPF or ceramic coating?",
    answer:
      "High-grade TPU PPF typically lasts 5 to 10 years backed by manufacturer warranties against yellowing and bubbling. Professional ceramic coatings usually last 2 to 5 years depending on wash maintenance and environmental exposure.",
  },
  {
    question: "Which option is more cost-effective?",
    answer:
      "Ceramic coating requires a lower initial investment than full-body PPF. However, if your daily commute involves highway driving where stone chips are inevitable, repairing and repainting chipped panels quickly exceeds the initial savings.",
  },
];

export default function PPFVsCeramicCoatingPage() {
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
        name: "PPF vs Ceramic Coating",
        item: `${siteConfig.url}/ppf-vs-ceramic-coating`,
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
            <span className={styles.eyebrow}>COMPREHENSIVE COMPARISON • EXPERT GUIDE</span>
            <h1 className={styles.title}>PPF vs Ceramic Coating: Which Is Better for Your Car?</h1>
            <p className={styles.subtitle}>
              Compare physical impact defense with chemical nano-protection. Learn which solution matches your driving conditions, budget, and long-term ownership goals.
            </p>
            <div className={styles.metaBar}>
              <span className={styles.metaItem}>Updated for 2026</span>
              <span>•</span>
              <span className={styles.metaItem}>CARBON Detailing Lab</span>
              <span>•</span>
              <span className={styles.metaItem}>6 Min Read</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentContainer}>
              {/* KEY TAKEAWAYS */}
              <div className={styles.takeaways}>
                <h2 className={styles.takeawaysTitle}>Quick Summary: Core Distinctions</h2>
                <ul className={styles.takeawaysList}>
                  <li>
                    <strong>PPF</strong> is a thick (200+ micron) polyurethane barrier engineered for stone chips and physical scratches.
                  </li>
                  <li>
                    <strong>Ceramic Coating</strong> is a thin (1–3 micron) liquid nano-layer designed for extreme gloss, chemical resistance, and water beading.
                  </li>
                  <li>
                    Ceramic coating cannot prevent stone chips or gravel damage.
                  </li>
                  <li>
                    The ultimate protection strategy combines both: applying ceramic coating over PPF.
                  </li>
                </ul>
              </div>

              <div className={styles.prose}>
                <h2>Physical Armor vs Chemical Shield: Understanding the Core Difference</h2>
                <p>
                  When car owners in Hyderabad ask us whether they should choose Paint Protection Film or Ceramic Coating, the answer starts with defining what threats you want to eliminate.
                </p>
                <p>
                  <strong>Paint Protection Film (PPF)</strong> is physical armor. Made from high-tensile thermoplastic polyurethane (TPU), it acts like an invisible shield that absorbs stone chips, flying gravel on the Hyderabad Outer Ring Road (ORR), and parking lot scuffs. If a projectile strikes the car, the film stretches and absorbs the kinetic impact. Even better, fine scratches self-heal under heat. Explore our studio&apos;s full <Link href="/services/ppf">Paint Protection Film in Hyderabad</Link> services to see our clean-bay installation setup.
                </p>
                <p>
                  <strong>Ceramic Coating</strong>, on the other hand, is a liquid polymer formulated with silicon dioxide (SiO2). It chemically bonds to your factory clear coat, curing into a hardened, glass-like microscopic crust. It delivers intense candy-like gloss, remarkable water beading (hydrophobicity), and resistance against bird droppings, acid rain, and UV oxidation. However, because it is only 1 to 3 microns thick, it has virtually zero impact resistance against road gravel.
                </p>

                <h2>Head-to-Head Comparison Table</h2>
                <p>
                  Here is how the two leading automotive protection technologies compare side by side:
                </p>
              </div>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th className={styles.highlightCol}>Paint Protection Film (PPF)</th>
                      <th>Nano-Ceramic Coating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Material</strong></td>
                      <td className={styles.highlightCol}>Thermoplastic Polyurethane (TPU)</td>
                      <td>Liquid Silicon Dioxide (SiO2)</td>
                    </tr>
                    <tr>
                      <td><strong>Thickness</strong></td>
                      <td className={styles.highlightCol}>~175 to 200+ Microns</td>
                      <td>~1 to 3 Microns</td>
                    </tr>
                    <tr>
                      <td><strong>Stone Chip Defense</strong></td>
                      <td className={styles.highlightCol}>Comprehensive (Energy Absorbing)</td>
                      <td>None</td>
                    </tr>
                    <tr>
                      <td><strong>Self-Healing</strong></td>
                      <td className={styles.highlightCol}>Yes (Erases Swirls with Heat)</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td><strong>Water Repellency</strong></td>
                      <td className={styles.highlightCol}>High (Ceramic Topcoat)</td>
                      <td>Extreme Hydrophobic Beading</td>
                    </tr>
                    <tr>
                      <td><strong>Chemical & UV Defense</strong></td>
                      <td className={styles.highlightCol}>High</td>
                      <td>Exceptional</td>
                    </tr>
                    <tr>
                      <td><strong>Average Lifespan</strong></td>
                      <td className={styles.highlightCol}>5 to 10 Years</td>
                      <td>2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td><strong>Reversibility</strong></td>
                      <td className={styles.highlightCol}>Cleanly Removable</td>
                      <td>Abrasive Polishing Required</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.prose}>
                <h2>When Should You Choose Paint Protection Film?</h2>
                <p>
                  PPF is the clear choice if:
                </p>
                <ul>
                  <li>You drive frequently on highways, expressways, or construction-heavy corridors where stone chips are inevitable.</li>
                  <li>You own a luxury sedan, sports car, or exotic vehicle with soft factory clear coat that scratches easily.</li>
                  <li>You want to preserve 100% original factory paint to protect resale value.</li>
                  <li>You want protection against parking scuffs, key marks, and minor abrasive contact.</li>
                </ul>
                <p>
                  Review our complete <Link href="/ppf-cost-in-hyderabad">PPF Cost in Hyderabad guide</Link> for detailed package pricing across vehicle segments.
                </p>

                <h2>When Should You Choose Ceramic Coating?</h2>
                <p>
                  Ceramic coating is ideal if:
                </p>
                <ul>
                  <li>Your primary goal is intense, showroom-level gloss and optical reflection.</li>
                  <li>You want washing your car to be effortless, with dirt and road grime sliding right off.</li>
                  <li>You want defense against bird droppings, tree sap, and hard-water mineral spotting.</li>
                  <li>You are looking for a lower initial investment than a full PPF wrap.</li>
                </ul>

                <h2>The Best of Both Worlds: Ceramic Coating Over PPF</h2>
                <p>
                  At CARBON, our most recommended flagship treatment is the hybrid approach: install self-healing TPU PPF across the high-impact panels (or the full vehicle), and apply a professional ceramic or graphene coating directly over the film.
                </p>
                <p>
                  This gives you the unbeatable impact absorption of polyurethane paired with the extreme water-beading and dirt-shedding properties of nano-ceramics.
                </p>
              </div>

              {/* FAQ BLOCK */}
              <div className={styles.faqBlock}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions: PPF vs Ceramic Coating</h2>
                {faqs.map((faq, i) => (
                  <div key={i} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CTA BLOCK */}
              <div className={styles.ctaBox}>
                <h2 className={styles.ctaTitle}>Consult with Our Protection Specialists</h2>
                <p className={styles.ctaText}>
                  Visit CARBON Studio in Jubilee Hills to inspect film and coating samples side by side under studio lighting.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/services/ppf" className={styles.primaryCta}>
                    Explore PPF in Hyderabad
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
