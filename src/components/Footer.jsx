import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid md:grid-cols-4 gap-14">

          {/* Logo */}
          <div>
            <h2 className="text-[#D4AF37] text-4xl font-[var(--font-cormorant)]">
              Golden Paani
            </h2>

            <p className="uppercase tracking-[4px] text-[10px] text-[#E7D18B] mt-2">
              Pure By Nature • Perfected For You
            </p>

            <p className="text-white/60 mt-8 leading-8">
              Luxury skincare inspired by nature and crafted for healthy,
              glowing skin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition">
                  Home
                </Link>
              </li>

              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-[#D4AF37] transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#benefits" className="hover:text-[#D4AF37] transition">
                  Benefits
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-xl mb-8">
              Products
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>Face Wash</li>
              <li>Toner</li>
              <li>Serum</li>
              <li>Cream</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-xl mb-8">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="#"
                className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
              >
                YouTube
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-[#222] mt-16 pt-8 text-center text-white/50">
          © 2026 Golden Paani. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}