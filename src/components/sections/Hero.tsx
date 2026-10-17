"use client";

import { useRef } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Magnetic from "@/components/motion/Magnetic";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      gsap.set(".hero-word", { y: "0%", autoAlpha: 1 });
      gsap.set(".gsap-eyebrow, .gsap-desc, .gsap-cta, .gsap-scroll", { autoAlpha: 1, y: 0 });
      gsap.set(".gsap-overlay", { autoAlpha: 1 });
      return;
    }

    // --- ENTRANCE ANIMATION TIMELINE ---
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.2,
    });

    // Dark overlay ease
    tl.to(".gsap-overlay", {
      autoAlpha: 1,
      duration: 1.4,
      ease: "power2.inOut",
    }, 0);

    // Eyebrow badge
    tl.fromTo(".gsap-eyebrow", 
      { autoAlpha: 0, y: 15 },
      { autoAlpha: 1, y: 0, duration: 0.9 },
      0.15
    );

    // Headline: line by line masked slide-up, staggered ~60ms per word
    tl.fromTo(".hero-word",
      { y: "120%", autoAlpha: 0 },
      { y: "0%", autoAlpha: 1, duration: 1.1, stagger: 0.06, ease: "power3.out" },
      "-=0.6"
    );

    // Subtext fades up
    tl.fromTo(".gsap-desc",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.9 },
      "-=0.7"
    );

    // CTAs fade up
    tl.fromTo(".gsap-cta",
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.7"
    );

    // Scroll indicator
    tl.fromTo(".gsap-scroll",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.9 },
      "-=0.3"
    );

    // Very slow scale 1 -> 1.08 for video
    if (videoRef.current) {
      gsap.fromTo(videoRef.current,
        { scale: 1 },
        { scale: 1.08, duration: 14, ease: "power1.out" }
      );
    }

    // --- SCROLL PARALLAX ANIMATION ---
    const mm = gsap.matchMedia(container);

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };
      
      if (videoWrapperRef.current) {
        gsap.set(videoWrapperRef.current, { scale: 1.05 });

        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });

        parallaxTl.to(videoWrapperRef.current, {
          yPercent: isDesktop ? 18 : 5,
          ease: "none"
        }, 0);

        parallaxTl.to(".gsap-scroll", {
          autoAlpha: 0,
          y: 20,
          ease: "power1.inOut"
        }, 0);
      }
    });

    return () => {
      mm.revert();
    };

  }, { scope: container });

  return (
    <section className={styles.hero} id="home" ref={container}>
      <div className={styles.parallaxWrapper} ref={videoWrapperRef}>
        <div className={styles.videoBackground}>
          <video
            ref={videoRef}
            className={styles.bgMedia}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-bg.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.overlay} gsap-overlay`}></div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrowWrapper}>
          <span className={`${styles.eyebrow} gsap-eyebrow`}>
            HYDERABAD&apos;S AUTOMOTIVE TRANSFORMATION STUDIO
          </span>
        </div>
        
        <h1 className={styles.title}>
          <span className={styles.maskContainer}>
            <span className="hero-word">ENGINEERED</span>
          </span>{" "}
          <span className={styles.maskContainer}>
            <span className="hero-word">TO</span>
          </span>
          <br/>
          <span className={`${styles.maskContainer} ${styles.highlightContainer}`}>
            <span className={`hero-word ${styles.highlight}`}>TRANSFORM.</span>
          </span>
        </h1>
        
        <p className={`${styles.subtitle} gsap-desc`}>
          Precision detailing. Performance upgrades. Bespoke styling.<br/>
          Complete automotive transformation.
        </p>
        
        <div className={styles.actions}>
          <Magnetic strength={0.3}>
            <a href="#booking" className={`${styles.primaryBtn} gsap-cta`}>BOOK YOUR TRANSFORMATION</a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a href="#services" className={`${styles.secondaryBtn} gsap-cta`}>EXPLORE SERVICES</a>
          </Magnetic>
        </div>
      </div>

      <div className={`${styles.scrollIndicator} gsap-scroll`}>
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
}
