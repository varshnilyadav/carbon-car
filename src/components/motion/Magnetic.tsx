"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  disabled?: boolean;
}

export default function Magnetic({
  children,
  strength = 0.28,
  className = "",
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchOrSmall, setIsTouchOrSmall] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsTouchOrSmall(
        window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches
      );
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const springConfig = { damping: 15, stiffness: 160, mass: 0.15 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  if (shouldReduceMotion || disabled || isTouchOrSmall) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
