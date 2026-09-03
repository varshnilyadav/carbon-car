"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "TRANSFORMATIONS", href: "#transformations" },
    { name: "STUDIO", href: "#studio" },
    { name: "REVIEWS", href: "#reviews" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="#home" className={styles.logo}>
            CARBON
          </Link>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link 
                  href={link.href} 
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actionContainer}>
          <a href="#booking" className={styles.ctaButton}>
            BOOK YOUR TRANSFORMATION
          </a>
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
  );
}
