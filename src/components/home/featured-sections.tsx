import Link from "next/link";

const sections = [
  {
    title: "Women",
    href: "/women",
    description:
      "Elegant silhouettes, strong detail, and standout pieces designed to own the moment.",
  },
  {
    title: "Men",
    href: "/men",
    description:
      "Sharp native and modern looks with clean structure, confidence, and premium finishing.",
  },
];

export function FeaturedSections() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
            Shop by Section
          </p>
          <h2 className="section-title mt-3">Start with the lane that fits your customer.</h2>
          <p className="section-copy mt-4">
            The store will be split clearly into Women and Men so the browsing experience
            feels focused, elegant, and easy to navigate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.href}
              className="soft-panel rounded-3xl p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6f42a6]/70">
                Collection
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#522b7a]">
                {section.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#6b6475]">
                {section.description}
              </p>
              <Link
                href={section.href}
                className="mt-8 inline-flex text-sm font-semibold text-[#6f42a6]"
              >
                Explore {section.title} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}