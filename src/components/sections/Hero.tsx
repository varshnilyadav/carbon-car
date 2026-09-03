"use client";

import { useRef } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Pause video if reduced motion is preferred
      if (videoRef.current) {
        videoRef.current.pause();
      }
      
      // Just make everything visible without animation
      gsap.set(".gsap-reveal", { autoAlpha: 1, y: 0 });
      gsap.set(".gsap-mask span", { y: 0 });
      gsap.set(".gsap-overlay", { autoAlpha: 1 });
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // 1. Video starts playing automatically (handled by HTML attributes)
    
    // 2. Overlay fades in
    tl.to(".gsap-overlay", {
      autoAlpha: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, 0.2); // slight delay after load

    // 3. Eyebrow reveals
    tl.fromTo(".gsap-eyebrow", 
      { autoAlpha: 0, y: 15 },
      { autoAlpha: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    // 4. Main headline reveals with upward mask animation
    tl.fromTo(".gsap-mask span",
      { y: "120%" },
      { y: "0%", duration: 1.2, stagger: 0.15 },
      "-=0.7"
    );

    // 5. Description fades upward
    tl.fromTo(".gsap-desc",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 1 },
      "-=0.8"
    );

    // 6. CTA buttons appear
    tl.fromTo(".gsap-cta",
      { autoAlpha: 0, y: 15 },
      { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.8"
    );

    // 7. Scroll indicator appears last
    tl.fromTo(".gsap-scroll",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 },
      "-=0.2"
    );

  }, { scope: container });

  return (
    <section className={styles.hero} id="home" ref={container}>
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          className={styles.bgMedia}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.jpg" // Using the previously generated high-quality image as fallback/poster
        >
          <source src="/hero video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.overlay} gsap-overlay`}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrowWrapper}>
          <span className={`${styles.eyebrow} gsap-eyebrow`}>
            HYDERABAD&apos;S AUTOMOTIVE TRANSFORMATION STUDIO
          </span>
        </div>
        
        <h1 className={styles.title}>
          <span className={styles.maskContainer}>
            <span className="gsap-mask"><span>ENGINEERED TO</span></span>
          </span>
          <br/>
          <span className={`${styles.maskContainer} ${styles.highlightContainer}`}>
            <span className="gsap-mask">
              <span className={styles.highlight}>TRANSFORM.</span>
            </span>
          </span>
        </h1>
        
        <p className={`${styles.subtitle} gsap-desc`}>
          Precision detailing. Performance upgrades. Bespoke styling.<br/>
          Complete automotive transformation.
        </p>
        
        <div className={styles.actions}>
          <a href="#booking" className={`${styles.primaryBtn} gsap-cta`}>BOOK YOUR TRANSFORMATION</a>
          <a href="#services" className={`${styles.secondaryBtn} gsap-cta`}>EXPLORE SERVICES</a>
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
