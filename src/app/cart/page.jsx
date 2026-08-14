"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="bg-black min-h-screen pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl text-white font-[var(--font-cormorant)] mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (

            <div className="text-center py-24">

              <h2 className="text-white text-3xl mb-6">
                Your cart is empty
              </h2>

              <Link
                href="/products"
                className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold"
              >
                Continue Shopping
              </Link>

            </div>

          ) : (

            <div className="space-y-8">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between bg-[#111] border border-[#2a2a2a] rounded-2xl p-6"
                >

                  <div className="flex items-center gap-6">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />

                    <div>

                      <h3 className="text-white text-2xl">
                        {item.name}
                      </h3>

                      <p className="text-[#D4AF37] mt-2">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37]"
                    >
                      -
                    </button>

                    <span className="text-white text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37]"
                    >
                      +
                    </button>

                  </div>

                  <div className="text-right">

                    <p className="text-white text-2xl mb-4">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

              <div className="flex justify-between items-center border-t border-[#333] pt-8">

                <h2 className="text-white text-3xl">
                  Total
                </h2>

                <h2 className="text-[#D4AF37] text-4xl font-bold">
                  ₹{totalPrice}
                </h2>

              </div>

              <div className="text-right">

                <Link
                  href="/checkout"
                  className="inline-block bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold"
                >
                  Proceed To Checkout
                </Link>

              </div>

            </div>

          )}

        </div>

      </main>

      <Footer />
    </>
  );
}