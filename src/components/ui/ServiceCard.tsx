"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ slug, title, description, image }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <Link 
      href={`/services/${slug}`} 
      className={styles.card}
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.glossSweep} aria-hidden="true" />
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image} 
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.link}>
          View Details 
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
};
