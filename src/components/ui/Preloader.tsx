"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Wait a bit before fading out
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.preloader} ${progress === 100 ? styles.fadeOut : ''}`}>
      <div className="carbon-texture" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}></div>
      <div className={styles.content}>
        <h1 className={styles.logo}>CARBON</h1>
        <p className={styles.subtitle}>AUTOMOTIVE TRANSFORMATION STUDIO</p>
        
        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={styles.progressText}>{progress}%</div>
      </div>
    </div>
  );
}
