"use client";

import Image from "next/image";

export default function ProductGallery({ product }) {
  return (
    <div className="bg-[#111] border border-[#2b2b2b] rounded-3xl p-10 flex items-center justify-center overflow-hidden">

      <Image
        src={product.image}
        alt={product.name}
        width={450}
        height={550}
        priority
        className="object-contain transition-transform duration-500 hover:scale-110"
      />

    </div>
  );
}