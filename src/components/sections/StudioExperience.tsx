"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import styles from "./StudioExperience.module.css";

export default function StudioExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth subtle inner parallax for the showcase studio image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.01]);

  return (
    <section className={`section ${styles.studio}`} id="studio" ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <Reveal y={20} duration={0.6}>
            <span className={styles.eyebrow}>04 / THE STUDIO</span>
          </Reveal>

          <Reveal y={24} duration={0.7} delay={0.1}>
            <h2 className={styles.title}>WELCOME TO THE CARBON LAB.</h2>
          </Reveal>

          <Reveal y={20} duration={0.6} delay={0.2}>
            <p className={styles.text}>
              Our facility was designed with a single purpose: to provide the ultimate environment for automotive perfection. Climate-controlled detailing bays, advanced LED inspection tunnels, and a surgical-grade workspace ensure every vehicle is treated with uncompromising care.
            </p>
          </Reveal>

          <Reveal y={20} duration={0.6} delay={0.3}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <CountUp end={10} suffix="K" duration={2} className={styles.statValue} />
                <span className={styles.statLabel}>SQ FT FACILITY</span>
              </div>
              <div className={styles.statLine}></div>
              <div className={styles.stat}>
                <span className={styles.statValue}>ISO</span>
                <span className={styles.statLabel}>CERTIFIED BAYS</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.showcaseWrapper}>
          <Reveal y={25} duration={0.75} delay={0.2}>
            <div className={styles.imageFrame}>
              <motion.div
                className={styles.imageInner}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: imageY, scale: imageScale }
                }
              >
                <Image
                  src="/images/studio.webp"
                  alt="Carbon Studio Detailing & PPF Clean Bay in Hyderabad"
                  fill
                  priority
                  className={styles.image}
                  sizes="(max-width: 992px) 100vw, 55vw"
                />
              </motion.div>
              <div className={styles.imageGlowOverlay} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
