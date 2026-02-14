"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CASES } from "@/data/content";

const caseImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
];

function Title({ text }: { text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="flex items-start">
      <motion.span
        className="inline-block w-[4px] bg-[#007AFF] mr-[6px] mt-[0.18em] origin-top"
        initial={{ scaleY: 0, height: 0 }}
        animate={inView ? { scaleY: 1, height: "0.6em" } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontSize: "inherit" }}
      />
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block text-[60px] sm:text-[80px] md:text-[90px] lg:text-[140px] font-bold leading-none tracking-[-0.02em]"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  );
}

function NavButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-3">
      <button onClick={onPrev} className="w-[48px] h-[48px] lg:w-[61px] lg:h-[61px] rounded-full border border-[#ddd] bg-white flex items-center justify-center text-[#999] hover:border-[#999] hover:text-black transition-all" aria-label="이전">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5"/></svg>
      </button>
      <button onClick={onNext} className="w-[48px] h-[48px] lg:w-[61px] lg:h-[61px] rounded-full border border-[#ddd] bg-white flex items-center justify-center text-[#999] hover:border-[#999] hover:text-black transition-all" aria-label="다음">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5"/></svg>
      </button>
    </div>
  );
}

function CaseCard({ c }: { c: typeof CASES[number] }) {
  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10">
      <p className="text-[#007AFF] text-[14px] lg:text-[15px] font-medium mb-4">{c.type}</p>
      <p className="text-[#bbb] text-[12px] lg:text-[13px] mb-3">Select Topics</p>
      <h3 className="text-[20px] sm:text-[22px] lg:text-[26px] font-bold leading-[1.4] mb-4">
        채무 {c.debtBefore} → {c.result}
      </h3>
      <p className="text-[14px] lg:text-[15px] text-[#666] leading-[1.8] mb-6">{c.description}</p>
      <div className="border-t border-[#eee] pt-4 flex items-center justify-between">
        <span className="text-[#007AFF] text-[13px] lg:text-[14px] font-bold">{c.highlight}</span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[#ccc]">
          <path d="M0 6h22M16 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}

export default function CasesSection() {
  const [cur, setCur] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const len = CASES.length;

  const nxt = useCallback(() => setCur(p => (p >= len - 1 ? 0 : p + 1)), [len]);
  const prv = useCallback(() => setCur(p => (p <= 0 ? len - 1 : p - 1)), [len]);

  const c = CASES[cur];

  return (
    <section id="cases" ref={ref} className="relative bg-white overflow-hidden">

      {/* ── 모바일/태블릿: flow 레이아웃 ── */}
      <div className="lg:hidden">
        <div className="px-6 md:px-10 pt-[60px] pb-6">
          <Title text="CASES" />
        </div>

        {/* 이미지 */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${caseImages[cur % caseImages.length]})` }}
            >
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 right-4 z-10 flex items-baseline gap-1 tabular-nums">
            <span className="text-white/90 text-[16px] font-medium">{cur + 1}</span>
            <span className="text-white/40 mx-1 text-[13px]">/</span>
            <span className="text-white/40 text-[13px]">{len}</span>
          </div>
        </div>

        {/* 카드 */}
        <div className="px-6 md:px-10 -mt-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${cur}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="shadow-[0_4px_40px_rgba(0,0,0,0.1)]"
            >
              <CaseCard c={c} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 화살표 */}
        <div className="px-6 md:px-10 py-8">
          <NavButtons onPrev={prv} onNext={nxt} />
        </div>
      </div>

      {/* ── 데스크탑: absolute BKL 레이아웃 ── */}
      <div className="hidden lg:block relative h-screen min-h-[800px]">
        <motion.div
          className="absolute left-0 top-[40%] w-[4px] h-[50px] bg-[#007AFF] origin-top"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <div className="absolute left-[60px] top-[15%] z-20">
          <Title text="CASES" />
        </div>
        <div className="absolute left-[60px] bottom-[15%] z-20">
          <NavButtons onPrev={prv} onNext={nxt} />
        </div>

        <div className="absolute top-[10%] bottom-[10%] left-[18%] right-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${caseImages[cur % caseImages.length]})` }}
            >
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 right-10 z-10 flex items-baseline gap-1 tabular-nums">
            <span className="text-white/90 text-[18px] font-medium">{cur + 1}</span>
            <span className="text-white/40 mx-1 text-[14px]">/</span>
            <span className="text-white/40 text-[14px]">{len}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`card-${cur}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute left-[15%] top-[28%] w-[520px] shadow-[0_8px_60px_rgba(0,0,0,0.1)] z-10"
          >
            <CaseCard c={c} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
