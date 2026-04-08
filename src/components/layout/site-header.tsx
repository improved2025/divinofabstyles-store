import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(90,52,122,0.12)] bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex min-h-28 items-center justify-between gap-6 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <Image
            src="/fab-logo1.png"
            alt="DivinoFabStyles logo"
            width={86}
            height={86}
            className="h-[78px] w-[78px] object-contain md:h-[86px] md:w-[86px]"
            priority
          />

          <div className="min-w-0">
            <p className="brand-title text-[#522b7a]">DivinoFabStyles</p>
            <p className="brand-slogan mt-1 text-[#c8a64d]">
              Dress the Culture, Own the Moment
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm font-semibold text-[#522b7a]">
          <Link href="/search" className="hover:text-[#6f42a6]">
            Search
          </Link>
          <Link href="/account" className="hover:text-[#6f42a6]">
            Account
          </Link>
          <Link href="/cart" className="hover:text-[#6f42a6]">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}