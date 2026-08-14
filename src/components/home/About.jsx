"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ShoppingBag,
  Star,
} from "lucide-react";

const products = [
  {
    name: "Glow Face Wash",
    category: "CLEANSING",
    price: "₹299",
    oldPrice: "₹399",
    image: "/images/facewash.png",
  },
  {
    name: "Golden Glow Serum",
    category: "SERUM",
    price: "₹499",
    oldPrice: "₹599",
    image: "/images/serum.png",
  },
  {
    name: "Radiance Cream",
    category: "MOISTURIZER",
    price: "₹449",
    oldPrice: "₹549",
    image: "/images/cream.png",
  },
  {
    name: "Hydrating Toner",
    category: "TONER",
    price: "₹349",
    oldPrice: "₹449",
    image: "/images/toner.png",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="products"
      className="
        relative
        overflow-hidden
        bg-[#F8F5EF]
        px-6
        py-24
        sm:px-8
        lg:px-12
        lg:py-32
      "
    >
      {/* =========================================
          BACKGROUND GOLDEN GLOW
      ========================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[120px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[100px]
        "
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={container}
        >
          {/* Small Label */}

          <motion.div
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[5px]
                text-[#9A7A20]
              "
            >
              Golden Paani Collection
            </span>

            <span className="h-px w-10 bg-[#D4AF37]" />
          </motion.div>

          {/* Main Heading */}

          <motion.h2
            variants={fadeUp}
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              leading-none
              text-[#1D1A16]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
            "
          >
            Your Ritual Starts{" "}
            <span className="text-[#B8952E]">
              Here.
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-sm
              leading-7
              text-black/55
              sm:text-base
            "
          >
            Discover thoughtfully crafted skincare rituals
            designed to cleanse, nourish and reveal your
            skin's natural golden glow.
          </motion.p>
        </motion.div>

        {/* =========================================
            PRODUCTS GRID
        ========================================= */}

        <motion.div
          className="
            grid
            grid-cols-1
            gap-7
            sm:grid-cols-2
            lg:grid-cols-4
          "
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={container}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              className="group"
            >
              {/* =========================================
                  PRODUCT IMAGE
              ========================================= */}

              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[3px]
                  bg-[#EEE9DF]
                "
              >
                {/* Soft Gold Glow */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-40
                    w-40
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#D4AF37]/10
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:scale-150
                    group-hover:bg-[#D4AF37]/20
                  "
                />

                {/* Product Image */}

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    relative
                    z-10
                    h-full
                    w-full
                    object-contain
                    p-8
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Category Badge */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    rounded-full
                    bg-white/80
                    px-3
                    py-2
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[2px]
                      text-[#80651D]
                    "
                  >
                    {product.category}
                  </span>
                </div>

                {/* Quick View */}

                <Link
                  href="/products"
                  aria-label={`View ${product.name}`}
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-20
                    flex
                    h-11
                    w-11
                    translate-y-4
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4AF37]
                    text-black
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              {/* =========================================
                  PRODUCT INFORMATION
              ========================================= */}

              <div className="px-1 pt-5">

                {/* Rating */}

                <div className="mb-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      fill="#D4AF37"
                      className="text-[#D4AF37]"
                    />
                  ))}

                  <span className="ml-1 text-[9px] text-black/40">
                    4.9
                  </span>
                </div>

                {/* Product Name */}

                <h3
                  className="
                    font-[var(--font-cormorant)]
                    text-2xl
                    font-medium
                    text-[#1D1A16]
                  "
                >
                  {product.name}
                </h3>

                {/* Price */}

                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#80651D]
                    "
                  >
                    {product.price}
                  </span>

                  <span
                    className="
                      text-xs
                      text-black/35
                      line-through
                    "
                  >
                    {product.oldPrice}
                  </span>
                </div>

                {/* Add To Cart */}

                <Link
                  href="/products"
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    border
                    border-black/10
                    py-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-[#1D1A16]
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                  "
                >
                  <ShoppingBag size={14} />

                  Add to Cart
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================
            VIEW ALL PRODUCTS
        ========================================= */}

        <motion.div
          className="mt-16 flex justify-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-4
              border-b
              border-[#D4AF37]
              pb-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[3px]
              text-[#80651D]
              transition-all
              duration-300
              hover:gap-6
            "
          >
            View All Products

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}