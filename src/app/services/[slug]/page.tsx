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
import { services } from "@/data/siteData";
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

  return {
    title: `${service.title} | CARBON Automotive Studio Hyderabad`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | CARBON Hyderabad`,
      description: service.shortDescription,
      images: [{ url: service.image }],
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

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Service Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src={service.image}
              alt={service.title}
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

        {/* PPF Specific Sections: Packages and Claro PPF */}
        {service.slug === "ppf" && (
          <>
            <PPFPackages />
            <ClaroPPFSection />
          </>
        )}

        {/* Benefits & Included */}
        <section className={styles.detailsSection}>
          <div className="container">
            <div className={styles.detailsGrid}>
              <div className={styles.detailBox}>
                <h3 className={styles.detailTitle}>KEY BENEFITS</h3>
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
                <h3 className={styles.detailTitle}>WHAT&apos;S INCLUDED</h3>
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
                    <h4>{step.title}</h4>
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
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
