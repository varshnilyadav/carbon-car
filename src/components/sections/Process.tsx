"use client";

import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import styles from "./Process.module.css";

const steps = [
  { number: "01", title: "CONSULTATION", desc: "We discuss your vision, inspect the vehicle, and determine the precise requirements for your transformation." },
  { number: "02", title: "INSPECTION", desc: "A rigorous multi-point inspection under specialized lighting to identify every imperfection and opportunity." },
  { number: "03", title: "TRANSFORMATION PLAN", desc: "A customized blueprint is engineered for your vehicle, outlining the exact processes, materials, and timeline." },
  { number: "04", title: "CRAFTSMANSHIP", desc: "Our specialists execute the plan with precision, from paint correction to performance upgrades." },
  { number: "05", title: "QUALITY CONTROL", desc: "Every surface and system undergoes a final meticulous review to ensure Carbon standards are met." },
  { number: "06", title: "HANDOVER", desc: "The final reveal. We walk you through the transformation and provide detailed maintenance instructions." }
];

export default function Process() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.process}`} ref={ref}>
      <div className="container">
        <SectionHeading
          number="03"
          label="PROCESS"
          title="HOW WE TRANSFORM."
          align="center"
        />

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <div key={index} className={`${styles.step} reveal`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={styles.stepDot}></div>
                <div className={styles.stepContent}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
