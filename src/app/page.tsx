import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import BackToTop from "@/components/BackToTop";
import AboutHyderabadiFlavorsSection from "@/components/AboutHyderabadiFlavorsSection";

export default function Home() {
  return (
    <>
      <Header />
      
      <HeroSection />
      <AboutHyderabadiFlavorsSection />
      <Services />
      <Menu />
      <Testimonials />
      <Footer />
      <BackToTop/>
    </>
  );
}
