"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { galleryItems, galleryCategories } from "@/data/siteData";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const ref = useReveal();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "ALL" || item.category === activeCategory
  );

  return (
    <section className={`section ${styles.gallery}`} ref={ref}>
      <div className="container">
        <SectionHeading
          number="08"
          label="GALLERY"
          title="CAR TRANSFORMATION GALLERY"
          align="center"
        />

        <div className={styles.filters}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.gridItem} reveal`}
              style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
              onClick={() => setLightboxIndex(galleryItems.indexOf(item))}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}>
                <span className={styles.category}>{item.category}</span>
                <div className={styles.icon}>+</div>
              </div>
            </div>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
            <button className={styles.closeBtn} onClick={() => setLightboxIndex(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6L18 18" />
              </svg>
            </button>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.lightboxImageContainer}>
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].alt}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <div className={styles.lightboxInfo}>
                <span>{galleryItems[lightboxIndex].category}</span>
                <p>{galleryItems[lightboxIndex].alt}</p>
              </div>
              <div className={styles.lightboxNav}>
                <button 
                  onClick={() => setLightboxIndex((prev) => prev! > 0 ? prev! - 1 : galleryItems.length - 1)}
                  className={styles.navBtn}
                >
                  PREV
                </button>
                <button 
                  onClick={() => setLightboxIndex((prev) => prev! < galleryItems.length - 1 ? prev! + 1 : 0)}
                  className={styles.navBtn}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
