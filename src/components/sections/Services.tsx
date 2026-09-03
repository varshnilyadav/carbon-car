"use client";

import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "@/data/siteData";
import { ServiceCard } from "../ui/ServiceCard";
import styles from "./Services.module.css";

export default function Services() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.services}`} id="services" ref={ref}>
      <div className="container">
        <SectionHeading
          number="03"
          label="SERVICES"
          title="TRANSFORM EVERY ELEMENT."
          subtitle="Professional detailing. Long-lasting protection. Immaculate results."
        />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="reveal"
              style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
              <ServiceCard
                slug={service.slug}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
