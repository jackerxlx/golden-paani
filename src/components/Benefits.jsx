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
      className="relative !bg-[#F7F3E8] py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Gold Glow */}

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] sm:tracking-[7px] text-[#B8860B] text-xs sm:text-sm mb-4">
            Why Choose Us
          </p>

          <h2 className="text-[#1B1B1B] text-4xl sm:text-5xl lg:text-6xl font-[var(--font-cormorant)] leading-tight mb-5">
            Nature Meets{" "}
            <span className="text-[#B8860B]">
              Luxury
            </span>
          </h2>

          <p className="text-[#555] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-7 lg:leading-8">
            We combine nature's finest ingredients with modern
            skincare science to create products that nourish,
            protect and enhance your natural glow.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-14 lg:mt-16">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-[#D4AF37]/30 rounded-2xl p-7 lg:p-8 text-center shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500"
              >

                {/* Icon */}

                <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-all duration-500">

                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#B8860B] group-hover:text-white transition-colors duration-500"
                  />

                </div>

                {/* Title */}

                <h3 className="text-[#222] text-xl lg:text-2xl font-[var(--font-cormorant)] font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-[#666] text-sm leading-6 lg:leading-7">
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