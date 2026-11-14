import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsBand from "@/components/StatsBand";
import FaqSection from "@/components/FaqSection";
import TestimonialCareerSection from "@/components/TestimonialCareerSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseSection />
        <IndustriesSection />
        <ProcessSection />
        <StatsBand />
        <FaqSection />
        <TestimonialCareerSection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
