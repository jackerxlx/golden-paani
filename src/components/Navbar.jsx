"use client";

import { useEffect, useState } from "react";
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

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          TOP ANNOUNCEMENT / OFFER BAR
      ===================================================== */}

      <div
        className={`
          fixed
          top-0
          left-0
          z-[100]
          h-[34px]
          w-full
          overflow-hidden
          border-b
          border-[#8B6508]/30
          bg-[#F5E7C8]
          transition-all
          duration-500
          ${
            mounted && scrolled
              ? "-translate-y-full opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <div className="announcement-track">

          {/* FIRST TRACK */}

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


          {/* DUPLICATE TRACK */}

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
          MAIN PREMIUM GOLD HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          left-0
          z-[90]
          w-full

          border-b
          border-[#8B6508]/40

          ${
            mounted && scrolled
              ? "top-0"
              : "top-[34px]"
          }

          bg-gradient-to-r
          from-[#B8860B]
          via-[#D4AF37]
          to-[#B8860B]

          shadow-[0_8px_30px_rgba(90,60,0,0.25)]

          transition-all
          duration-500
        `}
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
              group
              flex
              shrink-0
              select-none
              flex-col
              items-start
              leading-none
            "
          >

            {/* GOLDEN PAANI */}

            <h1
              className="
                font-[var(--font-cormorant)]
                text-[28px]
                font-semibold
                tracking-[2px]
                text-white
                transition-all
                duration-300
                group-hover:text-[#FFF8D6]
                sm:text-[36px]
              "
            >
              GOLDEN PAANI
            </h1>


            {/* TAGLINE */}

            <span
              className="
                mt-[4px]
                ml-[1px]
                whitespace-nowrap
                text-[7px]
                font-medium
                uppercase
                tracking-[2px]
                text-[#FFF4C2]
                sm:text-[8px]
                sm:tracking-[2.5px]
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
                    uppercase
                    tracking-[3px]
                    text-white
                    transition-all
                    duration-300
                    hover:text-[#FFF4C2]
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
                    uppercase
                    tracking-[3px]
                    text-white
                    transition-all
                    duration-300
                    hover:text-[#FFF4C2]
                  "
                >
                  Products
                </Link>
              </li>


              {/* BENEFITS */}

              <li>
                <a
                  href="/#benefits"
                  className="
                    text-[11px]
                    uppercase
                    tracking-[3px]
                    text-white
                    transition-all
                    duration-300
                    hover:text-[#FFF4C2]
                  "
                >
                  Benefits
                </a>
              </li>


              {/* CONTACT */}

              <li>
                <a
                  href="/#contact"
                  className="
                    text-[11px]
                    uppercase
                    tracking-[3px]
                    text-white
                    transition-all
                    duration-300
                    hover:text-[#FFF4C2]
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

          </nav>


          {/* =================================================
              RIGHT ICONS
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
                hover:text-[#FFF4C2]
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
                hover:text-[#FFF4C2]
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
                hover:text-[#FFF4C2]
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
                hover:text-[#FFF4C2]
              "
            >

              <ShoppingCart
                size={20}
                strokeWidth={1.5}
              />

              {mounted && totalItems > 0 && (
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
                    bg-white
                    text-[9px]
                    font-bold
                    text-[#8B6508]
                    shadow-[0_0_12px_rgba(255,255,255,0.35)]
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