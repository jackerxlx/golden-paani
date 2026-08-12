"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Droplets,
  Flower2,
} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const trustItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <motion.video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{
          scale: 1.03,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          },

          opacity: {
            duration: 1.2,
          },
        }}
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />
      </motion.video>


      {/* =====================================================
          VERY LIGHT TEXT READABILITY OVERLAY
          
          IMPORTANT:
          Video brightness is NOT reduced.
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/25
          via-transparent
          to-transparent
          pointer-events-none
        "
      />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          items-center
          px-6
          pt-[100px]
          sm:px-8
          lg:px-12
        "
      >

        <motion.div
          className="max-w-[700px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          {/* =================================================
              SMALL LABEL
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              mb-6
              flex
              items-center
              gap-3
              text-[#D4AF37]
            "
          >

            <motion.span
              className="
                h-px
                w-10
                bg-[#D4AF37]
              "
              initial={{
                width: 0,
              }}
              animate={{
                width: 40,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[5px]
                drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]
              "
            >
              Premium Skincare Collection
            </span>

          </motion.div>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            variants={fadeUp}
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-medium
              leading-[0.95]
              text-white
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
            "
          >

            <span className="inline-block">
              Pure Rituals.
            </span>

            <br />

            <motion.span
              className="
                inline-block
                text-[#D4AF37]
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
              "
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Golden Glow.
            </motion.span>

          </motion.h1>


          {/* =================================================
              GOLD LINE
          ================================================= */}

          <motion.div
            className="
              mt-5
              h-px
              w-24
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#F5E6A8]
              to-transparent
            "
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 96,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 1,
            }}
          />


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={fadeUp}
            className="
              mt-7
              max-w-[570px]
              text-sm
              leading-7
              text-white
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
              sm:text-base
            "
          >
            Crafted with the purity of nature and powered by
            advanced skincare science. Experience formulas that
            cleanse, nourish and reveal naturally radiant skin.
          </motion.p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            {/* SHOP NOW */}

            <Link
              href="/products"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-[#D4AF37]
                px-8
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[2px]
                text-black
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:bg-[#F0D66B]
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">
                Shop Now
              </span>

              <ArrowRight
                size={16}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>


            {/* EXPLORE */}

            <Link
              href="/products"
              className="
                group
                inline-flex
                items-center
                rounded-full
                border
                border-[#D4AF37]
                bg-black/10
                px-8
                py-4
                text-[11px]
                font-medium
                uppercase
                tracking-[2px]
                text-white
                shadow-[0_5px_20px_rgba(0,0,0,0.15)]
                backdrop-blur-[2px]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              Explore Collection
            </Link>

          </motion.div>


          {/* =================================================
              TRUST FEATURES
          ================================================= */}

          <motion.div
            className="
              mt-14
              flex
              flex-wrap
              gap-8
              sm:gap-12
            "
            variants={container}
          >

            {/* NATURAL */}

            <motion.div
              variants={trustItem}
              className="
                flex
                items-center
                gap-3
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >

              <Flower2
                size={23}
                className="
                  text-[#D4AF37]
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                "
              />

              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  "
                >
                  Natural
                </p>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white/80
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  "
                >
                  Ingredients
                </p>

              </div>

            </motion.div>


            {/* DERMATOLOGIST */}

            <motion.div
              variants={trustItem}
              className="
                flex
                items-center
                gap-3
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >

              <Droplets
                size={23}
                className="
                  text-[#D4AF37]
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                "
              />

              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  "
                >
                  Dermatologist
                </p>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white/80
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  "
                >
                  Approved
                </p>

              </div>

            </motion.div>


            {/* LUXURY */}

            <motion.div
              variants={trustItem}
              className="
                flex
                items-center
                gap-3
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >

              <Sparkles
                size={23}
                className="
                  text-[#D4AF37]
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                "
              />

              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  "
                >
                  Luxury
                </p>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-white/80
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  "
                >
                  Skincare
                </p>

              </div>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-8
          right-8
          z-20
          hidden
          flex-col
          items-center
          gap-3
          md:flex
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
      >

        <span
          className="
            rotate-90
            text-[8px]
            uppercase
            tracking-[4px]
            text-white/80
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
          "
        >
          Scroll
        </span>

        <motion.div
          className="
            h-12
            w-px
            bg-[#D4AF37]
            shadow-[0_0_8px_rgba(212,175,55,0.5)]
          "
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </motion.div>

    </section>
  );
}