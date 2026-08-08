export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/images/about-bg.jpg')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 lg:px-12">

        <div className="max-w-[620px]">

          {/* Small Heading */}

          <p className="uppercase tracking-[8px] text-[#D4AF37] text-xs lg:text-sm mb-6">
            Our Story
          </p>

          {/* Heading */}

          <h2
            className="font-[var(--font-cormorant)] leading-[0.95] font-light text-white"
            style={{
              fontSize: "clamp(52px,6vw,88px)",
            }}
          >
            Rooted in Nature.
          </h2>

          <h2
            className="font-[var(--font-cormorant)] leading-[0.95] font-light text-[#D4AF37] mb-8"
            style={{
              fontSize: "clamp(52px,6vw,88px)",
            }}
          >
            Crafted with Care.
          </h2>

          {/* Description */}

          <p className="text-white/85 text-[18px] leading-9 max-w-[560px]">
            Golden Paani believes true beauty begins with nature.
            Every skincare formula is thoughtfully crafted using
            carefully selected botanical ingredients that nourish,
            protect and restore your skin while delivering a
            luxurious self-care experience.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-12">

            <button className="bg-[#D4AF37] text-black px-10 py-4 rounded-full uppercase tracking-[2px] text-sm font-semibold hover:bg-white transition duration-300">
              Learn More
            </button>

            <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full uppercase tracking-[2px] text-sm hover:bg-[#D4AF37] hover:text-black transition duration-300">
              Explore Products
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}