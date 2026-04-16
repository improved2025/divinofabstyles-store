import Image from "next/image";
import Link from "next/link";
import type { AccessoriesPageData } from "@/lib/accessories-data";

type AccessoriesPageViewProps = {
  data: AccessoriesPageData;
};

export function AccessoriesPageView({ data }: AccessoriesPageViewProps) {
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
                <span
                  key={group.slug}
                  className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]"
                >
                  {group.title}
                </span>
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
                View Featured Styles
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
                className="object-cover"
              />
            </div>

            <div className="grid gap-3 border-t border-[rgba(90,52,122,0.08)] bg-[#fffaf4] p-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8a64d]">
                  Collection
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6b6475]">
                  Premium accessories curated to complete the full fashion statement.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8a64d]">
                  Categories
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6b6475]">
                  {data.groups.length} premium accessory groups ready for display.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.groups.map((group, sectionIndex) => (
        <section
          key={group.slug}
          className={sectionIndex % 2 === 0 ? "py-14 md:py-18" : "bg-[#fffaf4] py-14 md:py-18"}
        >
          <div className="container-shell">
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
                  {group.title}
                </p>
                <h2 className="section-title mt-3">{group.title}</h2>
                <p className="section-copy mt-4">{group.copy}</p>
              </div>

              <div className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                {group.items.length} items
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              {group.items.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-[28px] border border-[rgba(90,52,122,0.12)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(90,52,122,0.08)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f42a6]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-semibold text-[#522b7a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#6b6475]">
                      Premium accessory piece curated for a refined finishing touch.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}