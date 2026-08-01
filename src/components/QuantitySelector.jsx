"use client";

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex items-center gap-4">

      <button
        onClick={onDecrease}
        className="w-11 h-11 rounded-full border border-[#D4AF37] text-[#D4AF37] text-xl hover:bg-[#D4AF37] hover:text-black transition"
      >
        −
      </button>

      <span className="text-white text-2xl font-semibold w-8 text-center">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="w-11 h-11 rounded-full border border-[#D4AF37] text-[#D4AF37] text-xl hover:bg-[#D4AF37] hover:text-black transition"
      >
        +
      </button>

    </div>
  );
}