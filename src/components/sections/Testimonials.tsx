"use client";

import { useState } from "react";
import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "@/data/siteData";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const ref = useReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`section ${styles.testimonials}`} id="reviews" ref={ref}>
      <div className="container">
        <SectionHeading
          number="06"
          label="REVIEWS"
          title="TRUSTED BY AUTOMOTIVE ENTHUSIASTS"
          align="center"
        />

        <div className={`${styles.carousel} reveal`}>
          <div className={styles.quoteIcon}>&quot;</div>
          
          <div className={styles.carouselInner}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
              >
                <p className={styles.review}>{testimonial.review}</p>
                <div className={styles.author}>
                  <div className={styles.authorLine}></div>
                  <div className={styles.authorInfo}>
                    <span className={styles.name}>{testimonial.name}</span>
                    <span className={styles.vehicle}>{testimonial.vehicle} • {testimonial.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button onClick={prev} className={styles.controlBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.controlBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${styles.googleReviews} reveal`}>
          <div className={styles.googleStats}>
            <span className={styles.rating}>4.9</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F4B400">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className={styles.count}>Based on verified Google Reviews</span>
          </div>
          <a 
            href="https://www.google.com/maps/place/CARBON/@17.4253809,78.3951665,952m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb91cd034b5469:0x580848e2ba547d27!8m2!3d17.4253809!4d78.3951665!16s%2Fg%2F11x9bphbmx?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            VIEW ALL GOOGLE REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
}
