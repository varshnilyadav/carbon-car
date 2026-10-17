"use client";

import styles from "./BrandsMarquee.module.css";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";

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
  return (
    <div className={styles.brandsWrapper}>
      {/* Car Brands Marquee */}
      <section className={styles.brandsSection}>
        <Reveal y={15} duration={0.6}>
          <div className={styles.brandsLabel}>
            <span className={styles.sectionTag}>BRANDS WE SERVICE</span>
          </div>
        </Reveal>
        <div className={styles.marqueeContainer}>
          <Marquee speed={45} direction="left" pauseOnHover>
            {carBrands.map((brand, i) => (
              <div key={i} className={styles.brandItem}>
                <span className={`${styles.brandText} ${styles[brand.type]}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Premium Brands Marquee */}
      <section className={`${styles.brandsSection} ${styles.premiumSection}`}>
        <Reveal y={15} duration={0.6} delay={0.15}>
          <div className={styles.brandsLabel}>
            <span className={styles.sectionTag}>PREMIUM BRANDS WE USE</span>
          </div>
        </Reveal>
        <div className={styles.marqueeContainer}>
          <Marquee speed={38} direction="right" pauseOnHover>
            {premiumBrands.map((brand, i) => (
              <div key={i} className={styles.brandItem}>
                <span className={styles.premiumBrandText}>
                  {brand}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
