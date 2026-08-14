"use client";

import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <section
      id="products"
      className="
        relative
        overflow-hidden
        bg-[#f8f5ef]
        py-24
        lg:py-28
      "
    >
      {/* =========================================
          SOFT GOLD BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_45%)]" />

      <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-12">

        {/* =========================================
            SECTION INTRO
        ========================================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[6px]
              text-[#B8860B]
              sm:text-sm
              sm:tracking-[8px]
            "
          >
            Our Products
          </p>

          <h2
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              leading-[0.95]
              text-[#1f1f1f]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Discover Our
            <br />
            <span className="text-[#B8860B]">
              Premium Skincare
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-[#555]
              sm:text-base
              sm:leading-8
            "
          >
            Crafted with nature's finest botanical ingredients
            to cleanse, nourish and reveal naturally radiant
            skin.
          </p>

        </div>

        {/* =========================================
            CATEGORY FILTERS
        ========================================= */}

        <div className="mb-14 flex flex-wrap justify-center gap-3 sm:gap-4">

          <button
            className="
              rounded-full
              bg-[#D4AF37]
              px-7
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[1px]
              text-black
              shadow-md
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            All Products
          </button>

          <button
            className="
              rounded-full
              border
              border-[#D4AF37]
              bg-white/70
              px-7
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[1px]
              text-[#7d5a08]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            Skincare
          </button>

          <button
            className="
              rounded-full
              border
              border-[#D4AF37]
              bg-white/70
              px-7
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[1px]
              text-[#7d5a08]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            Serums
          </button>

          <button
            className="
              rounded-full
              border
              border-[#D4AF37]
              bg-white/70
              px-7
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[1px]
              text-[#7d5a08]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            Moisturizers
          </button>

          <button
            className="
              rounded-full
              border
              border-[#D4AF37]
              bg-white/70
              px-7
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[1px]
              text-[#7d5a08]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            Haircare
          </button>

        </div>

        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        <ProductGrid />

      </div>
    </section>
  );
}