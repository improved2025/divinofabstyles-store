export type AccessoryItem = {
  id: string;
  title: string;
  image: string;
  badge: string;
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

function buildRangeItems(
  prefix: string,
  start: number,
  end: number,
  ext: "jpeg" | "png",
  titlePrefix: string,
  badge: string,
  basePath = "/images/products"
): AccessoryItem[] {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const number = start + index;

    return {
      id: `${prefix}-${number}`,
      title: `${titlePrefix} ${number}`,
      image: `${basePath}/${prefix}-${number}.${ext}`,
      badge,
    };
  });
}

function buildFileItems(
  filenames: string[],
  titlePrefix: string,
  badge: string,
  basePath: string
): AccessoryItem[] {
  return filenames.map((filename, index) => ({
    id: `${titlePrefix.toLowerCase().replace(/\s+/g, "-")}-${index + 1}`,
    title: `${titlePrefix} ${index + 1}`,
    image: `${basePath}/${filename}`,
    badge,
  }));
}

export const menAccessoriesPageData: AccessoriesPageData = {
  lane: "men",
  eyebrow: "Men Accessories",
  title: "Premium finishing pieces for a stronger presence.",
  intro:
    "Explore crowns, rings, bracelets, and unisex pieces that sharpen the full look and complete the statement.",
  heroImage: "/images/products/m-hat-1.jpeg",
  groups: [
    {
      slug: "hats",
      title: "Royal Hats",
      copy: "Bold crown pieces and statement headwear designed for authority, culture, and presence.",
      items: buildRangeItems("m-hat", 1, 12, "jpeg", "Men Hat", "Men"),
    },
    {
      slug: "rings",
      title: "Signature Ring",
      copy: "A standout ring piece that adds detail, character, and premium finish.",
      items: buildRangeItems("m-ring", 1, 1, "jpeg", "Men Ring", "Ring"),
    },
    {
      slug: "bracelets",
      title: "Bracelets",
      copy: "Refined wrist details that elevate both traditional and modern menswear looks.",
      items: buildRangeItems("m-brac", 1, 5, "jpeg", "Men Bracelet", "Bracelet"),
    },
    {
      slug: "unisex-bracelets",
      title: "Unisex Bracelets",
      copy: "Versatile finishing pieces that work beautifully across multiple fashion expressions.",
      items: buildRangeItems("u-brac", 1, 10, "jpeg", "Unisex Bracelet", "Unisex"),
    },
  ],
};

