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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          TOP ANNOUNCEMENT BAR
      ===================================================== */}

      <div
        suppressHydrationWarning
        className={`fixed top-0 left-0 w-full z-[60]
          h-[34px]
          bg-[#F5E7C8]
          border-b border-[#D4AF37]/30
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "opacity-0 -translate-y-full pointer-events-none"
              : "opacity-100 translate-y-0"
          }
        `}
      >
        <div className="announcement-track">

          {/* First Content */}

          <div className="announcement-content">

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PURE SKINCARE • PREMIUM QUALITY
            </span>

            <span>
              ✦ SHOP GOLDEN PAANI
            </span>

            <span>
              ✦ NATURAL INGREDIENTS • LUXURY CARE
            </span>

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PURE SKINCARE • PREMIUM QUALITY
            </span>

          </div>

          {/* Duplicate Content */}

          <div
            className="announcement-content"
            aria-hidden="true"
          >

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PURE SKINCARE • PREMIUM QUALITY
            </span>

            <span>
              ✦ SHOP GOLDEN PAANI
            </span>

            <span>
              ✦ NATURAL INGREDIENTS • LUXURY CARE
            </span>

            <span>
              ✦ FREE SHIPPING ON ORDERS ABOVE ₹999
            </span>

            <span>
              ✦ PURE SKINCARE • PREMIUM QUALITY
            </span>

          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header
        suppressHydrationWarning
        className={`fixed left-0 w-full z-50
          bg-black/20
          backdrop-blur-md
          border-b border-white/10
          transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "top-0"
              : "top-[34px]"
          }
        `}
      >

        <div
          className="
            max-w-[1500px]
            mx-auto
            h-[90px]
            px-6
            sm:px-8
            lg:px-12
            flex
            items-center
            justify-between
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="
              flex
              flex-col
              leading-none
              select-none
              shrink-0
            "
          >

            <h1
              className="
                font-[var(--font-cormorant)]
                text-[30px]
                sm:text-[38px]
                font-semibold
                tracking-wide
                text-[#D4AF37]
              "
            >
              GOLDEN PAANI
            </h1>

            <span
              className="
                mt-1
                text-[7px]
                sm:text-[9px]
                uppercase
                tracking-[2px]
                sm:tracking-[4px]
                text-[#F5E7A1]
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

              <li>
                <Link
                  href="/"
                  className="
                    uppercase
                    text-[12px]
                    tracking-[3px]
                    text-white
                    hover:text-[#D4AF37]
                    transition
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#about"
                  className="
                    uppercase
                    text-[12px]
                    tracking-[3px]
                    text-white
                    hover:text-[#D4AF37]
                    transition
                  "
                >
                  About
                </a>
              </li>

              <li>
                <Link
                  href="/products"
                  className="
                    uppercase
                    text-[12px]
                    tracking-[3px]
                    text-white
                    hover:text-[#D4AF37]
                    transition
                  "
                >
                  Products
                </Link>
              </li>

              <li>
                <a
                  href="#benefits"
                  className="
                    uppercase
                    text-[12px]
                    tracking-[3px]
                    text-white
                    hover:text-[#D4AF37]
                    transition
                  "
                >
                  Benefits
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                    uppercase
                    text-[12px]
                    tracking-[3px]
                    text-white
                    hover:text-[#D4AF37]
                    transition
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

          </nav>

          {/* =================================================
              ICONS
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-5
              text-white
              shrink-0
            "
          >

            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              className="
                hover:text-[#D4AF37]
                transition
              "
            >
              <Search size={19} />
            </button>

            {/* User */}

            <button
              type="button"
              aria-label="Account"
              className="
                hover:text-[#D4AF37]
                transition
              "
            >
              <User size={19} />
            </button>

            {/* Location */}

            <button
              type="button"
              aria-label="Location"
              className="
                hidden
                sm:block
                hover:text-[#D4AF37]
                transition
              "
            >
              <MapPin size={19} />
            </button>

            {/* Cart */}

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="
                relative
                hover:text-[#D4AF37]
                transition
              "
            >

              <ShoppingCart size={20} />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -top-2
                    -right-2
                    w-5
                    h-5
                    rounded-full
                    bg-[#D4AF37]
                    text-black
                    text-[10px]
                    font-bold
                    flex
                    items-center
                    justify-center
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