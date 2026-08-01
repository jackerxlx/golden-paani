import Image from "next/image";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#070707] py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <p className="text-center uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Our Collection
        </p>

        <h2 className="text-center text-white text-5xl lg:text-7xl font-[var(--font-cormorant)] mb-6">
          Premium <span className="text-[#D4AF37]">Skincare</span>
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto leading-8 text-lg mb-20">
          Discover our premium skincare collection crafted with
          nature's finest ingredients for healthy, radiant and
          naturally glowing skin.
        </p>

        {/* Products */}

        <div className="grid md:grid-cols-2 gap-12">

          {products.map((product) => (

            <div
              key={product.id}
              className="group relative bg-[#101010] border border-[#2c2c2c] rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500"
            >

              {/* Badge */}

              <div className="absolute top-5 left-5 z-20">

                <span className="bg-[#D4AF37] text-black text-xs font-semibold px-4 py-2 rounded-full tracking-wider">
                  {product.badge}
                </span>

              </div>

              {/* Product Image */}

              <div className="overflow-hidden bg-[#161616]">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="w-full h-[470px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Details */}

              <div className="p-8">

                <p className="uppercase tracking-[3px] text-[#D4AF37] text-xs mb-3">
                  {product.category}
                </p>

                <h3 className="text-white text-3xl font-[var(--font-cormorant)] mb-3">
                  {product.name}
                </h3>

                <div className="text-[#D4AF37] text-xl mb-5">
                  ★★★★★
                </div>

                <div className="flex items-center justify-between mb-8">

                  <span className="text-white text-3xl font-bold">
                    ₹{product.price}
                  </span>

                </div>

                <div className="flex gap-4">

                  <button className="flex-1 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-white transition duration-300">
                    Add To Cart
                  </button>

                  <button className="flex-1 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition duration-300">
                    Buy Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}