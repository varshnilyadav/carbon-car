"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Marquee from "@/components/motion/Marquee";
import CountUp from "@/components/motion/CountUp";
import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";
import { business } from "@/lib/business";
import styles from "./Testimonials.module.css";

const googleReviews = [
  {
    id: "review-1",
    initials: "KM",
    name: "Kiran Mahadik",
    date: "2026-09-26",
    dateFormatted: "September 2026",
    stars: 5,
    text: "Got my MG done with PPF at Carbon The Detailing Studio and I'm really happy with the overall experience. The quality of the PPF work is excellent and the finish looks very clean and premium. The team was professional, explained everything properly, and paid attention to the small details. Really happy with how my car turned out. Highly recommended if you're looking for quality PPF work!",
  },
  {
    id: "review-2",
    initials: "AB",
    name: "Aman Bedi",
    date: "2026-08-17",
    dateFormatted: "August 2026",
    stars: 5,
    text: "Got the PPF done for my Creta at CARBON and had an excellent experience overall. The entire process was handled professionally and, most importantly, the work was completed within the committed timeline. A special mention to Shankar, who coordinated everything extremely well and was very helpful throughout the process. He walked me through the different PPF variants, explained the pros and cons of each, and helped me understand what would work best for the car from a long-term protection perspective rather than simply pushing a particular option. Really appreciated the transparency, quality of work, and regular updates throughout. Very happy with the final finish and would definitely recommend CARBON to anyone looking for good-quality PPF and car detailing work in Hyderabad.",
  },
  {
    id: "review-3",
    initials: "KG",
    name: "Koushik Gowd",
    date: "2026-08-10",
    dateFormatted: "August 2026",
    stars: 5,
    text: "Had my BMW 630i GT protected with PPF at Carbon, and honestly, the experience was excellent from start to finish. When you own a premium car like the 630i GT, you expect the same level of perfection in the protection and detailing work. The team did an outstanding job. The PPF installation is extremely clean, with precise edges, excellent finishing, and no compromise on quality. Highly impressed with the workmanship and service. Definitely one of the places I would recommend for premium car PPF and detailing in Hyderabad.",
  },
  {
    id: "review-4",
    initials: "KK",
    name: "Kiran Kumar",
    date: "2026-07-16",
    dateFormatted: "July 2026",
    stars: 5,
    text: "I recently took my BMW E90 320i in for a service while working within a budget. After a thorough inspection, I was provided with a detailed estimate and was able to choose the most essential repairs that fit my budget. What really impressed me was the honesty and transparency throughout the process. Highly recommend their professional approach and quality workmanship!",
  },
  {
    id: "review-5",
    initials: "SK",
    name: "Shashank Kasala",
    date: "2026-06-26",
    dateFormatted: "June 2026",
    stars: 5,
    text: "I had a wonderful experience at Carbon CarSpa. The entire team treated us with genuine warmth and professionalism from the moment we walked in. What impressed me the most was their honesty—they didn't try to upsell unnecessary products. Instead, they patiently explained everything about PPF wraps and car accessories, helping us understand what was actually worth investing in and what wasn't. If you're looking for experts who genuinely care about your car and your budget, I highly recommend Carbon.",
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`} id="reviews">
      <div className="container">
        <SectionHeading
          number="07"
          label="TESTIMONIALS"
          title="WHAT OUR CLIENTS SAY"
          subtitle="Real reviews from verified Google customers who experienced the Carbon difference."
          align="center"
        />

        {/* Continuous Velocity-aware Marquee Track */}
        <div className={styles.trackWrapper}>
          <Marquee speed={36} direction="left" pauseOnHover>
            <div style={{ display: "flex", gap: "24px", paddingRight: "24px" }}>
              {googleReviews.map((review) => (
                <div key={review.id} className={styles.card}>
                  <div className={styles.header}>
                    <div className={styles.avatar}>
                      {review.initials}
                    </div>
                    <div className={styles.info}>
                      <span className={styles.name}>{review.name}</span>
                      {review.date ? (
                        <time className={styles.time} dateTime={review.date}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {review.dateFormatted}
                        </time>
                      ) : null}
                    </div>
                    <div className={styles.googleBadge} title="Verified Google Review">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.stars}>
                    {[...Array(review.stars)].map((_, s) => (
                      <span key={s} style={{ color: "#F4B400", marginRight: "2px" }}>★</span>
                    ))}
                  </div>
                  <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Google Stats & Link with CountUp and sequential star fill */}
        <Reveal y={24} duration={0.7} delay={0.1}>
          <div className={styles.googleReviews}>
            <div className={styles.googleStats}>
              <CountUp end={parseFloat(business.rating.ratingValue)} decimals={1} duration={1.6} className={styles.rating} />
              <div className={styles.ratingStars}>
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="#F4B400"
                    initial={{ opacity: 0, scale: 0.3 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: "backOut" }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </div>
              <span className={styles.count}>{business.rating.ratingValue} ★ Based on {business.rating.reviewCount} verified Google Reviews</span>
            </div>
            <Magnetic strength={0.25}>
              <a 
                href={business.googleMapsUrl} 
                target="_blank" 
                rel="me noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "0.85rem", padding: "0.75rem 1.75rem" }}
              >
                VIEW ON GOOGLE MAPS
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
