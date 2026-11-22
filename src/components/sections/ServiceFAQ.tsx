"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ServiceFAQ } from "@/data/siteData";
import styles from "./ServiceFAQ.module.css";

interface ServiceFAQProps {
  faqs: ServiceFAQ[];
  serviceTitle: string;
}

export default function ServiceFAQSection({ faqs, serviceTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} aria-label={`${serviceTitle} FAQs`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.title}>{serviceTitle.toUpperCase()} FAQ</h2>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `service-faq-answer-${index}`;
            const buttonId = `service-faq-btn-${index}`;

            return (
              <div key={index} className={styles.faqItem}>
                <button
                  id={buttonId}
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <motion.div
                    className={styles.icon}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className={styles.plusSymbol}>+</span>
                  </motion.div>
                </button>

                {/* Server-rendered HTML answer with CSS grid collapse */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.answerWrapper} ${isOpen ? styles.open : ""}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
