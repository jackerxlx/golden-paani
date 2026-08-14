"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "919693912883";

  const message = encodeURIComponent(
    "Hello Golden Paani, I would like to know more about your products."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Golden Paani on WhatsApp"
      className="
        fixed
        right-5
        bottom-5
        lg:right-7
        lg:bottom-7
        z-[9999]
        w-14
        h-14
        lg:w-16
        lg:h-16
        rounded-full
        bg-[#25D366]
        text-white
        flex
        items-center
        justify-center
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="text-3xl lg:text-4xl" />

      {/* Notification Dot */}
      <span
        className="
          absolute
          top-0
          right-0
          w-3
          h-3
          bg-[#D4AF37]
          rounded-full
          border-2
          border-white
        "
      />
    </a>
  );
}