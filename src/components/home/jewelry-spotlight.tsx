import Image from "next/image";

const JEWELRY_URL =
  "https://www.divinofabstyles.us";

export function JewelrySpotlight() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[34px] border border-[rgba(90,52,122,0.1)] bg-[linear-gradient(135deg,#fffaf1_0%,#ffffff_46%,#f6effb_100%)] shadow-[0_24px_70px_rgba(90,52,122,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-14">
              <p className="gold-text text-xs font-semibold uppercase tracking-[0.28em]">
                DivinoFabStyles Jewelry
              </p>

              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.92] tracking-[-0.05em] text-[#522b7a]">
                Complete the look with a statement.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#6b6475] md:text-lg">
                Discover our dedicated jewelry collection —
                elegant statement pieces, refined details, and
                finishing touches designed to elevate every look.
              </p>

              <div className="mt-8">
                <a
                  href={JEWELRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#522b7a] px-7 font-semibold text-white transition hover:bg-[#6f42a6]"
                >
                  Shop Jewelry

                  <span
                    aria-hidden="true"
                    className="text-[#e4c878]"
                  >
                    ↗
                  </span>
                </a>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a8da5]">
                divinofabstyles.us
              </p>
            </div>

            <div className="grid min-h-[480px] grid-cols-2 gap-3 bg-white/40 p-4 sm:gap-4 sm:p-5">
              <a
                href={JEWELRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative row-span-2 overflow-hidden rounded-[24px] bg-white"
                aria-label="Visit DivinoFabStyles Jewelry"
              >
                <Image
                  src="/images/products/jewelry/jewelry-sets/Jewelries_Samples2_016.jpeg"
                  alt="DivinoFabStyles jewelry collection"
                  fill
                  sizes="(max-width: 1023px) 50vw, 30vw"
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
                />
              </a>

              <a
                href={JEWELRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[24px] bg-white"
                aria-label="Shop DivinoFabStyles rings"
              >
                <Image
                  src="/images/products/jewelry/rings/Jewelries_Samples2_032.jpeg"
                  alt="DivinoFabStyles ring"
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.06]"
                />
              </a>

              <a
                href={JEWELRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[24px] bg-white"
                aria-label="Shop DivinoFabStyles earrings"
              >
                <Image
                  src="/images/products/jewelry/earrings/Jewelries_Samples2_040.jpeg"
                  alt="DivinoFabStyles earrings"
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.06]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}