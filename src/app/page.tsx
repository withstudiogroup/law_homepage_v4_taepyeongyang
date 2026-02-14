import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import HeroSection from "@/components/home/HeroSection";
import CasesSection from "@/components/home/CasesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CasesSection />
        <ReviewsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
