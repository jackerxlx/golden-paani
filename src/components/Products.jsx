"use client";

import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products/products-bg.jpeg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <p className="text-center uppercase tracking-[8px] text-[#B8860B] text-sm mb-5">
          OUR PRODUCTS
        </p>

        <h2
          className="text-center text-[#1b1b1b] text-5xl lg:text-7xl font-[var(--font-cormorant)] mb-6"
          style={{
            textShadow: "0 2px 8px rgba(255,255,255,.35)",
          }}
        >
          Discover Our Premium Skincare
        </h2>

        <p
          className="text-center text-[#444] text-lg max-w-2xl mx-auto leading-8 mb-14"
          style={{
            textShadow: "0 1px 4px rgba(255,255,255,.3)",
          }}
        >
          Crafted with nature's finest ingredients for healthy,
          radiant and naturally glowing skin.
        </p>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <button className="px-8 py-3 rounded-lg bg-[#B8860B] text-white font-medium shadow-lg">
            All Products
          </button>

          <button className="px-8 py-3 rounded-lg border border-[#B8860B] bg-white/70 text-[#7d5a08] hover:bg-[#B8860B] hover:text-white transition duration-300">
            Skincare
          </button>

          <button className="px-8 py-3 rounded-lg border border-[#B8860B] bg-white/70 text-[#7d5a08] hover:bg-[#B8860B] hover:text-white transition duration-300">
            Serums
          </button>

          <button className="px-8 py-3 rounded-lg border border-[#B8860B] bg-white/70 text-[#7d5a08] hover:bg-[#B8860B] hover:text-white transition duration-300">
            Moisturizers
          </button>

          <button className="px-8 py-3 rounded-lg border border-[#B8860B] bg-white/70 text-[#7d5a08] hover:bg-[#B8860B] hover:text-white transition duration-300">
            Haircare
          </button>

        </div>

        {/* Product Grid */}

        <ProductGrid />

      </div>
    </section>
  );
}