export type AccessoryItem = {
  id: string;
  title: string;
  image: string;
  badge: string;
  price?: string;
  sizes?: string[];
};

export type AccessoryGroup = {
  slug: string;
  title: string;
  copy: string;
  items: AccessoryItem[];
};

export type AccessoriesPageData = {
  lane: "men" | "women";
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  groups: AccessoryGroup[];
};

const ONE_SIZE = ["One Size"];

function pricedRange(
  prefix: string,
  prices: Array<number | undefined>,
  ext: "jpeg" | "png",
  titlePrefix: string,
  badge: string,
  start = 1,
  basePath = "/images/products"
): AccessoryItem[] {
  return prices.map((price, index) => {
    const number = start + index;

    return {
      id: `${prefix}-${number}`,
      title: `${titlePrefix} ${number}`,
      image: `${basePath}/${prefix}-${number}.${ext}`,
      badge,
      price: price ? `$${price}` : undefined,
      sizes: ONE_SIZE,
    };
  });
}

function fileItem(
  id: string,
  title: string,
  image: string,
  badge: string,
  price?: number
): AccessoryItem {
  return {
    id,
    title,
    image,
    badge,
    price: price ? `$${price}` : undefined,
    sizes: ONE_SIZE,
  };
}

export const menAccessoriesPageData: AccessoriesPageData = {
  lane: "men",
  eyebrow: "Men Accessories",
  title: "Premium finishing pieces for a stronger presence.",
  intro:
    "Explore royal hats, rings, bracelets, and unisex pieces that sharpen the full look and complete the statement.",
  heroImage: "/images/products/m-hat-1.jpeg",
  groups: [
    {
      slug: "hats",
      title: "Royal Hats",
      copy: "Bold crown pieces designed for authority, culture, and presence.",
      items: pricedRange(
        "m-hat",
        [75, 80, 80, 75, 80, 75, 95, 90, 95, 70, 90, 90],
        "jpeg",
        "Men Hat",
        "Hat"
      ),
    },
    {
      slug: "rings",
      title: "Signature Ring",
      copy: "A standout ring piece that adds detail and premium finish.",
      items: pricedRange(
        "m-ring",
        [undefined],
        "jpeg",
        "Men Ring",
        "Ring"
      ),
    },
    {
      slug: "bracelets",
      title: "Bracelets",
      copy: "Refined wrist details that elevate both traditional and modern menswear.",
      items: pricedRange(
        "m-brac",
        [25, 25, 25, 20, 20],
        "jpeg",
        "Men Bracelet",
        "Bracelet"
      ),
    },
    {
      slug: "unisex-bracelets",
      title: "Unisex Bracelets",
      copy: "Versatile finishing pieces designed across multiple fashion expressions.",
      items: pricedRange(
        "u-brac",
        Array(10).fill(undefined),
        "jpeg",
        "Unisex Bracelet",
        "Unisex"
      ),
    },
  ],
};

export const womenAccessoriesPageData: AccessoriesPageData = {
  lane: "women",
  eyebrow: "Women Accessories",
  title: "Elegant finishing pieces with beauty, texture, and detail.",
  intro:
    "Discover hand fans, hats, jewelry sets, necklaces, earrings, rings, bracelets, and unisex pieces designed to complete the look.",
  heroImage:
    "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_016.jpeg",
  groups: [
    {
      slug: "hand-fans",
      title: "Hand Fans",
      copy: "Elegant hand fans that bring movement, color, and cultural beauty.",
      items: pricedRange(
        "handfan",
        [45, 55, 55, 55, 55, 55, 45],
        "jpeg",
        "Hand Fan",
        "Fan"
      ),
    },
    {
      slug: "hats",
      title: "Fashion Hats",
      copy: "Elegant hat pieces that add shape, style, and confidence.",
      items: pricedRange(
        "w-hat",
        [60, 55, 45, 60, 55, 60],
        "png",
        "Fashion Hat",
        "Hat"
      ),
    },

    /* Each paired necklace/earring combination is treated as one jewelry-set product. */
    {
      slug: "jewelry-sets",
      title: "Jewelry Sets",
      copy: "Coordinated jewelry combinations sold as complete matching sets.",
      items: [
        fileItem(
          "jset-1-2",
          "Jewelry Set 1 + 2",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_005.jpeg",
          "Set",
          35
        ),
        fileItem(
          "jset-3-4",
          "Jewelry Set 3 + 4",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_008.jpeg",
          "Set",
          35
        ),
        fileItem(
          "jset-5-6",
          "Jewelry Set 5 + 6",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_016.jpeg",
          "Set",
          45
        ),
        fileItem(
          "jset-7-8",
          "Jewelry Set 7 + 8",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_030.jpeg",
          "Set",
          45
        ),
        fileItem(
          "jset-9-10",
          "Jewelry Set 9 + 10",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_033.jpeg",
          "Set",
          45
        ),
        fileItem(
          "jset-11-12",
          "Jewelry Set 11 + 12",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_037.jpeg",
          "Set",
          35
        ),
        fileItem(
          "jset-13-14",
          "Jewelry Set 13 + 14",
          "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_042.jpeg",
          "Set",
          35
        ),
      ],
    },

    {
      slug: "necklaces",
      title: "Necklaces",
      copy: "Necklaces and pendants that add polish and premium finishing detail.",
      items: [
        "001", "005", "007", "008", "013", "016", "020",
        "028", "029", "030", "033", "037", "039", "042",
      ].map((number) =>
        fileItem(
          `necklace-${number}`,
          `Necklace ${number}`,
          `/images/products/jewelry/necklaces/Jewelries_Samples2_${number}.jpeg`,
          "Necklace"
        )
      ),
    },

    {
      slug: "earrings",
      title: "Earrings",
      copy: "Refined earrings selected for shine, balance, and elegance.",
      items: [
        "004", "006", "009", "014", "017", "021", "022", "023",
        "026", "027", "031", "034", "035", "036", "038", "040", "043",
      ].map((number) =>
        fileItem(
          `earring-${number}`,
          `Earring ${number}`,
          `/images/products/jewelry/earrings/Jewelries_Samples2_${number}.jpeg`,
          "Earrings"
        )
      ),
    },

    {
      slug: "rings",
      title: "Rings",
      copy: "Statement rings and refined everyday ring styles.",
      items: [
        ["002", 12],
        ["011", 15],
        ["012", 12],
        ["015", 15],
        ["018", 12],
        ["019", 15],
        ["024", 12],
        ["032", 15],
        ["041", 12],
      ].map(([number, price]) =>
        fileItem(
          `ring-${number}`,
          `Ring ${number}`,
          `/images/products/jewelry/rings/Jewelries_Samples2_${number}.jpeg`,
          "Ring",
          Number(price)
        )
      ),
    },

    {
      slug: "bracelets",
      title: "Bracelets",
      copy: "Beautiful wrist pieces for a refined finishing touch.",
      items: [
        "003", "010", "025",
      ].map((number) =>
        fileItem(
          `jewelry-bracelet-${number}`,
          `Bracelet ${number}`,
          `/images/products/jewelry/bracelets/Jewelries_Samples2_${number}.jpeg`,
          "Bracelet"
        )
      ),
    },

    {
      slug: "unisex-bracelets",
      title: "Unisex Bracelets",
      copy: "Flexible styling pieces designed to work beautifully across looks.",
      items: pricedRange(
        "u-brac",
        [25, 25, 15, 15, 15, 15, 25, 25, 15, 25],
        "jpeg",
        "Unisex Bracelet",
        "Unisex",
        11
      ),
    },
  ],
};