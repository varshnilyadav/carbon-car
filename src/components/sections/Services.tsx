"use client";

import SectionHeading from "../ui/SectionHeading";
import { services } from "@/data/siteData";
import { ServiceCard } from "../ui/ServiceCard";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import styles from "./Services.module.css";

// Curated core protection & detailing services for the homepage
const homepageSlugs = [
  "ppf",
  "color-ppf",
  "ceramic-coating",
  "graphene-coating",
  "sun-films",
  "interior-exterior-detailing",
];

export default function Services() {
  const featuredServices = homepageSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is typeof services[0] => Boolean(s));

  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <SectionHeading
          number="03"
          label="SERVICES"
          title="TRANSFORM EVERY ELEMENT."
          subtitle="Professional detailing. Long-lasting protection. Immaculate results."
        />

        <div className={styles.grid}>
          {featuredServices.map((service, index) => (
            <Reveal
              key={service.id}
              y={30}
              duration={0.65}
              delay={index * 0.08}
              width="100%"
              className={styles.revealItem}
            >
              <TiltCard>
                <ServiceCard
                  slug={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  index={index + 1}
                  isPrimary={index === 0}
                />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
