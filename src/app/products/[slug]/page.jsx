import { products } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
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
          <h1 className="text-white text-4xl">
            Product Not Found
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* =========================================
          PRODUCT DETAILS
      ========================================= */}

      <main className="relative min-h-screen overflow-hidden bg-black pt-36 pb-20">

        {/* BACKGROUND IMAGE */}

        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: "url('/images/products/products-bg.jpeg')",
          }}
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/65" />

        {/* GOLDEN GLOW */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_25%_45%,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.10),transparent_35%)]
          "
        />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

          {/* =========================================
              BREADCRUMB
          ========================================= */}

          <div className="mb-10 text-xs uppercase tracking-[2px] text-white/50">

            <Link
              href="/"
              className="transition hover:text-[#D4AF37]"
            >
              Home
            </Link>

            <span className="mx-3 text-white/30">
              /
            </span>

            <Link
              href="/products"
              className="transition hover:text-[#D4AF37]"
            >
              Products
            </Link>

            <span className="mx-3 text-white/30">
              /
            </span>

            <span className="text-[#D4AF37]">
              {product.name}
            </span>

          </div>

          {/* =========================================
              PRODUCT AREA
          ========================================= */}

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1fr_1fr]
              xl:gap-20
            "
          >

            {/* =========================================
                PRODUCT IMAGE
            ========================================= */}

            <div
              className="
                relative
                rounded-[28px]
                border
                border-[#D4AF37]/30
                bg-white/[0.04]
                p-5
                backdrop-blur-sm
                shadow-[0_0_80px_rgba(212,175,55,0.08)]
              "
            >

              {/* GOLD GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-72
                  w-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#D4AF37]/10
                  blur-[90px]
                "
              />

              <div className="relative z-10">
                <ProductGallery product={product} />
              </div>

            </div>

            {/* =========================================
                PRODUCT INFORMATION
            ========================================= */}

            <div>

              {/* BADGE */}

              <span
                className="
                  mb-6
                  inline-flex
                  rounded-full
                  bg-[#D4AF37]
                  px-5
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-black
                "
              >
                {product.badge}
              </span>

              {/* CATEGORY */}

              <p
                className="
                  mb-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[4px]
                  text-[#D4AF37]
                "
              >
                {product.category}
              </p>

              {/* NAME */}

              <h1
                className="
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.95]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {product.name}
              </h1>

              {/* GOLD LINE */}

              <div
                className="
                  my-7
                  h-px
                  w-24
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#F5E6A8]
                  to-transparent
                "
              />

              {/* RATING */}

              <div className="mb-6 flex items-center gap-3">

                <span className="text-lg tracking-[3px] text-[#D4AF37]">
                  ★★★★★
                </span>

                <span className="text-xs text-white/50">
                  ({product.reviews || 128} Reviews)
                </span>

              </div>

              {/* PRICE */}

              <div className="mb-7 flex items-center gap-5">

                <span
                  className="
                    text-4xl
                    font-semibold
                    text-white
                    sm:text-5xl
                  "
                >
                  ₹{product.price}
                </span>

                <span
                  className="
                    text-xl
                    text-white/35
                    line-through
                  "
                >
                  ₹{product.oldPrice}
                </span>

              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mb-9
                  max-w-[600px]
                  text-sm
                  leading-7
                  text-white/65
                  sm:text-base
                "
              >
                {product.description}
              </p>

              {/* BENEFITS + INGREDIENTS */}

              <div
                className="
                  mb-10
                  grid
                  gap-8
                  sm:grid-cols-2
                "
              >

                {/* BENEFITS */}

                <div>

                  <h3
                    className="
                      mb-4
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-[#D4AF37]
                    "
                  >
                    Benefits
                  </h3>

                  <ul className="space-y-3">

                    {product.benefits.map((item) => (
                      <li
                        key={item}
                        className="
                          text-sm
                          text-white/70
                        "
                      >
                        <span className="mr-2 text-[#D4AF37]">
                          ✓
                        </span>

                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

                {/* INGREDIENTS */}

                <div>

                  <h3
                    className="
                      mb-4
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-[#D4AF37]
                    "
                  >
                    Ingredients
                  </h3>

                  <ul className="space-y-3">

                    {product.ingredients.map((item) => (
                      <li
                        key={item}
                        className="
                          text-sm
                          text-white/70
                        "
                      >
                        <span className="mr-2 text-[#D4AF37]">
                          ✓
                        </span>

                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

              {/* =========================================
                  BUTTONS
              ========================================= */}

              <div className="flex flex-wrap gap-4">

                <button
                  className="
                    rounded-full
                    bg-[#D4AF37]
                    px-9
                    py-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-black
                    transition
                    duration-300
                    hover:scale-[1.03]
                    hover:bg-[#F0D66B]
                  "
                >
                  Add To Cart
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-[#D4AF37]
                    px-9
                    py-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-[#D4AF37]
                    transition
                    duration-300
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* =========================================
          RELATED PRODUCTS
      ========================================= */}

      <RelatedProducts currentSlug={product.slug} />

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />

    </>
  );
}