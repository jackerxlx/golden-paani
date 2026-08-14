"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Droplets,
  Flower2,
  Volume2,
  VolumeX,
  Maximize2,
  Play,
} from "lucide-react";

/* =========================================================
   VIDEO DATA
========================================================= */

const videos = [
  {
    id: 1,
    src: "/videos/testimonial-1.mp4",
    title: "Golden Glow",
  },
  {
    id: 2,
    src: "/videos/testimonial-2.mp4",
    title: "Pure Hydration",
  },
  {
    id: 3,
    src: "/videos/testimonial-3.mp4",
    title: "Golden Care",
  },
  {
    id: 4,
    src: "/videos/testimonial-4.mp4",
    title: "Natural Beauty",
  },
  {
    id: 5,
    src: "/videos/testimonial-5.mp4",
    title: "Luxury Skin",
  },
];

/* =========================================================
   TEXT ANIMATION
========================================================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const trustItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const backgroundVideoRef = useRef(null);
  const cardVideoRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [muted, setMuted] = useState(true);
  const [scrollLock, setScrollLock] = useState(false);

  const total = videos.length;

  /* =======================================================
     ACTIVE VIDEO
  ======================================================= */

  const activeVideo = videos[activeIndex];

  /* =======================================================
     AUTOMATIC VIDEO CHANGE
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6500);

    return () => clearInterval(interval);
  }, [total]);

  /* =======================================================
     PLAY ACTIVE CARD + PAUSE OTHERS
  ======================================================= */

  useEffect(() => {
    cardVideoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.muted = index !== activeIndex || muted;

      if (index === activeIndex) {
        video.currentTime = 0;

        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, muted]);

  /* =======================================================
     PLAY BACKGROUND VIDEO
  ======================================================= */

  useEffect(() => {
    const video = backgroundVideoRef.current;

    if (!video) return;

    video.muted = true;

    video.currentTime = 0;

    video.play().catch(() => {});
  }, [activeIndex]);

  /* =======================================================
     MOUSE 3D MOVEMENT
  ======================================================= */

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;

    const percentage = mouseX / rect.width;

    const movement = (percentage - 0.5) * 22;

    setRotation(movement);
  };

  /* =======================================================
     MOUSE LEAVE
  ======================================================= */

  const handleMouseLeave = () => {
    setRotation(0);
  };

  /* =======================================================
     POSITION CALCULATION
  ======================================================= */

  const getPosition = (index) => {
    let diff = index - activeIndex;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  };

  /* =======================================================
     CHANGE ACTIVE VIDEO
  ======================================================= */

  const changeVideo = (index) => {
    setActiveIndex(index);
  };

  /* =======================================================
     SCROLL / WHEEL VIDEO CHANGE
  ======================================================= */

  useEffect(() => {
    const handleWheel = (e) => {
      const hero = document.getElementById("golden-hero");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const insideHero =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      if (!insideHero) return;

      if (scrollLock) return;

      if (Math.abs(e.deltaY) < 20) return;

      setScrollLock(true);

      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % total);
      } else {
        setActiveIndex(
          (prev) => (prev - 1 + total) % total
        );
      }

      setTimeout(() => {
        setScrollLock(false);
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollLock, total]);

  /* =======================================================
     MUTE
  ======================================================= */

  const toggleMute = () => {
    const nextMuted = !muted;

    setMuted(nextMuted);

    cardVideoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.muted =
        index !== activeIndex || nextMuted;
    });
  };

  /* =======================================================
     FULLSCREEN
  ======================================================= */

  const fullscreen = () => {
    const video =
      cardVideoRefs.current[activeIndex];

    if (video?.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <section
      id="golden-hero"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        text-white
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* =====================================================
          FULL SCREEN ACTIVE VIDEO BACKGROUND
      ===================================================== */}

      <AnimatePresence mode="sync">

        <motion.video
          key={activeVideo.id}
          ref={backgroundVideoRef}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          src={activeVideo.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        />

      </AnimatePresence>


      {/* =====================================================
          VERY LIGHT GOLD CINEMATIC GLOW
          NOT DARK OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_55%)]
        "
      />


      {/* =====================================================
          VERY LIGHT EDGE GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-black/15
        "
      />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          flex-col
          items-center
          px-6
          pb-16
          pt-[115px]
          text-center
          sm:px-8
          lg:px-12
        "
      >

        {/* ===================================================
            TOP LABEL
        =================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >

          <motion.p
            variants={fadeUp}
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[5px]
              text-[#D4AF37]
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
              sm:text-[11px]
            "
          >
            Discover The Golden Standard
          </motion.p>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            variants={fadeUp}
            className="
              mt-5
              font-[var(--font-cormorant)]
              text-5xl
              font-medium
              leading-[0.92]
              tracking-tight
              text-white
              drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
            "
          >

            Pure Rituals.{" "}

            <span className="text-[#D4AF37]">
              Golden Glow.
            </span>

          </motion.h1>


          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.p
            variants={fadeUp}
            className="
              mt-5
              text-base
              font-light
              tracking-wide
              text-white
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]
              sm:text-xl
            "
          >
            Premium Skincare & Hydration
          </motion.p>

        </motion.div>


        {/* =====================================================
            3D VIDEO AREA
        ===================================================== */}

        <div
          className="
            relative
            mt-10
            h-[500px]
            w-full
            max-w-[1200px]
            [perspective:1800px]
            sm:mt-12
            sm:h-[570px]
            md:h-[610px]
          "
        >

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[330px]
              w-[330px]
              -translate-x-1/2
              -translate-y-1/2
              [transform-style:preserve-3d]
              sm:h-[400px]
              sm:w-[400px]
              md:h-[450px]
              md:w-[450px]
            "
            animate={{
              rotateY: rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 75,
              damping: 18,
            }}
          >

            {videos.map((video, index) => {

              const position =
                getPosition(index);

              const isActive =
                position === 0;

              const angle =
                position * 45;

              const distance =
                isActive
                  ? 80
                  : 350;

              const scale =
                isActive
                  ? 1
                  : Math.max(
                      0.68,
                      1 -
                        Math.abs(position) *
                          0.12
                    );

              const opacity =
                isActive
                  ? 1
                  : Math.max(
                      0.42,
                      1 -
                        Math.abs(position) *
                          0.2
                    );

              const zIndex =
                100 -
                Math.abs(position);

              return (
                <motion.div
                  key={video.id}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[330px]
                    w-[330px]
                    -translate-x-1/2
                    -translate-y-1/2
                    cursor-pointer
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#D4AF37]/70
                    bg-black
                    shadow-[0_0_80px_rgba(212,175,55,0.18)]
                    [transform-style:preserve-3d]
                    sm:h-[400px]
                    sm:w-[400px]
                    md:h-[450px]
                    md:w-[450px]
                  "
                  animate={{
                    rotateY: angle,
                    translateZ: isActive
                      ? distance
                      : distance *
                        Math.cos(
                          (Math.abs(position) *
                            Math.PI) /
                            5
                        ),
                    scale,
                    opacity,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  style={{
                    zIndex,
                  }}
                  onClick={() =>
                    changeVideo(index)
                  }
                >

                  {/* =========================================
                      OUTER GOLD FRAME
                  ========================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      rounded-[28px]
                      border
                      border-[#D4AF37]/60
                      shadow-[inset_0_0_35px_rgba(212,175,55,0.14)]
                    "
                  />


                  {/* =========================================
                      INNER GOLD FRAME
                  ========================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[7px]
                      z-20
                      rounded-[22px]
                      border
                      border-[#D4AF37]/30
                    "
                  />


                  {/* =========================================
                      VIDEO
                  ========================================= */}

                  <video
                    ref={(element) => {
                      cardVideoRefs.current[index] =
                        element;
                    }}
                    src={video.src}
                    muted={
                      !isActive ||
                      muted
                    }
                    loop
                    playsInline
                    preload="metadata"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />


                  {/* =========================================
                      GOLD LIGHT
                  ========================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_60%)]
                    "
                  />


                  {/* =========================================
                      SIDE VIDEO DARKNESS
                      ONLY SIDE VIDEOS
                  ========================================= */}

                  {!isActive && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-black/20
                      "
                    />
                  )}


                  {/* =========================================
                      SIDE PLAY BUTTON
                  ========================================= */}

                  {!isActive && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        flex
                        h-14
                        w-14
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-black/45
                        backdrop-blur-md
                      "
                    >
                      <Play
                        size={21}
                        fill="white"
                        className="ml-1 text-white"
                      />
                    </div>
                  )}


                  {/* =========================================
                      ACTIVE VIDEO INFO
                  ========================================= */}

                  {isActive && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        z-30
                      "
                    >

                      <div className="flex items-end justify-between">

                        <div>

                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[3px]
                              text-[#D4AF37]
                            "
                          >
                            Golden Paani
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-medium
                              text-white
                              drop-shadow-lg
                            "
                          >
                            {video.title}
                          </p>

                        </div>


                        {/* CONTROLS */}

                        <div className="flex gap-2">

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute();
                            }}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/20
                              bg-black/45
                              backdrop-blur-md
                              transition
                              hover:border-[#D4AF37]
                              hover:text-[#D4AF37]
                            "
                          >
                            {muted ? (
                              <VolumeX size={15} />
                            ) : (
                              <Volume2 size={15} />
                            )}
                          </button>


                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              fullscreen();
                            }}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/20
                              bg-black/45
                              backdrop-blur-md
                              transition
                              hover:border-[#D4AF37]
                              hover:text-[#D4AF37]
                            "
                          >
                            <Maximize2 size={15} />
                          </button>

                        </div>

                      </div>


                      {/* GOLD PROGRESS */}

                      <div
                        className="
                          mt-3
                          h-[2px]
                          w-full
                          overflow-hidden
                          bg-white/20
                        "
                      >
                        <motion.div
                          className="
                            h-full
                            bg-[#D4AF37]
                          "
                          animate={{
                            width: [
                              "0%",
                              "100%",
                            ],
                          }}
                          transition={{
                            duration: 6.5,
                            ease: "linear",
                            repeat: Infinity,
                          }}
                        />
                      </div>

                    </motion.div>
                  )}

                </motion.div>
              );
            })}

          </motion.div>

        </div>


        {/* =====================================================
            EXPERIENCE TEXT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            relative
            z-30
            -mt-2
            text-center
          "
        >

          <p
            className="
              text-[11px]
              uppercase
              tracking-[5px]
              text-[#D4AF37]
            "
          >
            Experience The Purity
          </p>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-white
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
              sm:text-base
            "
          >
            Move your mouse to explore
            <br />
            Sit back and enjoy the golden experience
          </p>


          {/* GOLD LINE */}

          <div
            className="
              mx-auto
              mt-5
              h-px
              w-10
              bg-[#D4AF37]
              shadow-[0_0_10px_rgba(212,175,55,0.7)]
            "
          />


          {/* =================================================
              DOTS
          ================================================= */}

          <div className="mt-6 flex justify-center gap-5">

            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() =>
                  changeVideo(index)
                }
                aria-label={`Play ${video.title}`}
                className={`
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    index === activeIndex
                      ? "h-3 w-8 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.7)]"
                      : "h-3 w-3 bg-white/30 hover:bg-white/60"
                  }
                `}
              />
            ))}

          </div>

        </motion.div>


        {/* =====================================================
            TRUST FEATURES
        ===================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-7
            sm:gap-12
          "
        >

          {/* NATURAL */}

          <motion.div
            variants={trustItem}
            className="
              flex
              items-center
              gap-3
            "
          >

            <Flower2
              size={22}
              className="
                text-[#D4AF37]
                drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]
              "
            />

            <div className="text-left">

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white
                "
              >
                Natural
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white/70
                "
              >
                Ingredients
              </p>

            </div>

          </motion.div>


          {/* HYDRATION */}

          <motion.div
            variants={trustItem}
            className="
              flex
              items-center
              gap-3
            "
          >

            <Droplets
              size={22}
              className="
                text-[#D4AF37]
                drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]
              "
            />

            <div className="text-left">

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white
                "
              >
                Pure
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white/70
                "
              >
                Hydration
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
            "
          >

            <Sparkles
              size={22}
              className="
                text-[#D4AF37]
                drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]
              "
            />

            <div className="text-left">

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white
                "
              >
                Golden
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-white/70
                "
              >
                Care
              </p>

            </div>

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
          z-40
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
            text-white
            drop-shadow-lg
          "
        >
          Scroll
        </span>

        <motion.div
          className="
            h-12
            w-px
            bg-[#D4AF37]
            shadow-[0_0_10px_rgba(212,175,55,0.7)]
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


      {/* =====================================================
          BOTTOM GOLD LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]/60
          to-transparent
        "
      />

    </section>
  );
}