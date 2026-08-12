"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Maximize2,
  Play,
} from "lucide-react";

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

export default function Testimonials() {
  const videoRefs = useRef([]);
  const backgroundVideoRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [muted, setMuted] = useState(true);

  const total = videos.length;
  const activeVideo = videos[activeIndex];

  /*
   * ============================================
   * AUTOMATIC ROTATION
   * ============================================
   */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(interval);
  }, [total]);

  /*
   * ============================================
   * PLAY ACTIVE CAROUSEL VIDEO
   * ============================================
   */

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.muted = muted;

        video
          .play()
          .catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, muted]);

  /*
   * ============================================
   * BACKGROUND VIDEO
   * SAME AS ACTIVE VIDEO
   * ============================================
   */

  useEffect(() => {
    const backgroundVideo = backgroundVideoRef.current;

    if (!backgroundVideo) return;

    backgroundVideo.muted = muted;
    backgroundVideo.currentTime = 0;

    backgroundVideo
      .play()
      .catch(() => {});
  }, [activeIndex, muted]);

  /*
   * ============================================
   * MOUSE MOVEMENT
   * ============================================
   */

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const percentage = mouseX / rect.width;

    const movement = (percentage - 0.5) * 35;

    setRotation(movement);
  };

  /*
   * ============================================
   * MOUSE LEAVE
   * ============================================
   */

  const handleMouseLeave = () => {
    setRotation(0);
  };

  /*
   * ============================================
   * VIDEO POSITION
   * ============================================
   */

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

  /*
   * ============================================
   * MANUAL VIDEO CLICK
   * ============================================
   */

  const handleVideoClick = (index) => {
    setActiveIndex(index);
  };

  /*
   * ============================================
   * MUTE / UNMUTE
   * ============================================
   */

  const toggleMute = () => {
    const newMuted = !muted;

    setMuted(newMuted);

    const activeVideo =
      videoRefs.current[activeIndex];

    if (activeVideo) {
      activeVideo.muted = newMuted;
    }

    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.muted = newMuted;
    }
  };

  /*
   * ============================================
   * FULLSCREEN
   * ============================================
   */

  const fullscreen = () => {
    const activeVideo =
      videoRefs.current[activeIndex];

    if (activeVideo?.requestFullscreen) {
      activeVideo.requestFullscreen();
    }
  };

  return (
    <section
      id="testimonials"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* =====================================================
          FULL PAGE ACTIVE VIDEO BACKGROUND
      ===================================================== */}

      <div className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      ">

        <AnimatePresence mode="sync">
          <motion.video
            key={activeVideo.id}
            ref={backgroundVideoRef}
            src={activeVideo.src}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>

      </div>


      {/* =====================================================
          VERY LIGHT GOLD ATMOSPHERE
          NO DARK OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_55%)]
        "
      />


      {/* =====================================================
          TOP HEADING
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-5xl
          px-6
          pt-24
          text-center
        "
      >

        <p
          className="
            mb-4
            text-[11px]
            uppercase
            tracking-[6px]
            text-[#D4AF37]
          "
        >
          Discover The Golden Standard
        </p>

        <h2
          className="
            font-[var(--font-cormorant)]
            text-5xl
            font-medium
            leading-none
            sm:text-6xl
            md:text-7xl
          "
        >
          Pure Rituals.{" "}

          <span className="text-[#D4AF37]">
            Golden Glow.
          </span>
        </h2>

        <p
          className="
            mt-5
            text-lg
            text-white/80
            sm:text-xl
          "
        >
          Premium Skincare & Hydration
        </p>

      </div>


      {/* =====================================================
          3D VIDEO CYLINDER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-14
          h-[620px]
          w-full
          max-w-[1200px]
          [perspective:1600px]
        "
      >

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[560px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            [transform-style:preserve-3d]
          "
          animate={{
            rotateY: rotation,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
          }}
        >

          {videos.map((video, index) => {
            const position = getPosition(index);

            const isActive = position === 0;

            const angle = position * 38;

            const radius = 470;

            const scale = isActive
              ? 1
              : Math.max(
                  0.68,
                  1 - Math.abs(position) * 0.12
                );

            const opacity = isActive
              ? 1
              : Math.max(
                  0.35,
                  1 - Math.abs(position) * 0.22
                );

            const zIndex =
              50 - Math.abs(position);

            return (
              <motion.div
                key={video.id}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[560px]
                  w-[280px]
                  -translate-x-1/2
                  -translate-y-1/2
                  cursor-pointer
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#D4AF37]/60
                  bg-black
                  shadow-[0_0_50px_rgba(212,175,55,0.18)]
                  [transform-style:preserve-3d]
                "
                animate={{
                  rotateY: angle,

                  translateZ:
                    isActive
                      ? 20
                      : radius *
                        Math.cos(
                          (Math.abs(position) *
                            Math.PI) /
                            6
                        ),

                  scale,
                  opacity,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex,
                }}
                onClick={() =>
                  handleVideoClick(index)
                }
              >

                {/* GOLD FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[5px]
                    z-20
                    rounded-[25px]
                    border
                    border-[#D4AF37]/50
                  "
                />

                {/* VIDEO */}

                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.src}
                  muted={!isActive || muted}
                  loop
                  playsInline
                  preload="metadata"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* SUBTLE GOLD LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_65%)]
                  "
                />

                {/* SIDE VIDEO DARKNESS */}

                {!isActive && (
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/35
                    "
                  />
                )}

                {/* PLAY ICON */}

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
                      bg-black/60
                      backdrop-blur-md
                    "
                  >
                    <Play
                      size={22}
                      fill="white"
                      className="ml-1 text-white"
                    />
                  </div>
                )}

                {/* ACTIVE VIDEO CONTROLS */}

                {isActive && (
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                      z-30
                    "
                  >

                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[3px]
                          text-white
                        "
                      >
                        {video.title}
                      </span>

                      <div className="flex gap-3">

                        {/* MUTE */}

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
                            bg-black/60
                            backdrop-blur-md
                            transition
                            hover:bg-[#D4AF37]
                            hover:text-black
                          "
                        >
                          {muted ? (
                            <VolumeX size={15} />
                          ) : (
                            <Volume2 size={15} />
                          )}
                        </button>

                        {/* FULLSCREEN */}

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
                            bg-black/60
                            backdrop-blur-md
                            transition
                            hover:bg-[#D4AF37]
                            hover:text-black
                          "
                        >
                          <Maximize2 size={15} />
                        </button>

                      </div>

                    </div>

                    <div className="h-[2px] w-full bg-white/20">

                      <div
                        className="
                          h-full
                          w-[45%]
                          bg-[#D4AF37]
                        "
                      />

                    </div>

                  </div>
                )}

              </motion.div>
            );
          })}

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM TEXT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-xl
          px-6
          pb-20
          text-center
        "
      >

        <p
          className="
            text-[14px]
            uppercase
            tracking-[4px]
            text-[#D4AF37]
          "
        >
          Experience The Purity
        </p>

        <p
          className="
            mt-4
            text-base
            leading-7
            text-white/80
          "
        >
          Move your mouse to explore
          <br />
          Sit back and enjoy the golden experience
        </p>

        <div
          className="
            mx-auto
            mt-6
            h-px
            w-10
            bg-[#D4AF37]
          "
        />

        {/* DOTS */}

        <div className="mt-7 flex justify-center gap-6">

          {videos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() =>
                setActiveIndex(index)
              }
              className={`
                h-3
                w-3
                rounded-full
                transition-all
                duration-300
                ${
                  index === activeIndex
                    ? "scale-125 bg-[#D4AF37]"
                    : "bg-white/40 hover:bg-white/70"
                }
              `}
              aria-label={`Video ${index + 1}`}
            />
          ))}

        </div>

      </div>


      {/* =====================================================
          BOTTOM GOLD LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-30
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