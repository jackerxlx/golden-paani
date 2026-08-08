import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #d8b75c 0%, #f3e5bd 45%, #c49a32 100%)",
      }}
    >
      {/* Decorative glow */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">

          {/* LOGO */}

          <div>

            <h2 className="text-[#5a4308] text-4xl font-[var(--font-cormorant)]">
              Golden Paani
            </h2>

            <p className="uppercase tracking-[4px] text-[10px] text-[#6f560d] mt-2">
              Pure By Nature • Perfected For You
            </p>

            <p className="text-[#51462d] mt-8 leading-8 max-w-sm">
              Luxury skincare inspired by nature and crafted for healthy,
              glowing skin.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-[#332707] text-xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[#51462d]">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#6f4f00] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#6f4f00] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="hover:text-[#6f4f00] transition"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#benefits"
                  className="hover:text-[#6f4f00] transition"
                >
                  Benefits
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#6f4f00] transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* PRODUCTS */}

          <div>

            <h3 className="text-[#332707] text-xl font-semibold mb-8">
              Products
            </h3>

            <ul className="space-y-4 text-[#51462d]">

              <li>Face Wash</li>
              <li>Toner</li>
              <li>Serum</li>
              <li>Cream</li>

            </ul>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="text-[#332707] text-xl font-semibold mb-8">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="#"
                className="
                  border
                  border-[#806313]
                  text-[#604a08]
                  px-4
                  py-2
                  rounded-full
                  hover:bg-[#806313]
                  hover:text-white
                  transition
                "
              >
                Instagram
              </a>

              <a
                href="#"
                className="
                  border
                  border-[#806313]
                  text-[#604a08]
                  px-4
                  py-2
                  rounded-full
                  hover:bg-[#806313]
                  hover:text-white
                  transition
                "
              >
                Facebook
              </a>

              <a
                href="#"
                className="
                  border
                  border-[#806313]
                  text-[#604a08]
                  px-4
                  py-2
                  rounded-full
                  hover:bg-[#806313]
                  hover:text-white
                  transition
                "
              >
                YouTube
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-[#8c701d]/30 mt-16 pt-8 text-center text-[#66572f]">
          © 2026 Golden Paani. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}