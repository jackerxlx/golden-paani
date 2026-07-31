import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
    </>
  );
}