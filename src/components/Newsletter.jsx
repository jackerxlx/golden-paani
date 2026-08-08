"use client";

export default function Newsletter() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f3e5bd 0%, #fffaf0 48%, #d8b75c 100%)",
      }}
    >
      {/* Decorative Golden Glow */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B8860B]/15 rounded-full blur-3xl" />

      {/* Content */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Small Heading */}

        <p className="uppercase tracking-[7px] text-[#9A7208] text-xs lg:text-sm mb-5">
          Join The Community
        </p>

        {/* Main Heading */}

        <h2 className="text-[#241f16] text-5xl lg:text-7xl font-[var(--font-cormorant)] leading-tight mb-6">
          Stay{" "}
          <span className="text-[#B8860B]">
            Connected
          </span>
        </h2>

        {/* Description */}

        <p className="text-[#5a5142] text-base lg:text-lg max-w-2xl mx-auto leading-8 mb-10">
          Subscribe to receive exclusive skincare tips, product launches,
          beauty inspiration and special offers from Golden Paani.
        </p>

        {/* Newsletter Box */}

        <div
          className="
            max-w-2xl
            mx-auto
            bg-white/70
            backdrop-blur-md
            border
            border-[#D4AF37]/40
            rounded-2xl
            p-3
            shadow-xl
          "
        >
          <form className="flex flex-col sm:flex-row gap-3">

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1
                bg-white/80
                border
                border-[#d8c79d]
                rounded-xl
                px-6
                py-4
                text-[#241f16]
                placeholder:text-[#8b806c]
                outline-none
                focus:border-[#B8860B]
                focus:ring-2
                focus:ring-[#D4AF37]/20
                transition
              "
            />

            <button
              type="submit"
              className="
                bg-[#D4AF37]
                text-[#1c170d]
                px-8
                py-4
                rounded-xl
                font-semibold
                tracking-wide
                shadow-md
                hover:bg-[#B8860B]
                hover:text-white
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              Subscribe
            </button>

          </form>
        </div>

        {/* Small Privacy Text */}

        <p className="text-[#6f644f] text-xs mt-5">
          By subscribing, you agree to receive updates from Golden Paani.
        </p>

      </div>
    </section>
  );
}