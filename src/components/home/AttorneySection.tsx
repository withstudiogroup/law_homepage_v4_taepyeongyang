"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { ATTORNEY } from "@/data/content";

export default function AttorneySection() {
  return (
    <section id="attorney" className="relative section-y bg-slate-50">
      <div className="container-site">
        <SectionTitle english="ATTORNEY" korean="대표 변호사 소개" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden relative">
              {/* Silhouette placeholder */}
              <div className="absolute inset-0 flex items-end justify-center">
                <User
                  size={200}
                  strokeWidth={0.5}
                  className="text-slate-400/40 mb-[-20px]"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-900/60 to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/60 text-xs tracking-[0.15em] uppercase mb-1">
                  Representative Attorney
                </p>
                <p className="text-white text-2xl font-bold">
                  {ATTORNEY.name}
                  <span className="text-base font-normal ml-2 text-white/70">
                    {ATTORNEY.title}
                  </span>
                </p>
              </div>
            </div>

            {/* Gold accent corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-gold-400/30 rounded-br-2xl hidden lg:block" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote */}
            <div className="mb-8">
              <div className="font-display text-5xl text-gold-400/40 leading-none mb-2">
                &ldquo;
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-navy-900 leading-relaxed whitespace-pre-line -mt-4">
                {ATTORNEY.quote}
              </blockquote>
            </div>

            <div className="gold-line-long mb-8" />

            {/* Credentials */}
            <dl className="space-y-4">
              {ATTORNEY.credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-baseline gap-4"
                >
                  <dt className="text-xs text-slate-400 tracking-widest uppercase w-12 shrink-0 font-medium">
                    {cred.label}
                  </dt>
                  <dd className="text-base text-navy-800 font-medium">
                    {cred.value}
                  </dd>
                </motion.div>
              ))}
            </dl>

            {/* Specialties */}
            <div className="mt-8 flex flex-wrap gap-2">
              {ATTORNEY.specialties.map((spec) => (
                <span
                  key={spec}
                  className="text-xs px-3 py-1.5 bg-navy-50 text-navy-700 rounded-full font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
