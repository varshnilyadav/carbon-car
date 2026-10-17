"use client";

import React from "react";
import Link from "next/link";
import styles from "./FloatingContact.module.css";

export default function FloatingContact() {
  return (
    <>
      {/* Left Bottom Corner: Floating CTA Banner (BOOK NOW) */}
      <div className={styles.leftBottomBanner}>
        <Link href="/#booking" className={styles.bookNowBtn} aria-label="Book your transformation now">
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
          href="https://wa.me/919959517361"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.floatingIconBtn} ${styles.whatsappBtn}`}
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp +91 9959517361"
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
    </>
  );
}
