"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getShopifyHandle,
} from "@/lib/shopify-handles";

type ShopifyVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;

  selectedOptions: {
    name: string;
    value: string;
  }[];

  price: {
    amount: string;
    currencyCode: string;
  };
};

type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  availableForSale: boolean;

  featuredImage: {
    url: string;
    altText: string | null;
  } | null;

  variants: {
    nodes: ShopifyVariant[];
  };
};

type ProductCardProps = {
  title: string;
  price?: string;
  tag: string;
  image: string;
  sizes?: string[];
  shopifyHandle?: string;
};

export function ProductCard({
  title,
  price,
  tag,
  image,
  sizes = [],
  shopifyHandle,
}: ProductCardProps) {
  const resolvedShopifyHandle =
    getShopifyHandle({
      title,
      image,
      price,
      shopifyHandle,
    });

  const [open, setOpen] =
    useState(false);

  const [
    selectedSize,
    setSelectedSize,
  ] = useState<string | null>(
    sizes.length === 1
      ? sizes[0]
      : null
  );

  const [
    shopifyProduct,
    setShopifyProduct,
  ] =
    useState<ShopifyProduct | null>(
      null
    );

  const [
    loadingShopify,
    setLoadingShopify,
  ] = useState(false);

  const [
    addingToCart,
    setAddingToCart,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] =
    useState<string | null>(null);

  const [
    successMessage,
    setSuccessMessage,
  ] =
    useState<string | null>(null);

  const closeModal = () => {
    setOpen(false);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  useEffect(() => {
    if (
      !open ||
      !resolvedShopifyHandle
    ) {
      return;
    }

    let cancelled = false;

    async function loadShopifyProduct() {
      try {
        setLoadingShopify(true);
        setErrorMessage(null);

        const response = await fetch(
          `/api/shopify-product/${encodeURIComponent(
            resolvedShopifyHandle
          )}`,
          {
            cache: "no-store",
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
              "Unable to load Shopify product."
          );
        }

        if (!cancelled) {
          setShopifyProduct(
            data.product
          );
        }
      } catch (error) {
        if (!cancelled) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Unable to load product information."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingShopify(false);
        }
      }
    }

    loadShopifyProduct();

    return () => {
      cancelled = true;
    };
  }, [
    open,
    resolvedShopifyHandle,
  ]);

  useEffect(() => {
    setShopifyProduct(null);
    setErrorMessage(null);
    setSuccessMessage(null);

    setSelectedSize(
      sizes.length === 1
        ? sizes[0]
        : null
    );
  }, [
    resolvedShopifyHandle,
    sizes,
  ]);

  const liveVariants =
    shopifyProduct?.variants.nodes ??
    [];

  const liveSizes = useMemo(() => {
    if (!shopifyProduct) {
      return sizes;
    }

    return liveVariants
      .map((variant) => {
        const sizeOption =
          variant.selectedOptions.find(
            (option) =>
              option.name.toLowerCase() ===
              "size"
          );

        return (
          sizeOption?.value ??
          variant.title
        );
      })
      .filter(Boolean);
  }, [
    shopifyProduct,
    liveVariants,
    sizes,
  ]);

  const selectedVariant =
    useMemo(() => {
      if (
        !shopifyProduct ||
        !selectedSize
      ) {
        return null;
      }

      return (
        liveVariants.find(
          (variant) => {
            const sizeOption =
              variant.selectedOptions.find(
                (option) =>
                  option.name.toLowerCase() ===
                  "size"
              );

            const sizeValue =
              sizeOption?.value ??
              variant.title;

            return (
              sizeValue ===
              selectedSize
            );
          }
        ) ?? null
      );
    }, [
      shopifyProduct,
      liveVariants,
      selectedSize,
    ]);

  const displayedPrice =
    useMemo(() => {
      if (selectedVariant) {
        return `$${Number(
          selectedVariant.price.amount
        ).toFixed(2)}`;
      }

      const firstVariant =
        shopifyProduct?.variants
          .nodes[0];

      if (firstVariant) {
        return `$${Number(
          firstVariant.price.amount
        ).toFixed(2)}`;
      }

      return price;
    }, [
      selectedVariant,
      shopifyProduct,
      price,
    ]);

  async function handleAddToCart() {
    if (!resolvedShopifyHandle) {
      return;
    }

    if (!selectedVariant) {
      setErrorMessage(
        "Please select a size."
      );

      return;
    }

    if (
      !selectedVariant.availableForSale
    ) {
      setErrorMessage(
        "This size is currently unavailable."
      );

      return;
    }

    try {
      setAddingToCart(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      const response = await fetch(
        "/api/cart/create",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          credentials: "same-origin",

          body: JSON.stringify({
            merchandiseId:
              selectedVariant.id,
            quantity: 1,
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
            data.errors?.[0]
              ?.message ||
            "Unable to add item to cart."
        );
      }

      const cart = data.cart;

      localStorage.setItem(
        "divino-cart-count",
        String(
          cart.totalQuantity
        )
      );

      window.dispatchEvent(
        new CustomEvent(
          "divino-cart-updated",
          {
            detail: {
              cart,
            },
          }
        )
      );

      setSuccessMessage(
        `${title} – ${selectedSize} added to cart. Cart now has ${cart.totalQuantity} ${
          cart.totalQuantity === 1
            ? "item"
            : "items"
        }.`
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to add item to cart."
      );
    } finally {
      setAddingToCart(false);
    }
  }

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
              {sizes.length === 1 &&
              sizes[0] === "One Size"
                ? "One Size"
                : `Sizes: ${sizes.join(
                    ", "
                  )}`}
            </p>
          )}

          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                setOpen(true);
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
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
          onMouseDown={(
            event
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeModal();
            }
          }}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[30px] bg-white shadow-[0_24px_80px_rgba(35,31,43,0.28)]"
            onMouseDown={(
              event
            ) =>
              event.stopPropagation()
            }
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
                    onClick={
                      closeModal
                    }
                    className="rounded-full border border-[rgba(90,52,122,0.12)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#522b7a] hover:bg-[#f7f2fb]"
                  >
                    Close
                  </button>
                </div>

                <h3 className="mt-6 font-[var(--font-display)] text-[clamp(2rem,5vw,3.3rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#522b7a]">
                  {title}
                </h3>

                {displayedPrice && (
                  <p className="mt-5 text-2xl font-bold text-[#522b7a]">
                    {
                      displayedPrice
                    }
                  </p>
                )}

                {resolvedShopifyHandle &&
                  loadingShopify && (
                    <p className="mt-5 text-sm text-[#6b6475]">
                      Loading
                      availability...
                    </p>
                  )}

                {liveSizes.length >
                  0 && (
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b6475]">
                      {liveSizes.length ===
                        1 &&
                      liveSizes[0] ===
                        "One Size"
                        ? "Size"
                        : "Select Size"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {liveSizes.map(
                        (size) => {
                          const variant =
                            liveVariants.find(
                              (
                                item
                              ) => {
                                const sizeOption =
                                  item.selectedOptions.find(
                                    (
                                      option
                                    ) =>
                                      option.name.toLowerCase() ===
                                      "size"
                                  );

                                return (
                                  (sizeOption?.value ??
                                    item.title) ===
                                  size
                                );
                              }
                            );

                          const unavailable =
                            Boolean(
                              resolvedShopifyHandle &&
                                variant &&
                                !variant.availableForSale
                            );

                          return (
                            <button
                              key={
                                size
                              }
                              type="button"
                              disabled={
                                unavailable
                              }
                              onClick={() => {
                                setSelectedSize(
                                  size
                                );

                                setErrorMessage(
                                  null
                                );

                                setSuccessMessage(
                                  null
                                );
                              }}
                              className={`min-w-[52px] rounded-full border px-4 py-2 text-sm font-semibold transition ${
                                selectedSize ===
                                size
                                  ? "border-[#6f42a6] bg-[#6f42a6] text-white"
                                  : "border-[rgba(90,52,122,0.16)] text-[#522b7a] hover:bg-[#f7f2fb]"
                              } ${
                                unavailable
                                  ? "cursor-not-allowed opacity-40"
                                  : ""
                              }`}
                            >
                              {size}
                            </button>
                          );
                        }
                      )}
                    </div>

                    {selectedVariant?.quantityAvailable !==
                      null &&
                      selectedVariant?.quantityAvailable !==
                        undefined && (
                        <p className="mt-3 text-xs text-[#8a8193]">
                          {
                            selectedVariant.quantityAvailable
                          }{" "}
                          in stock
                        </p>
                      )}
                  </div>
                )}

                {errorMessage && (
                  <div className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMessage}
                  </div>
                )}

                {successMessage && (
                  <div className="mt-5 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    {successMessage}
                  </div>
                )}

                <div className="mt-auto pt-10">
                  {resolvedShopifyHandle ? (
                    <button
                      type="button"
                      disabled={
                        addingToCart ||
                        loadingShopify ||
                        !selectedVariant ||
                        !selectedVariant.availableForSale
                      }
                      onClick={
                        handleAddToCart
                      }
                      className="relative z-20 inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center rounded-full bg-[#6f42a6] px-6 font-semibold text-white transition hover:bg-[#5d368f] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {addingToCart
                        ? "Adding..."
                        : selectedSize
                          ? `Add ${selectedSize} to Cart`
                          : "Select a Size"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={
                        closeModal
                      }
                      className="relative z-20 inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center rounded-full bg-[#6f42a6] px-6 font-semibold text-white hover:bg-[#5d368f]"
                    >
                      Continue
                      Shopping
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}