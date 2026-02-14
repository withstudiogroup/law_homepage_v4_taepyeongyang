"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Building2,
  Gavel,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  FileText,
  Building2,
  Gavel,
  Calculator,
  CheckCircle2,
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative section-y bg-slate-50">
      <div className="container-site">
        <SectionTitle english="PROCESS" korean="이렇게 진행됩니다" />

        {/* Desktop: Horizontal timeline (lg+) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-6 relative">
            {/* Connection line */}
            <div className="absolute top-[2.25rem] left-[calc(8.33%+1rem)] right-[calc(8.33%+1rem)] h-px bg-slate-200 z-0" />

            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 shadow-sm hover:border-gold-400 hover:shadow-md transition-all duration-300 group cursor-default">
                    <Icon
                      size={24}
                      className="text-navy-700 group-hover:text-gold-500 transition-colors duration-300"
                    />
                  </div>

                  {/* Step number */}
                  <span className="text-[10px] text-gold-500 font-semibold tracking-widest mb-1">
                    STEP {step.step}
                  </span>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-navy-900 mb-2">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <span className="mt-3 text-[10px] px-2.5 py-1 bg-navy-50 text-navy-600 rounded-full font-medium">
                    {step.duration}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tablet: 3x2 grid */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-3 shadow-sm">
                  <Icon size={22} className="text-navy-700" />
                </div>
                <span className="text-[10px] text-gold-500 font-semibold tracking-widest mb-1">
                  STEP {step.step}
                </span>
                <h4 className="text-sm font-bold text-navy-900 mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                <span className="mt-2 text-[10px] px-2.5 py-1 bg-navy-50 text-navy-600 rounded-full font-medium">
                  {step.duration}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-0">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            const isLast = i === PROCESS_STEPS.length - 1;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                {/* Timeline line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={18} className="text-navy-700" />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-slate-200 my-1" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${isLast ? "" : ""}`}>
                  <span className="text-[10px] text-gold-500 font-semibold tracking-widest">
                    STEP {step.step}
                  </span>
                  <h4 className="text-base font-bold text-navy-900 mt-0.5">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mt-1">
                    {step.description}
                  </p>
                  <span className="inline-block mt-2 text-[11px] px-2.5 py-1 bg-navy-50 text-navy-600 rounded-full font-medium">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
