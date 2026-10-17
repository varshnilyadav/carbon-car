"use client";

import Image from "next/image";
import { useReveal } from "../ui/useReveal";
import styles from "./StudioExperience.module.css";

export default function StudioExperience() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.studio}`} id="studio" ref={ref}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className="reveal">
            <span className={styles.eyebrow}>04 / THE STUDIO</span>
            <h2 className={styles.title}>WELCOME TO THE CARBON LAB.</h2>
            <p className={styles.text}>
              Our facility was designed with a single purpose: to provide the ultimate environment for automotive perfection. Climate-controlled detailing bays, advanced LED inspection tunnels, and a surgical-grade workspace ensure every vehicle is treated with uncompromising care.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>10K</span>
                <span className={styles.statLabel}>SQ FT FACILITY</span>
              </div>
              <div className={styles.statLine}></div>
              <div className={styles.stat}>
                <span className={styles.statValue}>ISO</span>
                <span className={styles.statLabel}>CERTIFIED BAYS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageGrid}>
          <div className={`${styles.imageWrapper} ${styles.tall} reveal`}>
            <Image
              src="/studio-bg.jpg"
              alt="Carbon Studio Main Bay"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.smallImages}>
            <div className={`${styles.imageWrapper} reveal`} style={{ transitionDelay: "0.1s" }}>
              <Image
                src="/services/detailing.jpg"
                alt="Detailing Process"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={`${styles.imageWrapper} reveal`} style={{ transitionDelay: "0.2s" }}>
              <Image
                src="/services/ppf.jpg"
                alt="PPF Installation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
