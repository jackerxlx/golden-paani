"use client";

import Link from "next/link";
import {
  Search,
  User,
  MapPin,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <>
      {/* =====================================================
          1. ANNOUNCEMENT / OFFER BAR
      ===================================================== */}

      <div
        className="
          relative
          z-[100]
          h-[34px]
          w-full
          overflow-hidden
          border-b
          border-[#D4AF37]/30
          bg-[#F5E7C8]
          text-[#5C4815]
        "
      >
        <div className="announcement-track">

          {/* TRACK 1 */}

          <div className="announcement-content">

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PREMIUM SKINCARE • PURE QUALITY
            </span>

            <span>
              ✦ GOLDEN PAANI SPECIAL OFFER
            </span>

            <span>
              ✦ NATURAL INGREDIENTS • LUXURY CARE
            </span>

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PREMIUM SKINCARE • PURE QUALITY
            </span>

          </div>


          {/* TRACK 2 */}

          <div
            className="announcement-content"
            aria-hidden="true"
          >

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PREMIUM SKINCARE • PURE QUALITY
            </span>

            <span>
              ✦ GOLDEN PAANI SPECIAL OFFER
            </span>

            <span>
              ✦ NATURAL INGREDIENTS • LUXURY CARE
            </span>

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PREMIUM SKINCARE • PURE QUALITY
            </span>

          </div>

        </div>
      </div>


      {/* =====================================================
          2. PREMIUM TRANSPARENT HEADER
      ===================================================== */}

      <header
        className="
          relative
          z-[90]
          w-full
          border-b
          border-[#D4AF37]/25
          bg-gradient-to-b
          from-[#8B6A19]/45
          via-[#6F5315]/25
          to-transparent
          backdrop-blur-[10px]
          shadow-[0_8px_35px_rgba(0,0,0,0.12)]
        "
      >

        <div
          className="
            mx-auto
            flex
            h-[90px]
            max-w-[1500px]
            items-center
            justify-between
            px-6
            sm:px-8
            lg:px-12
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="
              flex
              shrink-0
              select-none
              flex-col
              leading-none
            "
          >

            <h1
              className="
                font-[var(--font-cormorant)]
                text-[28px]
                font-semibold
                tracking-[2px]
                text-[#D4AF37]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                sm:text-[36px]
              "
            >
              GOLDEN PAANI
            </h1>

            <span
              className="
                mt-[4px]
                block
                text-[7px]
                uppercase
                tracking-[2px]
                text-[#F5E7A1]
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                sm:text-[8px]
                sm:tracking-[3px]
              "
            >
              PURE BY NATURE • PERFECTED FOR YOU
            </span>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden lg:block">

            <ul className="flex items-center gap-8 xl:gap-10">

              {/* HOME */}

              <li>
                <Link
                  href="/"
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  Home
                </Link>
              </li>


              {/* PRODUCTS */}

              <li>
                <Link
                  href="/products"
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  Products
                </Link>
              </li>


              {/* BENEFITS */}

              <li>
                <Link
                  href="/#benefits"
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  Benefits
                </Link>
              </li>


              {/* CONTACT */}

              <li>
                <Link
                  href="/#contact"
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  Contact
                </Link>
              </li>

            </ul>

          </nav>


          {/* =================================================
              RIGHT SIDE ICONS
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-4
              text-white
              sm:gap-5
            "
          >

            {/* SEARCH */}

            <button
              type="button"
              aria-label="Search"
              className="
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
              "
            >
              <Search
                size={19}
                strokeWidth={1.5}
              />
            </button>


            {/* USER */}

            <button
              type="button"
              aria-label="Account"
              className="
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
              "
            >
              <User
                size={19}
                strokeWidth={1.5}
              />
            </button>


            {/* LOCATION */}

            <button
              type="button"
              aria-label="Location"
              className="
                hidden
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
                sm:block
              "
            >
              <MapPin
                size={19}
                strokeWidth={1.5}
              />
            </button>


            {/* CART */}

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="
                relative
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
              "
            >

              <ShoppingCart
                size={20}
                strokeWidth={1.5}
              />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4AF37]
                    text-[9px]
                    font-bold
                    text-black
                    shadow-[0_0_12px_rgba(212,175,55,0.55)]
                  "
                >
                  {totalItems}
                </span>
              )}

            </Link>

          </div>

        </div>

      </header>
    </>
  );
}