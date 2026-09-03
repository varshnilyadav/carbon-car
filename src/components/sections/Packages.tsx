"use client";

import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { packages } from "@/data/siteData";
import styles from "./Packages.module.css";

export default function Packages() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.packages}`} ref={ref}>
      <div className="container">
        <SectionHeading
          number="04"
          label="PACKAGES"
          title="SIGNATURE DETAILING PACKAGES"
          subtitle="Curated service tiers designed for every level of automotive care."
          align="center"
        />

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.card} ${pkg.featured ? styles.featured : ""} reveal`}
            >
              {pkg.featured && <div className={styles.badge}>MOST POPULAR</div>}
              <h3 className={styles.name}>{pkg.name}</h3>
              <p className={styles.idealFor}>{pkg.idealFor}</p>
              <div className={styles.divider}></div>
              <ul className={styles.list}>
                {pkg.services.map((service, i) => (
                  <li key={i} className={styles.listItem}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
              <a href="#booking" className={styles.cta}>
                REQUEST A PACKAGE RECOMMENDATION
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
