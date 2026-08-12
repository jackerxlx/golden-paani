import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import Benefits from "@/components/Benefits";

export const metadata = {
  title: "Products | Golden Paani",
  description: "Explore Premium Golden Paani Skincare Products",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black min-h-screen pt-36">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-4">
              Our Collection
            </p>

            <h1 className="text-5xl lg:text-7xl text-white font-[var(--font-cormorant)]">
              Premium{" "}
              <span className="text-[#D4AF37]">
                Products
              </span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto text-lg leading-8">
              Discover luxury skincare crafted with nature and modern science.
            </p>

          </div>

          <ProductGrid />

        </div>

      </main>

      {/* BENEFITS */}
      <section id="benefits">
        <Benefits />
      </section>

      <Footer />
    </>
  );
}