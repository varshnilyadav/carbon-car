"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import styles from "./TiltCard.module.css";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const reducedMotion = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    // Only enable tilt on devices supporting fine pointer + hover and without reduced motion
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCapability = () => {
      setCanTilt(hoverQuery.matches && !reducedMotion);
    };

    updateCapability();
    hoverQuery.addEventListener("change", updateCapability);
    return () => hoverQuery.removeEventListener("change", updateCapability);
  }, [reducedMotion]);

  // Framer Motion spring config: stiffness ~150, damping ~15
  const springConfig = { stiffness: 150, damping: 15 };

  // Normalized values: x and y in range [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation and scale
  const rotateXSpring = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]),
    springConfig
  );
  const rotateYSpring = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]),
    springConfig
  );
  const scaleSpring = useSpring(1, springConfig);

  // Cache bounding rect on pointer enter, never on every move
  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!canTilt || e.pointerType === "touch" || !cardRef.current) return;
      rectRef.current = cardRef.current.getBoundingClientRect();
      scaleSpring.set(1.02);
    },
    [canTilt, scaleSpring]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!canTilt || e.pointerType === "touch") return;

      // Fallback if enter didn't capture rect
      if (!rectRef.current && cardRef.current) {
        rectRef.current = cardRef.current.getBoundingClientRect();
      }

      const rect = rectRef.current;
      if (!rect || !cardRef.current) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;

      const normX = Math.max(-0.5, Math.min(0.5, px - 0.5));
      const normY = Math.max(-0.5, Math.min(0.5, py - 0.5));

      mouseX.set(normX);
      mouseY.set(normY);

      const localX = clientX - rect.left;
      const localY = clientY - rect.top;
      cardRef.current.style.setProperty("--mx", `${localX}px`);
      cardRef.current.style.setProperty("--my", `${localY}px`);
    },
    [canTilt, mouseX, mouseY]
  );

  const handlePointerLeave = useCallback(() => {
    rectRef.current = null;
    if (!canTilt) return;
    mouseX.set(0);
    mouseY.set(0);
    scaleSpring.set(1);
  }, [canTilt, mouseX, mouseY, scaleSpring]);

  // If tilt is not supported/reduced-motion, render flat card without motion styles
  if (!canTilt) {
    return (
      <div className={`${styles.tiltRoot} ${className}`}>
        <div ref={cardRef} className={styles.tiltCard} style={{ transform: "none" }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.tiltRoot} ${className}`}>
      <motion.div
        ref={cardRef}
        className={styles.tiltCard}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          scale: scaleSpring,
          transformStyle: "preserve-3d",
        }}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className={styles.borderGlow} aria-hidden="true" />
        {children}
        <div className={styles.highlight} aria-hidden="true" />
      </motion.div>
    </div>
  );
}
