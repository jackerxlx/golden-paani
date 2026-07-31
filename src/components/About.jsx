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
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
            Our Story
          </p>

          <h2 className="font-[var(--font-cormorant)] text-white text-6xl lg:text-7xl leading-tight">
            Rooted in Nature.
          </h2>

          <h2 className="font-[var(--font-cormorant)] text-[#D4AF37] text-6xl lg:text-7xl leading-tight mb-8">
            Crafted with Care.
          </h2>

          <p className="text-white/90 text-lg leading-9 max-w-xl">
            Golden Paani believes true beauty begins with nature.
            Every skincare formula is thoughtfully crafted using
            carefully selected ingredients to nourish, protect and
            restore your skin naturally.
          </p>

          <button className="mt-12 border border-[#D4AF37] text-[#D4AF37] px-10 py-4 uppercase tracking-[3px] hover:bg-[#D4AF37] hover:text-black duration-300">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}