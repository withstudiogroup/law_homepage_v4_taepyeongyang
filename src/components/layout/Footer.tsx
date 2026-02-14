"use client";

import { OFFICE_INFO, NAV_ITEMS } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eee]">
      <div className="px-6 md:px-10 lg:px-[60px] py-10">
        {/* 상단: 사무소 위치 + 링크 */}
        <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#999] mb-6">
          <span className="text-black font-medium mr-2">사무소 위치</span>
          <a href="#about" className="hover:text-black transition-colors">{OFFICE_INFO.addressShort}</a>
          <span className="text-[#ddd]">|</span>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-black transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* 하단: 법적 링크 + 저작권 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#f0f0f0]">
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#bbb]">
            <a href="#" className="hover:text-[#666] transition-colors">법적고지</a>
            <a href="#" className="font-bold hover:text-[#666] transition-colors">개인정보처리방침</a>
            <span>광고책임변호사: {OFFICE_INFO.attorney}</span>
          </div>
          <p className="text-[12px] text-[#ccc]">
            &copy; {new Date().getFullYear()} {OFFICE_INFO.name}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
