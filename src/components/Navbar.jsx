"use client";

import Link from "next/link";
import { Search, User, MapPin, ShoppingCart } from "lucide-react";

export default function Navbar() {
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
              <a
                href="#"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition-all duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#products"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition-all duration-300"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#benefits"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition-all duration-300"
              >
                Benefits
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="uppercase text-[13px] tracking-[3px] text-white hover:text-[#D4AF37] transition-all duration-300"
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
            className="cursor-pointer hover:text-[#D4AF37] transition-all duration-300"
          />

          <User
            size={20}
            className="cursor-pointer hover:text-[#D4AF37] transition-all duration-300"
          />

          <MapPin
            size={20}
            className="cursor-pointer hover:text-[#D4AF37] transition-all duration-300"
          />

          <ShoppingCart
            size={20}
            className="cursor-pointer hover:text-[#D4AF37] transition-all duration-300"
          />

        </div>

      </div>
    </header>
  );
}