"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Run progress on initial load and route changes
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 18) + 12;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setLoading(false);
            setFading(false);
          }, 450); // Fade out duration
        }, 180); // Dwell time at 100%
      } else {
        setProgress(current);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [pathname]);

  // Listen for link clicks to internal pages for instantaneous preloader feedback
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Only trigger on internal page navigation (not same-page anchors or external links)
      if (
        (href.startsWith("/") && !href.startsWith("/#") && href !== pathname) ||
        (href.startsWith("/#") && pathname !== "/")
      ) {
        setLoading(true);
        setFading(false);
        setProgress(25);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div 
      className={`${styles.preloader} ${fading ? styles.fadeOut : ""}`}
      aria-hidden="true"
    >
      {/* Background carbon grid & glow */}
      <div className={styles.ambientGlow} />
      <div className={styles.carbonGrid} />

      <div className={styles.content}>
        {/* Golden Carbon Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="/assets/carbon-logo.png"
            alt="CARBON The Detailing Studio"
            width={340}
            height={204}
            priority
            className={styles.logoImg}
          />
          <div className={styles.shimmerEffect} />
        </div>

        {/* Orbitron subtitle & progress */}
        <div className={styles.footerInfo}>
          <div className={styles.progressContainer}>
            <div 
              className={styles.progressBar} 
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className={styles.metaRow}>
            <span className={styles.tagline}>AUTOMOTIVE TRANSFORMATION</span>
            <span className={styles.progressText}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
