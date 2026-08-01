import {
  Leaf,
  ShieldCheck,
  Droplets,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Made with carefully selected natural ingredients for healthy, glowing skin.",
  },
  {
    icon: ShieldCheck,
    title: "Dermatologically Tested",
    description:
      "Every formula is tested to ensure safety, quality and effectiveness.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    description:
      "Keeps your skin moisturized, soft and refreshed throughout the day.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and secure shipping across India with premium packaging.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[#050505] py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <p className="text-center uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Why Choose Us
        </p>

        <h2 className="text-center text-white text-5xl lg:text-7xl font-[var(--font-cormorant)] mb-6">
          Nature Meets <span className="text-[#D4AF37]">Luxury</span>
        </h2>

        <p className="text-center text-white/70 text-lg max-w-3xl mx-auto leading-8 mb-20">
          We combine nature's finest ingredients with modern skincare science
          to create products that nourish, protect and enhance your natural glow.
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#101010] border border-[#2a2a2a] rounded-2xl p-10 text-center hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-8">
                  <Icon size={36} className="text-[#D4AF37]" />
                </div>

                <h3 className="text-white text-2xl font-[var(--font-cormorant)] mb-4">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}