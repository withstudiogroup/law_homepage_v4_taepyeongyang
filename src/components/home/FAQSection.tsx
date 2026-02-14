"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { FAQ_DATA } from "@/data/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-y bg-slate-50">
      <div className="container-site">
        <SectionTitle english="FAQ" korean="자주 묻는 질문" />

        <div className="content-narrow">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gold-500 font-bold mt-1 shrink-0">
                      Q.
                    </span>
                    <span
                      className={`text-base font-medium transition-colors duration-200 ${
                        isOpen ? "text-navy-900" : "text-slate-700 group-hover:text-navy-900"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 mt-1 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pl-7">
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
