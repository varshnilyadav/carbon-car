"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import styles from "./FloatingContact.module.css";

export default function FloatingContact() {
  const handleBookNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      const target = document.getElementById("consultation") || document.getElementById("booking");
      if (target && (window.location.pathname === "/" || window.location.pathname === "")) {
        e.preventDefault();
        const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, opts: object) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(target, { offset: -50, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        history.pushState(null, "", "#consultation");
        setTimeout(() => {
          const nameInput = document.getElementById("name") as HTMLInputElement | null;
          nameInput?.focus();
        }, 1200);
      }
    }
  };

  return (
    <>
      {/* Left Bottom Corner: Floating CTA Banner (BOOK NOW) */}
      <div className={styles.leftBottomBanner}>
        <Link
          href="/#consultation"
          onClick={handleBookNow}
          className={styles.bookNowBtn}
          aria-label="Book your consultation now"
        >
          <span className={styles.pulseDot} />
          <span className={styles.bookText}>BOOK NOW</span>
          <svg
            className={styles.bookArrow}
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Right Bottom Corner: Floating WhatsApp & Instagram Icons */}
      <div className={styles.rightBottomIcons}>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/carbon.hyd/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingIconBtn} ${styles.instagramBtn}`}
          aria-label="Follow us on Instagram"
          title="Instagram @carbon.hyd"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* WhatsApp Icon */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingIconBtn} ${styles.whatsappBtn}`}
          aria-label="Chat with us on WhatsApp"
          title={`Chat on WhatsApp ${siteConfig.whatsappNumber}`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (< 768px) */}
      <nav className={styles.mobileStickyBar} aria-label="Quick contact and booking bar">
        <a
          href="tel:+919959517361"
          className={styles.mobileBarItem}
          aria-label="Call CARBON studio"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>CALL</span>
        </a>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mobileBarItem} ${styles.mobileBarItemWhatsapp}`}
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>WHATSAPP</span>
        </a>

        <Link
          href="/#consultation"
          onClick={handleBookNow}
          className={`${styles.mobileBarItem} ${styles.mobileBarItemBook}`}
          aria-label="Book your slot"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>BOOK</span>
        </Link>
      </nav>
    </>
  );
}
