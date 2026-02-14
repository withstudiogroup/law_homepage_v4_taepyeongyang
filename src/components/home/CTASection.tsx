"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { OFFICE_INFO, PROCESS_STEPS } from "@/data/content";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="consultation" ref={ref} className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* 좌측 파란 세로선 */}
      <motion.div
        className="absolute left-0 top-[35%] w-[4px] h-[50px] bg-[#007AFF] origin-top"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      />

      <div className="px-6 md:px-10 lg:px-[60px] py-[120px] lg:py-[160px]">
        {/* 타이틀 — BKL 스타일 슬래시 + 큰 글자 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-start mb-8">
            <span className="inline-block w-[4px] h-[28px] bg-[#007AFF] mr-[8px] mt-1" />
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-white leading-none tracking-tight">
              상담 신청
            </h2>
          </div>
        </motion.div>

        {/* 진행절차 — BKL 깔끔한 그리드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-white/20 text-[12px] tracking-[0.15em] uppercase mb-8">진행절차</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.04]">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                className="bg-[#1a1a1a] p-5 lg:p-6"
              >
                <span className="text-[#007AFF]/50 text-[18px] font-bold block mb-3">
                  {String(step.step).padStart(2, "0")}
                </span>
                <p className="text-white/80 text-[14px] font-medium mb-1">{step.title}</p>
                <p className="text-white/20 text-[12px]">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA — 큰 전화번호 + 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <div>
            <p className="text-white/20 text-[12px] tracking-[0.15em] uppercase mb-4">Free Consultation</p>
            <p className="text-white/30 text-[14px] leading-[1.9] max-w-[420px] mb-8">
              채무 문제로 어려움을 겪고 계신다면, 전문 변호사와의 무료 상담을 통해 최적의 해결 방안을 찾아보세요.
            </p>
            <a
              href={`tel:${OFFICE_INFO.phone}`}
              className="block text-[36px] sm:text-[48px] md:text-[64px] font-bold text-white tracking-tight leading-none hover:text-[#007AFF] transition-colors"
            >
              {OFFICE_INFO.phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${OFFICE_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-[14px] font-medium hover:bg-[#f0f0f0] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M14.5 11.3V13.3C14.5 13.7 14.2 14 13.8 14C7.1 14 2 8.9 2 2.2C2 1.8 2.3 1.5 2.7 1.5H4.7C5 1.5 5.3 1.7 5.4 2L6.2 4.2C6.3 4.5 6.2 4.8 5.9 5L4.7 5.9C5.6 7.8 7.2 9.4 9.1 10.3L10 9.1C10.2 8.8 10.5 8.7 10.8 8.8L13 9.6C13.3 9.7 13.5 10 13.5 10.3V11.3H14.5Z" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              전화 상담
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white text-[14px] font-medium hover:bg-white/5 transition-colors"
            >
              온라인 상담
            </a>
          </div>
        </motion.div>

        <p className="mt-12 text-white/10 text-[12px]">{OFFICE_INFO.hours}</p>
      </div>
    </section>
  );
}
