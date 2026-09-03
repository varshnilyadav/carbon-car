"use client";

import { useState } from "react";
import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "@/data/siteData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.faqSection}`} ref={ref}>
      <div className={`container ${styles.container}`}>
        <SectionHeading
          number="11"
          label="FAQ"
          title="FREQUENTLY ASKED QUESTIONS"
          align="center"
        />

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} reveal`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <button 
                className={`${styles.questionBtn} ${openIndex === index ? styles.active : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.question}>{faq.question}</span>
                <div className={styles.icon}>
                  <div className={styles.iconLine}></div>
                  <div className={`${styles.iconLine} ${styles.vertical}`}></div>
                </div>
              </button>
              <div 
                className={styles.answerContainer}
                style={{ height: openIndex === index ? "auto" : "0px", opacity: openIndex === index ? 1 : 0 }}
              >
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
