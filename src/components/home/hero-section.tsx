import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(90,52,122,0.12)]">
      <div className="absolute inset-0 z-0">
        <video
          key="/hero.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(252,250,247,0.58)_0%,rgba(252,250,247,0.28)_38%,rgba(252,250,247,0.08)_70%,rgba(252,250,247,0.02)_100%)]" />

      <div className="container-shell relative z-20 flex min-h-[78vh] items-center py-12 md:min-h-[92vh]">
        <div className="max-w-[590px] rounded-[30px] border border-white/70 bg-[rgba(255,250,246,0.86)] p-7 shadow-[0_18px_50px_rgba(90,52,122,0.08)] md:p-10">
          <p className="gold-text text-[11px] font-semibold uppercase tracking-[0.28em]">
            Men & Women
          </p>

          <h1 className="hero-title mt-3 text-[#5a2f84]">
            Dress the culture. Own the moment.
          </h1>

          <p className="mt-5 max-w-[480px] text-base leading-8 text-[#6b6475] md:text-lg">
            Discover elegant African fashion for men and women with statement
            silhouettes, rich color, and confident presence.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/women" className="button-primary">
              Shop Women
            </Link>
            <Link href="/men" className="button-secondary">
              Shop Men
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}