"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function OfferPopup() {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    // Check whether popup was already shown in this browser tab/session
    const offerShown = sessionStorage.getItem("golden-paani-offer-shown");

    if (!offerShown) {
      // Small delay so the website loads first
      const timer = setTimeout(() => {
        setShowOffer(true);
        sessionStorage.setItem("golden-paani-offer-shown", "true");
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  // Close popup
  const handleClose = () => {
    setShowOffer(false);
  };

  if (!showOffer) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      {/* Popup */}
      <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#F8F0DE] shadow-2xl">

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close offer"
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-black/10
            text-black
            transition
            hover:bg-black
            hover:text-white
          "
        >
          <X size={18} />
        </button>

        {/* Gold Top */}
        <div className="h-2 bg-[#D4AF37]" />

        <div className="px-8 py-10 text-center sm:px-12 sm:py-12">

          {/* Brand */}
          <p className="mb-3 font-[var(--font-cormorant)] text-2xl tracking-[3px] text-[#B89018]">
            GOLDEN PAANI
          </p>

          {/* Small Heading */}
          <p className="text-[11px] font-medium uppercase tracking-[4px] text-[#6F5A25]">
            A Golden Welcome For You
          </p>

          {/* Main Offer */}
          <h2 className="mt-5 font-[var(--font-cormorant)] text-6xl font-semibold leading-none text-[#1C170D] sm:text-7xl">
            50%
            <span className="block text-[#C9A227]">
              OFF
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[380px] text-sm leading-6 text-[#5D5341]">
            Experience premium skincare rituals crafted with
            nature, purity and golden care.
          </p>

          {/* Offer Line */}
          <div className="mx-auto mt-6 h-px w-24 bg-[#D4AF37]" />

          <p className="mt-5 text-[11px] uppercase tracking-[2px] text-[#7B682E]">
            Exclusive First Visit Offer
          </p>

          {/* CTA */}
          <Link
            href="/products"
            onClick={handleClose}
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-10
              py-3.5
              text-[12px]
              font-semibold
              uppercase
              tracking-[2px]
              text-black
              transition
              hover:bg-[#B89018]
              hover:scale-[1.02]
            "
          >
            Shop Now
          </Link>

          {/* Bottom */}
          <p className="mt-5 text-[10px] tracking-wide text-[#8A806D]">
            Limited time offer • Terms may apply
          </p>

        </div>
      </div>
    </div>
  );
}