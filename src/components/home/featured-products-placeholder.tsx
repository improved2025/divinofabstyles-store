const items = [
  "Featured Women Look",
  "Women Occasion Set",
  "Featured Men Look",
  "Men Premium Native Set",
];

export function FeaturedProductsPlaceholder() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
            Featured Items
          </p>
          <h2 className="section-title mt-3">This section will pull real products from Shopify.</h2>
          <p className="section-copy mt-4">
            For now, this gives us the homepage structure. Next, we’ll replace these placeholders
            with live featured products from your Shopify collections.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="soft-panel overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] bg-[linear-gradient(135deg,#f7f2fb_0%,#fff8ef_100%)]" />
              <div className="p-5">
                <h3 className="text-base font-medium text-[#522b7a]">{item}</h3>
                <p className="mt-2 text-sm text-[#6b6475]">$0.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}