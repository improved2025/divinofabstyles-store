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
        <div className="container-shell grid gap-8 py-12 sm:gap-10 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
              {lane}
            </p>
            <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2.6rem,8vw,5.6rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#522b7a]">
              {title}
            </h1>
            <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#6b6475] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {intro}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={`/${lane}`} className="button-secondary w-full sm:w-auto">
                Back to {lane}
              </Link>
              <Link href="/new-arrivals" className="button-primary w-full sm:w-auto">
                New Arrivals
              </Link>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_24px_70px_rgba(90,52,122,0.08)] sm:min-h-[380px] md:min-h-[430px] md:rounded-[34px]">
            <Image
              src={heroImage}
              alt={title}
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Collection Preview
            </p>
            <h2 className="section-title mt-3">Selected pieces in this category.</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
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