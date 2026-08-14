"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "./QuantitySelector";

export default function ProductDetailsClient({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity,
    });

    router.push("/cart");
  };

  return (
    <div>

      <QuantitySelector
        quantity={quantity}
        onIncrease={increase}
        onDecrease={decrease}
      />

      <div className="flex gap-5 mt-10">

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition"
        >
          Add To Cart
        </button>

        <button
          onClick={handleBuyNow}
          className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
        >
          Buy Now
        </button>

      </div>

    </div>
  );
}