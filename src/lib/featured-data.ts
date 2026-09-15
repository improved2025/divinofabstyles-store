import {
  menCategoryPages,
  womenCategoryPages,
} from "@/lib/category-data";

import {
  menAccessoriesPageData,
  womenAccessoriesPageData,
} from "@/lib/accessories-data";

export type FeaturedItem = {
  id: string;
  title: string;
  price?: string;
  sizes?: string[];
  tag: string;
  image: string;
};

export type FeaturedSection = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  items: FeaturedItem[];
};

type AccessorySourceItem = {
  id: string;
  title: string;
  image: string;
  badge: string;
  price?: string;
  sizes?: string[];
};

function accessoryToFeaturedItem(
  item: AccessorySourceItem,
  tagOverride?: string
): FeaturedItem {
  return {
    id: item.id,
    title: item.title,
    price: item.price,
    sizes: item.sizes,
    tag: tagOverride ?? item.badge,
    image: item.image,
  };
}

function getAccessoryItems(
  data: typeof menAccessoriesPageData,
  slug: string
) {
  return (
    data.groups.find((group) => group.slug === slug)?.items ?? []
  );
}

const menHats = getAccessoryItems(
  menAccessoriesPageData,
  "hats"
);

const menBracelets = getAccessoryItems(
  menAccessoriesPageData,
  "bracelets"
);

const womenHandFans = getAccessoryItems(
  womenAccessoriesPageData,
  "hand-fans"
);

const womenHats = getAccessoryItems(
  womenAccessoriesPageData,
  "hats"
);

const jewelrySets = getAccessoryItems(
  womenAccessoriesPageData,
  "jewelry-sets"
);

const rings = getAccessoryItems(
  womenAccessoriesPageData,
  "rings"
);

const unisexBracelets = getAccessoryItems(
  womenAccessoriesPageData,
  "unisex-bracelets"
);

export const editorPicks: FeaturedItem[] = [
  womenCategoryPages["occasion-wear"].products[0],
  womenCategoryPages["dresses"].products[0],
  womenCategoryPages["sets"].products[0],

  menCategoryPages["native-wear"].products[0],
  menCategoryPages["senator-sets"].products[0],
  menCategoryPages["agbada"].products[0],

  ...(menHats[0]
    ? [accessoryToFeaturedItem(menHats[0], "Men Hat")]
    : []),

  ...(jewelrySets[0]
    ? [
        accessoryToFeaturedItem(
          jewelrySets[0],
          "Jewelry Set"
        ),
      ]
    : []),
];

export const heroSpotlight: FeaturedItem[] = [
  womenCategoryPages["occasion-wear"].products[0],
  menCategoryPages["native-wear"].products[0],

  ...(menHats[0]
    ? [accessoryToFeaturedItem(menHats[0], "Men Hat")]
    : []),

  ...(jewelrySets[0]
    ? [
        accessoryToFeaturedItem(
          jewelrySets[0],
          "Jewelry Set"
        ),
      ]
    : []),
];

export const featuredSections: FeaturedSection[] = [
  {
    id: "women-spotlight",
    eyebrow: "Women",
    title: "Women Spotlight",
    copy:
      "Selected dresses, occasion pieces, sets, and statement looks from the women’s collection.",
    items: [
      womenCategoryPages["occasion-wear"].products[0],
      womenCategoryPages["occasion-wear"].products[3],
      womenCategoryPages["dresses"].products[0],
      womenCategoryPages["dresses"].products[7],
      womenCategoryPages["sets"].products[0],
      womenCategoryPages["sets"].products[2],
    ],
  },

  {
    id: "men-spotlight",
    eyebrow: "Men",
    title: "Men Spotlight",
    copy:
      "Native wear, senator sets, and agbada selected for strong presence and premium styling.",
    items: [
      menCategoryPages["native-wear"].products[0],
      menCategoryPages["native-wear"].products[1],
      menCategoryPages["senator-sets"].products[0],
      menCategoryPages["senator-sets"].products[2],
      menCategoryPages["agbada"].products[0],
      menCategoryPages["agbada"].products[1],
    ],
  },

  {
    id: "accessories-spotlight",
    eyebrow: "Accessories",
    title: "Accessories Spotlight",
    copy:
      "Finishing pieces selected from hats, jewelry, bracelets, hand fans, and rings.",
    items: [
      ...(menHats[0]
        ? [accessoryToFeaturedItem(menHats[0], "Men Hat")]
        : []),

      ...(menBracelets[0]
        ? [
            accessoryToFeaturedItem(
              menBracelets[0],
              "Men Bracelet"
            ),
          ]
        : []),

      ...(womenHandFans[0]
        ? [
            accessoryToFeaturedItem(
              womenHandFans[0],
              "Hand Fan"
            ),
          ]
        : []),

      ...(womenHats[0]
        ? [
            accessoryToFeaturedItem(
              womenHats[0],
              "Fashion Hat"
            ),
          ]
        : []),

      ...(jewelrySets[0]
        ? [
            accessoryToFeaturedItem(
              jewelrySets[0],
              "Jewelry Set"
            ),
          ]
        : []),

      ...(rings[0]
        ? [accessoryToFeaturedItem(rings[0], "Ring")]
        : []),

      ...(unisexBracelets[0]
        ? [
            accessoryToFeaturedItem(
              unisexBracelets[0],
              "Unisex Bracelet"
            ),
          ]
        : []),
    ],
  },
];