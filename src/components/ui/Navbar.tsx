"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Update scroll progress (0 - 100)
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentY / totalScroll) * 100)));
      }

      // Background styling
      setScrolled(currentY > 40);

      // Hide on scroll down, show on scroll up (beyond 120px)
      if (currentY > 120 && currentY > lastY + 8) {
        setHidden(true);
      } else if (currentY < lastY - 8 || currentY <= 120) {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "services", "transformations", "studio", "reviews", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const navLinks = [
    { name: "HOME", href: "/#home", id: "home" },
    { name: "SERVICES", href: "/#services", id: "services" },
    { name: "TRANSFORMATIONS", href: "/#transformations", id: "transformations" },
    { name: "STUDIO", href: "/#studio", id: "studio" },
    { name: "REVIEWS", href: "/#reviews", id: "reviews" },
    { name: "CONTACT", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top thin scroll-progress bar */}
      <div 
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          hidden && !menuOpen ? styles.headerHidden : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              CARBON
            </Link>
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <ul className={styles.navList}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name} className={styles.navItem}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                      {isActive && <span className={styles.activeIndicator} />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actionContainer}>
            <Link href="/#booking" className={styles.ctaButton}>
              BOOK YOUR TRANSFORMATION
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${styles.line} ${menuOpen ? styles.lineTop : ""}`}></span>
              <span className={`${styles.line} ${menuOpen ? styles.lineMiddle : ""}`}></span>
              <span className={`${styles.line} ${menuOpen ? styles.lineBottom : ""}`}></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
