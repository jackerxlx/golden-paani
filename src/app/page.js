import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
     </>
  );
}
