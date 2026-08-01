"use client";

import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#070707] py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <p className="text-center uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Our Collection
        </p>

        <h2 className="text-center text-white text-5xl lg:text-7xl font-[var(--font-cormorant)] mb-6">
          Premium <span className="text-[#D4AF37]">Skincare</span>
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto leading-8 text-lg mb-20">
          Discover our premium skincare collection crafted with nature's finest ingredients.
        </p>

        {/* Product Grid */}

        <ProductGrid />

      </div>
    </section>
  );
}