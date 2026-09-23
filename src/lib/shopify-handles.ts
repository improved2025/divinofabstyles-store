type ShopifyHandleInput = {
  title: string;
  image: string;
  price?: string;
  shopifyHandle?: string;
};

const EXACT_HANDLES_BY_IMAGE: Record<
  string,
  string
> = {
  // Duplicate-title products
  "/images/products/Outfit_Styles_006.jpeg":
    "2-piece-green-blue-skirt-set-wd6",

  "/images/products/Outfit_Styles_009.jpeg":
    "2-piece-green-blue-skirt-set-wd9",

  "/images/products/Outfit_Styles_035.jpeg":
    "knockout-jacket-wd35",

  "/images/products/Outfit_Styles_036.jpeg":
    "knockout-jacket-wd36",

  "/images/products/Outfit_Styles_044.jpeg":
    "mini-electrifying-party-dress-wd44",

  "/images/products/Outfit_Styles_045.jpeg":
    "mini-electrifying-party-dress-wd45",

  "/images/products/Outfit_Styles_046.jpeg":
    "frontal-slit-casual-dress-wd46",

  "/images/products/Outfit_Styles_047.jpeg":
    "frontal-slit-casual-dress-wd47",

  "/images/products/Outfit_Styles_051.jpeg":
    "frontal-slit-casual-dress-wd51",

  "/images/products/Outfit_Styles_061.jpeg":
    "2-side-pocket-multicolor-african-dress-wd61",

  "/images/products/Outfit_Styles_062.jpeg":
    "2-side-pocket-multicolor-african-dress-wd62",

  "/images/products/Outfit_Styles_056.jpeg":
    "african-embroidered-jacket-wo56",

  "/images/products/Outfit_Styles_064.jpeg":
    "african-embroidered-jacket-wo64",

  "/images/products/Outfit_Styles_066.jpeg":
    "african-embroidered-jacket-wd66",

  "/images/products/Outfit_Styles_037.jpeg":
    "brown-outing-jacket-ws37",

  "/images/products/Outfit_Styles_038.jpeg":
    "brown-outing-jacket-ws38",

  "/images/products/Outfit_Styles_048.jpeg":
    "multicolor-metallic-party-set-ws48",

  "/images/products/Outfit_Styles_049.jpeg":
    "multicolor-metallic-party-set-ws49",

  "/images/products/Outfit_Styles_052.jpeg":
    "purple-2-set-skirt-wo52",

  "/images/products/Outfit_Styles_053.jpeg":
    "purple-2-set-skirt-wo53",

  // New Arrivals use different display titles
  // from their Shopify product titles.
  "/images/products/Outfit_Styles_067.jpeg":
    "outfit-styles-067",

  "/images/products/Outfit_Styles_068.jpeg":
    "outfit-styles-068",

  "/images/products/Outfit_Styles_069.jpeg":
    "outfit-styles-069",

  "/images/products/Outfit_Styles_070.jpeg":
    "outfit-styles-070",
};

export function slugifyShopifyHandle(
  value: string
) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getShopifyHandle({
  title,
  image,
  price,
  shopifyHandle,
}: ShopifyHandleInput):
  | string
  | undefined {
  if (shopifyHandle) {
    return shopifyHandle;
  }

  // Products without verified prices were
  // not imported into Shopify.
  if (!price) {
    return undefined;
  }

  const exactHandle =
    EXACT_HANDLES_BY_IMAGE[image];

  if (exactHandle) {
    return exactHandle;
  }

  return slugifyShopifyHandle(title);
}