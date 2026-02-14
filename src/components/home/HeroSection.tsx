"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, OFFICE_INFO } from "@/data/content";

const DURATION = 6000;
const heroImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prog, setProg] = useState(0);
  const [lock, setLock] = useState(false);
  const len = SERVICES.length;

  const go = useCallback((n: number) => {
    if (lock) return;
    setLock(true);
    setProg(0);
    setIdx(n);
    setTimeout(() => setLock(false), 700);
  }, [lock]);

  const nxt = useCallback(() => go(idx >= len - 1 ? 0 : idx + 1), [idx, len, go]);
  const prv = useCallback(() => go(idx <= 0 ? len - 1 : idx - 1), [idx, len, go]);

  useEffect(() => {
    if (paused) return;
    let t = 0;
    const iv = setInterval(() => {
      t += 50;
      setProg(t / DURATION);
      if (t >= DURATION) nxt();
    }, 50);
    return () => clearInterval(iv);
  }, [nxt, paused, idx]);

  const s = SERVICES[idx];

  return (
    <section id="hero" className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden">
      {/* 배경 이미지 */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === idx ? 1 : 0,
          }}
        />
      ))}
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 콘텐츠 — BKL: 좌측, 수직 중앙 */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10 lg:px-[60px]">
        <div className="max-w-[650px]">
          <p className="text-white/50 text-[18px] mb-8">Practices</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[57px] font-bold text-white leading-[1.2] mb-6">
                {s.subtitle}
              </h1>
              <p className="text-white/80 text-[17px] lg:text-[18px] leading-[1.6] max-w-[540px]">
                {s.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 하단 컨트롤 — BKL: 프로그레스 바 + 페이지네이션 + 원형 화살표 */}
        <div className="absolute bottom-[80px] lg:bottom-[100px] left-6 md:left-10 lg:left-[60px] flex items-center gap-6">
          <div className="hidden sm:block w-[160px] lg:w-[200px] h-[2px] bg-white/15">
            <div className="h-full bg-white/50" style={{ width: `${prog * 100}%`, transition: "none" }} />
          </div>

          <div className="flex items-baseline gap-1 text-white/40 tabular-nums">
            <span className="text-white text-[20px] font-medium">{idx + 1}</span>
            <span className="mx-2 text-[14px]">/</span>
            <span className="text-[14px]">{len}</span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={prv} className="w-[50px] h-[50px] lg:w-[61px] lg:h-[61px] rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/20 transition-all" aria-label="이전">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5"/></svg>
            </button>
            <button onClick={() => setPaused(!paused)} className="w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/25 hover:text-white/50 transition-all" aria-label={paused ? "재생" : "정지"}>
              {paused ? (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0L10 6L0 12Z"/></svg>
              ) : (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><rect x="1" width="3" height="12"/><rect x="6" width="3" height="12"/></svg>
              )}
            </button>
            <button onClick={nxt} className="w-[50px] h-[50px] lg:w-[61px] lg:h-[61px] rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/20 transition-all" aria-label="다음">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* SEMINAR 카드 — BKL 스타일 */}
      <div className="hidden lg:block absolute bottom-10 right-[60px]">
        <a href={`tel:${OFFICE_INFO.phone}`} className="group block w-[180px] bg-black/40 backdrop-blur-sm border border-white/10 text-white p-5 hover:bg-black/60 transition-all">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1">Consultation</p>
          <p className="text-[14px] font-medium">무료상담</p>
          <div className="mt-3 flex justify-end">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5"/></svg>
          </div>
        </a>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/15 tracking-[0.3em] uppercase font-medium" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
