"use client";

import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import styles from "./CarbonDifference.module.css";

export default function CarbonDifference() {
  return (
    <section className={`section ${styles.difference}`} id="why-choose-carbon">
      <span id="why-carbon" style={{ position: "absolute", top: "-50px" }} />
      <span id="why-choose-us" style={{ position: "absolute", top: "-50px" }} />
      <div className="container">
        <SectionHeading
          number="02"
          label="WHY CHOOSE CARBON?"
          title="MORE THAN DETAILING."
          subtitle="A Commitment to Perfection."
          align="center"
        />

        <div className={styles.contentGrid}>
          {/* Card 1: Exceptional Care & Road Challenges */}
          <Reveal y={24} duration={0.65} delay={0.1} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className={styles.cardBadge}>CARE & PROTECTION</span>
              </div>
              <p className={styles.cardText}>
                At Carbon The Detailing Studio, we believe every vehicle deserves exceptional care, lasting protection, and a finish that stands out. From everyday road challenges to the demands of maintaining a luxury vehicle, your car&apos;s paint and interiors face constant exposure to scratches, UV rays, contaminants, and wear.
              </p>
              <div className={styles.featureList}>
                <span className={styles.featureChip}>Scratches & Swirls</span>
                <span className={styles.featureChip}>UV Degradation</span>
                <span className={styles.featureChip}>Environmental Contaminants</span>
                <span className={styles.featureChip}>Interior & Exterior Wear</span>
              </div>
              <div className={styles.cardGlow} />
            </div>
          </Reveal>

          {/* Card 2: Advanced Solutions Under One Roof */}
          <Reveal y={24} duration={0.65} delay={0.2} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className={styles.cardBadge}>UNDER ONE ROOF</span>
              </div>
              <p className={styles.cardText}>
                That&apos;s why we bring together advanced automotive protection, precision workmanship, and premium detailing solutions under one roof. From Paint Protection Film (PPF) and Colour PPF to Graphene Coating, window films, and interior and exterior detailing, every service is designed to help preserve your vehicle&apos;s appearance, enhance its finish, and maintain its appeal.
              </p>
              <div className={styles.featureList}>
                <span className={styles.featureChip}>Paint Protection Film (PPF)</span>
                <span className={styles.featureChip}>Colour PPF</span>
                <span className={styles.featureChip}>Graphene Coating</span>
                <span className={styles.featureChip}>Window Films</span>
                <span className={styles.featureChip}>Interior & Exterior Detailing</span>
              </div>
              <div className={styles.cardGlow} />
            </div>
          </Reveal>
        </div>

        {/* Bottom Banner: Standout Philosophy Statement */}
        <Reveal y={24} duration={0.7} delay={0.3}>
          <div className={styles.statementBanner}>
            <div className={styles.statementAccentBar} />
            <div className={styles.statementInner}>
              <div className={styles.statementQuoteWrapper}>
                <div className={styles.statementQuoteIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className={styles.statementQuote}>
                  At Carbon, it&apos;s not just about how your car looks today. It&apos;s about how well it stays protected for tomorrow.
                </p>
              </div>
              <Link href="#booking" className={styles.statementBtn}>
                BOOK YOUR SLOT
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
