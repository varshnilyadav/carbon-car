"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    // Wire Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Global anchor click interception for smooth Lenis scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetId = "";
      if (href.startsWith("#")) {
        targetId = href;
      } else if (href.startsWith("/#") && (window.location.pathname === "/" || window.location.pathname === "")) {
        targetId = href.substring(1);
      } else if (href.includes("#") && href.startsWith("/?") && (window.location.pathname === "/" || window.location.pathname === "")) {
        targetId = href.substring(href.indexOf("#"));
      }

      if (targetId && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: -50,
            duration: 1.2,
          });
          history.pushState(null, "", targetId);

          if (
            targetId === "#booking" ||
            targetId === "#consultation" ||
            targetId === "#consulting" ||
            targetId === "#consulting-form"
          ) {
            setTimeout(() => {
              const nameInput = document.getElementById("name") as HTMLInputElement | null;
              nameInput?.focus();
            }, 1200);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Handle initial hash on page load (e.g. user arrived via /#booking or /#consultation)
    if (window.location.hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: -50,
            duration: 1.2,
          });
          if (
            window.location.hash === "#booking" ||
            window.location.hash === "#consultation"
          ) {
            setTimeout(() => {
              const nameInput = document.getElementById("name") as HTMLInputElement | null;
              nameInput?.focus();
            }, 1200);
          }
        }
      }, 350);
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(onTick);
      if (typeof window !== "undefined") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
