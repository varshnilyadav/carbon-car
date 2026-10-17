"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import styles from "./BrandIntro.module.css";

export default function BrandIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Inner parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.02]);

  return (
    <section className={`section ${styles.brandIntro}`} id="about" ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        {/* Left: Image with clip-path wipe & inner parallax */}
        <motion.div
          className={styles.imageWrapper}
          initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.imageInner}
            style={shouldReduceMotion ? undefined : { y: imageY, scale: imageScale }}
          >
            <Image
              src="/assets/carbon-facade.webp"
              alt="Carbon Detailing & PPF Studio Hyderabad"
              fill
              className={styles.image}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          <div className={styles.graphiteTreatment}></div>
        </motion.div>

        {/* Right: Content with staggered Reveal */}
        <div className={styles.content}>
          <Reveal y={20} duration={0.6} delay={0.1}>
            <span className={styles.eyebrow}>ABOUT US</span>
          </Reveal>

          <Reveal y={25} duration={0.7} delay={0.2}>
            <h2 className={styles.title}>
              MORE THAN DETAILING.<br />
              <span className={styles.accent}>A COMPLETE AUTOMOTIVE TRANSFORMATION.</span>
            </h2>
          </Reveal>

          <Reveal y={20} duration={0.6} delay={0.3}>
            <p className={styles.text}>
              Carbon is an elite automotive transformation studio. We treat every project as a unique engineering challenge, combining precision detailing, protective films, and performance builds to elevate your vehicle far beyond factory standards.
            </p>
          </Reveal>

          <Reveal y={20} duration={0.6} delay={0.4}>
            <p className={styles.text}>
              Operating from our cutting-edge studio in Hyderabad, our master technicians utilize precision LED inspection lighting, climate-controlled bays, and the world&apos;s finest ceramic coatings and self-healing films to deliver an unmatched standard of automotive excellence.
            </p>
          </Reveal>

          <Reveal y={15} duration={0.6} delay={0.5}>
            <div className={styles.collab}>
              <div className={styles.collabLine}></div>
              <div className={styles.collabContent}>
                <span className={styles.collabTitle}>CARBON AUTOMOTIVE STUDIO</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
