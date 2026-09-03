"use client";

import Image from "next/image";
import { useReveal } from "../ui/useReveal";
import styles from "./BrandIntro.module.css";
import { useEffect, useRef } from "react";

export default function BrandIntro() {
  const ref = useReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.bottom / (window.innerHeight + rect.height));
      
      if (scrollProgress > 0 && scrollProgress < 1) {
        // Move image slightly slower than scroll (parallax)
        const yPos = scrollProgress * 40 - 20; // -20px to 20px translation
        imageRef.current.style.transform = `translateY(${yPos}px) scale(1.03)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`section ${styles.brandIntro}`} ref={sectionRef}>
      <div className={`container ${styles.grid}`} ref={ref}>
        {/* Left: Image */}
        <div className={`${styles.imageWrapper} reveal`}>
          <div className={styles.imageInner}>
            <Image
              ref={imageRef}
              src="/assets/carbon carzspa.png"
              alt="Carbon × Carzspa Collaboration"
              fill
              className={styles.image}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className={styles.graphiteTreatment}></div>
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          <div className="reveal">
            <span className={styles.eyebrow}>ABOUT CARBON</span>
            <h2 className={styles.title}>
              MORE THAN DETAILING.<br />
              <span className={styles.accent}>A COMPLETE AUTOMOTIVE TRANSFORMATION.</span>
            </h2>
            <p className={styles.text}>
              Carbon is an elite automotive transformation studio. We treat every project as a unique engineering challenge, combining precision detailing, protective films, and performance builds to elevate your vehicle far beyond factory standards.
            </p>
            <p className={styles.text}>
              Through our strategic partnership, we have seamlessly integrated Carbon&apos;s visionary automotive philosophy with CarzSpa&apos;s industry-leading surface protection technology—delivering an unmatched standard of excellence.
            </p>
          </div>

          <div className={`${styles.collab} reveal`}>
            <div className={styles.collabLine}></div>
            <div className={styles.collabContent}>
              <span className={styles.collabTitle}>CARBON × CARZSPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
