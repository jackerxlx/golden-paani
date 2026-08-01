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
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Testimonials
        </p>

        <h2 className="text-center text-5xl lg:text-7xl text-white font-[var(--font-cormorant)] mb-20">
          What Our <span className="text-[#D4AF37]">Customers Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#D4AF37] transition duration-500"
            >
              <div className="text-[#D4AF37] text-2xl mb-5">
                ★★★★★
              </div>

              <p className="text-white/80 leading-8 mb-8">
                "{item.review}"
              </p>

              <h3 className="text-white text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-[#D4AF37] mt-2">
                {item.city}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}