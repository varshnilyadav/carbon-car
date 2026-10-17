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

  // Parallax the three images at different speeds
  const yParallax1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yParallax3 = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section className={`section ${styles.studio}`} id="studio" ref={sectionRef}>
      <div className={styles.grid}>
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

        <div className={styles.imageGrid}>
          {/* Main Tall Image with Parallax Speed 1 */}
          <div className={`${styles.imageWrapper} ${styles.tall}`}>
            <motion.div
              style={
                shouldReduceMotion
                  ? { width: "100%", height: "100%", position: "relative" }
                  : { y: yParallax1, scale: 1.08, width: "100%", height: "100%", position: "relative" }
              }
            >
              <Image
                src="/studio-bg.jpg"
                alt="Carbon Studio Main Bay"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <div className={styles.smallImages}>
            {/* Small Image 1 with Parallax Speed 2 */}
            <div className={styles.imageWrapper}>
              <motion.div
                style={
                  shouldReduceMotion
                    ? { width: "100%", height: "100%", position: "relative" }
                    : { y: yParallax2, scale: 1.12, width: "100%", height: "100%", position: "relative" }
                }
              >
                <Image
                  src="/services/detailing.jpg"
                  alt="Detailing Process"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 992px) 50vw, 25vw"
                />
              </motion.div>
            </div>

            {/* Small Image 2 with Parallax Speed 3 */}
            <div className={styles.imageWrapper}>
              <motion.div
                style={
                  shouldReduceMotion
                    ? { width: "100%", height: "100%", position: "relative" }
                    : { y: yParallax3, scale: 1.08, width: "100%", height: "100%", position: "relative" }
                }
              >
                <Image
                  src="/services/ppf.jpg"
                  alt="PPF Installation"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 992px) 50vw, 25vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
