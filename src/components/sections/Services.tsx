"use client";

import SectionHeading from "../ui/SectionHeading";
import { services } from "@/data/siteData";
import { ServiceCard } from "../ui/ServiceCard";
import Reveal from "@/components/motion/Reveal";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <SectionHeading
          number="02"
          label="SERVICES"
          title="TRANSFORM EVERY ELEMENT."
          subtitle="Professional detailing. Long-lasting protection. Immaculate results."
        />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              y={30}
              duration={0.65}
              delay={index * 0.08}
            >
              <ServiceCard
                slug={service.slug}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
