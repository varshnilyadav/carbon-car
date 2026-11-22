"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "@/data/siteData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.faqSection}`} id="faq">
      <div className={`container ${styles.container}`}>
        <SectionHeading
          number="09"
          label="FAQ"
          title="FREQUENTLY ASKED QUESTIONS"
          align="center"
        />

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `home-faq-answer-${index}`;
            const buttonId = `home-faq-btn-${index}`;

            return (
              <div key={index} className={styles.faqItem}>
                <button
                  id={buttonId}
                  type="button"
                  className={`${styles.questionBtn} ${isOpen ? styles.active : ""}`}
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

                {/* Always rendered in DOM for SEO crawlability */}
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