export const womenAccessoriesPageData: AccessoriesPageData = {
  lane: "women",
  eyebrow: "Women Accessories",
  title: "Elegant finishing pieces with beauty, texture, and detail.",
  intro:
    "Discover hand fans, hats, jewelry sets, necklaces, earrings, rings, bracelets, and unisex wrist pieces designed to complete the full look with style and polish.",
  heroImage:
    "/images/products/jewelry/jewelry-sets/Jewelries_Samples2_016.jpeg",
  groups: [
    {
      slug: "hand-fans",
      title: "Hand Fans",
      copy: "Elegant hand fans that add beauty, movement, and a refined cultural finish to the full outfit.",
      items: buildRangeItems("handfan", 1, 7, "jpeg", "Hand Fan", "Fan"),
    },
    {
      slug: "hats",
      title: "Fashion Hats",
      copy: "Elegant hat pieces that add shape, style, and visual confidence to the full outfit.",
      items: buildRangeItems("w-hat", 1, 6, "png", "Women Hat", "Hat"),
    },
    {
      slug: "jewelry-sets",
      title: "Jewelry Sets",
      copy: "Polished matching sets that bring sparkle, refinement, and balance to occasion and statement looks.",
      items: buildFileItems(
        [
          "Jewelries_Samples2_005.jpeg",
          "Jewelries_Samples2_006.jpeg",
          "Jewelries_Samples2_008.jpeg",
          "Jewelries_Samples2_009.jpeg",
          "Jewelries_Samples2_016.jpeg",
          "Jewelries_Samples2_017.jpeg",
          "Jewelries_Samples2_030.jpeg",
          "Jewelries_Samples2_031.jpeg",
          "Jewelries_Samples2_033.jpeg",
          "Jewelries_Samples2_034.jpeg",
          "Jewelries_Samples2_037.jpeg",
          "Jewelries_Samples2_038.jpeg",
          "Jewelries_Samples2_042.jpeg",
          "Jewelries_Samples2_043.jpeg",
        ],
        "Jewelry Set",
        "Set",
        "/images/products/jewelry/jewelry-sets"
      ),
    },
    {
      slug: "necklaces",
      title: "Necklaces",
      copy: "Necklaces and pendants that add polish, glow, and premium finishing detail.",
      items: buildFileItems(
        [
          "Jewelries_Samples2_001.jpeg",
          "Jewelries_Samples2_005.jpeg",
          "Jewelries_Samples2_007.jpeg",
          "Jewelries_Samples2_008.jpeg",
          "Jewelries_Samples2_013.jpeg",
          "Jewelries_Samples2_016.jpeg",
          "Jewelries_Samples2_020.jpeg",
          "Jewelries_Samples2_028.jpeg",
          "Jewelries_Samples2_029.jpeg",
          "Jewelries_Samples2_030.jpeg",
          "Jewelries_Samples2_033.jpeg",
          "Jewelries_Samples2_037.jpeg",
          "Jewelries_Samples2_039.jpeg",
          "Jewelries_Samples2_042.jpeg",
        ],
        "Necklace",
        "Necklace",
        "/images/products/jewelry/necklaces"
      ),
    },
    {
      slug: "earrings",
      title: "Earrings",
      copy: "Refined earrings that lift the entire look with shine, balance, and elegance.",
      items: buildFileItems(
        [
          "Jewelries_Samples2_004.jpeg",
          "Jewelries_Samples2_006.jpeg",
          "Jewelries_Samples2_009.jpeg",
          "Jewelries_Samples2_014.jpeg",
          "Jewelries_Samples2_017.jpeg",
          "Jewelries_Samples2_021.jpeg",
          "Jewelries_Samples2_022.jpeg",
          "Jewelries_Samples2_023.jpeg",
          "Jewelries_Samples2_026.jpeg",
          "Jewelries_Samples2_027.jpeg",
          "Jewelries_Samples2_031.jpeg",
          "Jewelries_Samples2_034.jpeg",
          "Jewelries_Samples2_035.jpeg",
          "Jewelries_Samples2_036.jpeg",
          "Jewelries_Samples2_038.jpeg",
          "Jewelries_Samples2_040.jpeg",
          "Jewelries_Samples2_043.jpeg",
        ],
        "Earring",
        "Earrings",
        "/images/products/jewelry/earrings"
      ),
    },
    {
      slug: "rings",
      title: "Rings",
      copy: "Statement rings and fine ring styles chosen for a cleaner premium jewelry mix.",
      items: buildFileItems(
        [
          "Jewelries_Samples2_002.jpeg",
          "Jewelries_Samples2_011.jpeg",
          "Jewelries_Samples2_012.jpeg",
          "Jewelries_Samples2_015.jpeg",
          "Jewelries_Samples2_018.jpeg",
          "Jewelries_Samples2_019.jpeg",
          "Jewelries_Samples2_024.jpeg",
          "Jewelries_Samples2_032.jpeg",
          "Jewelries_Samples2_041.jpeg",
        ],
        "Ring",
        "Ring",
        "/images/products/jewelry/rings"
      ),
    },
    {
      slug: "bracelets",
      title: "Bracelets",
      copy: "Beautiful wrist pieces that finish the look with softness, detail, and elegance.",
      items: buildFileItems(
        [
          "Jewelries_Samples2_003.jpeg",
          "Jewelries_Samples2_010.jpeg",
          "Jewelries_Samples2_025.jpeg",
        ],
        "Bracelet",
        "Bracelet",
        "/images/products/jewelry/bracelets"
      ),
    },
    {
      slug: "unisex-bracelets",
      title: "Unisex Bracelets",
      copy: "Flexible styling pieces that can move across looks while still feeling refined and premium.",
      items: buildRangeItems("u-brac", 11, 20, "jpeg", "Unisex Bracelet", "Unisex"),
    },
  ],
};