"use client";

import styles from "./BrandsMarquee.module.css";
import { useReveal } from "../ui/useReveal";

const carBrands = [
  { name: "HYUNDAI", type: "normal" },
  { name: "BMW", type: "luxury" },
  { name: "MERCEDES", type: "luxury" },
  { name: "AUDI", type: "luxury" },
  { name: "TOYOTA", type: "normal" },
  { name: "VOLKSWAGEN", type: "normal" },
  { name: "HONDA", type: "normal" },
  { name: "KIA", type: "normal" },
  { name: "TATA", type: "normal" },
  { name: "MAHINDRA", type: "normal" },
  { name: "MG", type: "bold" },
  { name: "SUZUKI", type: "normal" },
  { name: "JEEP", type: "bold" },
  { name: "ŠKODA", type: "normal" },
  { name: "CHEVROLET", type: "normal" },
  { name: "MITSUBISHI", type: "normal" },
  { name: "FORD", type: "normal" },
  { name: "LEXUS", type: "luxury" },
  { name: "RENAULT", type: "normal" },
  { name: "JAGUAR", type: "luxury" },
];

const premiumBrands = [
  "3M", "MEGUIAR'S", "GTECHNIQ", "KOCH-CHEMIE", 
  "RUPES", "KÄRCHER", "CARPRO", "MENZERNA"
];

export default function BrandsMarquee() {
  const ref = useReveal();

  return (
    <div className={styles.brandsWrapper} ref={ref}>
      {/* Car Brands Marquee */}
      <section className={`${styles.brandsSection} reveal`}>
        <div className={styles.brandsLabel}>
          <span className={styles.sectionTag}>BRANDS WE SERVICE</span>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {/* Double the array for infinite scroll effect */}
            {[...carBrands, ...carBrands].map((brand, i) => (
              <div key={i} className={styles.brandItem}>
                <span className={`${styles.brandText} ${styles[brand.type]}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Brands Marquee */}
      <section className={`${styles.brandsSection} ${styles.premiumSection} reveal`} style={{ transitionDelay: "0.2s" }}>
        <div className={styles.brandsLabel}>
          <span className={styles.sectionTag}>PREMIUM BRANDS WE USE</span>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={`${styles.marqueeTrack} ${styles.marqueeReverse}`}>
            {[...premiumBrands, ...premiumBrands].map((brand, i) => (
              <div key={i} className={styles.brandItem}>
                <span className={styles.premiumBrandText}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
