import Header from "../components/Header";
import TopBanner from "./components/TopBanner";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Brand from "./components/Brand";
import Purpose from "./components/Purpose";
import Stories from "./components/Stories";
import Newsletter from "./components/Newsletter";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>

      <Header />

      <div className="lg:[zoom:80%]">
        <TopBanner />
        <Hero />
        <AboutSection />
      </div>

      <Brand />

      <Purpose />

      <Stories />

      <Newsletter />

      <Footer />

    </main>
  );
}
