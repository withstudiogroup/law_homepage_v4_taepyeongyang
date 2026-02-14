"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function Counter({
  value,
  suffix = "",
  label,
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const stepTime = (duration * 1000) / end;
    const increment = Math.max(1, Math.floor(end / 60));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime * increment);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white leading-none">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <p className="mt-2 text-sm sm:text-base text-white/60 tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}
