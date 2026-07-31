import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Golden Paani Face Wash",
    price: "₹299",
    image: "/images/products/facewash.png",
  },
  {
    id: 2,
    name: "Golden Paani Toner",
    price: "₹399",
    image: "/images/products/toner.png",
  },
];

export default function Products() {
  return (
    <section className="bg-[#070707] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center uppercase tracking-[8px] text-[#D4AF37] text-sm mb-5">
          Our Collection
        </p>

        <h2
          className="text-center text-white mb-20"
          style={{
            fontSize: "58px",
            fontFamily: "Georgia, serif",
          }}
        >
          Premium
          <span className="text-[#D4AF37]"> Skincare</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-[#101010] border border-[#2c2c2c] rounded-2xl overflow-hidden hover:border-[#D4AF37] duration-500"
            >

              <div className="overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-[450px] object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-white text-3xl mb-3">
                  {product.name}
                </h3>

                <div className="text-[#D4AF37] text-xl mb-5">
                  ★★★★★
                </div>

                <p className="text-2xl text-white mb-8">
                  {product.price}
                </p>

                <div className="flex gap-4">

                  <button className="flex-1 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white duration-300">
                    Add To Cart
                  </button>

                  <button className="flex-1 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black duration-300">
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