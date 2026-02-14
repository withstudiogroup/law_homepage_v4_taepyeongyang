"use client";

import { useState, useEffect } from "react";
import { OFFICE_INFO, NAV_ITEMS } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-[90px] px-6 md:px-10 lg:px-[60px]">
          {/* 로고 */}
          <a href="#" className="flex items-baseline gap-2 shrink-0">
            <span className={`text-[20px] lg:text-[22px] font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-black" : "text-white"}`}>
              {OFFICE_INFO.name}
            </span>
            <span className={`hidden sm:inline text-[11px] font-normal transition-colors duration-500 ${scrolled ? "text-black/30" : "text-white/30"}`}>
              {OFFICE_INFO.subtitle}
            </span>
          </a>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-8 py-2 text-[15px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 우측 */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href={`tel:${OFFICE_INFO.phone}`}
              className={`text-[13px] font-medium transition-colors duration-300 ${
                scrolled ? "text-black/50 hover:text-black" : "text-white/50 hover:text-white"
              }`}
            >
              {OFFICE_INFO.phone}
            </a>
            <a
              href="#consultation"
              className={`px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
                scrolled
                  ? "border border-black/15 text-black hover:bg-black hover:text-white"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              무료상담
            </a>
          </div>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? "text-black" : "text-white"}`}
            aria-label="메뉴"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div className={`fixed inset-0 z-40 bg-white lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-3">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-black text-xl font-medium py-3 px-8">
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4">
            <a href={`tel:${OFFICE_INFO.phone}`} className="text-lg font-bold">{OFFICE_INFO.phone}</a>
            <a href="#consultation" onClick={() => setOpen(false)} className="px-6 py-3 border border-black font-medium">무료상담</a>
          </div>
        </div>
      </div>
    </>
  );
}
