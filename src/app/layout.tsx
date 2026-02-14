import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "법률사무소 중평 | 개인회생·개인파산 전문 변호사",
  description:
    "개인회생, 개인파산 전문 법률사무소 중평. 무료상담으로 채무 해결의 첫걸음을 시작하세요. 누적 상담 5,000건 이상, 높은 승인률의 검증된 실력.",
  keywords: "개인회생, 개인파산, 채무조정, 면책, 변호사, 법률사무소, 무료상담",
  openGraph: {
    title: "법률사무소 중평 | 개인회생·개인파산 전문",
    description:
      "채무 문제, 혼자 고민하지 마세요. 개인회생 전문 법률사무소 중평이 새로운 시작을 함께합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
