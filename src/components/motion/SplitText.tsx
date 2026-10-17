"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: (custom: { delay: number; stagger: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  highlightWords = [],
  highlightClass = "",
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
      >
        {words.map((word, i) => {
          const isHighlight = highlightWords.some(
            (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
          );
          return (
            <span key={i} className={isHighlight ? highlightClass : undefined}>
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={{ delay, stagger }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      style={{ overflow: "hidden" }}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              marginRight: i < words.length - 1 ? "0.28em" : "0",
            }}
          >
            <motion.span
              variants={wordVariants}
              style={{ display: "inline-block" }}
              className={isHighlight ? highlightClass : undefined}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}
