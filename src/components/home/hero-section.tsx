import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(90,52,122,0.12)]">
      <div className="absolute inset-0 z-0">
        <video
          key="/hero.mp4"
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(252,250,247,0.66)_0%,rgba(252,250,247,0.34)_42%,rgba(252,250,247,0.08)_72%,rgba(252,250,247,0.03)_100%)]" />

      <div className="container-shell relative z-20 flex min-h-[68vh] items-end py-10 sm:items-center sm:py-12 md:min-h-[86vh]">
        <div className="max-w-[590px] rounded-[24px] border border-white/70 bg-[rgba(255,250,246,0.88)] p-5 shadow-[0_18px_50px_rgba(90,52,122,0.08)] sm:p-7 md:rounded-[30px] md:p-10">
          <p className="gold-text text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px] sm:tracking-[0.28em]">
            Men & Women
          </p>

          <h1 className="hero-title mt-3 text-[#5a2f84]">
            Dress the culture. Own the moment.
          </h1>

          <p className="mt-4 max-w-[480px] text-sm leading-7 text-[#6b6475] sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            Discover elegant African fashion for men and women with statement
            silhouettes, rich color, and confident presence.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/women" className="button-primary w-full sm:w-auto">
              Shop Women
            </Link>
            <Link href="/men" className="button-secondary w-full sm:w-auto">
              Shop Men
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}