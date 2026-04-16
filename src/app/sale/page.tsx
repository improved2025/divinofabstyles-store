import Image from "next/image";
import Link from "next/link";
import { saleHeroItems, saleSections, type SaleItem } from "@/lib/sale-data";

function SaleCard({ item }: { item: SaleItem }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[rgba(90,52,122,0.12)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(90,52,122,0.08)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <span className="absolute left-4 top-4 rounded-full bg-[#7f1734] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
          {item.badge}
        </span>

        <div className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7f1734] shadow-sm">
          Limited Sale
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold leading-6 text-[#522b7a]">
          {item.title}
        </h3>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-[#a28aa5] line-through">{item.originalPrice}</p>
            <p className="mt-1 text-lg font-bold text-[#7f1734]">{item.salePrice}</p>
          </div>

          <button
            type="button"
            className="rounded-full border border-[rgba(127,23,52,0.16)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#7f1734] transition hover:bg-[#fff1f5]"
          >
            Shop Sale
          </button>
        </div>
      </div>
    </article>
  );
}

export default function SalePage() {
  return (
    <main>
      <section className="border-b border-[rgba(90,52,122,0.12)] bg-[linear-gradient(135deg,#fff7f9_0%,#f7f2fb_45%,#fff8ef_100%)]">
        <div className="container-shell grid gap-8 py-12 sm:gap-10 md:py-16 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a11d48]">
              Sale Event
            </p>

            <h1 className="mt-4 font-[var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.88] tracking-[-0.05em] text-[#522b7a]">
              The premium sale edit.
            </h1>

            <p className="mt-6 max-w-[580px] text-base leading-8 text-[#6b6475] md:text-lg">
              A storefront-wide sale presentation with fashion-forward energy,
              stronger value cues, and a polished campaign feel across women,
              men, and accessories.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#fff1f5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a11d48]">
                Up to 30% Off
              </span>
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Women
              </span>
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Men
              </span>
              <span className="rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                Accessories
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/featured" className="button-primary w-full sm:w-auto">
                Shop Featured
              </Link>
              <Link href="/new-arrivals" className="button-secondary w-full sm:w-auto">
                New Arrivals
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {saleHeroItems.map((item, index) => (
              <div
                key={item.id}
                className={`overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_18px_50px_rgba(90,52,122,0.08)] ${
                  index === 1 || index === 3 ? "sm:translate-y-8" : ""
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a11d48]">
                    {item.badge}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold leading-6 text-[#522b7a]">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs text-[#a28aa5] line-through">{item.originalPrice}</span>
                    <span className="text-sm font-bold text-[#7f1734]">{item.salePrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {saleSections.map((section, index) => (
        <section
          key={section.id}
          className={index % 2 === 1 ? "bg-[#fffaf4] py-14 md:py-20" : "py-14 md:py-20"}
        >
          <div className="container-shell">
            <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a11d48]">
                  {section.eyebrow}
                </p>
                <h2 className="section-title mt-3">{section.title}</h2>
                <p className="section-copy mt-4">{section.copy}</p>
              </div>

              <div className="rounded-full border border-[rgba(127,23,52,0.14)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f1734]">
                {section.items.length} sale items
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {section.items.map((item) => (
                <SaleCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}