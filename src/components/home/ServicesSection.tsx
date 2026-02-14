"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Handshake, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Scale,
  Handshake,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative section-y bg-white">
      <div className="container-site">
        <SectionTitle english="SERVICES" korean="업무분야" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-7 md:p-8 hover:shadow-xl hover:shadow-navy-900/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-700 transition-colors duration-500">
                  <Icon
                    size={22}
                    className="text-navy-700 group-hover:text-white transition-colors duration-500"
                  />
                </div>

                {/* Subtitle */}
                <p className="text-[11px] text-slate-400 tracking-[0.15em] uppercase font-medium mb-1">
                  {service.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors duration-300 mt-auto"
                >
                  자세히 보기
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
