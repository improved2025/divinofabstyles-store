import Link from "next/link";

export function EditorialBanner() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[34px] border border-[rgba(90,52,122,0.12)] bg-[linear-gradient(135deg,#5d3288_0%,#6f42a6_42%,#c8a64d_100%)] text-white shadow-[0_24px_70px_rgba(90,52,122,0.12)]">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                Campaign Edit
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-[0.94] tracking-[-0.04em] md:text-6xl">
                Style that speaks before you do.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/82 md:text-lg">
                Occasion pieces, standout tailoring, and culture-forward looks
                built for weddings, celebrations, events, and elegant everyday wear.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/featured"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 font-semibold text-[#5a2f84] transition hover:opacity-95"
                >
                  Shop Featured Styles
                </Link>
                <Link
                  href="/new-arrivals"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/25 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  New Arrivals
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-[220px] rounded-[26px] border border-white/20 bg-white/16 backdrop-blur-[2px]" />
              <div className="h-[220px] rounded-[26px] border border-white/20 bg-white/10 backdrop-blur-[2px] sm:translate-y-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}