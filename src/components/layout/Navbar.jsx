"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  UserRound,
  MapPin,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

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

const announcementItems = [
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "PREMIUM SKINCARE COLLECTION",
  "GOLDEN PAANI — PURE BY NATURE",
  "STANDARD DELIVERY 3–7 DAYS",
  "PREMIUM DELIVERY AVAILABLE",
  "SHOP THE GOLDEN RITUAL",
];

export default function Navbar() {
  const { totalItems } = useCart();

  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================= */

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

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

      <div
        className="
          fixed
          left-0
          top-0
          z-[110]
          h-[34px]
          w-full
          overflow-hidden
          border-b
          border-[#D4AF37]/30
          bg-gradient-to-r
          from-[#DCC581]
          via-[#F8EBC5]
          to-[#DCC581]
          text-[#49380C]
        "
      >
        <div className="announcement-track flex h-full items-center">

          {/* TRACK 1 */}

          <div className="announcement-content h-full">

            {announcementItems.map((item, index) => (
              <span key={`announcement-one-${index}`}>
                ✦ {item}
              </span>
            ))}

          </div>

          {/* TRACK 2 */}

          <div
            className="announcement-content h-full"
            aria-hidden="true"
          >

            {announcementItems.map((item, index) => (
              <span key={`announcement-two-${index}`}>
                ✦ {item}
              </span>
            ))}

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
          z-[100]
          w-full
          border-b
          transition-all
          duration-500
          ${
            scrolled
              ? `
                border-[#D4AF37]/25
                bg-[#090909]/95
                shadow-[0_12px_45px_rgba(0,0,0,0.42)]
                backdrop-blur-2xl
              `
              : `
                border-white/10
                bg-black/10
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
            max-w-[1600px]
            items-center
            justify-between
            px-5
            sm:h-[84px]
            sm:px-8
            lg:h-[88px]
            lg:px-12
            xl:px-16
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Golden Paani home"
            className="
              group
              relative
              z-10
              flex
              shrink-0
              flex-col
              select-none
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
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]
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

          <nav
            className="
              hidden
              lg:block
            "
            aria-label="Primary navigation"
          >

            <ul className="flex items-center gap-7 xl:gap-10">

              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.name}>

                    <Link
                      href={item.href}
                      className={`
                        group
                        relative
                        block
                        py-2
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[2.5px]
                        transition-colors
                        duration-300
                        ${
                          active
                            ? "text-[#D4AF37]"
                            : "text-white hover:text-[#D4AF37]"
                        }
                      `}
                    >

                      {item.name}

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-px
                          bg-[#D4AF37]
                          transition-all
                          duration-300
                          ${
                            active
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      />

                    </Link>

                  </li>
                );
              })}

            </ul>

          </nav>


          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
              text-white
              sm:gap-4
              lg:gap-5
            "
          >

            {/* SEARCH */}

            <Link
              href="/search"
              aria-label="Search Golden Paani"
              className="
                hidden
                rounded-full
                p-1
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
            </Link>


            {/* ACCOUNT */}

            <Link
              href="/account"
              aria-label="My Golden Paani account"
              className="
                hidden
                rounded-full
                p-1
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
                sm:block
              "
            >
              <UserRound
                size={19}
                strokeWidth={1.5}
              />
            </Link>


            {/* LOCATION / CONTACT */}

            <Link
              href="/#contact"
              aria-label="Golden Paani contact and service information"
              className="
                hidden
                rounded-full
                p-1
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
            </Link>


            {/* CART */}

            <Link
              href="/cart"
              aria-label={`Shopping cart with ${totalItems} ${
                totalItems === 1 ? "item" : "items"
              }`}
              className="
                group
                relative
                rounded-full
                p-1
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#D4AF37]
              "
            >

              <ShoppingBag
                size={20}
                strokeWidth={1.5}
              />

              {totalItems > 0 && (
                <span
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
                    shadow-[0_0_16px_rgba(212,175,55,0.55)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}

            </Link>


            {/* MOBILE MENU */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="golden-paani-mobile-menu"
              onClick={() =>
                setMobileOpen((previous) => !previous)
              }
              className="
                ml-1
                flex
                items-center
                justify-center
                rounded-full
                p-1
                text-white
                transition-all
                duration-300
                hover:text-[#D4AF37]
                lg:hidden
              "
            >

              {mobileOpen ? (
                <X
                  size={24}
                  strokeWidth={1.5}
                />
              ) : (
                <Menu
                  size={24}
                  strokeWidth={1.5}
                />
              )}

            </button>

          </div>

        </div>


        {/* =================================================
            MOBILE MENU OVERLAY
        ================================================= */}

        <div
          className={`
            fixed
            inset-0
            top-[34px]
            z-[-1]
            bg-black/50
            backdrop-blur-sm
            transition-opacity
            duration-500
            lg:hidden
            ${
              mobileOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />


        {/* =================================================
            MOBILE MENU PANEL
        ================================================= */}

        <div
          id="golden-paani-mobile-menu"
          className={`
            overflow-hidden
            border-t
            border-[#D4AF37]/20
            bg-[#090909]/98
            shadow-[0_25px_70px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
            transition-all
            duration-500
            lg:hidden
            ${
              mobileOpen
                ? "max-h-[calc(100vh-112px)] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <nav
            className="
              max-h-[calc(100vh-112px)]
              overflow-y-auto
              px-5
              pb-8
              pt-5
              sm:px-8
            "
            aria-label="Mobile navigation"
          >

            {/* MOBILE LINKS */}

            <div className="flex flex-col">

              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
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
                      transition-all
                      duration-300
                      ${
                        active
                          ? "pl-2 text-[#D4AF37]"
                          : "text-white hover:pl-2 hover:text-[#D4AF37]"
                      }
                    `}
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
                );
              })}

            </div>


            {/* MOBILE QUICK ACTIONS */}

            <div className="mt-5 grid grid-cols-2 gap-3">

              <Link
                href="/search"
                onClick={closeMobileMenu}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[2px]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/40
                  hover:text-[#D4AF37]
                "
              >
                <Search
                  size={14}
                  strokeWidth={1.5}
                />

                Search
              </Link>


              <Link
                href="/account"
                onClick={closeMobileMenu}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[2px]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/40
                  hover:text-[#D4AF37]
                "
              >
                <UserRound
                  size={14}
                  strokeWidth={1.5}
                />

                Account
              </Link>

            </div>


            {/* MOBILE CART */}

            <Link
              href="/cart"
              onClick={closeMobileMenu}
              className="
                mt-3
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

              <span className="flex items-center gap-2">

                <ShoppingBag
                  size={15}
                  strokeWidth={1.5}
                />

                Shopping Cart

              </span>

              <span>
                {totalItems}{" "}
                {totalItems === 1 ? "Item" : "Items"}
              </span>

            </Link>


            {/* MOBILE BRAND MESSAGE */}

            <div className="mt-8 text-center">

              <div className="mb-3 flex items-center justify-center gap-3">

                <span className="h-px w-8 bg-[#D4AF37]/40" />

                <Sparkles
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

                <span className="h-px w-8 bg-[#D4AF37]/40" />

              </div>

              <p
                className="
                  font-[var(--font-cormorant)]
                  text-2xl
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
    </>
  );
}