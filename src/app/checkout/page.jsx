"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { totalPrice } = useCart();

  return (
    <>
      <Navbar />

      <main className="bg-black min-h-screen pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl text-white font-[var(--font-cormorant)] mb-14">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Billing Details */}

            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8">

              <h2 className="text-3xl text-white mb-8">
                Billing Details
              </h2>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg p-4 text-white outline-none focus:border-[#D4AF37]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg p-4 text-white outline-none focus:border-[#D4AF37]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg p-4 text-white outline-none focus:border-[#D4AF37]"
                />

                <textarea
                  rows={5}
                  placeholder="Shipping Address"
                  className="w-full bg-[#1b1b1b] border border-[#333] rounded-lg p-4 text-white outline-none focus:border-[#D4AF37]"
                />

              </div>

            </div>

            {/* Order Summary */}

            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 h-fit">

              <h2 className="text-3xl text-white mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between text-white text-xl mb-8">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button className="w-full py-4 bg-[#D4AF37] text-black rounded-full font-semibold hover:bg-white transition">
                Proceed to Payment
              </button>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}