"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCount = Number(
      localStorage.getItem("divino-cart-count") || "0"
    );

    setCartCount(storedCount);

    const handleCartUpdated = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent;

      const count =
        customEvent.detail?.cart
          ?.totalQuantity ?? 0;

      setCartCount(count);

      localStorage.setItem(
        "divino-cart-count",
        String(count)
      );
    };

    window.addEventListener(
      "divino-cart-updated",
      handleCartUpdated
    );

    return () => {
      window.removeEventListener(
        "divino-cart-updated",
        handleCartUpdated
      );
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[rgba(90,52,122,0.12)] bg-white/95 backdrop-blur-xl">
        <div className="container-shell flex h-20 items-center justify-between gap-4 md:h-24">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src="/fab-logo.png"
              alt="DivinoFabStyles logo"
              width={92}
              height={92}
              className="h-[58px] w-[58px] shrink-0 object-contain sm:h-[66px] sm:w-[66px] md:h-[84px] md:w-[84px]"
              priority
            />

            <div className="min-w-0 leading-none">
              <p className="brand-title text-[#522b7a]">
                DivinoFabStyles
              </p>

              <p className="brand-slogan mt-1 hidden text-[#c8a64d] sm:block">
                Dress the Culture, Own the Moment
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 text-sm font-semibold text-[#522b7a] md:flex">
            <Link
              href="/search"
              className="hover:text-[#6f42a6]"
            >
              Search
            </Link>

            <Link
              href="/account"
              className="hover:text-[#6f42a6]"
            >
              Account
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 hover:text-[#6f42a6]"
            >
              Cart

              {cartCount > 0 && (
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#6f42a6] px-1.5 text-[11px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 rounded-full border border-[rgba(90,52,122,0.12)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#522b7a]"
            >
              Cart

              {cartCount > 0 && (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6f42a6] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full border border-[rgba(90,52,122,0.12)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#522b7a]"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />

          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-[360px] flex-col bg-white shadow-[-18px_0_60px_rgba(35,31,43,0.18)]">
            <div className="flex items-center justify-between border-b border-[rgba(90,52,122,0.12)] px-5 py-5">
              <div>
                <p className="text-lg font-semibold uppercase tracking-[0.08em] text-[#522b7a]">
                  Menu
                </p>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8a64d]">
                  Dress the Culture, Own the Moment
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[rgba(90,52,122,0.12)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#522b7a]"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <nav className="flex flex-col px-5 py-5">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="border-b border-[rgba(90,52,122,0.08)] py-4 text-base font-semibold text-[#522b7a]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/search"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="rounded-full border border-[rgba(90,52,122,0.12)] px-4 py-3 text-sm font-semibold text-[#522b7a]"
                >
                  Search
                </Link>

                <Link
                  href="/account"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="rounded-full border border-[rgba(90,52,122,0.12)] px-4 py-3 text-sm font-semibold text-[#522b7a]"
                >
                  Account
                </Link>

                <Link
                  href="/cart"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center justify-between rounded-full bg-[#6f42a6] px-4 py-3 text-sm font-semibold text-white"
                >
                  <span>View Cart</span>

                  {cartCount > 0 && (
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-bold text-[#6f42a6]">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}