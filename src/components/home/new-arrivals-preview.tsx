import Link from "next/link";
import { newArrivals } from "@/lib/home-data";
import { ProductCard } from "@/components/shared/product-card";

export function NewArrivalsPreview() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              New Arrivals
            </p>
            <h2 className="section-title mt-3">Fresh pieces. Strong presence.</h2>
            <p className="section-copy mt-4">
              This section will later pull live products, but the layout is now ready for a real storefront experience.
            </p>
          </div>

          <Link
            href="/new-arrivals"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f42a6]"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {newArrivals.map((item) => (
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