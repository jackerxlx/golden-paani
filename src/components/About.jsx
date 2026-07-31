export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/about-bg.jpg')",
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-[#F8F3EA]/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 lg:px-20 py-32">

        <div className="max-w-xl">

          <span className="uppercase tracking-[6px] text-[#B88A2A] text-sm font-medium">
            Our Story
          </span>

          <div className="w-16 h-[2px] bg-[#B88A2A] mt-3 mb-8"></div>

          <h2 className="font-serif leading-tight text-[70px] text-[#1B1B1B]">
            Rooted in Nature.
            <br />
            <span className="text-[#B88A2A]">
              Crafted with Care.
            </span>
          </h2>

          <p className="mt-10 text-[21px] leading-10 text-[#444]">
            Golden Paani is more than just skincare—it is a promise of
            purity, wellness and timeless beauty.
          </p>

          <p className="mt-5 text-[20px] leading-10 text-[#555]">
            Inspired by nature and perfected by science, every product is
            carefully formulated to nourish, repair and reveal your
            healthiest glow.
          </p>

        </div>

      </div>
    </section>
  );
}