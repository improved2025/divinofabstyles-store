export type SaleItem = {
  id: string;
  title: string;
  image: string;
  originalPrice: string;
  salePrice: string;
  badge: string;
};

export type SaleSection = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  items: SaleItem[];
};

export const saleHeroItems: SaleItem[] = [
  {
    id: "hero-1",
    title: "Royal Bloom Occasion Dress",
    image: "/images/products/royal-bloom-occasion-dress.png",
    originalPrice: "$245",
    salePrice: "$165",
    badge: "32% Off",
  },
  {
    id: "hero-2",
    title: "Modern Monarch Native Set",
    image: "/images/products/modern-monarch-native-set.png",
    originalPrice: "$255",
    salePrice: "$175",
    badge: "31% Off",
  },
  {
    id: "hero-3",
    title: "Women Hat 1",
    image: "/images/products/w-hat-1.png",
    originalPrice: "$120",
    salePrice: "$78",
    badge: "Sale",
  },
  {
    id: "hero-4",
    title: "Men Hat 1",
    image: "/images/products/m-hat-1.jpeg",
    originalPrice: "$135",
    salePrice: "$89",
    badge: "Sale",
  },
];

export const saleSections: SaleSection[] = [
  {
    id: "women-sale",
    eyebrow: "Women Sale",
    title: "Women’s standouts at sale prices.",
    copy: "Premium dresses, sets, and occasion looks presented like a strong campaign moment.",
    items: [
      {
        id: "w-sale-1",
        title: "Royal Bloom Occasion Dress",
        image: "/images/products/royal-bloom-occasion-dress.png",
        originalPrice: "$245",
        salePrice: "$165",
        badge: "32% Off",
      },
      {
        id: "w-sale-2",
        title: "Golden Grace Women Set",
        image: "/images/products/golden-grace-women-set.png",
        originalPrice: "$210",
        salePrice: "$145",
        badge: "31% Off",
      },
      {
        id: "w-sale-3",
        title: "Signature Celebration Look",
        image: "/images/products/signature-celebration-look.png",
        originalPrice: "$265",
        salePrice: "$185",
        badge: "30% Off",
      },
      {
        id: "w-sale-4",
        title: "Ivory Luxe Evening Edit",
        image: "/images/products/ivory-luxe-evening-edit.png",
        originalPrice: "$275",
        salePrice: "$190",
        badge: "31% Off",
      },
      {
        id: "w-sale-5",
        title: "Women Hat 1",
        image: "/images/products/w-hat-1.png",
        originalPrice: "$120",
        salePrice: "$78",
        badge: "Sale",
      },
      {
        id: "w-sale-6",
        title: "Jewelry Set 1",
        image: "/images/products/w-set-1.jpeg",
        originalPrice: "$145",
        salePrice: "$96",
        badge: "Sale",
      },
      {
        id: "w-sale-7",
        title: "Women Bracelet 1",
        image: "/images/products/w-brac-1.jpeg",
        originalPrice: "$90",
        salePrice: "$58",
        badge: "Sale",
      },
      {
        id: "w-sale-8",
        title: "Unisex Bracelet 11",
        image: "/images/products/u-brac-11.jpeg",
        originalPrice: "$88",
        salePrice: "$57",
        badge: "Sale",
      },
    ],
  },
  {
    id: "men-sale",
    eyebrow: "Men Sale",
    title: "Men’s premium looks with stronger value.",
    copy: "Sharp native sets, agbada, and elevated accessories curated for a richer sale story.",
    items: [
      {
        id: "m-sale-1",
        title: "Modern Monarch Native Set",
        image: "/images/products/modern-monarch-native-set.png",
        originalPrice: "$255",
        salePrice: "$175",
        badge: "31% Off",
      },
      {
        id: "m-sale-2",
        title: "Classic Men Native Set",
        image: "/images/products/classic-men-native-set.png",
        originalPrice: "$225",
        salePrice: "$155",
        badge: "31% Off",
      },
      {
        id: "m-sale-3",
        title: "Ivory Prestige Agbada",
        image: "/images/products/ivory-prestige-agbada.png",
        originalPrice: "$315",
        salePrice: "$220",
        badge: "30% Off",
      },
      {
        id: "m-sale-4",
        title: "Royal Ceremony Edit",
        image: "/images/products/royal-ceremony-edit.png",
        originalPrice: "$295",
        salePrice: "$205",
        badge: "31% Off",
      },
      {
        id: "m-sale-5",
        title: "Men Hat 1",
        image: "/images/products/m-hat-1.jpeg",
        originalPrice: "$135",
        salePrice: "$89",
        badge: "Sale",
      },
      {
        id: "m-sale-6",
        title: "Men Ring 1",
        image: "/images/products/m-ring-1.jpeg",
        originalPrice: "$95",
        salePrice: "$62",
        badge: "Sale",
      },
      {
        id: "m-sale-7",
        title: "Men Bracelet 1",
        image: "/images/products/m-brac-1.jpeg",
        originalPrice: "$88",
        salePrice: "$56",
        badge: "Sale",
      },
      {
        id: "m-sale-8",
        title: "Unisex Bracelet 1",
        image: "/images/products/u-brac-1.jpeg",
        originalPrice: "$84",
        salePrice: "$54",
        badge: "Sale",
      },
    ],
  },
  {
    id: "campaign-sale",
    eyebrow: "Campaign Sale",
    title: "The strongest sale edit across the store.",
    copy: "A premium cross-category mix of clothing and accessories designed to make the sale page feel intentional.",
    items: [
      {
        id: "c-sale-1",
        title: "Royal Bloom Occasion Dress",
        image: "/images/products/royal-bloom-occasion-dress.png",
        originalPrice: "$245",
        salePrice: "$165",
        badge: "32% Off",
      },
      {
        id: "c-sale-2",
        title: "Modern Monarch Native Set",
        image: "/images/products/modern-monarch-native-set.png",
        originalPrice: "$255",
        salePrice: "$175",
        badge: "31% Off",
      },
      {
        id: "c-sale-3",
        title: "The Spotlight Rhinestone Mesh Gown – Teal",
        image: "/images/products/the-spotlight-rhinestone-mesh-gown-teal.jpeg",
        originalPrice: "$285",
        salePrice: "$198",
        badge: "31% Off",
      },
      {
        id: "c-sale-4",
        title: "Ivory Prestige Agbada",
        image: "/images/products/ivory-prestige-agbada.png",
        originalPrice: "$315",
        salePrice: "$220",
        badge: "30% Off",
      },
      {
        id: "c-sale-5",
        title: "Jewelry Set 1",
        image: "/images/products/w-set-1.jpeg",
        originalPrice: "$145",
        salePrice: "$96",
        badge: "Sale",
      },
      {
        id: "c-sale-6",
        title: "Men Hat 1",
        image: "/images/products/m-hat-1.jpeg",
        originalPrice: "$135",
        salePrice: "$89",
        badge: "Sale",
      },
      {
        id: "c-sale-7",
        title: "Women Hat 1",
        image: "/images/products/w-hat-1.png",
        originalPrice: "$120",
        salePrice: "$78",
        badge: "Sale",
      },
      {
        id: "c-sale-8",
        title: "Unisex Bracelet 11",
        image: "/images/products/u-brac-11.jpeg",
        originalPrice: "$88",
        salePrice: "$57",
        badge: "Sale",
      },
    ],
  },
];