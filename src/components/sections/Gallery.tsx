"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Magnetic from "@/components/motion/Magnetic";
import { galleryItems, galleryCategories } from "@/data/siteData";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "ALL" || item.category === activeCategory
  );

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };

    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveItem(galleryItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveItem(galleryItems[prevIndex]);
  };

  return (
    <section className={`section ${styles.gallery}`} id="transformations">
      <span id="gallery" style={{ position: "absolute", top: 0 }} />
      <div className="container">
        <SectionHeading
          number="05"
          label="GALLERY"
          title="CAR TRANSFORMATION GALLERY"
          align="center"
        />

        <div className={styles.filters}>
          {galleryCategories.map((cat) => (
            <Magnetic key={cat} strength={0.2}>
              <button
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Animated reflow grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                layoutId={`gallery-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={styles.gridItem}
                onClick={() => setActiveItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className={styles.itemImage}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <div className={styles.icon}>+</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Shared Element Lightbox with Esc & Click-outside closing */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6L18 18" />
                </svg>
              </button>

              <motion.div
                className={styles.lightboxContent}
                layoutId={`gallery-item-${activeItem.id}`}
                onClick={(e) => e.stopPropagation()}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.lightboxImageContainer}>
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className={styles.lightboxInfo}>
                  <span>{activeItem.category}</span>
                  <p>{activeItem.alt}</p>
                </div>
                <div className={styles.lightboxNav}>
                  <button onClick={handlePrev} className={styles.navBtn}>
                    PREV
                  </button>
                  <button onClick={handleNext} className={styles.navBtn}>
                    NEXT
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
