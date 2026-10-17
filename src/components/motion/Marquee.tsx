"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // base speed in pixels per second
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 45,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let currentX = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const dt = Math.max((now - lastScrollTime) / 1000, 0.001);
      const dy = window.scrollY - lastScrollY;
      scrollVelocity = dy / dt; // px per second
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Decay scroll velocity gradually
      scrollVelocity *= 0.92;

      if (!isPaused && trackRef.current) {
        const singleWidth = trackRef.current.scrollWidth / 2;
        if (singleWidth > 0) {
          // Velocity boost (up to 3x)
          const velocityBoost = Math.min(Math.abs(scrollVelocity) * 0.05, speed * 2.5);
          const currentSpeed = speed + velocityBoost;
          const delta = currentSpeed * dt;

          if (direction === "left") {
            currentX -= delta;
            if (currentX <= -singleWidth) {
              currentX += singleWidth;
            }
          } else {
            currentX += delta;
            if (currentX >= 0) {
              currentX -= singleWidth;
            }
          }

          trackRef.current.style.transform = `translate3d(${currentX}px, 0, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, direction, isPaused, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className={styles.track}
        style={shouldReduceMotion ? { transform: "none" } : undefined}
      >
        <div className={styles.itemGroup}>{children}</div>
        <div className={styles.itemGroup} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
