"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { REVIEWS } from "@/data/content";

const cardImages = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=600&q=80",
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
          className="inline-block text-[50px] sm:text-[70px] md:text-[90px] lg:text-[140px] font-bold leading-none tracking-[-0.02em]"
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

export default function ReviewsSection() {
  const ref = useRef(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const mobileScrollL = useCallback(() => mobileScrollRef.current?.scrollBy({ left: -320, behavior: "smooth" }), []);
  const mobileScrollR = useCallback(() => mobileScrollRef.current?.scrollBy({ left: 320, behavior: "smooth" }), []);
  const desktopScrollL = useCallback(() => desktopScrollRef.current?.scrollBy({ left: -420, behavior: "smooth" }), []);
  const desktopScrollR = useCallback(() => desktopScrollRef.current?.scrollBy({ left: 420, behavior: "smooth" }), []);

  return (
    <section id="reviews" ref={ref} className="relative bg-white overflow-hidden">

      {/* ── 모바일/태블릿: flow 레이아웃 ── */}
      <div className="lg:hidden">
        <div className="px-6 md:px-10 pt-[60px] pb-6">
          <Title text="REVIEWS" />
        </div>

        {/* 가로 스크롤 카드 */}
        <div
          ref={mobileScrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar px-6 md:px-10 pb-2"
        >
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
            >
              <div
                className="w-full h-[180px] sm:h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${cardImages[i % cardImages.length]})` }}
              />
              <div className="pt-5 pb-2">
                <p className="text-[#007AFF] text-[13px] font-medium mb-2">{r.type}</p>
                <p className="text-[15px] font-medium leading-[1.7] line-clamp-4">{r.text}</p>
                <p className="mt-3 text-[13px] text-[#999]">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 화살표 */}
        <div className="px-6 md:px-10 py-8">
          <NavButtons onPrev={mobileScrollL} onNext={mobileScrollR} />
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
          <Title text="REVIEWS" />
        </div>

        <div className="absolute left-[60px] bottom-[15%] z-20">
          <NavButtons onPrev={desktopScrollL} onNext={desktopScrollR} />
        </div>

        <div className="absolute top-[12%] bottom-[12%] left-[30%] right-0">
          <div ref={desktopScrollRef} className="flex gap-[36px] overflow-x-auto hide-scrollbar pr-[60px] h-full items-start pt-[20px]">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 w-[400px]"
              >
                <div
                  className="w-full h-[260px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${cardImages[i % cardImages.length]})` }}
                />
                <div className="pt-6 pb-2">
                  <p className="text-[#007AFF] text-[13px] font-medium mb-3">{r.type}</p>
                  <p className="text-[17px] font-medium leading-[1.7] line-clamp-4">{r.text}</p>
                  <p className="mt-4 text-[13px] text-[#999]">{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
