"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/checkout");
  };

  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-[#D4AF37]/20
        bg-[#111111]
        shadow-[0_15px_50px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/60
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]
      "
    >

      {/* =========================================
          BADGE
      ========================================= */}

      <div className="absolute left-5 top-5 z-20">
        <span
          className="
            rounded-full
            bg-[#D4AF37]
            px-4
            py-2
            text-[10px]
            font-semibold
            tracking-[2px]
            text-black
          "
        >
          {product.badge}
        </span>
      </div>

      {/* =========================================
          PRODUCT IMAGE
      ========================================= */}

      <Link href={`/products/${product.slug}`}>
        <div
          className="
            relative
            h-[360px]
            overflow-hidden
            bg-[#181818]
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="
              object-contain
              p-8
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Image glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]
            "
          />

          {/* View Product */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              translate-y-4
              opacity-0
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <span
              className="
                rounded-full
                bg-white
                px-5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[2px]
                text-black
              "
            >
              View Product
            </span>
          </div>
        </div>
      </Link>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="flex flex-1 flex-col px-6 py-7">

        {/* Category */}

        <p
          className="
            mb-2
            text-[10px]
            uppercase
            tracking-[3px]
            text-[#D4AF37]
          "
        >
          {product.category}
        </p>

        {/* Product Name */}

        <Link href={`/products/${product.slug}`}>
          <h3
            className="
              min-h-[68px]
              font-[var(--font-cormorant)]
              text-[29px]
              font-medium
              leading-tight
              text-white
              transition-colors
              duration-300
              hover:text-[#D4AF37]
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* Rating */}

        <div className="mt-3 flex items-center gap-2">

          <span className="text-[13px] tracking-[2px] text-[#D4AF37]">
            ★★★★★
          </span>

          <span className="text-[11px] text-white/40">
            ({product.reviews})
          </span>

        </div>

        {/* Price */}

        <div className="mt-4 flex items-center gap-3">

          <span className="text-[25px] font-semibold text-white">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-white/35 line-through">
              ₹{product.oldPrice}
            </span>
          )}

        </div>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="mt-auto flex gap-3 pt-6">

          <button
            type="button"
            onClick={handleAddToCart}
            className="
              flex-1
              rounded-full
              bg-[#D4AF37]
              px-4
              py-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[1.5px]
              text-black
              transition-all
              duration-300
              hover:bg-[#F0D66B]
            "
          >
            Add To Cart
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="
              flex-1
              rounded-full
              border
              border-[#D4AF37]
              px-4
              py-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[1.5px]
              text-[#D4AF37]
              transition-all
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
  );
}