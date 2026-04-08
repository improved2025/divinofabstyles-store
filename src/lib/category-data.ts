type CategoryProduct = {
  id: string;
  title: string;
  price: string;
  tag: string;
  image: string;
};

type CategoryPage = {
  title: string;
  intro: string;
  heroImage: string;
  products: CategoryProduct[];
};

export const womenCategoryPages: Record<string, CategoryPage> = {
  dresses: {
    title: "Dresses",
    intro: "Elegant silhouettes for events, worship, and standout occasions.",
    heroImage: "/images/women/dresses.png",
    products: [
      {
        id: "wd1",
        title: "Royal Bloom Occasion Dress",
        price: "$165",
        tag: "Featured",
        image: "/images/products/royal-bloom-occasion-dress.png",
      },
      {
        id: "wd2",
        title: "Golden Thread Maxi Dress",
        price: "$165",
        tag: "New",
        image: "/images/products/golden-thread-maxi-dress.png",
      },
      {
        id: "wd3",
        title: "Ivory Luxe Evening Edit",
        price: "$190",
        tag: "Best Seller",
        image: "/images/products/ivory-luxe-evening-edit.png",
      },
      {
        id: "wd4",
        title: "Signature Celebration Look",
        price: "$185",
        tag: "Featured",
        image: "/images/products/signature-celebration-look.png",
      },
    ],
  },
  sets: {
    title: "Sets",
    intro: "Polished coordinated looks with modern elegance and strong structure.",
    heroImage: "/images/women/sets.png",
    products: [
      {
        id: "ws1",
        title: "Golden Grace Women Set",
        price: "$145",
        tag: "New",
        image: "/images/products/golden-grace-women-set.png",
      },
      {
        id: "ws2",
        title: "Royal Bloom Women Set",
        price: "$145",
        tag: "Featured",
        image: "/images/products/royal-bloom-women-set.png",
      },
      {
        id: "ws3",
        title: "Signature Women Occasion Look",
        price: "$185",
        tag: "Best Seller",
        image: "/images/products/signature-women-occasion-look.png",
      },
      {
        id: "ws4",
        title: "Golden Thread Maxi Dress",
        price: "$165",
        tag: "New",
        image: "/images/products/golden-thread-maxi-dress.png",
      },
    ],
  },
  "occasion-wear": {
    title: "Occasion Wear",
    intro: "Statement pieces designed for weddings, celebrations, and grand entrances.",
    heroImage: "/images/women/occasion-wear.png",
    products: [
      {
        id: "wo1",
        title: "Signature Celebration Look",
        price: "$185",
        tag: "Featured",
        image: "/images/products/signature-celebration-look.png",
      },
      {
        id: "wo2",
        title: "Ivory Luxe Evening Edit",
        price: "$190",
        tag: "New",
        image: "/images/products/ivory-luxe-evening-edit.png",
      },
      {
        id: "wo3",
        title: "Royal Bloom Occasion Dress",
        price: "$165",
        tag: "Best Seller",
        image: "/images/products/royal-bloom-occasion-dress.png",
      },
      {
        id: "wo4",
        title: "Golden Grace Women Set",
        price: "$145",
        tag: "Featured",
        image: "/images/products/golden-grace-women-set.png",
      },
    ],
  },
  accessories: {
    title: "Accessories",
    intro: "Elegant finishing details that sharpen and complete the full look.",
    heroImage: "/images/women/accessories.jpeg",
    products: [
      {
        id: "wa1",
        title: "Signature Women Occasion Look",
        price: "$185",
        tag: "Featured",
        image: "/images/products/signature-women-occasion-look.png",
      },
      {
        id: "wa2",
        title: "Golden Grace Women Set",
        price: "$145",
        tag: "New",
        image: "/images/products/golden-grace-women-set.png",
      },
      {
        id: "wa3",
        title: "Royal Bloom Women Set",
        price: "$145",
        tag: "Best Seller",
        image: "/images/products/royal-bloom-women-set.png",
      },
      {
        id: "wa4",
        title: "Ivory Luxe Evening Edit",
        price: "$190",
        tag: "Featured",
        image: "/images/products/ivory-luxe-evening-edit.png",
      },
    ],
  },
};

