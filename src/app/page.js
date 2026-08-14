import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Contact from "@/components/home/Contact";

import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import OfferPopup from "@/components/common/OfferPopup";

export default function Home() {
  return (
    <>
      <main className="bg-[#0B0B0B]">
        {/* =========================================
            01 — CINEMATIC HERO
        ========================================= */}
        <section id="home">
          <Hero />
        </section>

        {/* =========================================
            02 — ABOUT
        ========================================= */}
        <section id="about">
          <About />
        </section>

        {/* =========================================
            03 — BENEFITS
        ========================================= */}
        <section id="benefits">
          <Benefits />
        </section>

        {/* =========================================
            04 — TESTIMONIALS
        ========================================= */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* =========================================
            05 — NEWSLETTER
        ========================================= */}
        <section id="newsletter">
          <Newsletter />
        </section>

        {/* =========================================
            06 — CONTACT
        ========================================= */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* =========================================
          GLOBAL FOOTER
      ========================================= */}
      <Footer />

      {/* =========================================
          FLOATING WHATSAPP
      ========================================= */}
      <WhatsAppButton />

      {/* =========================================
          OFFER POPUP
      ========================================= */}
      <OfferPopup />
    </>
  );
}