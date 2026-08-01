"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-[#111111] border border-[#2d2d2d] rounded-3xl overflow-hidden hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500">

      {/* Badge */}

      <div className="absolute mt-5 ml-5 z-10">
        <span className="bg-[#D4AF37] text-black text-xs font-semibold px-4 py-2 rounded-full">
          {product.badge}
        </span>
      </div>

      {/* Image */}

      <Link href={`/products/${product.id}`}>

        <div className="h-[420px] bg-[#181818] flex items-center justify-center overflow-hidden">

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

        <h3 className="text-white text-3xl font-[var(--font-cormorant)] mb-3">
          {product.name}
        </h3>

        <div className="text-[#D4AF37] mb-5">
          ★★★★★
        </div>

        <div className="flex items-center justify-between">

          <span className="text-white text-3xl font-bold">
            ₹{product.price}
          </span>

          <Link
            href={`/products/${product.id}`}
            className="px-6 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}