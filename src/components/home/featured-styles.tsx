import Link from "next/link";
import { featuredStyles } from "@/lib/home-data";

export function FeaturedStyles() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
            Featured Styles
          </p>
          <h2 className="section-title mt-3">Curated looks for standout moments.</h2>
          <p className="section-copy mt-4">
            Fashion-led sections that help the homepage feel intentional, not generic.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredStyles.map((item, index) => (
            <article
              key={item.id}
              className={`overflow-hidden rounded-[28px] border border-[rgba(90,52,122,0.12)] bg-gradient-to-br ${item.tone} ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="grid h-full gap-6 p-8 md:p-9">
                <div className="h-[220px] rounded-[24px] border border-white/60 bg-white/35 shadow-[0_16px_45px_rgba(90,52,122,0.06)]" />
                <div>
                  <h3 className="font-[var(--font-display)] text-4xl font-bold leading-none tracking-[-0.04em] text-[#522b7a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b6475] md:text-base">
                    {item.copy}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#6f42a6]"
                  >
                    Discover →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}