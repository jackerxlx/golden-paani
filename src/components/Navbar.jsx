import Image from "next/image";
import { Search, User, MapPin, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1500px] mx-auto h-[100px] px-12 flex items-center">

        {/* Logo */}
        <div className="w-[300px] flex items-center">
          <Image
            src="/images/logo.png"
            alt="Golden Paani Logo"
            width={240}
            height={90}
            priority
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-16 text-white uppercase tracking-[4px] text-[14px] font-medium">

            <li className="hover:text-[#D4AF37] duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#D4AF37] duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-[#D4AF37] duration-300 cursor-pointer">
              Products
            </li>

            <li className="hover:text-[#D4AF37] duration-300 cursor-pointer">
              Benefits
            </li>

            <li className="hover:text-[#D4AF37] duration-300 cursor-pointer">
              Contact
            </li>

          </ul>
        </div>

        {/* Icons */}
        <div className="w-[260px] flex justify-end items-center gap-6 text-white">

          <Search
            size={22}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

          <User
            size={22}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

          <MapPin
            size={22}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

          <ShoppingCart
            size={22}
            className="cursor-pointer hover:text-[#D4AF37] transition"
          />

        </div>

      </div>
    </header>
  );
}