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
      {/* =========================================
          MAIN HOME PAGE
      ========================================= */}

      <main>
        {/* 01 — Cinematic Hero */}
        <Hero />

        {/* 02 — About / Featured Content */}
        <About />

        {/* 03 — Why Golden Paani */}
        <Benefits />

        {/* 04 — Customer Reviews */}
        <Testimonials />

        {/* 05 — Newsletter */}
        <Newsletter />

        {/* 06 — Contact */}
        <Contact />
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />

      {/* =========================================
          FLOATING WHATSAPP
      ========================================= */}

      <WhatsAppButton />

      {/* =========================================
          FIRST VISIT OFFER POPUP
      ========================================= */}

      <OfferPopup />
    </>
  );
}