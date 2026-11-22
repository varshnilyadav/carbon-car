"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  index?: number;
  isPrimary?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  title,
  description,
  image,
  imageAlt,
  index = 1,
  isPrimary = false,
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const [imageError, setImageError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  const badgeNumber = String(index).padStart(2, "0");
  const fallbackAlt = `${title} service at CARBON - The Detailing Studio Jubilee Hills Hyderabad`;

  return (
    <article
      className={`${styles.card} ${isPrimary ? styles.primaryCard : ""}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.glossSweep} aria-hidden="true" />
      {isPrimary && (
        <div className={styles.primaryTag} aria-hidden="true">
          PRIMARY STUDIO SERVICE
        </div>
      )}

      {imageError ? (
        <div className={styles.placeholderBox}>
          <div className={styles.placeholderInner}>
            <span className={styles.placeholderText}>
              IMAGE PLACEHOLDER • AWAITING PRODUCTION ASSET
            </span>
            <span className={styles.placeholderSub}>ASSET PATH: {image}</span>
          </div>
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={imageAlt || fallbackAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            loading="lazy"
            onError={() => setImageError(true)}
          />
          <div className={styles.imageBottomGradient} aria-hidden="true" />
          <div className={styles.serviceBadge} aria-hidden="true">
            CARBON AUTOMOTIVE • SRV-{badgeNumber}
          </div>
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/services/${slug}`} className={styles.titleLink}>
            {title}
          </Link>
        </h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.link} aria-hidden="true">
          <span>View details</span>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </article>
  );
};
