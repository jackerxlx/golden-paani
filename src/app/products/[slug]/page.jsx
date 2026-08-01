import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import Link from "next/link";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetails({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black flex items-center justify-center">
          <h1 className="text-white text-4xl">Product Not Found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-black min-h-screen pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-10 text-sm text-white/60">
            <Link href="/" className="hover:text-[#D4AF37]">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link href="/products" className="hover:text-[#D4AF37]">
              Products
            </Link>

            <span className="mx-2">/</span>

            <span className="text-[#D4AF37]">
              {product.name}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <ProductGallery product={product} />

            <div>

              <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {product.badge}
              </span>

              <h1 className="text-white text-5xl font-[var(--font-cormorant)] mb-4">
                {product.name}
              </h1>

              <div className="text-[#D4AF37] text-xl mb-6">
                ★★★★★
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold text-white">
                  ₹{product.price}
                </span>

                <span className="line-through text-white/40 text-2xl">
                  ₹{product.oldPrice}
                </span>
              </div>

              <p className="text-white/70 leading-8 mb-10">
                {product.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">

                <div>
                  <h3 className="text-[#D4AF37] text-xl mb-4">
                    Benefits
                  </h3>

                  <ul className="space-y-3 text-white/80">
                    {product.benefits.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#D4AF37] text-xl mb-4">
                    Ingredients
                  </h3>

                  <ul className="space-y-3 text-white/80">
                    {product.ingredients.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="flex gap-5">

                <button className="flex-1 bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition">
                  Add To Cart
                </button>

                <button className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition">
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}