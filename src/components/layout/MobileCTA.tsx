"use client";

import { useState, useEffect } from "react";
import { OFFICE_INFO } from "@/data/content";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-[#eee] shadow-[0_-2px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="flex h-[56px]">
        <a
          href={`tel:${OFFICE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] text-white text-[14px] font-medium"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M14.5 11.3V13.3C14.5 13.7 14.2 14 13.8 14C7.1 14 2 8.9 2 2.2C2 1.8 2.3 1.5 2.7 1.5H4.7C5 1.5 5.3 1.7 5.4 2L6.2 4.2C6.3 4.5 6.2 4.8 5.9 5L4.7 5.9C5.6 7.8 7.2 9.4 9.1 10.3L10 9.1C10.2 8.8 10.5 8.7 10.8 8.8L13 9.6C13.3 9.7 13.5 10 13.5 10.3V11.3H14.5Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          전화상담
        </a>
        <a
          href="#consultation"
          className="flex-1 flex items-center justify-center gap-2 bg-[#007AFF] text-white text-[14px] font-medium"
        >
          온라인 상담
        </a>
      </div>
    </div>
  );
}
