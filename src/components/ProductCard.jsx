"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const [added, setAdded] = useState(false);

  // =========================================
  // ADD TO CART
  // =========================================

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  // =========================================
  // BUY NOW
  // =========================================

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/checkout");
  };

  // =========================================
  // DISCOUNT
  // =========================================

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : null;

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-[#D4AF37]/20
        bg-[#17140D]
        shadow-[0_15px_50px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/55
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.22)]
      "
    >

      {/* =====================================================
          PRODUCT IMAGE AREA
      ===================================================== */}

      <Link
        href={`/products/${product.slug}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div
          className="
            relative
            h-[350px]
            overflow-hidden
            bg-[#EDE5D5]
            sm:h-[370px]
          "
        >

          {/* ================================================
              BACKGROUND GOLD GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D4AF37]/15
              blur-[65px]
              transition-all
              duration-700
              group-hover:scale-125
              group-hover:bg-[#D4AF37]/20
            "
          />

          {/* ================================================
              PRODUCT IMAGE
          ================================================= */}

          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={false}
            sizes="
              (max-width: 640px) 92vw,
              (max-width: 1024px) 45vw,
              25vw
            "
            className="
              relative
              z-10
              object-contain
              p-8
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.08]
            "
          />

          {/* ================================================
              TOP GOLD LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              z-20
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]/70
              to-transparent
            "
          />

          {/* ================================================
              BADGE
          ================================================= */}

          {product.badge && (
            <div className="absolute left-5 top-5 z-30">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#D4AF37]/40
                  bg-[#17140D]/90
                  px-3.5
                  py-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#D4AF37]
                  backdrop-blur-md
                "
              >
                {product.badge}
              </span>
            </div>
          )}

          {/* ================================================
              DISCOUNT
          ================================================= */}

          {discount && (
            <div
              className="
                absolute
                right-5
                top-5
                z-30
                rounded-full
                bg-[#D4AF37]
                px-3
                py-2
                text-[9px]
                font-bold
                tracking-[1px]
                text-black
              "
            >
              -{discount}%
            </div>
          )}

          {/* ================================================
              VIEW PRODUCT
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-30
              -translate-x-1/2
              translate-y-3
              opacity-0
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-2.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[2px]
                text-black
                shadow-lg
              "
            >
              View Product
              <ArrowUpRight size={13} />
            </span>
          </div>

        </div>
      </Link>


      {/* =====================================================
          PRODUCT INFORMATION
      ===================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-5
          py-6
          sm:px-6
          sm:py-7
        "
      >

        {/* CATEGORY */}

        <p
          className="
            mb-2
            text-[9px]
            font-medium
            uppercase
            tracking-[3px]
            text-[#D4AF37]
          "
        >
          {product.category}
        </p>


        {/* PRODUCT NAME */}

        <Link href={`/products/${product.slug}`}>
          <h3
            className="
              min-h-[58px]
              font-[var(--font-cormorant)]
              text-[27px]
              font-medium
              leading-[1.05]
              text-white
              transition-colors
              duration-300
              hover:text-[#D4AF37]
              sm:text-[29px]
            "
          >
            {product.name}
          </h3>
        </Link>


        {/* RATING */}

        <div className="mt-3 flex items-center gap-2">

          <span
            className="
              text-[12px]
              tracking-[2px]
              text-[#D4AF37]
            "
            aria-label={`${product.rating || 5} out of 5 stars`}
          >
            ★★★★★
          </span>

          <span
            className="
              text-[10px]
              text-white/45
            "
          >
            {product.rating || 5}.0
            {product.reviews
              ? ` · ${product.reviews} reviews`
              : ""}
          </span>

        </div>


        {/* SHORT DESCRIPTION */}

        {product.description && (
          <p
            className="
              mt-4
              line-clamp-2
              text-[12px]
              leading-5
              text-white/55
            "
          >
            {product.description}
          </p>
        )}


        {/* PRICE */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-baseline
            gap-3
          "
        >

          <span
            className="
              text-[24px]
              font-semibold
              tracking-tight
              text-white
            "
          >
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span
              className="
                text-[13px]
                text-white/35
                line-through
              "
            >
              ₹{product.oldPrice}
            </span>
          )}

          {discount && (
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[1px]
                text-[#D4AF37]
              "
            >
              Save {discount}%
            </span>
          )}

        </div>


        {/* =================================================
            ACTION BUTTONS
        ================================================= */}

        <div
          className="
            mt-auto
            flex
            flex-col
            gap-2.5
            pt-6
            sm:flex-row
          "
        >

          {/* ADD TO CART */}

          <button
            type="button"
            onClick={handleAddToCart}
            className="
              group/cart
              flex
              min-h-[46px]
              flex-1
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#D4AF37]
              px-4
              py-3
              text-[9px]
              font-bold
              uppercase
              tracking-[1.7px]
              text-black
              transition-all
              duration-300
              hover:bg-[#F0D66B]
              hover:shadow-[0_8px_25px_rgba(212,175,55,0.20)]
              active:scale-[0.97]
            "
          >
            {added ? (
              <>
                <Check size={15} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover/cart:-translate-y-0.5
                  "
                />
                Add To Cart
              </>
            )}
          </button>


          {/* BUY NOW */}

          <button
            type="button"
            onClick={handleBuyNow}
            className="
              min-h-[46px]
              flex-1
              rounded-full
              border
              border-[#D4AF37]/70
              bg-transparent
              px-4
              py-3
              text-[9px]
              font-bold
              uppercase
              tracking-[1.7px]
              text-[#D4AF37]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
              active:scale-[0.97]
            "
          >
            Buy Now
          </button>

        </div>

      </div>


      {/* =====================================================
          BOTTOM GOLD ACCENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-[#D4AF37]
          transition-all
          duration-500
          group-hover:w-1/2
        "
      />

    </article>
  );
}