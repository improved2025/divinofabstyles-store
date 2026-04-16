import Link from "next/link";
import { featuredProducts } from "@/lib/home-data";
import { ProductCard } from "@/components/shared/product-card";

export function FeaturedProductsPreview() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Featured
            </p>
            <h2 className="section-title mt-3">Standout looks with strong presence.</h2>
            <p className="section-copy mt-4">
              These featured pieces are pulled from your uploaded outfit selections and
              styled for the homepage spotlight.
            </p>
          </div>

          <Link
            href="/featured"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f42a6]"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              tag={item.tag}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}