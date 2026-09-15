import Image from "next/image";
import Link from "next/link";
import type { AccessoriesPageData } from "@/lib/accessories-data";
import { ProductCard } from "@/components/shared/product-card";

type AccessoriesPageViewProps = {
  data: AccessoriesPageData;
};

export function AccessoriesPageView({
  data,
}: AccessoriesPageViewProps) {
  return (
    <main>
      <section className="border-b border-[rgba(90,52,122,0.12)] bg-[linear-gradient(135deg,#fffdf8_0%,#f7f2fb_52%,#fff8ef_100%)]">
        <div className="container-shell grid gap-8 py-12 sm:gap-10 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
              {data.eyebrow}
            </p>

            <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2.8rem,7vw,5.8rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#522b7a]">
              {data.title}
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#6b6475] md:text-lg">
              {data.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.groups.map((group) => (
                <a
                  key={group.slug}
                  href={`#${group.slug}`}
                  className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6] transition hover:bg-[#f7f2fb]"
                >
                  {group.title}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`/${data.lane}`}
                className="button-secondary w-full sm:w-auto"
              >
                Back to {data.lane}
              </Link>

              <Link
                href="/featured"
                className="button-primary w-full sm:w-auto"
              >
                Featured Styles
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white shadow-[0_24px_70px_rgba(90,52,122,0.08)]">
            <div className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[520px]">
              <Image
                src={data.heroImage}
                alt={data.eyebrow}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-contain p-6 md:p-8"
              />
            </div>

            <div className="grid gap-3 border-t border-[rgba(90,52,122,0.08)] bg-[#fffaf4] p-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8a64d]">
                  Collection
                </p>

                <p className="mt-2 text-sm leading-7 text-[#6b6475]">
                  Premium accessories selected to complete the full look.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8a64d]">
                  Categories
                </p>

                <p className="mt-2 text-sm leading-7 text-[#6b6475]">
                  {data.groups.length} accessory collections available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.groups.map((group, sectionIndex) => (
        <section
          id={group.slug}
          key={group.slug}
          className={
            sectionIndex % 2 === 0
              ? "scroll-mt-28 py-14 md:py-20"
              : "scroll-mt-28 bg-[#fffaf4] py-14 md:py-20"
          }
        >
          <div className="container-shell">
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
                  {group.title}
                </p>

                <h2 className="section-title mt-3">
                  {group.title}
                </h2>

                <p className="section-copy mt-4">
                  {group.copy}
                </p>
              </div>

              <div className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                {group.items.length} items
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              {group.items.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  sizes={item.sizes}
                  tag={item.badge}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}