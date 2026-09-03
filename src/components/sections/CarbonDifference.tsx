"use client";

import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import styles from "./CarbonDifference.module.css";

const pillars = [
  { number: "01", title: "PRECISION", description: "Every cut, every application, every calibration is executed with surgical accuracy. We measure in microns, not millimeters." },
  { number: "02", title: "CRAFTSMANSHIP", description: "Trained specialists with years of experience in automotive finishing, bringing an artisan's eye to every vehicle." },
  { number: "03", title: "PREMIUM MATERIALS", description: "Only the highest-grade films, coatings, paints, and components make it into our studio. No compromises." },
  { number: "04", title: "PERFORMANCE", description: "From ECU calibration to aerodynamic optimization, we engineer real, measurable gains for your vehicle." },
  { number: "05", title: "TECHNOLOGY", description: "Advanced diagnostic tools, precision paint measurement, and cutting-edge application techniques in every project." },
  { number: "06", title: "ATTENTION TO DETAIL", description: "The details most overlook are the ones we obsess over. Every panel gap, every seam, every surface — perfected." },
];

export default function CarbonDifference() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.difference}`} ref={ref}>
      <div className="container">
        <SectionHeading
          number="02"
          label="OUR DIFFERENCE"
          title="THE CARBON DIFFERENCE"
          align="center"
        />

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <div key={pillar.number} className={`${styles.pillar} reveal`}>
              <span className={styles.pillarNumber}>{pillar.number}</span>
              <div className={styles.pillarLine}></div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
