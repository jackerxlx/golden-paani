export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}

      <div className="relative z-10 max-w-[1400px] mx-auto h-full flex items-center px-8 lg:px-12">

        <div className="max-w-[620px] mt-10">

          {/* Small Heading */}

          <p className="uppercase tracking-[8px] text-[#D4AF37] text-xs lg:text-sm mb-6">
            Premium Skincare Collection
          </p>

          {/* Main Heading */}

          <h1
            className="leading-[0.92] font-[var(--font-cormorant)] font-light text-white"
            style={{
              fontSize: "clamp(56px,6vw,92px)",
            }}
          >
            Pure Rituals.
            <br />

            <span className="text-[#D4AF37]">
              Golden Glow.
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 text-white/85 text-[18px] leading-9 max-w-[560px]">
            Crafted with the purity of nature and powered by
            advanced skincare science. Experience formulas that
            cleanse, nourish and reveal naturally radiant skin.
          </p>

          {/* Buttons */}

          <div className="flex items-center gap-5 mt-12">

            <button className="bg-[#D4AF37] text-black px-10 py-4 rounded-full uppercase tracking-[2px] text-sm font-semibold hover:bg-white transition duration-300">
              Shop Now
            </button>

            <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full uppercase tracking-[2px] text-sm hover:bg-[#D4AF37] hover:text-black transition duration-300">
              Explore Collection
            </button>

          </div>

          {/* Features */}

          <div className="hidden lg:flex gap-14 mt-20">

            <div>
              <h3 className="text-[#D4AF37] text-3xl mb-3">✿</h3>
              <p className="text-white uppercase tracking-[2px] text-xs leading-6">
                Natural
                <br />
                Ingredients
              </p>
            </div>

            <div>
              <h3 className="text-[#D4AF37] text-3xl mb-3">💧</h3>
              <p className="text-white uppercase tracking-[2px] text-xs leading-6">
                Dermatologist
                <br />
                Approved
              </p>
            </div>

            <div>
              <h3 className="text-[#D4AF37] text-3xl mb-3">✨</h3>
              <p className="text-white uppercase tracking-[2px] text-xs leading-6">
                Luxury
                <br />
                Skincare
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}