import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ServiceCard } from "@/components/ui/ServiceCard";
import ServiceGallery from "@/components/ui/ServiceGallery";
import PPFPackages from "@/components/sections/PPFPackages";
import ClaroPPFSection from "@/components/sections/ClaroPPFSection";
import PPFDeepDive from "@/components/sections/PPFDeepDive";
import ServiceFAQSection from "@/components/sections/ServiceFAQ";
import { services } from "@/data/siteData";
import { siteConfig } from "@/data/siteConfig";
import styles from "./ServicePage.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const pageUrl = `${siteConfig.url}/services/${slug}`;
  const imageUrl = `${siteConfig.url}${service.image}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 1000,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services (exclude current service, take up to 3)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.slug === "ppf" ? "Paint Protection Film Installation" : service.title,
    description: service.shortDescription,
    url: `${siteConfig.url}/services/${slug}`,
    image: `${siteConfig.url}${service.image}`,
    provider: {
      "@type": "AutomotiveBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.telephoneRaw,
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
  };

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
        name: "Services",
        item: `${siteConfig.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/services/${slug}`,
      },
    ],
  };

  const serviceFaqJsonLd = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceFaqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqJsonLd) }}
        />
      )}
      <Navbar />
      <main className={styles.main}>
        {/* Service Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src={service.image}
              alt={`${service.title} at CARBON - The Detailing Studio Hyderabad`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.backNav}>
              <Link href="/#services" className={styles.backLink}>
                ← BACK TO SERVICES
              </Link>
            </div>
            <span className={styles.eyebrow}>CARBON SERVICE</span>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introLeft}>
                <h2>ABOUT THIS SERVICE</h2>
              </div>
              <div className={styles.introRight}>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.recommended}>
                  <span className={styles.recommendedLabel}>IDEAL FOR:</span>
                  <span>{service.recommendedFor}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Picture Gallery Space on Every Service Page */}
        <ServiceGallery
          images={service.images}
          serviceTitle={service.title}
        />

        {/* PPF Specific Sections: Deep Dive, Packages and Claro PPF */}
        {service.slug === "ppf" && (
          <>
            <PPFDeepDive />
            <PPFPackages />
            <ClaroPPFSection />
          </>
        )}

        {/* Contextual cross-service link to PPF on all other service pages */}
        {service.slug !== "ppf" && (
          <section className={styles.crossLinkSection}>
            <div className="container">
              <div className={styles.crossLinkBox}>
                <div className={styles.crossLinkContent}>
                  <span className={styles.crossLinkBadge}>MAXIMUM PAINT ARMOR</span>
                  <h2 className={styles.crossLinkTitle}>Looking for Ultimate Stone Chip Defense?</h2>
                  <p className={styles.crossLinkText}>
                    {service.slug === "color-ppf" && (
                      <>Looking for optical crystal-clear protection instead of color styling? Explore our self-healing <Link href="/services/ppf" className={styles.crossLinkAnchor}>Paint Protection Film (PPF)</Link> installations in Hyderabad.</>
                    )}
                    {service.slug === "ceramic-coating" && (
                      <>Liquid coatings deliver intense gloss, but cannot stop rock chips. Protect high-impact panels with <Link href="/services/ppf" className={styles.crossLinkAnchor}>PPF in Hyderabad</Link> before applying your ceramic coating.</>
                    )}
                    {service.slug === "graphene-coating" && (
                      <>For dual-layer armor against heat and road debris, combine your coating with our certified <Link href="/services/ppf" className={styles.crossLinkAnchor}>Paint Protection Film</Link> packages.</>
                    )}
                    {service.slug !== "color-ppf" && service.slug !== "ceramic-coating" && service.slug !== "graphene-coating" && (
                      <>Protect your vehicle&apos;s factory finish with self-healing, optically clear <Link href="/services/ppf" className={styles.crossLinkAnchor}>PPF in Hyderabad</Link> at our dedicated Jubilee Hills clean-bay studio.</>
                    )}
                  </p>
                </div>
                <Link href="/services/ppf" className={styles.crossLinkBtn}>
                  View PPF Studio Services →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Benefits & Included */}
        <section className={styles.detailsSection}>
          <div className="container">
            <div className={styles.detailsGrid}>
              <div className={styles.detailBox}>
                <h2 className={styles.detailTitle}>KEY BENEFITS</h2>
                <ul className={styles.detailList}>
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailBox}>
                <h2 className={styles.detailTitle}>WHAT&apos;S INCLUDED</h2>
                <ul className={styles.detailList}>
                  {service.included.map((item, i) => (
                    <li key={i}>
                      <span className={styles.bullet}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.processSection}>
          <div className="container">
            <div className={styles.processHeader}>
              <h2 className={styles.sectionTitle}>THE PROCESS</h2>
              <div className={styles.headerLine}></div>
            </div>

            <div className={styles.processGrid}>
              {service.process.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <div className={styles.stepNumber}>0{i + 1}</div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className={styles.relatedSection}>
            <div className="container">
              <div className={styles.relatedHeader}>
                <h2 className={styles.sectionTitle}>EXPLORE RELATED SERVICES</h2>
                <div className={styles.headerLine}></div>
              </div>
              <div className={styles.relatedGrid}>
                {relatedServices.map((rel) => (
                  <div key={rel.id}>
                    <ServiceCard
                      slug={rel.slug}
                      title={rel.title}
                      description={rel.shortDescription}
                      image={rel.image}
                      imageAlt={rel.imageAlt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service FAQs (Rendered in SSR HTML before CTA) */}
        <ServiceFAQSection faqs={service.faqs} serviceTitle={service.title} />

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2>READY TO TRANSFORM YOUR CAR?</h2>
            <p>Schedule a consultation with a Carbon specialist to engineer a bespoke treatment plan for your vehicle.</p>
            <Link href="/#booking" className={styles.ctaBtn}>
              BOOK THIS SERVICE
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
