export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8efd9 0%, #fffaf0 45%, #ead39a 100%)",
      }}
    >
      {/* Soft decorative glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <p className="text-center uppercase tracking-[8px] text-[#9A7208] text-sm mb-5">
          Contact Us
        </p>

        <h2 className="text-center text-[#241f16] text-5xl lg:text-7xl font-[var(--font-cormorant)] mb-20">
          Get In <span className="text-[#B8860B]">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT SIDE */}

          <div className="bg-white/70 backdrop-blur-sm border border-[#D4AF37]/30 rounded-3xl p-8 lg:p-12 shadow-xl">

            <h3 className="text-[#241f16] text-3xl font-[var(--font-cormorant)] mb-8">
              We'd Love To Hear From You
            </h3>

            <div className="space-y-8">

              {/* Name */}

              <div>
                <p className="text-[#B8860B] uppercase text-sm tracking-[3px] mb-2">
                  Contact Person
                </p>

                <p className="text-[#332d22] text-lg font-medium">
                  Mr. Durgesh Kumar
                </p>
              </div>

              {/* Email */}

              <div>
                <p className="text-[#B8860B] uppercase text-sm tracking-[3px] mb-2">
                  Email
                </p>

                <a
                  href="mailto:sales@goldenpaani.com"
                  className="text-[#332d22] text-lg hover:text-[#B8860B] transition"
                >
                  sales@goldenpaani.com
                </a>
              </div>

              {/* Phone */}

              <div>
                <p className="text-[#B8860B] uppercase text-sm tracking-[3px] mb-2">
                  Phone / WhatsApp
                </p>

                <a
                  href="tel:+919693912883"
                  className="text-[#332d22] text-lg hover:text-[#B8860B] transition"
                >
                  +91 96939 12883
                </a>
              </div>

              {/* Address */}

              <div>
                <p className="text-[#B8860B] uppercase text-sm tracking-[3px] mb-2">
                  Address
                </p>

                <p className="text-[#332d22] text-lg leading-8">
                  KLJ Noida One,
                  <br />
                  Noida Sector 62,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE — FORM */}

          <div className="bg-white/70 backdrop-blur-sm border border-[#D4AF37]/30 rounded-3xl p-8 lg:p-12 shadow-xl">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-white/80
                  border
                  border-[#d8c79d]
                  rounded-xl
                  px-5
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

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-white/80
                  border
                  border-[#d8c79d]
                  rounded-xl
                  px-5
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

              <input
                type="tel"
                placeholder="Your Phone Number"
                className="
                  w-full
                  bg-white/80
                  border
                  border-[#d8c79d]
                  rounded-xl
                  px-5
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

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  bg-white/80
                  border
                  border-[#d8c79d]
                  rounded-xl
                  px-5
                  py-4
                  text-[#241f16]
                  placeholder:text-[#8b806c]
                  outline-none
                  focus:border-[#B8860B]
                  focus:ring-2
                  focus:ring-[#D4AF37]/20
                  transition
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  bg-[#D4AF37]
                  text-[#17130b]
                  px-10
                  py-4
                  rounded-full
                  font-semibold
                  tracking-wide
                  shadow-lg
                  hover:bg-[#B8860B]
                  hover:text-white
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}