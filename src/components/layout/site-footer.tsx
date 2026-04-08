import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="container-shell py-16 md:py-20">
        <div className="grid gap-x-10 gap-y-12 border-b border-white/10 pb-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/fab-logo.png"
                alt="DivinoFabStyles logo"
                width={78}
                height={78}
                className="h-[70px] w-[70px] shrink-0 object-contain md:h-[78px] md:w-[78px]"
              />

              <div className="min-w-0">
                <p className="brand-title text-white">DivinoFabStyles</p>
                <p className="brand-slogan mt-2 text-[#c8a64d]">
                  Dress the Culture, Own the Moment
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/68">
              Bold, elegant, culture-forward fashion for confident men and women.
              Discover statement looks that carry identity, beauty, and presence.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a64d]">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-white/78">
              <Link href="/women" className="transition hover:text-white">
                Women
              </Link>
              <Link href="/men" className="transition hover:text-white">
                Men
              </Link>
              <Link href="/new-arrivals" className="transition hover:text-white">
                New Arrivals
              </Link>
              <Link href="/featured" className="transition hover:text-white">
                Featured
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a64d]">
              Help
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-white/78">
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
              <Link href="/faq" className="transition hover:text-white">
                FAQ
              </Link>
              <Link href="/shipping-returns" className="transition hover:text-white">
                Shipping & Returns
              </Link>
              <Link href="/size-guide" className="transition hover:text-white">
                Size Guide
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a64d]">
              Follow
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-white/78">
              <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-white">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-white">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-white">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-5 text-xs tracking-[0.14em] text-white/42 uppercase md:flex-row md:items-center md:justify-between">
          <p>© 2026 DivinoFabStyles. All rights reserved.</p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href="/women" className="transition hover:text-white/70">
              Women
            </Link>
            <Link href="/men" className="transition hover:text-white/70">
              Men
            </Link>
            <Link href="/featured" className="transition hover:text-white/70">
              Featured
            </Link>
            <Link href="/contact" className="transition hover:text-white/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}