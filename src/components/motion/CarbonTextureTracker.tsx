"use client";

import { useEffect } from "react";

export default function CarbonTextureTracker() {
  useEffect(() => {
    // Desktop only: check width >= 768px and fine pointer
    const isDesktop =
      window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || prefersReducedMotion) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Shift ±5px max
      targetX = ((e.clientX / innerWidth) - 0.5) * 10;
      targetY = ((e.clientY / innerHeight) - 0.5) * 10;
    };

    const update = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      document.documentElement.style.setProperty(
        "--weave-x",
        `${currentX.toFixed(2)}px`
      );
      document.documentElement.style.setProperty(
        "--weave-y",
        `${currentY.toFixed(2)}px`
      );

      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
