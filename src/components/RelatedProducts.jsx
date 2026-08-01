import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function RelatedProducts({ currentSlug }) {
  const related = products.filter(
    (item) => item.slug !== currentSlug
  );

  return (
    <section className="mt-24">

      <h2 className="text-4xl text-white font-[var(--font-cormorant)] mb-10">
        You May Also Like
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {related.map((product) => (

          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="bg-[#111] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#D4AF37] transition"
          >

            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-[350px] object-contain p-10"
            />

            <div className="p-6">

              <h3 className="text-white text-2xl mb-2">
                {product.name}
              </h3>

              <p className="text-[#D4AF37]">
                ₹{product.price}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}