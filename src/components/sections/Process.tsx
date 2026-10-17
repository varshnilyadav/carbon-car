"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(".process-step-item", { opacity: 1 });
      if (lineRef.current) gsap.set(lineRef.current, { scaleY: 1 });
      return;
    }

    const mm = gsap.matchMedia(containerRef);

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
    }, (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };

      if (isDesktop) {
        // Vertical line draws itself (scaleY scrubbed to scroll)
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 45%",
                end: "bottom 75%",
                scrub: true,
              },
            }
          );
        }

        // Each step's number and title brighten as it becomes active
        const stepEls = gsap.utils.toArray<HTMLElement>(".process-step-item");
        stepEls.forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => {
              el.classList.add("process-step-active");
              gsap.to(el, { opacity: 1, duration: 0.35 });
            },
            onLeaveBack: () => {
              el.classList.remove("process-step-active");
              gsap.to(el, { opacity: 0.35, duration: 0.35 });
            },
          });
        });
      } else {
        // Mobile fallback: all visible with simple entrance
        gsap.set(".process-step-item", { opacity: 1 });
        if (lineRef.current) {
          gsap.set(lineRef.current, { scaleY: 1 });
        }
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className={`section ${styles.process}`} ref={containerRef}>
      <div className="container">
        <SectionHeading
          number="03"
          label="PROCESS"
          title="HOW WE TRANSFORM."
        />

        <div className={styles.processLayout}>
          {/* Left: Sticky Process Header */}
          <div className={styles.stickyHeader}>
            <div className={styles.stickyBadge}>
              <span>PRECISION PROTOCOL</span>
            </div>
            <p className={styles.stickyDesc}>
              Every vehicle follows an uncompromising six-phase engineering pipeline designed to achieve showroom perfection and lasting protection.
            </p>
          </div>

          {/* Right: Vertical Timeline with scrubbing line */}
          <div className={styles.timelineWrap}>
            <div className={styles.timelineTrack} />
            <div className={styles.timelineLine} ref={lineRef} />

            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.stepItem} process-step-item`}
                >
                  <div className={styles.stepDot}>
                    <div className={styles.stepDotInner} />
                  </div>
                  <span className={styles.stepNumber}>STAGE {step.number}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
