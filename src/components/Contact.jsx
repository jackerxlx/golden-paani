export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <p className="text-center uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Contact Us
        </p>

        <h2 className="text-center text-white text-5xl lg:text-7xl font-[var(--font-cormorant)] mb-20">
          Get In <span className="text-[#D4AF37]">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h3 className="text-white text-3xl font-[var(--font-cormorant)] mb-8">
              We'd Love To Hear From You
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-[#D4AF37] uppercase text-sm tracking-[3px] mb-2">
                  Email
                </p>

                <p className="text-white/80">
                  support@goldenpaani.com
                </p>
              </div>

              <div>
                <p className="text-[#D4AF37] uppercase text-sm tracking-[3px] mb-2">
                  Phone
                </p>

                <p className="text-white/80">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-[#D4AF37] uppercase text-sm tracking-[3px] mb-2">
                  Address
                </p>

                <p className="text-white/80">
                  New Delhi, India
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#111] border border-[#333] rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <button className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-white transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}