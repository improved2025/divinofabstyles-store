export function NewsletterStrip() {
  return (
    <section className="pb-8 md:pb-10">
      <div className="container-shell">
        <div className="rounded-[30px] border border-[rgba(90,52,122,0.12)] bg-[#fffaf4] p-8 shadow-[0_16px_45px_rgba(90,52,122,0.05)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
                Stay in Style
              </p>
              <h2 className="section-title mt-3">Get first access to new drops.</h2>
              <p className="section-copy mt-4 max-w-2xl">
                Be the first to know when new styles arrive, featured edits launch,
                and occasion looks are released.
              </p>
            </div>

            <form className="flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border border-[rgba(90,52,122,0.12)] bg-white px-5 text-sm text-[#231f2b] outline-none"
              />
              <button type="submit" className="button-primary px-6">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}