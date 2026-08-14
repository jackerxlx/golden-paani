import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import OfferPopup from "../components/OfferPopup";

export default function Home() {
  return (
    <>
      <main>
        {/* 01 — Cinematic 3D Video Hero */}
        <Hero />

        {/* 02 — About */}
        <About />

        {/* 03 — Benefits */}
        <Benefits />

        {/* 04 — Testimonials */}
        <Testimonials />

        {/* 05 — Newsletter */}
        <Newsletter />

        {/* 06 — Contact */}
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />

      <OfferPopup />
    </>
  );
}