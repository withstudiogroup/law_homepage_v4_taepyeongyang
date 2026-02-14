"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  english: string;
  korean: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  english,
  korean,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`section-title-gap ${align === "center" ? "text-center" : ""}`}
    >
      {/* BKL-style accent mark — diagonal gold slash */}
      <div
        className={`mb-4 ${align === "center" ? "flex justify-center" : ""}`}
      >
        <div className="accent-slash" />
      </div>

      <h2
        className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-light tracking-[0.02em] leading-[0.85] ${
          light ? "text-white/20" : "text-navy-900/[0.18]"
        }`}
      >
        {english}
      </h2>
      <div
        className={`flex items-center gap-4 mt-3 md:mt-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className="gold-line" />
        <p
          className={`text-lg md:text-xl font-semibold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {korean}
        </p>
        {align === "center" && <div className="gold-line" />}
      </div>
    </motion.div>
  );
}
