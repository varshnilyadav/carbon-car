"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${styles.heading} ${align === "center" ? styles.center : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.meta}>
        <span className={styles.number}>{number}</span>
        <span className={styles.divider}></span>
        <span className={styles.label}>{label}</span>
      </div>

      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
        {!shouldReduceMotion && (
          <motion.span
            className={styles.glossSweep}
            initial={{ x: "-100%" }}
            whileInView={{ x: "350%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        )}
      </div>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
