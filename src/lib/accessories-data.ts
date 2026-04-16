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

function buildItems(
  prefix: string,
  start: number,
  end: number,
  ext: "jpeg" | "png",
  titlePrefix: string,
  badge: string
): AccessoryItem[] {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const number = start + index;

    return {
      id: `${prefix}-${number}`,
      title: `${titlePrefix} ${number}`,
      image: `/images/products/${prefix}-${number}.${ext}`,
      badge,
    };
  });
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
      items: buildItems("m-hat", 1, 12, "jpeg", "Men Hat", "Men"),
    },
    {
      slug: "rings",
      title: "Signature Ring",
      copy: "A standout ring piece that adds detail, character, and premium finish.",
      items: buildItems("m-ring", 1, 1, "jpeg", "Men Ring", "Ring"),
    },
    {
      slug: "bracelets",
      title: "Bracelets",
      copy: "Refined wrist details that elevate both traditional and modern menswear looks.",
      items: buildItems("m-brac", 1, 5, "jpeg", "Men Bracelet", "Bracelet"),
    },
    {
      slug: "unisex-bracelets",
      title: "Unisex Bracelets",
      copy: "Versatile finishing pieces that work beautifully across multiple fashion expressions.",
      items: buildItems("u-brac", 1, 10, "jpeg", "Unisex Bracelet", "Unisex"),
    },
  ],
};

export const womenAccessoriesPageData: AccessoriesPageData = {
  lane: "women",
  eyebrow: "Women Accessories",
  title: "Elegant finishing pieces with beauty, texture, and detail.",
  intro:
    "Discover hats, jewelry sets, bracelets, and unisex wrist pieces designed to complete the full look with style and polish.",
  heroImage: "/images/products/w-set-1.jpeg",
  groups: [
    {
      slug: "hats",
      title: "Fashion Hats",
      copy: "Elegant hat pieces that add shape, style, and visual confidence to the full outfit.",
      items: buildItems("w-hat", 1, 6, "png", "Women Hat", "Women"),
    },
    {
      slug: "jewelry-sets",
      title: "Jewelry Sets",
      copy: "Polished sets that bring sparkle, refinement, and balance to occasion and statement looks.",
      items: buildItems("w-set", 1, 13, "jpeg", "Jewelry Set", "Set"),
    },
    {
      slug: "bracelets",
      title: "Bracelets",
      copy: "Beautiful wrist pieces that finish the look with softness, detail, and elegance.",
      items: buildItems("w-brac", 1, 9, "jpeg", "Women Bracelet", "Bracelet"),
    },
    {
      slug: "unisex-bracelets",
      title: "Unisex Bracelets",
      copy: "Flexible styling pieces that can move across looks while still feeling refined and premium.",
      items: buildItems("u-brac", 11, 20, "jpeg", "Unisex Bracelet", "Unisex"),
    },
  ],
};