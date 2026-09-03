"use client";

import Image from "next/image";
import { useReveal } from "../ui/useReveal";
import styles from "./BrandIntro.module.css";

export default function BrandIntro() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.brandIntro}`} ref={ref}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className="reveal">
            <span className={styles.eyebrow}>ABOUT CARBON</span>
            <h2 className={styles.title}>
              MORE THAN DETAILING.<br />
              <span className={styles.accent}>A COMPLETE AUTOMOTIVE TRANSFORMATION.</span>
            </h2>
            <p className={styles.text}>
              Carbon isn&apos;t a car wash. We are an automotive transformation studio — a space where vehicles are reimagined, refined, and elevated. From precision paint protection to full performance builds, every project is treated as a unique engineering challenge.
            </p>
            <p className={styles.text}>
              We specialize in complete vehicle transformation through protection, styling, performance, restoration, detailing, and customization — delivering results that redefine what your vehicle can be.
            </p>
          </div>

          <div className={`${styles.collab} reveal`}>
            <div className={styles.collabLine}></div>
            <div className={styles.collabContent}>
              <span className={styles.collabLabel}>STRATEGIC PARTNERSHIP</span>
              <h3 className={styles.collabTitle}>CARBON × CARZSPA</h3>
              <p className={styles.collabText}>
                A fusion of automotive transformation expertise and premium detailing craftsmanship — combining Carbon&apos;s vision with CarzSpa&apos;s industry-leading protection technology.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.imageContainer} reveal`}>
          <Image
            src="/studio-bg.jpg"
            alt="Carbon automotive transformation studio"
            fill
            className={styles.image}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageBadge}>
            <span>EST.</span>
            <span className={styles.badgeYear}>CARBON</span>
            <span>HYDERABAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
