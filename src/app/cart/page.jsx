"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="bg-black min-h-screen pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-[var(--font-cormorant)] text-white mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (

            <div className="text-center py-24">

              <h2 className="text-3xl text-white mb-6">
                Your cart is empty
              </h2>

              <Link
                href="/products"
                className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition"
              >
                Continue Shopping
              </Link>

            </div>

          ) : (

            <div className="grid lg:grid-cols-3 gap-10">

              {/* Cart Items */}

              <div className="lg:col-span-2 space-y-6">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="bg-[#111] border border-[#2b2b2b] rounded-2xl p-6 flex gap-6 items-center"
                  >

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />

                    <div className="flex-1">

                      <h3 className="text-2xl text-white mb-2">
                        {item.name}
                      </h3>

                      <p className="text-[#D4AF37] text-xl mb-4">
                        ₹{item.price}
                      </p>

                      <div className="flex items-center gap-3">

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-10 h-10 rounded-full border border-[#D4AF37]"
                        >
                          -
                        </button>

                        <span className="text-xl">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-10 h-10 rounded-full border border-[#D4AF37]"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      Remove
                    </button>

                  </div>

                ))}

              </div>

              {/* Summary */}

              <div className="bg-[#111] border border-[#2b2b2b] rounded-2xl p-8 h-fit">

                <h2 className="text-3xl text-white mb-8">
                  Order Summary
                </h2>

                <div className="flex justify-between text-white mb-4">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>

                <Link
                  href="/checkout"
                  className="block mt-8 w-full text-center bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition"
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