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
    <div className="group relative overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/40">

      {/* Badge */}

      <div className="absolute top-5 left-5 z-20">
        <span className="bg-[#D4AF37] text-black text-[11px] font-semibold px-4 py-2 rounded-full tracking-wider">
          {product.badge}
        </span>
      </div>

      {/* Product Image */}

      <Link href={`/products/${product.slug}`}>

        <div className="h-[380px] flex items-center justify-center overflow-hidden bg-[#f8f5ef] cursor-pointer p-8">

          <Image
            src={product.image}
            alt={product.name}
            width={340}
            height={420}
            className="object-contain group-hover:scale-110 transition duration-700"
          />

        </div>

      </Link>

      {/* Content */}

      <div className="px-7 py-6">

        <p className="uppercase tracking-[3px] text-[#B8860B] text-[11px] mb-2">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-[var(--font-cormorant)] text-[30px] text-[#222] hover:text-[#B8860B] transition mb-3 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}

        <div className="text-[#D4AF37] text-sm mb-4">
          ★★★★★
        </div>

        {/* Price */}

        <div className="flex items-center gap-3 mb-6">

          <span className="text-[30px] font-bold text-[#111]">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through text-lg">
              ₹{product.oldPrice}
            </span>
          )}

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Add To Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 py-3 rounded-full border border-[#D4AF37] text-[#B8860B] hover:bg-[#D4AF37] hover:text-black transition duration-300"
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}