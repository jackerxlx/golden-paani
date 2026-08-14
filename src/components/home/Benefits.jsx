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
      className="
        relative
        overflow-hidden
        bg-[#fffaf0]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =========================================
          GOLDEN GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/2
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[100px]
        "
      />

      {/* =========================================
          TOP GOLD LINE
      ========================================= */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-24
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* =========================================
            HEADING
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[5px]
              text-[#B8860B]
              sm:text-xs
              sm:tracking-[7px]
            "
          >
            Why Golden Paani
          </p>

          <h2
            className="
              mb-5
              font-[var(--font-cormorant)]
              text-5xl
              font-medium
              leading-tight
              text-[#1B1B1B]
              sm:text-6xl
              lg:text-[72px]
            "
          >
            Nature Meets{" "}
            <span className="text-[#B8860B]">
              Luxury
            </span>
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-7
              text-[#555]
              sm:text-base
              lg:text-[17px]
              lg:leading-8
            "
          >
            We combine nature's finest ingredients with modern
            skincare science to create products that nourish,
            protect and enhance your natural glow.
          </p>
        </div>

        {/* =========================================
            BENEFIT CARDS
        ========================================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-white
                  p-7
                  text-center
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/70
                  hover:shadow-[0_20px_50px_rgba(184,134,11,0.12)]
                  lg:p-8
                "
              >
                {/* Card golden glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-32
                    w-32
                    -translate-x-1/2
                    rounded-full
                    bg-[#D4AF37]/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================
                    ICON
                ================================= */}

                <div
                  className="
                    relative
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]
                    bg-[#fffaf0]
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]
                    group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
                    lg:h-[72px]
                    lg:w-[72px]
                  "
                >
                  <Icon
                    size={29}
                    strokeWidth={1.5}
                    className="
                      text-[#B8860B]
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  />
                </div>

                {/* =================================
                    TITLE
                ================================= */}

                <h3
                  className="
                    relative
                    mb-3
                    font-[var(--font-cormorant)]
                    text-2xl
                    font-semibold
                    leading-tight
                    text-[#222]
                  "
                >
                  {item.title}
                </h3>

                {/* =================================
                    DESCRIPTION
                ================================= */}

                <p
                  className="
                    relative
                    text-sm
                    leading-6
                    text-[#666]
                    lg:leading-7
                  "
                >
                  {item.description}
                </p>

                {/* Bottom gold line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#D4AF37]
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <div className="mt-16 text-center sm:mt-20">

          <div className="mx-auto mb-5 h-px w-16 bg-[#D4AF37]/50" />

          <p
            className="
              font-[var(--font-cormorant)]
              text-xl
              italic
              text-[#444]
              sm:text-2xl
            "
          >
            Pure ingredients. Thoughtful formulas. A golden
            ritual for your skin.
          </p>

        </div>
      </div>
    </section>
  );
}