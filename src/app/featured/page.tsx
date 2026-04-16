import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/shared/product-card";
import { editorPicks, featuredSections, heroSpotlight } from "@/lib/featured-data";

function FeaturedSectionBlock({
  eyebrow,
  title,
  copy,
  items,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  items: {
    id: string;
    title: string;
    price?: string;
    tag: string;
    image: string;
  }[];
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-shell">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              {eyebrow}
            </p>
            <h2 className="section-title mt-3">{title}</h2>
            <p className="section-copy mt-4">{copy}</p>
          </div>

          <div className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
            {items.length} items
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {items.map((item) => (
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

export default function FeaturedPage() {
  return (
    <main>
      <section className="border-b border-[rgba(90,52,122,0.12)] bg-[linear-gradient(135deg,#fffdf8_0%,#f7f2fb_48%,#fff8ef_100%)]">
        <div className="container-shell grid gap-8 py-12 sm:gap-10 md:py-16 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
              Featured
            </p>

            <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2.9rem,7vw,5.8rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#522b7a]">
              A curated premium edit from across the store.
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#6b6475] md:text-lg">
              This featured page brings together standout selections from women,
              men, and accessories to create a stronger storefront showcase and a
              more intentional shopping experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Women
              </span>
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Men
              </span>
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Accessories
              </span>
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Editor’s Picks
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/new-arrivals" className="button-primary w-full sm:w-auto">
                Shop New Arrivals
              </Link>
              <Link href="/" className="button-secondary w-full sm:w-auto">
                Back Home
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {heroSpotlight.map((item, index) => (
              <div
                key={item.id}
                className={`overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_18px_50px_rgba(90,52,122,0.08)] ${
                  index === 0 || index === 3 ? "translate-y-0" : "sm:translate-y-8"
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="border-t border-[rgba(90,52,122,0.08)] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8a64d]">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold leading-6 text-[#522b7a]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Editor’s Picks
            </p>
            <h2 className="section-title mt-3">The strongest overall selections.</h2>
            <p className="section-copy mt-4">
              These are the first pieces a shopper should notice on a curated
              featured page.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {editorPicks.map((item) => (
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

      {featuredSections.map((section, index) => (
        <div key={section.id} className={index % 2 === 1 ? "bg-[#fffaf4]" : ""}>
          <FeaturedSectionBlock
            eyebrow={section.eyebrow}
            title={section.title}
            copy={section.copy}
            items={section.items}
          />
        </div>
      ))}
    </main>
  );
}