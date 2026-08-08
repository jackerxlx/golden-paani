export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Delhi",
      review:
        "Golden Paani Face Wash has completely transformed my skincare routine. My skin feels fresh and glowing every day.",
    },
    {
      name: "Priya Singh",
      city: "Mumbai",
      review:
        "The toner feels premium and refreshing. The packaging and quality are amazing.",
    },
    {
      name: "Aman Verma",
      city: "Bangalore",
      review:
        "One of the best skincare products I have ever used. Highly recommended.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#F3E8C8]"
    >
      {/* ================= GOLDEN BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(184,134,11,0.25),transparent_35%),linear-gradient(135deg,#F8F1DC,#E8D29A,#F7F0DB)]" />

      {/* Soft Decorative Glow */}

      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/20 blur-[100px]" />

      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-[#B8860B]/20 blur-[100px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-14 lg:mb-16">

          <p className="uppercase tracking-[5px] sm:tracking-[7px] text-[#8A6508] text-xs sm:text-sm mb-4 font-medium">
            Testimonials
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#211D14] font-[var(--font-cormorant)] leading-tight">
            What Our{" "}
            <span className="text-[#9C740A]">
              Customers Say
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#5C523E] text-sm sm:text-base leading-7">
            Real experiences from customers who have made
            Golden Paani a part of their skincare ritual.
          </p>

        </div>

        {/* ================= REVIEW CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-white/80 rounded-2xl p-7 lg:p-8 shadow-[0_15px_45px_rgba(80,55,10,0.12)] hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(80,55,10,0.2)] hover:border-[#D4AF37] transition-all duration-500"
            >

              {/* Gold Top Line */}

              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Quote */}

              <div className="text-[#B8860B] text-5xl font-[var(--font-cormorant)] leading-none mb-2">
                “
              </div>

              {/* Stars */}

              <div className="text-[#D4AF37] text-lg tracking-[3px] mb-5">
                ★★★★★
              </div>

              {/* Review */}

              <p className="text-[#4A4438] text-sm lg:text-base leading-7 lg:leading-8 mb-7">
                {item.review}
              </p>

              {/* Divider */}

              <div className="w-12 h-[2px] bg-[#D4AF37] mb-5" />

              {/* Customer */}

              <h3 className="text-[#211D14] text-lg font-semibold">
                {item.name}
              </h3>

              <p className="text-[#9C740A] text-xs uppercase tracking-[2px] mt-2">
                {item.city}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}