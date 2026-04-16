import Image from "next/image";
import Link from "next/link";
import type { LandingPageData } from "@/lib/landing-data";
import { ProductCard } from "@/components/shared/product-card";

type GenderLandingProps = {
  data: LandingPageData;
};

export function GenderLanding({ data }: GenderLandingProps) {
  return (
    <main>
      <section
        className={`border-b border-[rgba(90,52,122,0.12)] bg-gradient-to-br ${data.heroTone}`}
      >
        <div className="container-shell grid gap-8 py-12 sm:gap-10 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
              {data.eyebrow}
            </p>

            <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2.6rem,8vw,5.8rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#522b7a]">
              {data.title}
            </h1>

            <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#6b6475] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {data.intro}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/new-arrivals" className="button-primary w-full sm:w-auto">
                Shop New Arrivals
              </Link>
              <Link href="/featured" className="button-secondary w-full sm:w-auto">
                View Featured Styles
              </Link>
            </div>
          </div>

          <div
            className={`overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br ${data.heroPanelTone} p-3 shadow-[0_24px_70px_rgba(90,52,122,0.08)] sm:p-4 md:rounded-[34px] md:p-6`}
          >
            <div className="relative min-h-[320px] overflow-hidden rounded-[22px] sm:min-h-[420px] md:min-h-[480px] md:rounded-[28px]">
              <Image
                src={data.heroImage}
                alt={data.eyebrow}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Categories
            </p>
            <h2 className="section-title mt-3">Browse the core sections.</h2>
            <p className="section-copy mt-4">
              These blocks now click through to real category routes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {data.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${data.key}/${category.slug}`}
                className="group overflow-hidden rounded-[24px] border border-[rgba(90,52,122,0.12)] bg-white shadow-[0_14px_40px_rgba(90,52,122,0.04)] transition duration-300 hover:-translate-y-1 md:rounded-[28px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(35,31,43,0.66),rgba(35,31,43,0.08))]" />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-[var(--font-display)] text-[1.9rem] font-bold leading-none tracking-[-0.04em] text-[#522b7a] md:text-3xl">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b6475] md:mt-4">
                    {category.copy}
                  </p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f42a6] md:mt-5 md:text-xs">
                    Explore category →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="pb-14 md:pb-20">
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
                Featured Pieces
              </p>
              <h2 className="section-title mt-3">Signature looks in this lane.</h2>
              <p className="section-copy mt-4">
                These cards are ready for live product data later.
              </p>
            </div>

            <Link
              href="/featured"
              className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f42a6]"
            >
              View featured
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {data.featured.map((item) => (
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

      <section className="pb-16 md:pb-20">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
              Style Edits
            </p>
            <h2 className="section-title mt-3">
              Curated moments within the collection.
            </h2>
            <p className="section-copy mt-4">
              This section makes the landing page feel merchandised, not flat.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {data.styleBlocks.map((item, index) => (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[28px] border border-[rgba(90,52,122,0.12)] bg-gradient-to-br ${item.tone} ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="grid h-full gap-6 p-8 md:p-9">
                  <div className="relative h-[220px] overflow-hidden rounded-[24px] border border-white/60 bg-white/70 shadow-[0_16px_45px_rgba(90,52,122,0.06)]">
                    <div className="relative h-full w-full p-5 md:p-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={700}
                        height={450}
                        sizes={
                          index === 0
                            ? "(max-width: 1023px) 100vw, 66vw"
                            : "(max-width: 1023px) 100vw, 33vw"
                        }
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-[var(--font-display)] text-4xl font-bold leading-none tracking-[-0.04em] text-[#522b7a]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b6475] md:text-base">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container-shell">
          <div
            className={`overflow-hidden rounded-[34px] bg-gradient-to-br ${data.editorialTone} text-white shadow-[0_24px_70px_rgba(90,52,122,0.12)]`}
          >
            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/78">
                  Editorial Note
                </p>

                <h2 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-[0.94] tracking-[-0.04em] md:text-6xl">
                  {data.editorialTitle}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/82 md:text-lg">
                  {data.editorialCopy}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/new-arrivals"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 font-semibold text-[#5a2f84] transition hover:opacity-95"
                  >
                    New Arrivals
                  </Link>

                  <Link
                    href="/featured"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/25 px-6 font-semibold text-white transition hover:bg-white/10"
                  >
                    Featured Styles
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {data.editorialImages.map((item, index) => (
                  <div
                    key={item.alt}
                    className={`relative h-[220px] overflow-hidden rounded-[26px] border border-white/20 bg-white/12 backdrop-blur-[2px] ${
                      index === 1 ? "sm:translate-y-10" : ""
                    }`}
                  >
                    <div className="absolute inset-0 m-3 rounded-[20px] bg-white/90" />
                    <div className="relative h-full w-full p-6">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={500}
                        height={500}
                        sizes="(max-width: 1023px) 100vw, 25vw"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}