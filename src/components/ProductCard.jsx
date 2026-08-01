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
    <div className="group relative bg-[#111111] border border-[#2d2d2d] rounded-3xl overflow-hidden hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500">

      {/* Badge */}

      <div className="absolute top-5 left-5 z-10">
        <span className="bg-[#D4AF37] text-black text-xs font-semibold px-4 py-2 rounded-full">
          {product.badge}
        </span>
      </div>

      {/* Image */}

      <Link href={`/products/${product.slug}`}>
        <div className="h-[420px] bg-[#181818] flex items-center justify-center overflow-hidden cursor-pointer">

          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={420}
            className="object-contain group-hover:scale-110 transition duration-700"
          />

        </div>
      </Link>

      {/* Content */}

      <div className="p-8">

        <p className="uppercase tracking-[3px] text-[#D4AF37] text-xs mb-3">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-white text-3xl font-[var(--font-cormorant)] mb-3 hover:text-[#D4AF37] transition">
            {product.name}
          </h3>
        </Link>

        <div className="text-[#D4AF37] mb-5">
          ★★★★★
        </div>

        <div className="flex items-center justify-between mb-8">

          <span className="text-white text-3xl font-bold">
            ₹{product.price}
          </span>

        </div>

        <div className="flex gap-4">

          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 bg-[#D4AF37] text-black rounded-full font-semibold hover:bg-white transition"
          >
            Add To Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}