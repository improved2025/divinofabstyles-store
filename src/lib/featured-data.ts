import { menCategoryPages, womenCategoryPages } from "@/lib/category-data";
import {
  menAccessoriesPageData,
  womenAccessoriesPageData,
} from "@/lib/accessories-data";

export type FeaturedItem = {
  id: string;
  title: string;
  price: string;
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

function accessoryToFeaturedItem(
  item: { id: string; title: string; image: string; badge: string },
  tagOverride?: string
): FeaturedItem {
  return {
    id: item.id,
    title: item.title,
    price: "Coming Soon",
    tag: tagOverride ?? item.badge,
    image: item.image,
  };
}

export const editorPicks: FeaturedItem[] = [
  womenCategoryPages["occasion-wear"].products[0],
  womenCategoryPages["dresses"].products[0],
  menCategoryPages["native-wear"].products[0],
  menCategoryPages["agbada"].products[0],
  accessoryToFeaturedItem(menAccessoriesPageData.groups[0].items[0], "Hat"),
  accessoryToFeaturedItem(womenAccessoriesPageData.groups[1].items[0], "Jewelry"),
];

export const heroSpotlight = [
  editorPicks[0],
  editorPicks[2],
  editorPicks[4],
  editorPicks[5],
];

export const featuredSections: FeaturedSection[] = [
  {
    id: "editors-picks",
    eyebrow: "Featured Edit",
    title: "Editor’s Picks",
    copy: "A careful selection of standout pieces across women, men, and accessories for a premium storefront spotlight.",
    items: [
      womenCategoryPages["occasion-wear"].products[0],
      womenCategoryPages["sets"].products[0],
      menCategoryPages["native-wear"].products[0],
      menCategoryPages["agbada"].products[0],
      accessoryToFeaturedItem(menAccessoriesPageData.groups[0].items[0], "Hat"),
      accessoryToFeaturedItem(womenAccessoriesPageData.groups[1].items[0], "Jewelry"),
    ],
  },
  {
    id: "women-spotlight",
    eyebrow: "Women",
    title: "Women Spotlight",
    copy: "Elegant occasion looks, dresses, and statement sets chosen for visual strength and premium appeal.",
    items: [
      womenCategoryPages["occasion-wear"].products[0],
      womenCategoryPages["occasion-wear"].products[1],
      womenCategoryPages["dresses"].products[0],
      womenCategoryPages["dresses"].products[2],
      womenCategoryPages["sets"].products[0],
      womenCategoryPages["sets"].products[2],
    ],
  },
  {
    id: "men-spotlight",
    eyebrow: "Men",
    title: "Men Spotlight",
    copy: "Sharp native wear, agbada, and elevated statement pieces chosen to create a stronger menswear presence.",
    items: [
      menCategoryPages["native-wear"].products[0],
      menCategoryPages["native-wear"].products[1],
      menCategoryPages["senator-sets"].products[0],
      menCategoryPages["senator-sets"].products[1],
      menCategoryPages["agbada"].products[0],
      menCategoryPages["agbada"].products[1],
    ],
  },
  {
    id: "accessories-spotlight",
    eyebrow: "Accessories",
    title: "Accessories Spotlight",
    copy: "Premium finishing pieces selected from men’s, women’s, and unisex accessory collections.",
    items: [
      accessoryToFeaturedItem(menAccessoriesPageData.groups[0].items[0], "Men Hat"),
      accessoryToFeaturedItem(menAccessoriesPageData.groups[1].items[0], "Ring"),
      accessoryToFeaturedItem(menAccessoriesPageData.groups[2].items[0], "Bracelet"),
      accessoryToFeaturedItem(womenAccessoriesPageData.groups[0].items[0], "Women Hat"),
      accessoryToFeaturedItem(womenAccessoriesPageData.groups[1].items[0], "Jewelry Set"),
      accessoryToFeaturedItem(womenAccessoriesPageData.groups[2].items[0], "Bracelet"),
      accessoryToFeaturedItem(menAccessoriesPageData.groups[3].items[0], "Unisex"),
      accessoryToFeaturedItem(womenAccessoriesPageData.groups[3].items[0], "Unisex"),
    ],
  },
];