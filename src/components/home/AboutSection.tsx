"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ATTORNEY, SERVICES } from "@/data/content";

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
          className="inline-block text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] font-bold leading-none tracking-[-0.02em]"
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

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const practiceList = [
    ...SERVICES.map(s => ({ en: s.subtitle, ko: s.title })),
    ...ATTORNEY.credentials.map(c => ({ en: c.en, ko: c.value })),
  ];

  return (
    <section id="about" ref={ref} className="relative bg-white overflow-hidden">
      {/* ── 모바일: 세로 스택 레이아웃 ── */}
      <div className="lg:hidden px-6 md:px-10 py-[60px]">
        <Title text="ABOUT" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10"
        >
          <p className="text-[24px] sm:text-[28px] font-light leading-[1.6] text-[#333] tracking-[-0.01em]">
            {ATTORNEY.quote}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-[40px] h-[1px] bg-[#007AFF]" />
            <span className="text-[15px] text-[#999]">{ATTORNEY.title}</span>
            <span className="text-[15px] font-medium text-[#333]">{ATTORNEY.name}</span>
          </div>
        </motion.div>

        <div className="mt-12">
          {practiceList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
              className="py-5 border-b border-[#eee]"
            >
              <p className="text-[17px] font-bold text-black leading-[1.3]">
                {item.en}
              </p>
              <p className="text-[13px] text-[#999] mt-1">{item.ko}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 데스크탑: absolute 좌우 분할 레이아웃 ── */}
      <div className="hidden lg:block relative min-h-[120vh]">
        <motion.div
          className="absolute left-0 top-[35%] w-[4px] h-[50px] bg-[#007AFF] origin-top"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <div className="absolute left-[60px] top-[80px] z-10">
          <Title text="ABOUT" />
        </div>

        <div className="absolute left-[60px] top-[38%] -translate-y-1/2 z-10 max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-[38px] font-light leading-[1.6] text-[#333] tracking-[-0.01em]">
              {ATTORNEY.quote.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="w-[40px] h-[1px] bg-[#007AFF]" />
              <span className="text-[15px] text-[#999]">{ATTORNEY.title}</span>
              <span className="text-[15px] font-medium text-[#333]">{ATTORNEY.name}</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-[60px] top-[60px] bottom-[100px] w-[420px] overflow-y-auto hide-scrollbar">
          <div className="pt-[80px]">
            {practiceList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                className="py-5 border-b border-[#eee] cursor-pointer group"
              >
                <p className="text-[22px] font-bold text-black group-hover:text-[#007AFF] transition-colors leading-[1.3]">
                  {item.en}
                </p>
                <p className="text-[14px] text-[#999] mt-1">{item.ko}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="flex justify-center py-8"
          >
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="text-[#ccc]">
              <path d="M2 2l10 10L22 2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
