"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import {
  SHOW_CLARO_SECTION,
  claroPPFData,
  ClaroHighlight,
} from "@/data/claro-ppf";
import styles from "./ClaroPPFSection.module.css";

// Helper icon renderer
function HighlightIcon({ name }: { name?: ClaroHighlight["iconName"] }) {
  switch (name) {
    case "sparkles":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "sun":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "feather":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      );
    case "shield":
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
}

export default function ClaroPPFSection() {
  if (!SHOW_CLARO_SECTION) return null;

  const {
    brandName,
    tagline,
    description,
    brandImage,
    logoUrl,
    videoUrl,
    highlights,
    specifications,
  } = claroPPFData;

  return (
    <section className={styles.claroSection} id="claro-ppf">
      <div className="container">
        {/* Brand Banner */}
        <div className={styles.brandBanner}>
          <Reveal y={24} duration={0.6}>
            <span className={styles.brandEyebrow}>STUDIO IN-HOUSE BRAND</span>
            <h2 className={styles.brandTitle}>{brandName}</h2>
            {tagline && <p className={styles.brandTagline}>{tagline}</p>}

            {/* Logo Slot (if provided) */}
            {logoUrl && (
              <div className={styles.logoSlot}>
                <Image
                  src={logoUrl}
                  alt={`${brandName} Logo`}
                  width={180}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}

            {description && <p className={styles.brandDesc}>{description}</p>}

            {/* Brand Graphic/Artwork Image Slot */}
            {brandImage && (
              <div className={styles.brandImageWrapper}>
                <Image
                  src={brandImage}
                  alt="Claro PPF Engineered Paint Protection Film"
                  width={1427}
                  height={1102}
                  className={styles.brandImage}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                />
              </div>
            )}
          </Reveal>
        </div>

        {/* Highlights Grid (if provided) */}
        {highlights && highlights.length > 0 && (
          <div className={styles.highlightsGrid}>
            {highlights.map((item, idx) => (
              <Reveal key={idx} y={24} duration={0.6} delay={idx * 0.08}>
                <div className={styles.highlightCard}>
                  <div className={styles.glossSweep} aria-hidden="true" />
                  <div className={styles.iconWrapper}>
                    <HighlightIcon name={item.iconName} />
                  </div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightText}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Specifications Table Slot (if provided) */}
        {specifications && specifications.length > 0 && (
          <Reveal y={24} duration={0.65}>
            <div className={styles.specsSection}>
              <div className={styles.specsHeader}>
                <h3 className={styles.specsTitle}>TECHNICAL SPECIFICATIONS</h3>
              </div>
              <table className={styles.specsTable}>
                <tbody>
                  {specifications.map((spec, sIdx) => (
                    <tr key={sIdx}>
                      <td className={styles.specProp}>{spec.property}</td>
                      <td className={styles.specVal}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}

        {/* Media / Video Placeholder Slot */}
        <Reveal y={24} duration={0.65}>
          {videoUrl ? (
            <div className={styles.mediaSlot}>
              <video
                src={videoUrl}
                controls
                className={styles.brandVideo}
                preload="metadata"
              />
            </div>
          ) : (
            <div className={styles.mediaSlot}>
              {/* TODO: Add Claro PPF brand video or showcase image gallery */}
              <div className={styles.mediaIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <h4 className={styles.mediaTitle}>Brand Showcase Video</h4>
              <p className={styles.mediaSub}>
                Studio testing, water contact angle & high-speed gravel defense footage coming soon.
              </p>
            </div>
          )}
        </Reveal>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <Reveal y={20} duration={0.6} delay={0.15}>
            <Link
              href="/?service=ppf&package=claro#booking"
              className={styles.claroBtn}
            >
              Ask About Claro PPF
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
