import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
       <div className="text-blue-500 text-3xl p-5 border border-red-500">
      ✅ Tailwind is working in production
    </div>
      <HeroSection />
      <About />
      <Services />
      <Menu />
      <Testimonials />
      <Footer />
      <BackToTop/>
    </>
  );
}
