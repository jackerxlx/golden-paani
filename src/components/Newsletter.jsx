export default function Newsletter() {
  return (
    <section className="bg-[#0a0a0a] py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Join The Community
        </p>

        <h2 className="text-5xl lg:text-7xl text-white font-[var(--font-cormorant)] mb-6">
          Stay <span className="text-[#D4AF37]">Connected</span>
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-8 mb-12">
          Subscribe to receive exclusive skincare tips, product launches,
          and special offers from Golden Paani.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[420px] bg-[#111] border border-[#333] rounded-full px-6 py-4 text-white outline-none focus:border-[#D4AF37]"
          />

          <button className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-white transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}