export const menCategoryPages: Record<string, CategoryPage> = {
  "native-wear": {
    title: "Native Wear",
    intro: "Traditional looks with refined tailoring and strong presence.",
    heroImage: "/images/men/native-wear.png",
    products: [
      {
        id: "mn1",
        title: "Modern Monarch Native Set",
        price: "$175",
        tag: "Featured",
        image: "/images/products/modern-monarch-native-set.png",
      },
      {
        id: "mn2",
        title: "Classic Men Native Set",
        price: "$155",
        tag: "New",
        image: "/images/products/classic-men-native-set.png",
      },
      {
        id: "mn3",
        title: "Royal Ceremony Edit",
        price: "$205",
        tag: "Best Seller",
        image: "/images/products/royal-ceremony-edit.png",
      },
      {
        id: "mn4",
        title: "Classic Senator Statement",
        price: "$160",
        tag: "Featured",
        image: "/images/products/classic-senator-statement.png",
      },
    ],
  },
  "senator-sets": {
    title: "Senator Sets",
    intro: "Modern, clean lines with premium structure for everyday confidence.",
    heroImage: "/images/men/senator-sets.png",
    products: [
      {
        id: "ms1",
        title: "Classic Senator Statement",
        price: "$160",
        tag: "Featured",
        image: "/images/products/classic-senator-statement.png",
      },
      {
        id: "ms2",
        title: "Modern Monarch Men Set",
        price: "$175",
        tag: "New",
        image: "/images/products/modern-monarch-men-set.png",
      },
      {
        id: "ms3",
        title: "Classic Men Native Set",
        price: "$155",
        tag: "Best Seller",
        image: "/images/products/classic-men-native-set.png",
      },
      {
        id: "ms4",
        title: "Royal Ceremony Edit",
        price: "$205",
        tag: "Featured",
        image: "/images/products/royal-ceremony-edit.png",
      },
    ],
  },
  agbada: {
    title: "Agbada",
    intro: "Grand occasion dressing with elegance, dignity, and visual power.",
    heroImage: "/images/men/agbada.png",
    products: [
      {
        id: "ma1",
        title: "Ivory Prestige Agbada",
        price: "$220",
        tag: "Featured",
        image: "/images/products/ivory-prestige-agbada.png",
      },
      {
        id: "ma2",
        title: "Ivory Occasion Agbada",
        price: "$210",
        tag: "New",
        image: "/images/products/ivory-occasion-agbada.png",
      },
      {
        id: "ma3",
        title: "Royal Ceremony Edit",
        price: "$205",
        tag: "Best Seller",
        image: "/images/products/royal-ceremony-edit.png",
      },
      {
        id: "ma4",
        title: "Modern Monarch Native Set",
        price: "$175",
        tag: "Featured",
        image: "/images/products/modern-monarch-native-set.png",
      },
    ],
  },
  accessories: {
    title: "Accessories",
    intro: "Sharp details that complete the full look without excess.",
    heroImage: "/images/men/accessories.jpeg",
    products: [
      {
        id: "mx1",
        title: "Classic Senator Statement",
        price: "$160",
        tag: "Featured",
        image: "/images/products/classic-senator-statement.png",
      },
      {
        id: "mx2",
        title: "Modern Monarch Men Set",
        price: "$175",
        tag: "New",
        image: "/images/products/modern-monarch-men-set.png",
      },
      {
        id: "mx3",
        title: "Ivory Prestige Agbada",
        price: "$220",
        tag: "Best Seller",
        image: "/images/products/ivory-prestige-agbada.png",
      },
      {
        id: "mx4",
        title: "Classic Men Native Set",
        price: "$155",
        tag: "Featured",
        image: "/images/products/classic-men-native-set.png",
      },
    ],
  },
};