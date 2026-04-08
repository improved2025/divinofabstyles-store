import Image from "next/image";
import Link from "next/link";

const lanes = [
  {
    title: "Women",
    copy: "Elegant dresses, sets, occasion pieces, and standout looks designed to carry grace with confidence.",
    href: "/women",
    image: "/images/home/women-cover.png",
  },
  {
    title: "Men",
    copy: "Sharp native wear, modern sets, and refined statement pieces with structure and cultural presence.",
    href: "/men",
    image: "/images/home/men-cover.png",
  },
];

export function SectionSplit() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-shell">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
            Shop by Section
          </p>
          <h2 className="section-title mt-3">
            Separate lanes for women and men.
          </h2>
          <p className="section-copy mt-4">
            Clean navigation, focused discovery, and a storefront that feels curated instead of crowded.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {lanes.map((lane) => (
            <Link
              key={lane.title}
              href={lane.href}
              className="group overflow-hidden rounded-[26px] border border-[rgba(90,52,122,0.12)] bg-white shadow-[0_14px_40px_rgba(90,52,122,0.04)] transition duration-300 hover:-translate-y-1 md:rounded-[30px]"
            >
              <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]">
                <Image
                  src={lane.image}
                  alt={lane.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(35,31,43,0.72),rgba(35,31,43,0.16),rgba(35,31,43,0.02))]" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3d98c] sm:text-xs sm:tracking-[0.22em]">
                    Collection
                  </p>
                  <h3 className="mt-2 font-[var(--font-display)] text-4xl font-bold leading-none tracking-[-0.04em] text-white sm:mt-3 sm:text-5xl">
                    {lane.title}
                  </h3>
                  <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/82 sm:mt-4 sm:text-base sm:leading-7">
                    {lane.copy}
                  </p>

                  <div className="mt-5 inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#5a2f84] sm:mt-7">
                    Explore {lane.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}