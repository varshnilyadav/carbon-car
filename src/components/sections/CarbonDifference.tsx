"use client";

import SectionHeading from "../ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import styles from "./CarbonDifference.module.css";

const pillars = [
  {
    number: "01",
    title: "SURGICAL PRECISION",
    description: "Every cut, edge wrap, and panel alignment is executed with micron-level accuracy. We measure clearances and paint thickness in microns, not millimeters.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "CERTIFIED CRAFTSMEN",
    description: "Our detailing specialists and film technicians bring extensive expertise working on exotics, supercars, and luxury vehicles with obsessive care.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "10,000 SQ FT CLEAN LAB",
    description: "Hyderabad's purpose-built automotive facility featuring climate-controlled dust-free bays, hospital-grade filtration, and high-CRI inspection light tunnels.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "TIER-1 PROTECTION FILMS",
    description: "Exclusively installing genuine Claro PPF and Aegis SPX thermoplastic polyurethane with self-healing topcoats and up to 10-year manufacturer warranty.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "ZERO-BLADE PAINT SAFETY",
    description: "Zero razor blades on exposed factory paint. We employ precision computer-aided template plotting and tucked-edge wrapping for near-invisible protection.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "TRANSPARENT PARTNERSHIP",
    description: "Thorough pre-inspection vehicle mapping, stage-by-stage photo and video updates throughout the transformation, and comprehensive warranty documentation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function CarbonDifference() {
  return (
    <section className={`section ${styles.difference}`} id="why-choose-carbon">
      <span id="why-carbon" style={{ position: "absolute", top: "-50px" }} />
      <span id="why-choose-us" style={{ position: "absolute", top: "-50px" }} />
      <div className="container">
        <SectionHeading
          number="02"
          label="WHY CHOOSE CARBON"
          title="THE CARBON ADVANTAGE."
          subtitle="Engineering precision, dust-free climate bays, and aerospace-tier materials designed to elevate and safeguard your automobile."
          align="center"
        />

        <div className={styles.grid}>
          {pillars.map((pillar, idx) => (
            <Reveal
              key={pillar.number}
              y={30}
              duration={0.6}
              delay={idx * 0.08}
              className={styles.pillarWrapper}
            >
              <div className={styles.pillar}>
                <div className={styles.pillarTop}>
                  <div className={styles.iconBox}>{pillar.icon}</div>
                  <span className={styles.pillarNumber}>{pillar.number}</span>
                </div>
                <div className={styles.pillarLine}></div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.description}</p>
                <div className={styles.cardHoverGlow} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
