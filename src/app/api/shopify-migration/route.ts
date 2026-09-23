import { NextResponse } from "next/server";

import {
  womenCategoryPages,
  menCategoryPages,
} from "@/lib/category-data";

import {
  womenAccessoriesPageData,
  menAccessoriesPageData,
} from "@/lib/accessories-data";

type MigrationProduct = {
  id: string;
  title: string;
  price?: string;
  sizes?: string[];
  tag: string;
  image: string;
  lane: "women" | "men";
  category: string;
};

const PUBLIC_ASSET_BASE_URL =
  "https://divinofabstyles-store.vercel.app";

function labelFromSlug(value: string) {
  return value
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeCsv(
  value:
    | string
    | number
    | boolean
    | undefined
    | null
) {
  if (
    value === undefined ||
    value === null
  ) {
    return "";
  }

  const text = String(value);

  if (
    text.includes(",") ||
    text.includes('"') ||
    text.includes("\n")
  ) {
    return `"${text.replace(
      /"/g,
      '""'
    )}"`;
  }

  return text;
}

function getCategoryProducts(): MigrationProduct[] {
  const products: MigrationProduct[] = [];

  Object.entries(
    womenCategoryPages
  ).forEach(([category, page]) => {
    page.products.forEach(
      (product) => {
        products.push({
          ...product,
          lane: "women",
          category,
        });
      }
    );
  });

  Object.entries(
    menCategoryPages
  ).forEach(([category, page]) => {
    page.products.forEach(
      (product) => {
        products.push({
          ...product,
          lane: "men",
          category,
        });
      }
    );
  });

  return products;
}

function getAccessoryProducts(): MigrationProduct[] {
  const products: MigrationProduct[] =
    [];

  menAccessoriesPageData.groups.forEach(
    (group) => {
      group.items.forEach((product) => {
        products.push({
          id: product.id,
          title: product.title,
          price: product.price,
          sizes: product.sizes,
          tag: product.badge,
          image: product.image,
          lane: "men",
          category: group.slug,
        });
      });
    }
  );

  womenAccessoriesPageData.groups.forEach(
    (group) => {
      group.items.forEach((product) => {
        products.push({
          id: product.id,
          title: product.title,
          price: product.price,
          sizes: product.sizes,
          tag: product.badge,
          image: product.image,
          lane: "women",
          category: group.slug,
        });
      });
    }
  );

  return products;
}

function getHandleMap(
  products: MigrationProduct[]
) {
  const counts = new Map<
    string,
    number
  >();

  for (const product of products) {
    const base = slugify(product.title);

    counts.set(
      base,
      (counts.get(base) ?? 0) + 1
    );
  }

  const handles = new Map<
    string,
    string
  >();

  for (const product of products) {
    const base = slugify(product.title);

    /*
     * Keep Metallic Party Dress exactly
     * matched to the Shopify product
     * already created manually.
     */
    if (
      product.id ===
      "wd-metallic-party"
    ) {
      handles.set(
        product.id,
        "metallic-party-dress"
      );

      continue;
    }

    if ((counts.get(base) ?? 0) > 1) {
      handles.set(
        product.id,
        `${base}-${slugify(
          product.id
        )}`
      );
    } else {
      handles.set(
        product.id,
        base
      );
    }
  }

  return handles;
}

export async function GET() {
  const allProducts = [
    ...getCategoryProducts(),
    ...getAccessoryProducts(),
  ];

  const handleMap =
    getHandleMap(allProducts);

  /*
   * Only migrate products with
   * verified prices.
   *
   * Metallic Party Dress is excluded
   * because it already exists in
   * Shopify and is our working test
   * product.
   */
  const productsToImport =
    allProducts.filter(
      (product) =>
        product.price &&
        product.id !==
          "wd-metallic-party"
    );

  const headers = [
    "Handle",
    "Title",
    "Body (HTML)",
    "Vendor",
    "Type",
    "Tags",
    "Published",
    "Option1 Name",
    "Option1 Value",
    "Variant Price",
    "Image Src",
    "Image Alt Text",
    "Status",
    "Collection",
  ];

  const rows: string[][] = [];

  for (const product of productsToImport) {
    const handle =
      handleMap.get(product.id) ??
      slugify(product.title);

    const laneLabel =
      labelFromSlug(product.lane);

    const categoryLabel =
      labelFromSlug(product.category);

    const collection =
      `${laneLabel} - ${categoryLabel}`;

    const tags = [
      laneLabel,
      categoryLabel,
      product.tag,
      "DivinoFabStyles",
    ].join(", ");

    const imageUrl =
      `${PUBLIC_ASSET_BASE_URL}${product.image}`;

    const numericPrice =
      Number(
        product.price.replace(
          "$",
          ""
        )
      ).toFixed(2);

    const sizes =
      product.sizes &&
      product.sizes.length > 0
        ? product.sizes
        : ["One Size"];

    sizes.forEach(
      (size, index) => {
        const firstVariant =
          index === 0;

        rows.push([
          handle,

          firstVariant
            ? product.title
            : "",

          "",

          firstVariant
            ? "DivinoFabStyles"
            : "",

          firstVariant
            ? categoryLabel
            : "",

          firstVariant
            ? tags
            : "",

          firstVariant
            ? "FALSE"
            : "",

          "Size",

          size,

          numericPrice,

          firstVariant
            ? imageUrl
            : "",

          firstVariant
            ? product.title
            : "",

          firstVariant
            ? "draft"
            : "",

          firstVariant
            ? collection
            : "",
        ]);
      }
    );
  }

  const csvLines = [
    headers
      .map(escapeCsv)
      .join(","),

    ...rows.map((row) =>
      row
        .map(escapeCsv)
        .join(",")
    ),
  ];

  const csv =
    "\uFEFF" +
    csvLines.join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type":
        "text/csv; charset=utf-8",

      "Content-Disposition":
        'attachment; filename="divinofabstyles-shopify-products.csv"',

      "Cache-Control":
        "no-store",
    },
  });
}