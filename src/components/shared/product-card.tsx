"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductCardProps = {
  title: string;
  price?: string;
  tag: string;
  image: string;
  sizes?: string[];
};

export function ProductCard({
  title,
  price,
  tag,
  image,
  sizes = [],
}: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(
    sizes.length === 1 ? sizes[0] : null
  );

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
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
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
            className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f42a6] shadow-sm">
            {tag}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-base font-semibold leading-6 text-[#522b7a]">
            {title}
          </h3>

          {price && (
            <p className="mt-3 text-lg font-bold text-[#522b7a]">
              {price}
            </p>
          )}

          {sizes.length > 0 && (
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8193]">
              {sizes.length === 1 && sizes[0] === "One Size"
                ? "One Size"
                : `Sizes: ${sizes.join(", ")}`}
            </p>
          )}

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="w-full rounded-full border border-[rgba(90,52,122,0.12)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f42a6] transition hover:bg-[#f7f2fb]"
            >
              Quick View
            </button>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[30px] bg-white shadow-[0_24px_80px_rgba(35,31,43,0.28)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] bg-[#fcfaf7] sm:min-h-[500px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-contain p-6 sm:p-8"
                />
              </div>

              <div className="flex min-h-[400px] flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#f7f2fb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f42a6]">
                    {tag}
                  </span>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-[rgba(90,52,122,0.12)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#522b7a] hover:bg-[#f7f2fb]"
                  >
                    Close
                  </button>
                </div>

                <h3 className="mt-6 font-[var(--font-display)] text-[clamp(2rem,5vw,3.3rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#522b7a]">
                  {title}
                </h3>

                {price && (
                  <p className="mt-5 text-2xl font-bold text-[#522b7a]">
                    {price}
                  </p>
                )}

                {sizes.length > 0 && (
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b6475]">
                      {sizes.length === 1 && sizes[0] === "One Size"
                        ? "Size"
                        : "Select Size"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[52px] rounded-full border px-4 py-2 text-sm font-semibold ${
                            selectedSize === size
                              ? "border-[#6f42a6] bg-[#6f42a6] text-white"
                              : "border-[rgba(90,52,122,0.16)] text-[#522b7a] hover:bg-[#f7f2fb]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-10">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="relative z-20 inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center rounded-full bg-[#6f42a6] px-6 font-semibold text-white hover:bg-[#5d368f]"
                  >
                    Continue Shopping
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