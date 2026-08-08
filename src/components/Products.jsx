"use client";

import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/products/products-bg.jpeg')",
      }}
    >
      {/* Light Overlay */}

      <div className="absolute inset-0 bg-white/15 backdrop-[2px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Small Heading */}

        <p className="text-center uppercase tracking-[8px] text-[#B8860B] text-xs lg:text-sm mb-4">
          OUR PRODUCTS
        </p>

        {/* Main Heading */}

        <h2
          className="text-center font-[var(--font-cormorant)] font-light text-[#1f1f1f] leading-none mb-5"
          style={{
            fontSize: "clamp(48px,5vw,72px)",
            textShadow: "0 2px 10px rgba(255,255,255,.35)",
          }}
        >
          Discover Our
          <br />
          Premium Skincare
        </h2>

        {/* Description */}

        <p
          className="text-center text-[#444] text-[17px] leading-8 max-w-2xl mx-auto mb-12"
          style={{
            textShadow: "0 1px 4px rgba(255,255,255,.25)",
          }}
        >
          Crafted with nature's finest botanical ingredients for
          healthy, radiant and naturally glowing skin.
        </p>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <button className="px-7 py-3 rounded-full bg-[#B8860B] text-white text-sm font-medium shadow-lg hover:bg-[#a07307] transition">
            All Products
          </button>

          <button className="px-7 py-3 rounded-full bg-white/70 backdrop-blur-md border border-[#B8860B] text-[#7d5a08] text-sm hover:bg-[#B8860B] hover:text-white transition">
            Skincare
          </button>

          <button className="px-7 py-3 rounded-full bg-white/70 backdrop-blur-md border border-[#B8860B] text-[#7d5a08] text-sm hover:bg-[#B8860B] hover:text-white transition">
            Serums
          </button>

          <button className="px-7 py-3 rounded-full bg-white/70 backdrop-blur-md border border-[#B8860B] text-[#7d5a08] text-sm hover:bg-[#B8860B] hover:text-white transition">
            Moisturizers
          </button>

          <button className="px-7 py-3 rounded-full bg-white/70 backdrop-blur-md border border-[#B8860B] text-[#7d5a08] text-sm hover:bg-[#B8860B] hover:text-white transition">
            Haircare
          </button>

        </div>

        {/* Product Grid */}

        <ProductGrid />

      </div>
    </section>
  );
}