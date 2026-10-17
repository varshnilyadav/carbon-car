"use client";

import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import styles from "./Testimonials.module.css";

const googleReviews = [
  {
    id: "review-1",
    initials: "SC",
    name: "Snehith Chandra Reddy",
    time: "1 year ago",
    stars: 5,
    text: "I recently had my car detailed at CARBON Car Detailing Services, and I couldn't be more impressed! The team did an outstanding job, paying attention to every little detail inside and out. My car looks brand new, and they were able to remove stickers and stains I thought were permanent."
  },
  {
    id: "review-2",
    initials: "AA",
    name: "Avinash Ankala",
    time: "1 year ago",
    stars: 5,
    text: "I recently had my car detailed at CARBON AUTO DETAILING STUDIO, and I'm thoroughly impressed with the results. The attention to detail was impeccable, from the exterior shine to the interior cleanliness. My car looks and feels brand new again!"
  },
  {
    id: "review-3",
    initials: "VC",
    name: "Vinod Chiruvella",
    time: "1 month ago",
    stars: 5,
    text: "For the first time I visited CARBON STUDIO two weeks ago for my Nexon. The service they gave was simply superb. Truly satisfied with the service. Simply I can say — A recommended one."
  },
  {
    id: "review-4",
    initials: "NT",
    name: "Nitesh Thakur",
    time: "1 month ago",
    stars: 5,
    text: "Best car detailing studio in Hyderabad. Very much satisfied with their ceramic coating and interior detailing. Highly recommended."
  },
  {
    id: "review-5",
    initials: "NV",
    name: "Naveen Vodnala",
    time: "1 year ago",
    stars: 5,
    text: "The staff was very good. The shine and cleanliness are amazing, and I can tell they used high-quality products. This was definitely worth every penny. Highly recommend CARBON to anyone looking to give their car a premium treatment."
  },
  {
    id: "review-6",
    initials: "NK",
    name: "Naresh Koyya",
    time: "2 months ago",
    stars: 5,
    text: "I would recommend this place for perfect car wash. Price worth service guaranteed."
  }
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className={`section ${styles.testimonials}`} id="reviews" ref={ref}>
      <div className="container">
        <SectionHeading
          number="06"
          label="TESTIMONIALS"
          title="WHAT OUR CLIENTS SAY"
          subtitle="Real reviews from verified Google customers who experienced the Carbon difference."
          align="center"
        />

        {/* Continuous Marquee Track */}
        <div className={`${styles.trackWrapper} reveal`}>
          <div className={styles.track}>
            {[...googleReviews, ...googleReviews].map((review, index) => (
              <div key={`${review.id}-${index}`} className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.avatar}>
                    {review.initials}
                  </div>
                  <div className={styles.info}>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.time}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {review.time}
                    </span>
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

                <div className={styles.stars}>★★★★★</div>
                <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Stats & Link */}
        <div className={`${styles.googleReviews} reveal`}>
          <div className={styles.googleStats}>
            <span className={styles.rating}>4.9</span>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F4B400">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className={styles.count}>Based on verified Google Reviews</span>
          </div>
          <a 
            href="https://www.google.com/maps/place/CARBON/@17.4253809,78.3925916,1858m/data=!3m1!1e3!4m8!3m7!1s0x3bcb91cd034b5469:0x580848e2ba547d27!8m2!3d17.4253809!4d78.3951665!9m1!1b1!16s%2Fg%2F11x9bphbmx!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            VIEW ALL GOOGLE REVIEWS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
