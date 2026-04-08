import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/shared/product-card";

type CategoryProduct = {
  id: string;
  title: string;
  price: string;
  tag: string;
  image: string;
};

type CategoryPageViewProps = {
  lane: "women" | "men";
  title: string;
  intro: string;
  heroImage: string;
  products: CategoryProduct[];
};

export function CategoryPageView({
  lane,
  title,
  intro,
  heroImage,
  products,
}: CategoryPageViewProps) {
  return (
    <main>
      <section className="border-b border-[rgba(90,52,122,0.12)] bg-[linear-gradient(135deg,#fffdf8_0%,#f7f2fb_52%,#fff8ef_100%)]">
        <div className="container-shell grid gap-10 py-14 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
              {lane}
            </p>
            <h1 className="mt-4 font-[var(--font-display)] text-[clamp(3rem,6vw,5.6rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#522b7a]">
              {title}
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#6b6475] md:text-lg">
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${lane}`} className="button-secondary">
                Back to {lane}
              </Link>
              <Link href="/new-arrivals" className="button-primary">
                New Arrivals
              </Link>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[34px] border border-white/70 shadow-[0_24px_70px_rgba(90,52,122,0.08)]">
            <Image src={heroImage} alt={title} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Collection Preview
            </p>
            <h2 className="section-title mt-3">Selected pieces in this category.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((item) => (
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