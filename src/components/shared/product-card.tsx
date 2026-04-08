import Image from "next/image";

type ProductCardProps = {
  title: string;
  price: string;
  tag: string;
  image: string;
};

export function ProductCard({ title, price, tag, image }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[rgba(90,52,122,0.12)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(90,52,122,0.08)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f42a6]">
          {tag}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-[#522b7a]">{title}</h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-medium text-[#6b6475]">{price}</p>
          <button
            type="button"
            className="rounded-full border border-[rgba(90,52,122,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f42a6] transition hover:bg-[#f7f2fb]"
          >
            Quick View
          </button>
        </div>
      </div>
    </article>
  );
}