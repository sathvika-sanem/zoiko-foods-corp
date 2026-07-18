import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Purpose from "./components/Purpose";
import WhyZoiko from "./components/WhyZoiko";
import Portfolio from "./components/Portfolio";
import WhereWeOperate from "./components/WhereWeOperate";
import Responsibility from "./components/Responsibility";
import LookingAhead from "./components/LookingAhead";
import Footer from "./components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <Purpose />
        <WhyZoiko />
        <Portfolio />
        <WhereWeOperate />
        <Responsibility />
        <LookingAhead />
      </main>

      <Footer />
    </>
  );
}