"use client";

import Link from "next/link";
import { Search, User, MapPin, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1500px] mx-auto h-[90px] px-8 lg:px-12 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <Link href="/" className="flex flex-col leading-none select-none">

          <h1 className="font-[var(--font-cormorant)] text-[44px] font-semibold tracking-wide text-[#D4AF37] leading-none">
            GOLDEN PAANI
          </h1>

          <span className="mt-1 text-[10px] uppercase tracking-[5px] text-[#F5E7A1] font-medium">
            PURE BY NATURE • PERFECTED FOR YOU
          </span>

        </Link>

        {/* ================= MENU ================= */}

        <nav>
          <ul className="flex items-center gap-12">

            <li>
              <Link
                href="/"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="#about"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition"
              >
                About
              </a>
            </li>

            <li>
              <Link
                href="/products"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition"
              >
                Products
              </Link>
            </li>

            <li>
              <a
                href="#benefits"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition"
              >
                Benefits
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* ================= ICONS ================= */}

        <div className="flex items-center gap-6 text-white">

          <Search
            size={20}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

          <User
            size={20}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

          <MapPin
            size={20}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

          {/* CART */}

          <Link
            href="/cart"
            className="relative cursor-pointer hover:text-[#D4AF37] transition"
          >
            <ShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[11px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

      </div>
    </header>
  );
}