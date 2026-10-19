"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../ui/SectionHeading";
import { galleryItems } from "@/data/siteData";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[0] | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const filteredItems = galleryItems;
  const shouldCenterRow = filteredItems.length <= 1;

  // Reset progress bar & counter on mount, and refresh ScrollTrigger after layout settles
  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = "scaleX(0)";
    }
    if (counterRef.current) {
      counterRef.current.textContent = `01 / ${String(filteredItems.length).padStart(2, "0")}`;
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 420);

    return () => clearTimeout(timer);
  }, []);

  // Lock Lenis and body scroll when Lightbox is open
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

  // Keyboard navigation (ESC, Arrow keys) for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setActiveItem(filteredItems[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setActiveItem(filteredItems[prevIndex]);
      }
    };

    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, filteredItems]);

  // GSAP Horizontal Pinned Scroll on desktop (min-width: 1024px)
  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reducedMotion } = context.conditions as {
            isDesktop: boolean;
            reducedMotion: boolean;
          };

          if (!isDesktop || reducedMotion) {
            if (trackRef.current) {
              gsap.set(trackRef.current, { clearProps: "all" });
            }
            return;
          }

          if (!sectionRef.current || !trackRef.current) return;

          const track = trackRef.current;
          const scrollDistance = track.scrollWidth - window.innerWidth;

          // If cards fit entirely within screen width, disable pin and keep centered
          if (scrollDistance <= 20) {
            gsap.set(track, { clearProps: "all" });
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              anticipatePin: 1,
              start: "top top",
              end: () => `+=${Math.max(0, track.scrollWidth - window.innerWidth)}`,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progressBarRef.current) {
                  progressBarRef.current.style.transform = `scaleX(${self.progress})`;
                }
                if (counterRef.current) {
                  const count = filteredItems.length;
                  const currentIdx = Math.min(
                    count,
                    Math.max(1, Math.round(self.progress * (count - 1)) + 1)
                  );
                  counterRef.current.textContent = `${String(currentIdx).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
                }
              },
            },
          });

          // Horizontal track translation
          tl.to(
            track,
            {
              x: () => -Math.max(0, track.scrollWidth - window.innerWidth),
              ease: "none",
            },
            0
          );

          // Subtle inner image parallax opposite to scroll direction
          const parallaxImages = track.querySelectorAll(`.${styles.parallaxImg}`);
          if (parallaxImages.length > 0) {
            tl.fromTo(
              parallaxImages,
              { xPercent: -7 },
              { xPercent: 7, ease: "none" },
              0
            );
          }
        }
      );

      return () => {
        mm.revert();
      };
    },
    { dependencies: [], scope: sectionRef }
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section ref={sectionRef} className={styles.gallerySection} id="transformations">
      <span id="gallery" style={{ position: "absolute", top: 0 }} />

      <div className={styles.pinWrapper}>
        {/* Pinned top: SectionHeading */}
        <div className={styles.pinnedHeader}>
          <div className="container">
            <SectionHeading
              number="05"
              label="GALLERY"
              title="CAR TRANSFORMATION GALLERY"
              align="center"
            />
          </div>
        </div>

        {/* Horizontal Track Viewport */}
        <div className={styles.trackViewport}>
          <div
            ref={trackRef}
            className={`${styles.track} ${shouldCenterRow ? styles.trackCentered : ""}`}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  layoutId={`gallery-item-${item.id}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.card}
                  onClick={() => setActiveItem(item)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.category} image: ${item.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveItem(item);
                    }
                  }}
                >
                  <div className={styles.imageFrame}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 85vw, 560px"
                      className={styles.parallaxImg}
                      loading={idx < 3 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className={styles.overlay}>
                    <span className={styles.category}>{item.category}</span>
                    <div className={styles.icon}>+</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bar: Progress track & Counter (desktop pinned) */}
        {!shouldCenterRow && (
          <div className={styles.bottomBar}>
            <div className="container">
              <div className={styles.bottomBarInner}>
                <div className={styles.progressBarWrapper}>
                  <div ref={progressBarRef} className={styles.progressBar} />
                </div>
                <div ref={counterRef} className={styles.counter}>
                  01 / {String(filteredItems.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shared Element Lightbox */}
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
                <button
                  onClick={handlePrev}
                  className={styles.navBtn}
                  aria-label="Previous image"
                >
                  PREV
                </button>
                <button
                  onClick={handleNext}
                  className={styles.navBtn}
                  aria-label="Next image"
                >
                  NEXT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
