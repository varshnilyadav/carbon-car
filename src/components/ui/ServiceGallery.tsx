"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import styles from "./ServiceGallery.module.css";

export interface ServiceGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ServiceGalleryProps {
  images?: ServiceGalleryImage[];
  serviceTitle: string;
}

export default function ServiceGallery({
  images = [],
  serviceTitle,
}: ServiceGalleryProps) {
  const [activeItem, setActiveItem] = useState<ServiceGalleryImage | null>(null);

  // Lock Lenis & body scroll when lightbox is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = (
      window as unknown as {
        __lenis?: { stop: () => void; start: () => void };
      }
    ).__lenis;

    if (activeItem) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  // Keyboard navigation (ESC, Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem || images.length === 0) return;
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowRight") {
        const idx = images.findIndex((img) => img.src === activeItem.src);
        if (idx !== -1) {
          setActiveItem(images[(idx + 1) % images.length]);
        }
      } else if (e.key === "ArrowLeft") {
        const idx = images.findIndex((img) => img.src === activeItem.src);
        if (idx !== -1) {
          setActiveItem(images[(idx - 1 + images.length) % images.length]);
        }
      }
    };

    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, images]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem || images.length === 0) return;
    const idx = images.findIndex((img) => img.src === activeItem.src);
    if (idx !== -1) {
      setActiveItem(images[(idx + 1) % images.length]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem || images.length === 0) return;
    const idx = images.findIndex((img) => img.src === activeItem.src);
    if (idx !== -1) {
      setActiveItem(images[(idx - 1 + images.length) % images.length]);
    }
  };

  const hasImages = images && images.length > 0;

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>SERVICE GALLERY</h2>
          <div className={styles.headerLine} />
        </div>

        {/* Empty state: 3 elegant placeholder tiles */}
        {!hasImages ? (
          <div className={styles.grid}>
            {/* TODO: Add service gallery photos to /public/services/<slug>/ and register in siteData.ts */}
            {[1, 2, 3].map((num) => (
              <Reveal key={num} y={24} duration={0.6} delay={num * 0.1}>
                <div className={styles.placeholderCard}>
                  <svg
                    className={styles.placeholderWatermark}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span className={styles.placeholderTitle}>
                    Photo Coming Soon
                  </span>
                  <span className={styles.placeholderSub}>
                    {serviceTitle} Studio Transformation 0{num}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className={styles.grid}>
            {images.map((img, idx) => (
              <Reveal key={img.src} y={24} duration={0.6} delay={idx * 0.08}>
                <motion.div
                  className={styles.card}
                  layoutId={`service-gallery-${img.src}`}
                  onClick={() => setActiveItem(img)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${img.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveItem(img);
                    }
                  }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.overlay}>
                    <div className={styles.zoomIcon}>+</div>
                    {img.caption && (
                      <span className={styles.caption}>{img.caption}</span>
                    )}
                    <p className={styles.alt}>{img.alt}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Shared-element Lightbox */}
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
              aria-label="Close image modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6L18 18" />
              </svg>
            </button>

            <motion.div
              className={styles.lightboxContent}
              layoutId={`service-gallery-${activeItem.src}`}
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
                {activeItem.caption && <span>{activeItem.caption}</span>}
                <p>{activeItem.alt}</p>
              </div>

              {images.length > 1 && (
                <div className={styles.lightboxNav}>
                  <button
                    onClick={handlePrev}
                    className={styles.navBtn}
                    aria-label="Previous photo"
                  >
                    PREV
                  </button>
                  <button
                    onClick={handleNext}
                    className={styles.navBtn}
                    aria-label="Next photo"
                  >
                    NEXT
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
