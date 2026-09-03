"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import styles from "./BeforeAfter.module.css";

interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
  label: string;
  service: string;
}

function Slider({ beforeSrc, afterSrc, label, service }: SliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className={styles.slider}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full) */}
      <div className={styles.sliderImage}>
        <Image src={afterSrc} alt="After transformation" fill style={{ objectFit: "cover" }} />
      </div>

      {/* Before image (clipped) */}
      <div className={styles.sliderImage} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={beforeSrc} alt="Before transformation" fill style={{ objectFit: "cover" }} />
      </div>

      {/* Handle */}
      <div className={styles.handle} style={{ left: `${position}%` }}>
        <div className={styles.handleLine}></div>
        <div className={styles.handleGrip}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
          </svg>
        </div>
        <div className={styles.handleLine}></div>
      </div>

      {/* Labels */}
      <span className={`${styles.sliderLabel} ${styles.labelBefore}`}>BEFORE</span>
      <span className={`${styles.sliderLabel} ${styles.labelAfter}`}>AFTER</span>

      {/* Info */}
      <div className={styles.sliderInfo}>
        <span className={styles.infoCategory}>{label}</span>
        <span className={styles.infoService}>{service}</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useReveal();

  const comparisons = [
    { beforeSrc: "/services/general.jpg", afterSrc: "/services/detailing.jpg", label: "LUXURY SEDAN", service: "Paint Correction & Ceramic Coating" },
    { beforeSrc: "/services/restoration.jpg", afterSrc: "/services/bodykits.jpg", label: "SPORTS CAR", service: "Complete Restoration" },
  ];

  return (
    <section className={`section ${styles.beforeAfter}`} id="transformations" ref={ref}>
      <div className="container">
        <SectionHeading
          number="05"
          label="TRANSFORMATIONS"
          title="THE DIFFERENCE IS VISIBLE."
          subtitle="Drag the slider to see the transformation."
          align="center"
        />

        <div className={styles.grid}>
          {comparisons.map((comp, i) => (
            <div key={i} className="reveal">
              <Slider {...comp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
