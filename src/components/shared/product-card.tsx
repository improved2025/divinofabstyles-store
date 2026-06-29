"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductCardProps = {
  title: string;
  price?: string;
  tag: string;
  image: string;
};

export function ProductCard({ title, price, tag, image }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <article className="group overflow-hidden rounded-[28px] border border-[rgba(90,52,122,0.12)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(90,52,122,0.08)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#fcfaf7]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f42a6] shadow-sm">
            {tag}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-base font-semibold leading-6 text-[#522b7a]">{title}</h3>

          <div className="mt-3 flex items-center justify-between gap-3">
            {price ? (
              <p className="text-sm font-medium text-[#6b6475]">{price}</p>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full border border-[rgba(90,52,122,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f42a6] transition hover:bg-[#f7f2fb]"
            >
              Quick View
            </button>
          </div>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close quick view"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          />

          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[30px] bg-white shadow-[0_24px_80px_rgba(35,31,43,0.22)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] bg-[#fcfaf7] sm:min-h-[460px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-contain p-6 sm:p-8"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-full bg-[#f7f2fb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                      {tag}
                    </span>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-[rgba(90,52,122,0.12)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#522b7a] transition hover:bg-[#f7f2fb]"
                    >
                      Close
                    </button>
                  </div>

                  <h3 className="mt-5 font-[var(--font-display)] text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#522b7a]">
                    {title}
                  </h3>

                  {price && (
                    <p className="mt-4 text-lg font-semibold text-[#6b6475]">{price}</p>
                  )}

                  <p className="mt-5 text-sm leading-7 text-[#6b6475] sm:text-base">
                    A closer look at this featured style. This quick view gives the shopper
                    a better visual preview without leaving the page.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#6f42a6] px-5 font-semibold text-white transition hover:opacity-95"
                  >
                    Continue Shopping
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(90,52,122,0.12)] px-5 font-semibold text-[#522b7a] transition hover:bg-[#f7f2fb]"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}