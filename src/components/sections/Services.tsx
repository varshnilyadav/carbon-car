"use client";

import Image from "next/image";
import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "@/data/siteData";
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
          subtitle="From exterior protection to under-hood performance — a complete ecosystem of automotive transformation services."
        />

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={`${styles.card} reveal`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.cardImage}
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}></div>
                <span className={styles.cardNumber}>{service.number}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{service.name}</h3>
                <p className={styles.cardTitle}>{service.title}</p>
                <p className={styles.cardDescription}>{service.description}</p>
                <a href="#booking" className={styles.exploreBtn}>
                  EXPLORE
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
