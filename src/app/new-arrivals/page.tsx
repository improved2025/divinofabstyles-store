import { allNewArrivalItems } from "@/lib/home-data";
import { ProductCard } from "@/components/shared/product-card";

export default function NewArrivalsPage() {
  return (
    <main>
      <section className="border-b border-[rgba(90,52,122,0.12)] bg-[linear-gradient(135deg,#fffdf8_0%,#f7f2fb_52%,#fff8ef_100%)]">
        <div className="container-shell py-12 md:py-16">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
            New Arrivals
          </p>

          <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2.8rem,7vw,5.6rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#522b7a]">
            Fresh drops with color, detail, and strong presence.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6b6475] md:text-lg">
            Explore the latest pieces added to the store. These styles come from your
            uploaded outfit selections and are ready to be used as the foundation for
            your new arrivals collection.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Collection
            </p>
            <h2 className="section-title mt-3">New arrivals preview.</h2>
            <p className="section-copy mt-4">
              Add the matching `.jpeg` product images into `public/images/products/`
              using the exact filenames from your data file.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {allNewArrivalItems.map((item) => (
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
    </main>
  );
}