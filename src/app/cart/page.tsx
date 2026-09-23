"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartLine = {
  id: string;
  quantity: number;

  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };

  merchandise: {
    id: string;
    title: string;

    selectedOptions: {
      name: string;
      value: string;
    }[];

    image: {
      url: string;
      altText: string | null;
    } | null;

    price: {
      amount: string;
      currencyCode: string;
    };

    product: {
      title: string;
      handle: string;
    };
  };
};

type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;

  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };

    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };

  lines: {
    nodes: CartLine[];
  };
};

function formatMoney(
  amount: string,
  currencyCode: string
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount));
}

export default function CartPage() {
  const [cart, setCart] =
    useState<ShopifyCart | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [
    updatingLineId,
    setUpdatingLineId,
  ] = useState<string | null>(null);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState<string | null>(null);

  function syncCart(
    updatedCart: ShopifyCart | null
  ) {
    setCart(updatedCart);

    const count =
      updatedCart?.totalQuantity ?? 0;

    localStorage.setItem(
      "divino-cart-count",
      String(count)
    );

    window.dispatchEvent(
      new CustomEvent(
        "divino-cart-updated",
        {
          detail: {
            cart: updatedCart,
          },
        }
      )
    );
  }

  useEffect(() => {
    async function loadCart() {
      try {
        setLoading(true);
        setErrorMessage(null);

        const response = await fetch(
          "/api/cart/get",
          {
            cache: "no-store",
            credentials: "same-origin",
          }
        );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.message ||
              "Unable to load cart."
          );
        }

        syncCart(data.cart);
      } catch (error) {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to load cart."
        );
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  async function updateQuantity(
    lineId: string,
    quantity: number
  ) {
    if (quantity < 1) return;

    try {
      setUpdatingLineId(lineId);
      setErrorMessage(null);

      const response = await fetch(
        "/api/cart/update",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({
            action: "update",
            lineId,
            quantity,
          }),
        }
      );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to update quantity."
        );
      }

      syncCart(data.cart);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to update quantity."
      );
    } finally {
      setUpdatingLineId(null);
    }
  }

  async function removeLine(
    lineId: string
  ) {
    try {
      setUpdatingLineId(lineId);
      setErrorMessage(null);

      const response = await fetch(
        "/api/cart/update",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({
            action: "remove",
            lineId,
          }),
        }
      );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to remove item."
        );
      }

      syncCart(data.cart);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to remove item."
      );
    } finally {
      setUpdatingLineId(null);
    }
  }

  if (loading) {
    return (
      <main className="container-shell py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-[#6b6475]">
            Loading your cart...
          </p>
        </div>
      </main>
    );
  }

  if (
    !cart ||
    cart.totalQuantity === 0
  ) {
    return (
      <main className="container-shell py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
            Shopping Cart
          </p>

          <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold tracking-[-0.04em] text-[#522b7a] md:text-6xl">
            Your cart is empty.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#6b6475]">
            Discover dresses,
            men&apos;s fashion,
            accessories, and statement
            pieces from DivinoFabStyles.
          </p>

          <Link
            href="/new-arrivals"
            className="mt-8 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#6f42a6] px-7 font-semibold text-white transition hover:bg-[#5d368f]"
          >
            Shop New Arrivals
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#fffdf9]">
      <section className="border-b border-[rgba(90,52,122,0.1)] bg-white">
        <div className="container-shell py-10 md:py-14">
          <p className="gold-text text-xs font-semibold uppercase tracking-[0.24em]">
            Shopping Cart
          </p>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="font-[var(--font-display)] text-5xl font-bold tracking-[-0.05em] text-[#522b7a] md:text-6xl">
              Your selections.
            </h1>

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6b6475]">
              {cart.totalQuantity}{" "}
              {cart.totalQuantity === 1
                ? "item"
                : "items"}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-10 md:py-16">
        {errorMessage && (
          <div className="mb-6 rounded-[20px] border border-red-100 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="space-y-5">
            {cart.lines.nodes.map(
              (line) => {
                const size =
                  line.merchandise.selectedOptions.find(
                    (option) =>
                      option.name.toLowerCase() ===
                      "size"
                  )?.value ??
                  line.merchandise.title;

                const isUpdating =
                  updatingLineId ===
                  line.id;

                return (
                  <article
                    key={line.id}
                    className="grid gap-5 rounded-[28px] border border-[rgba(90,52,122,0.1)] bg-white p-4 shadow-[0_12px_35px_rgba(90,52,122,0.05)] sm:grid-cols-[150px_1fr] sm:p-5"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#fcfaf7]">
                      {line.merchandise.image ? (
                        <img
                          src={
                            line
                              .merchandise
                              .image.url
                          }
                          alt={
                            line
                              .merchandise
                              .image
                              .altText ??
                            line
                              .merchandise
                              .product
                              .title
                          }
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-4 text-center text-xs text-[#8a8193]">
                          Product image
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8a64d]">
                          DivinoFabStyles
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-[#522b7a]">
                          {
                            line
                              .merchandise
                              .product
                              .title
                          }
                        </h2>

                        <p className="mt-3 text-sm text-[#6b6475]">
                          Size:{" "}
                          <span className="font-semibold text-[#522b7a]">
                            {size}
                          </span>
                        </p>

                        <p className="mt-1 text-sm text-[#6b6475]">
                          Unit price:{" "}
                          <span className="font-semibold text-[#522b7a]">
                            {formatMoney(
                              line
                                .merchandise
                                .price
                                .amount,
                              line
                                .merchandise
                                .price
                                .currencyCode
                            )}
                          </span>
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-4">
                          <div className="inline-flex items-center overflow-hidden rounded-full border border-[rgba(90,52,122,0.16)] bg-white">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              disabled={
                                isUpdating ||
                                line.quantity <=
                                  1
                              }
                              onClick={() =>
                                updateQuantity(
                                  line.id,
                                  line.quantity -
                                    1
                                )
                              }
                              className="flex h-10 w-11 items-center justify-center text-lg font-semibold text-[#522b7a] transition hover:bg-[#f7f2fb] disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              −
                            </button>

                            <span className="flex min-w-[44px] items-center justify-center border-x border-[rgba(90,52,122,0.12)] px-3 text-sm font-semibold text-[#522b7a]">
                              {isUpdating
                                ? "..."
                                : line.quantity}
                            </span>

                            <button
                              type="button"
                              aria-label="Increase quantity"
                              disabled={
                                isUpdating
                              }
                              onClick={() =>
                                updateQuantity(
                                  line.id,
                                  line.quantity +
                                    1
                                )
                              }
                              className="flex h-10 w-11 items-center justify-center text-lg font-semibold text-[#522b7a] transition hover:bg-[#f7f2fb] disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            disabled={
                              isUpdating
                            }
                            onClick={() =>
                              removeLine(
                                line.id
                              )
                            }
                            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9b4d5b] underline decoration-[#9b4d5b]/30 underline-offset-4 transition hover:text-[#7f3341] disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            {isUpdating
                              ? "Updating..."
                              : "Remove"}
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 flex items-end justify-between gap-4 border-t border-[rgba(90,52,122,0.08)] pt-5">
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8193]">
                          Item Total
                        </span>

                        <p className="text-xl font-bold text-[#522b7a]">
                          {formatMoney(
                            line.cost
                              .totalAmount
                              .amount,
                            line.cost
                              .totalAmount
                              .currencyCode
                          )}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              }
            )}

            <Link
              href="/new-arrivals"
              className="inline-flex pt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#6f42a6]"
            >
              ← Continue Shopping
            </Link>
          </div>

          <aside className="rounded-[28px] border border-[rgba(90,52,122,0.1)] bg-white p-6 shadow-[0_16px_45px_rgba(90,52,122,0.07)] md:p-7 lg:sticky lg:top-28">
            <p className="gold-text text-xs font-semibold uppercase tracking-[0.2em]">
              Order Summary
            </p>

            <div className="mt-6 space-y-4 border-b border-[rgba(90,52,122,0.1)] pb-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#6b6475]">
                  Items
                </span>

                <span className="font-semibold text-[#522b7a]">
                  {
                    cart.totalQuantity
                  }
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#6b6475]">
                  Subtotal
                </span>

                <span className="font-semibold text-[#522b7a]">
                  {formatMoney(
                    cart.cost
                      .subtotalAmount
                      .amount,
                    cart.cost
                      .subtotalAmount
                      .currencyCode
                  )}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-[#6b6475]">
                  Shipping
                </span>

                <span className="text-right text-sm font-medium text-[#6b6475]">
                  Calculated at
                  checkout
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 py-6">
              <span className="text-base font-semibold text-[#522b7a]">
                Total
              </span>

              <span className="text-2xl font-bold text-[#522b7a]">
                {formatMoney(
                  cart.cost.totalAmount
                    .amount,
                  cart.cost.totalAmount
                    .currencyCode
                )}
              </span>
            </div>

            <button
              type="button"
              disabled={
                updatingLineId !== null
              }
              onClick={() => {
                window.location.href =
                  cart.checkoutUrl;
              }}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#6f42a6] px-6 font-semibold text-white transition hover:bg-[#5d368f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Checkout
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#8a8193]">
              Secure checkout powered by
              Shopify.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}