export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto h-full flex items-center">

        <div className="w-full lg:w-[45%] pl-12 lg:pl-16 pt-16">

          {/* Small Heading */}
          <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-7">
            Premium Skincare Collection
          </p>

          {/* Main Heading */}
          <h1
            className="text-white leading-[0.9] font-light"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(60px,6vw,95px)",
            }}
          >
            Pure Rituals.
            <br />

            <span className="text-[#D4AF37]">
              Golden Glow.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[560px] text-white/90 text-[21px] leading-10">
            Crafted with the purity of nature and the power of
            advanced science. Experience skincare that nourishes,
            purifies and reveals your natural glow.
          </p>

          {/* Button */}
          <button className="mt-12 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[3px] px-10 py-5 text-[15px] hover:bg-[#D4AF37] hover:text-black duration-300">
            Explore Collection →
          </button>

          {/* Bottom Features */}
          <div className="hidden lg:flex gap-16 mt-20 text-white">

            <div>
              <h3 className="text-[#D4AF37] text-3xl mb-3">✿</h3>
              <p className="uppercase tracking-[2px] text-sm leading-7">
                Natural
                <br />
                Extracts
              </p>
            </div>

            <div>
              <h3 className="text-[#D4AF37] text-3xl mb-3">💧</h3>
              <p className="uppercase tracking-[2px] text-sm leading-7">
                Dermatologically
                <br />
                Tested
              </p>
            </div>

            <div>
              <h3 className="text-[#D4AF37] text-3xl mb-3">✨</h3>
              <p className="uppercase tracking-[2px] text-sm leading-7">
                Pure. Safe.
                <br />
                Effective.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}