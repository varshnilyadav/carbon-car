import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { siteConfig } from "@/data/siteConfig";
import styles from "@/components/ui/ArticlePage.module.css";

// TODO(owner): review luxury brand list, disassembly protocols, and warranty coverage

export const metadata: Metadata = {
  title: "PPF for Luxury & Sports Cars in Hyderabad | CARBON",
  description:
    "Specialized PPF for luxury, exotic and sports cars in Hyderabad. Dust-free clean bays, custom edge-wrapping and high-tensile TPU at CARBON Jubilee Hills.",
  alternates: {
    canonical: `${siteConfig.url}/ppf-for-luxury-cars-hyderabad`,
  },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}/ppf-for-luxury-cars-hyderabad`,
    title: "PPF for Luxury & Sports Cars in Hyderabad | CARBON",
    description:
      "Specialized PPF for luxury, exotic and sports cars in Hyderabad. Dust-free clean bays, custom edge-wrapping and high-tensile TPU at CARBON Jubilee Hills.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF for Luxury & Sports Cars in Hyderabad | CARBON",
    description:
      "Specialized PPF for luxury, exotic and sports cars in Hyderabad. Dust-free clean bays, custom edge-wrapping and high-tensile TPU at CARBON Jubilee Hills.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
};

const faqs = [
  {
    question: "Do you disassemble luxury car panels to install PPF?",
    answer:
      "We practice minimal, surgical disassembly only where strictly required and safe (such as badges, side markers, and door handles). Whenever possible, our certified technicians use precision computer-cut templates to tuck edges into panel gaps without removing bumpers or body panels.",
  },
  {
    question: "Can PPF be installed on matte or satin factory finishes?",
    answer:
      "Yes! For factory frozen or magno finishes (such as BMW Frozen Gray or Mercedes Magno Matte), we install specialized Matte PPF that perfectly matches the satin sheen while protecting against permanent stone chips, which cannot be polished out on matte paint.",
  },
  {
    question: "How long does a full PPF installation take on a supercar?",
    answer:
      "Exotic supercars and luxury flagships require between 4 to 6 business days. This allows for meticulous multi-stage decontamination, single-stage clear coat polish, bespoke panel wrapping, and a full 24-hour settling inspection before vehicle handover.",
  },
  {
    question: "Can PPF be installed on exposed carbon fiber elements?",
    answer:
      "Yes. We frequently wrap carbon fiber front splitters, rear diffusers, side skirts, and carbon roofs with optically clear TPU to prevent costly stone impact damage to delicate carbon weaves.",
  },
];

export default function PPFLuxuryCarsPage() {
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
        name: "PPF for Luxury Cars",
        item: `${siteConfig.url}/ppf-for-luxury-cars-hyderabad`,
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
            <span className={styles.eyebrow}>EXOTIC & LUXURY VEHICLE PROTECTION</span>
            <h1 className={styles.title}>PPF for Luxury & Sports Cars in Hyderabad</h1>
            <p className={styles.subtitle}>
              Why elite European marques—Porsche, Ferrari, Lamborghini, Mercedes-AMG, BMW M, and Range Rover—demand specialized dust-controlled clean-bay PPF installation.
            </p>
            <div className={styles.metaBar}>
              <span className={styles.metaItem}>Updated for 2026</span>
              <span>•</span>
              <span className={styles.metaItem}>CARBON Studio Jubilee Hills</span>
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
                <h2 className={styles.takeawaysTitle}>Why Luxury Cars Require Specialized Care</h2>
                <ul className={styles.takeawaysList}>
                  <li>
                    European waterborne clear coats are softer and highly prone to stone chipping at high speeds.
                  </li>
                  <li>
                    Exotic body curves, active aero, and carbon fiber splitters demand custom bulk hand-wrapping.
                  </li>
                  <li>
                    Dust-controlled clean bays eliminate dirt entrapment beneath optically clear films.
                  </li>
                  <li>
                    Original factory paint preservation protects up to 30% of high-end vehicle resale values.
                  </li>
                </ul>
              </div>

              <div className={styles.prose}>
                <h2>Why Luxury & Exotic Vehicles Require Specialized PPF Installation</h2>
                <p>
                  Owning a high-performance or luxury vehicle in Hyderabad is an exhilarating experience, but driving on the Outer Ring Road (ORR) or navigating busy city roads presents real hazards. Airborne road gravel, construction dust, and careless two-wheelers can chip or scuff delicate paintwork in seconds.
                </p>
                <p>
                  Modern luxury manufacturers—such as Porsche, Ferrari, Aston Martin, Lamborghini, BMW, and Mercedes-Benz—utilize environmentally compliant waterborne clear coats. While these finishes achieve stunning optical depth, they are notoriously soft compared to older solvent-based paints. A single highway run without protection can pepper your front bumper and hood with irreversible stone chips.
                </p>
                <p>
                  Discover our certified studio installation process on our primary <Link href="/services/ppf">PPF in Hyderabad</Link> service page.
                </p>

                <h2>The CARBON Difference: Surgical Standards in Jubilee Hills</h2>
                <p>
                  Installing Paint Protection Film on a luxury or exotic vehicle requires an entirely different tier of craftsmanship than standard volume shops provide:
                </p>
                <ol>
                  <li>
                    <strong>Dust-Controlled Clean Bays:</strong> Airborne dust particles are the number-one cause of bubbles and silvering beneath clear films. At CARBON Studio in Jubilee Hills, installations occur in dedicated clean bays with filtered air management and specialized high-CRI 5000K inspection lighting.
                  </li>
                  <li>
                    <strong>Bespoke Edge-Tucking:</strong> Rather than using generic pre-cut patterns that leave 2–3 mm of exposed paint around every panel border, our technicians customize patterns to wrap edges around hoods, fenders, and door seams for an invisible finish.
                  </li>
                  <li>
                    <strong>Zero Blade-on-Paint Policy:</strong> We never score or cut film directly against your clear coat. Digital plotter software and precision knifeless tape ensure your factory finish remains unblemished.
                  </li>
                  <li>
                    <strong>Minimal, Safe Disassembly:</strong> We avoid unnecessary panel removal, keeping factory clip alignments and sensor calibrations intact.
                  </li>
                </ol>

                <h2>Recommended Coverage Packages for Supercars and Flagships</h2>
                <p>
                  Depending on how you use your vehicle, we recommend one of two primary protection strategies:
                </p>
                <h3>1. Track Pack & Extended Protection</h3>
                <p>
                  Engineered for weekend drivers and spirited highway commuters. Covers the entire front bumper, complete hood, front fenders, side mirrors, rocker panels, rear wheel splash zones, and A-pillars. Review our <Link href="/ppf-cost-in-hyderabad">PPF Cost in Hyderabad price guide</Link> for segment estimates.
                </p>
                <h3>2. Comprehensive Full-Body Wrap</h3>
                <p>
                  The gold standard for supercars and flagship luxury SUVs. Every exterior painted surface—including doors, roof, quarter panels, and trunk—is wrapped in 200+ micron self-healing TPU. This delivers complete peace of mind against key scratches, parking dings, bird droppings, and UV oxidation.
                </p>

                <h2>Preserving Resale Value on the Pre-Owned Luxury Market</h2>
                <p>
                  In the luxury and exotic automotive sector, an original factory paint reading on an electronic paint meter is critical. Discerning buyers and luxury dealers routinely discount vehicles with repainted bumpers or hoods by 15% to 30%. With verified PPF installed from day one, your factory clear coat remains flawless, maximizing return on investment when upgrading.
                </p>
                <p>
                  Interested in combining physical film armor with liquid hydrophobicity? Read our detailed guide on <Link href="/ppf-vs-ceramic-coating">PPF vs Ceramic Coating</Link>.
                </p>
              </div>

              {/* FAQ BLOCK */}
              <div className={styles.faqBlock}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions for Luxury & Exotic Owners</h2>
                {faqs.map((faq, i) => (
                  <div key={i} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* CTA BLOCK */}
              <div className={styles.ctaBox}>
                <h2 className={styles.ctaTitle}>Schedule a Private Studio Consultation</h2>
                <p className={styles.ctaText}>
                  Bring your vehicle to CARBON Studio in Jubilee Hills, Hyderabad for a private inspection and tailored treatment plan.
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
                    Call: +91 74163 93300
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
