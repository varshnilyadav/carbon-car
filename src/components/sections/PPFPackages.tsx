"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import CountUp from "@/components/motion/CountUp";
import {
  ppfPackages,
  ppfComparisonRows,
  ppfPackagesNote,
} from "@/data/ppf-packages";
import styles from "./PPFPackages.module.css";

export default function PPFPackages() {
  return (
    <section className={styles.packagesSection} id="packages">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>PAINT PROTECTION FILM</span>
          <h2 className={styles.title}>ENGINEERED PROTECTION PACKAGES</h2>
          <p className={styles.subtitle}>
            Select the optimal warranty duration and protective threshold for
            your driving demands. All packages are precision-cut and
            installed by certified specialists in dust-controlled clean bays.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className={styles.cardsGrid}>
          {ppfPackages.map((pkg, index) => {
            const isPopular = pkg.id === "advance";

            return (
              <Reveal
                key={pkg.id}
                y={28}
                duration={0.65}
                delay={index * 0.1}
                width="100%"
                className={styles.cardWrapper}
              >
                <TiltCard maxTilt={6}>
                  <div
                    className={`${styles.card} ${
                      isPopular ? styles.popularCard : ""
                    }`}
                  >
                    <div className={styles.glossSweep} aria-hidden="true" />

                    {pkg.badge && (
                      <div className={styles.popularBadge}>{pkg.badge}</div>
                    )}

                    <div className={styles.cardHeader}>
                      <h3 className={styles.tierName}>{pkg.name}</h3>
                      <div className={styles.yearsBlock}>
                        <CountUp
                          end={pkg.years}
                          className={styles.yearsNumber}
                        />
                        <span className={styles.yearsLabel}>
                          YEARS WARRANTY
                        </span>
                      </div>
                      <p className={styles.tagline}>{pkg.tagline}</p>
                    </div>

                    {/* Coverage Line */}
                    <div className={styles.coverageBlock}>
                      <span className={styles.coverageLabel}>COVERAGE</span>
                      <span className={styles.coverageText}>
                        {pkg.coverage}
                      </span>
                    </div>

                    {/* Feature Checklist */}
                    <ul className={styles.featureList}>
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className={styles.featureItem}>
                          <svg
                            className={styles.checkIcon}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best for */}
                    <div className={styles.bestForBlock}>
                      <span className={styles.bestForLabel}>IDEAL FOR</span>
                      <p className={styles.bestForText}>{pkg.bestFor}</p>
                    </div>

                    {/* CTA Button: Pre-selects service and package in booking */}
                    <Link
                      href={`/?service=ppf&package=${pkg.id}#booking`}
                      className={`${styles.bookBtn} ${
                        isPopular ? styles.popularBookBtn : ""
                      }`}
                    >
                      Book This Package
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* Pricing & Consultation Disclaimer */}
        <p className={styles.packagesNote}>{ppfPackagesNote}</p>

        {/* Compare Packages Table */}
        <Reveal y={24} duration={0.65}>
          <div className={styles.compareSection}>
            <div className={styles.compareHeader}>
              <h3 className={styles.compareTitle}>COMPARE PPF PACKAGES</h3>
              <p className={styles.compareSubtitle}>
                Detailed side-by-side technical and coverage specifications
              </p>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Essential</th>
                    <th className={styles.highlightCol}>Advance (Popular)</th>
                    <th>Ultimate</th>
                  </tr>
                </thead>
                <tbody>
                  {ppfComparisonRows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className={styles.attrCell}>{row.attribute}</td>
                      <td className={styles.valCell}>{row.essential}</td>
                      <td className={`${styles.valCell} ${styles.highlightCol}`}>
                        {row.advance}
                      </td>
                      <td className={styles.valCell}>{row.ultimate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
