"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  MapPin,
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU WHEN RESIZING
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /* =====================================================
     NAVIGATION LINKS
  ===================================================== */

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Benefits",
      href: "/#benefits",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          ANNOUNCEMENT BAR
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
          bg-gradient-to-r
          from-[#E8D39A]
          via-[#F8EBC5]
          to-[#E8D39A]
          text-[#4A390D]
        "
      >
        <div className="announcement-track h-full">

          {/* TRACK 1 */}

          <div className="announcement-content h-full">

            <span>✦ FREE SHIPPING ON ORDERS ABOVE ₹999</span>

            <span>✦ PREMIUM SKINCARE COLLECTION</span>

            <span>✦ GOLDEN PAANI — PURE BY NATURE</span>

            <span>✦ 3–7 DAYS STANDARD DELIVERY</span>

            <span>✦ PREMIUM DELIVERY AVAILABLE</span>

            <span>✦ SHOP THE GOLDEN RITUAL</span>

          </div>

          {/* TRACK 2 */}

          <div
            className="announcement-content h-full"
            aria-hidden="true"
          >

            <span>✦ FREE SHIPPING ON ORDERS ABOVE ₹999</span>

            <span>✦ PREMIUM SKINCARE COLLECTION</span>

            <span>✦ GOLDEN PAANI — PURE BY NATURE</span>

            <span>✦ 3–7 DAYS STANDARD DELIVERY</span>

            <span>✦ PREMIUM DELIVERY AVAILABLE</span>

            <span>✦ SHOP THE GOLDEN RITUAL</span>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          left-0
          top-[34px]
          z-[90]
          w-full
          border-b
          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-[#D4AF37]/25
                bg-[#0B0B0B]/90
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              `
              : `
                border-white/10
                bg-black/15
                backdrop-blur-md
              `
          }
        `}
      >

        <div
          className="
            mx-auto
            flex
            h-[78px]
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:h-[84px]
            sm:px-8
            lg:h-[88px]
            lg:px-12
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="
              group
              flex
              shrink-0
              select-none
              flex-col
              leading-none
            "
          >

            <span
              className="
                font-[var(--font-cormorant)]
                text-[27px]
                font-semibold
                tracking-[1.5px]
                text-[#D4AF37]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]
                transition-all
                duration-300
                group-hover:text-[#F5E7A1]
                sm:text-[32px]
                lg:text-[35px]
              "
            >
              GOLDEN PAANI
            </span>

            <span
              className="
                mt-[5px]
                text-[6.5px]
                font-medium
                uppercase
                tracking-[2.2px]
                text-[#F5E7A1]
                opacity-90
                sm:text-[7px]
                sm:tracking-[3px]
              "
            >
              Pure By Nature • Perfected For You
            </span>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden lg:block">

            <ul className="flex items-center gap-7 xl:gap-10">

              {navigation.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="
                      group
                      relative
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[2.5px]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#D4AF37]
                    "
                  >

                    {item.name}

                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-px
                        w-0
                        bg-[#D4AF37]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                  </Link>

                </li>
              ))}

            </ul>

          </nav>


          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
              text-white
              sm:gap-4
              lg:gap-5
            "
          >

            {/* SEARCH */}

            <button
              type="button"
              aria-label="Search Golden Paani"
              className="
                hidden
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
                sm:block
              "
            >
              <Search
                size={19}
                strokeWidth={1.5}
              />
            </button>


            {/* ACCOUNT */}

            <button
              type="button"
              aria-label="My Account"
              className="
                hidden
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
                sm:block
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
              aria-label="Store Location"
              className="
                hidden
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
                md:block
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
              aria-label={`Shopping cart with ${totalItems} items`}
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
                  key={totalItems}
                  className="
                    absolute
                    -right-2.5
                    -top-2.5
                    flex
                    h-[19px]
                    min-w-[19px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/20
                    bg-[#D4AF37]
                    px-1
                    text-[8px]
                    font-bold
                    text-black
                    shadow-[0_0_15px_rgba(212,175,55,0.5)]
                    animate-[cartPop_0.3s_ease-out]
                  "
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}

            </Link>


            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                ml-1
                flex
                items-center
                justify-center
                text-white
                transition-all
                duration-300
                hover:text-[#D4AF37]
                lg:hidden
              "
            >

              {mobileOpen ? (
                <X
                  size={23}
                  strokeWidth={1.5}
                />
              ) : (
                <Menu
                  size={23}
                  strokeWidth={1.5}
                />
              )}

            </button>

          </div>

        </div>


        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        <div
          className={`
            overflow-hidden
            border-t
            border-[#D4AF37]/15
            bg-[#0B0B0B]/95
            backdrop-blur-2xl
            transition-all
            duration-500
            lg:hidden

            ${
              mobileOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <nav className="px-5 pb-7 pt-5">

            <div className="flex flex-col">

              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-4
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-white
                    transition-all
                    duration-300
                    hover:pl-2
                    hover:text-[#D4AF37]
                  "
                >

                  <span>
                    {item.name}
                  </span>

                  <ChevronRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      text-[#D4AF37]
                      opacity-60
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>
              ))}


              {/* MOBILE CART */}

              <Link
                href="/cart"
                onClick={closeMobileMenu}
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  rounded-full
                  border
                  border-[#D4AF37]/40
                  bg-[#D4AF37]/10
                  px-5
                  py-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >

                <span>
                  Shopping Cart
                </span>

                <span>
                  {totalItems}{" "}
                  {totalItems === 1 ? "Item" : "Items"}
                </span>

              </Link>

            </div>


            {/* MOBILE BRAND NOTE */}

            <div className="mt-7 text-center">

              <p
                className="
                  font-[var(--font-cormorant)]
                  text-xl
                  italic
                  text-[#D4AF37]
                "
              >
                Pure By Nature.
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-[3px]
                  text-white/40
                "
              >
                Perfected For You
              </p>

            </div>

          </nav>

        </div>

      </header>


      {/* =====================================================
          CART ANIMATION
      ===================================================== */}

      <style jsx global>{`
        @keyframes cartPop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }

          70% {
            transform: scale(1.15);
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}