import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Premium Skincare Collection | Golden Paani",
  description:
    "Discover Golden Paani's premium skincare collection featuring face wash, toner, serum and moisturizer designed for a refined everyday skincare ritual.",
  keywords: [
    "Golden Paani",
    "Golden Paani skincare",
    "premium skincare",
    "face wash",
    "face toner",
    "face serum",
    "moisturizer",
    "luxury skincare",
    "skincare products India",
  ],
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8F3E8] text-[#17140D]">

      {/* =====================================================
          01 — COLLECTION HERO
      ===================================================== */}

      <section className="relative overflow-hidden pt-[145px] sm:pt-[160px]">

        {/* Decorative golden glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-180px]
            h-[520px]
            w-[720px]
            -translate-x-1/2
            rounded-full
            bg-[#D4AF37]/10
            blur-[130px]
          "
        />

        {/* Soft side glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[180px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#C9A227]/[0.06]
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[350px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#D4AF37]/[0.05]
            blur-[100px]
          "
        />

        {/* Top gold line */}

        <div
          className="
            absolute
            left-0
            top-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]/60
            to-transparent
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-6xl
            px-6
            pb-20
            text-center
            sm:px-8
            sm:pb-24
            lg:pb-28
          "
        >

          {/* Eyebrow */}

          <div className="mb-6 flex items-center justify-center gap-4">

            <span className="h-px w-8 bg-[#B28A19]/70 sm:w-12" />

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[4px]
                text-[#9A7920]
                sm:text-[10px]
                sm:tracking-[5px]
              "
            >
              The Golden Paani Collection
            </p>

            <span className="h-px w-8 bg-[#B28A19]/70 sm:w-12" />

          </div>


          {/* Main heading */}

          <h1
            className="
              font-[var(--font-cormorant)]
              text-[52px]
              font-medium
              leading-[0.9]
              tracking-[-1px]
              text-[#17140D]
              sm:text-7xl
              md:text-[82px]
              lg:text-[96px]
            "
          >
            Beauty, Refined.

            <br />

            <span className="gold-gradient-text">
              Golden Rituals.
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-[13px]
              leading-7
              text-[#625B4E]
              sm:text-base
              sm:leading-8
            "
          >
            Discover Golden Paani's curated skincare essentials,
            thoughtfully designed to cleanse, refresh, hydrate
            and nourish as part of your everyday beauty ritual.
          </p>


          {/* Gold divider */}

          <div className="mx-auto mt-9 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#D4AF37]/40" />

            <span className="text-sm text-[#B28A19]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#D4AF37]/40" />

          </div>

        </div>

      </section>


      {/* =====================================================
          02 — TRUST / BRAND PROMISE STRIP
      ===================================================== */}

      <section
        className="
          border-y
          border-[#B28A19]/15
          bg-[#EEE2C9]
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            sm:grid-cols-3
          "
        >

          {/* QUALITY */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              border-b
              border-[#B28A19]/15
              px-6
              py-6
              sm:border-b-0
              sm:border-r
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#B28A19]/30
                text-[#B28A19]
              "
            >
              ✦
            </div>

            <div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#302B20]
                "
              >
                Premium Quality
              </p>

              <p className="mt-1 text-[10px] text-[#756C5A]">
                Thoughtfully developed skincare
              </p>

            </div>

          </div>


          {/* EXPERIENCE */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              border-b
              border-[#B28A19]/15
              px-6
              py-6
              sm:border-b-0
              sm:border-r
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#B28A19]/30
                text-[#B28A19]
              "
            >
              ◇
            </div>

            <div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#302B20]
                "
              >
                Refined Experience
              </p>

              <p className="mt-1 text-[10px] text-[#756C5A]">
                Skincare made for everyday rituals
              </p>

            </div>

          </div>


          {/* COLLECTION */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              px-6
              py-6
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#B28A19]/30
                text-[#B28A19]
              "
            >
              ✧
            </div>

            <div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#302B20]
                "
              >
                Curated Collection
              </p>

              <p className="mt-1 text-[10px] text-[#756C5A]">
                Essentials for a complete routine
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          03 — PRODUCT COLLECTION
      ===================================================== */}

      <section className="relative py-20 sm:py-24 lg:py-28">

        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-250px]
            top-[250px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D4AF37]/[0.04]
            blur-[120px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            sm:px-8
            lg:px-10
          "
        >

          {/* Section heading */}

          <div
            className="
              mb-12
              flex
              flex-col
              gap-6
              sm:mb-16
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <p
                className="
                  mb-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-[#A27D17]
                  sm:text-[10px]
                "
              >
                Shop Golden Paani
              </p>

              <h2
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  font-medium
                  leading-none
                  text-[#17140D]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Our Essentials
              </h2>

            </div>


            <p
              className="
                max-w-md
                text-[12px]
                leading-6
                text-[#6C6557]
                sm:text-right
                sm:text-sm
              "
            >
              A refined collection of skincare essentials created
              to complement every step of your daily beauty ritual.
            </p>

          </div>


          {/* Product Grid */}

          <ProductGrid />

        </div>

      </section>


      {/* =====================================================
          04 — SKINCARE RITUAL
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-[#D4AF37]/20
          bg-[#17140D]
          py-20
          sm:py-24
          lg:py-28
        "
      >

        {/* Gold glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D4AF37]/[0.06]
            blur-[130px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-6xl
            px-6
            sm:px-8
          "
        >

          <div className="text-center">

            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[5px]
                text-[#D4AF37]
                sm:text-[10px]
              "
            >
              Your Golden Ritual
            </p>

            <h2
              className="
                mt-5
                font-[var(--font-cormorant)]
                text-4xl
                font-medium
                leading-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Cleanse.
              <span className="text-[#D4AF37]"> Balance.</span>
              <br />
              Nourish.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-[12px]
                leading-7
                text-white/55
                sm:text-sm
                sm:leading-8
              "
            >
              Build a simple, consistent skincare ritual around
              products that fit naturally into your everyday routine.
            </p>

          </div>


          {/* Ritual steps */}

          <div
            className="
              mt-14
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-[#D4AF37]/15
              bg-[#D4AF37]/10
              sm:grid-cols-3
            "
          >

            {/* STEP 1 */}

            <div
              className="
                bg-[#17140D]
                px-7
                py-8
                text-center
                sm:px-8
              "
            >

              <span
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  text-[#D4AF37]
                "
              >
                01
              </span>

              <h3
                className="
                  mt-3
                  font-[var(--font-cormorant)]
                  text-2xl
                  text-white
                "
              >
                Cleanse
              </h3>

              <p
                className="
                  mt-2
                  text-[11px]
                  leading-6
                  text-white/45
                "
              >
                Begin with a fresh, clean base for your skincare routine.
              </p>

            </div>


            {/* STEP 2 */}

            <div
              className="
                bg-[#17140D]
                px-7
                py-8
                text-center
                sm:px-8
              "
            >

              <span
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  text-[#D4AF37]
                "
              >
                02
              </span>

              <h3
                className="
                  mt-3
                  font-[var(--font-cormorant)]
                  text-2xl
                  text-white
                "
              >
                Balance
              </h3>

              <p
                className="
                  mt-2
                  text-[11px]
                  leading-6
                  text-white/45
                "
              >
                Refresh and prepare your skin for the next step.
              </p>

            </div>


            {/* STEP 3 */}

            <div
              className="
                bg-[#17140D]
                px-7
                py-8
                text-center
                sm:px-8
              "
            >

              <span
                className="
                  font-[var(--font-cormorant)]
                  text-4xl
                  text-[#D4AF37]
                "
              >
                03
              </span>

              <h3
                className="
                  mt-3
                  font-[var(--font-cormorant)]
                  text-2xl
                  text-white
                "
              >
                Nourish
              </h3>

              <p
                className="
                  mt-2
                  text-[11px]
                  leading-6
                  text-white/45
                "
              >
                Finish your ritual with hydration and daily nourishment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — SEO / BRAND CONTENT
      ===================================================== */}

      <section className="bg-[#F8F3E8] py-20 sm:py-24">

        <div
          className="
            mx-auto
            max-w-4xl
            px-6
            text-center
            sm:px-8
          "
        >

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[5px]
              text-[#A27D17]
              sm:text-[10px]
            "
          >
            Discover Golden Paani
          </p>

          <h2
            className="
              mt-4
              font-[var(--font-cormorant)]
              text-4xl
              font-medium
              leading-tight
              text-[#17140D]
              sm:text-5xl
            "
          >
            Premium skincare for
            <span className="text-[#B28A19]">
              {" "}everyday rituals.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-7
              space-y-5
              text-[12px]
              leading-7
              text-[#686052]
              sm:text-sm
              sm:leading-8
            "
          >

            <p>
              Golden Paani brings together a curated range of
              skincare essentials designed for a simple and
              elevated daily routine. From cleansing and toning
              to serum care and moisturisation, our collection
              is created to make everyday skincare feel more
              considered.
            </p>

            <p>
              Explore Golden Paani face wash, toner, serum and
              moisturizer to create a routine that fits naturally
              into your lifestyle. Each product is presented with
              a focus on a refined experience, thoughtful formulation
              and consistent everyday care.
            </p>

            <p>
              Whether you are beginning a skincare routine or
              refining your existing ritual, discover the Golden
              Paani collection and find the essentials that belong
              in your everyday beauty routine.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — COLLECTION CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-[#D4AF37]/20
          bg-[#EDE0C6]
          py-16
          sm:py-20
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D4AF37]/10
            blur-[100px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-3xl
            px-6
            text-center
            sm:px-8
          "
        >

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[5px]
              text-[#9A7920]
            "
          >
            Begin Your Ritual
          </p>

          <h2
            className="
              mt-4
              font-[var(--font-cormorant)]
              text-4xl
              font-medium
              text-[#17140D]
              sm:text-5xl
            "
          >
            Your skin deserves a
            <span className="text-[#B28A19]">
              {" "}golden moment.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[12px]
              leading-6
              text-[#665E50]
              sm:text-sm
            "
          >
            Explore the collection and create your own
            Golden Paani skincare ritual.
          </p>

          <div className="mt-7">

            <a
              href="#top"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[#B28A19]
                bg-[#B28A19]
                px-7
                py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[2px]
                text-white
                shadow-[0_10px_30px_rgba(154,121,32,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#17140D]
                hover:border-[#17140D]
              "
            >
              Explore Collection
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          07 — FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}