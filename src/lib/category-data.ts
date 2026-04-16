type CategoryProduct = {
  id: string;
  title: string;
  price?: string;
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
        title: "Plus Foil Fabric Mini Dress",
        tag: "New",
        image: "/images/products/plus-foil-fabric-mini-dress.jpeg",
      },
      {
        id: "wd2",
        title: "Plus Stripe Cross Shoulder Band Maxi Dress",
        tag: "New",
        image: "/images/products/plus-stripe-cross-shoulder-band-maxi-dress.jpeg",
      },
      {
        id: "wd3",
        title: "Plus Leaf Mesh Print See-through Maxi Dress",
        tag: "New",
        image: "/images/products/plus-leaf-mesh-print-see-through-maxi-dress.jpeg",
      },
      {
        id: "wd4",
        title: "Puff Sleeve Foil Print See-through Maxi Dress",
        tag: "New",
        image: "/images/products/puff-sleeve-foil-print-see-through-maxi-dress.jpeg",
      },
      {
        id: "wd5",
        title: "It's My Birthday Sequin T-shirt Dress",
        tag: "New",
        image: "/images/products/its-my-birthday-sequin-tshirt-dress.jpeg",
      },
      {
        id: "wd6",
        title: "Lilou Draped Satin Mini Dress - Champagne",
        tag: "New",
        image: "/images/products/lilou-draped-satin-mini-dress-champagne.jpeg",
      },
      {
        id: "wd7",
        title: "Merlin Mesh Cowl Neck Romper - Slate Blue",
        tag: "New",
        image: "/images/products/merlin-mesh-cowl-neck-romper-slate-blue.jpeg",
      },
      {
        id: "wd8",
        title: "The Spotlight Rhinestone Mesh Gown – Teal",
        tag: "Featured",
        image: "/images/products/the-spotlight-rhinestone-mesh-gown-teal.jpeg",
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
        title: "Metallic One Shoulder 2 Piece Legging Set",
        tag: "New",
        image: "/images/products/metallic-one-shoulder-2-piece-legging-set.jpeg",
      },
      {
        id: "ws2",
        title: "Colorful Brushed 2 Piece Shirt Set",
        tag: "New",
        image: "/images/products/colorful-brushed-2-piece-shirt-set.jpeg",
      },
      {
        id: "ws3",
        title: "Gradient Stripe 2 Piece Maxi Skirt Set",
        tag: "New",
        image: "/images/products/gradient-stripe-2-piece-maxi-skirt-set.jpeg",
      },
      {
        id: "ws4",
        title: "Metallic Bishop Sleeve Layered Ruffle Skirt Set",
        tag: "New",
        image: "/images/products/metallic-bishop-sleeve-layered-ruffle-skirt-set.jpeg",
      },
      {
        id: "ws5",
        title: "Birthday Sequin Crop And Shorts 2-piece Set",
        tag: "New",
        image: "/images/products/birthday-sequin-crop-and-shorts-2-piece-set.jpeg",
      },
      {
        id: "ws6",
        title: "Swilt Print Top And Shorts",
        tag: "New",
        image: "/images/products/swilt-print-top-and-shorts.jpeg",
      },
      {
        id: "ws7",
        title: "Swilt Print Top And Bottom",
        tag: "New",
        image: "/images/products/swilt-print-top-and-bottom.jpeg",
      },
      {
        id: "ws8",
        title: "Royal Bloom Women Set",
        tag: "New",
        image: "/images/products/royal-bloom-women-set.jpeg",
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
        title: "The Spotlight Rhinestone Mesh Gown – Teal",
        tag: "Featured",
        image: "/images/products/the-spotlight-rhinestone-mesh-gown-teal.jpeg",
      },
      {
        id: "wo2",
        title: "Lilou Draped Satin Mini Dress - Champagne",
        tag: "New",
        image: "/images/products/lilou-draped-satin-mini-dress-champagne.jpeg",
      },
      {
        id: "wo3",
        title: "Puff Sleeve Foil Print See-through Maxi Dress",
        tag: "New",
        image: "/images/products/puff-sleeve-foil-print-see-through-maxi-dress.jpeg",
      },
      {
        id: "wo4",
        title: "Plus Stripe Cross Shoulder Band Maxi Dress",
        tag: "New",
        image: "/images/products/plus-stripe-cross-shoulder-band-maxi-dress.jpeg",
      },
      {
        id: "wo5",
        title: "Plus Leaf Mesh Print See-through Maxi Dress",
        tag: "New",
        image: "/images/products/plus-leaf-mesh-print-see-through-maxi-dress.jpeg",
      },
      {
        id: "wo6",
        title: "Birthday Sequin Crop And Shorts 2-piece Set",
        tag: "Party Edit",
        image: "/images/products/birthday-sequin-crop-and-shorts-2-piece-set.jpeg",
      },
      {
        id: "wo7",
        title: "It's My Birthday Sequin T-shirt Dress",
        tag: "Party Edit",
        image: "/images/products/its-my-birthday-sequin-tshirt-dress.jpeg",
      },
      {
        id: "wo8",
        title: "Gradients It's My Birthday Sequin Top",
        tag: "Party Edit",
        image: "/images/products/gradients-its-my-birthday-sequin-top.jpeg",
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
        title: "Women Hat 1",
        tag: "Featured",
        image: "/images/products/w-hat-1.png",
      },
      {
        id: "wa2",
        title: "Jewelry Set 1",
        tag: "New",
        image: "/images/products/w-set-1.jpeg",
      },
      {
        id: "wa3",
        title: "Women Bracelet 1",
        tag: "Best Seller",
        image: "/images/products/w-brac-1.jpeg",
      },
      {
        id: "wa4",
        title: "Unisex Bracelet 11",
        tag: "Featured",
        image: "/images/products/u-brac-11.jpeg",
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
        tag: "Featured",
        image: "/images/products/modern-monarch-native-set.png",
      },
      {
        id: "mn2",
        title: "Classic Men Native Set",
        tag: "New",
        image: "/images/products/classic-men-native-set.png",
      },
      {
        id: "mn3",
        title: "Royal Ceremony Edit",
        tag: "Best Seller",
        image: "/images/products/royal-ceremony-edit.png",
      },
      {
        id: "mn4",
        title: "Classic Senator Statement",
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
        tag: "Featured",
        image: "/images/products/classic-senator-statement.png",
      },
      {
        id: "ms2",
        title: "Modern Monarch Men Set",
        tag: "New",
        image: "/images/products/modern-monarch-men-set.png",
      },
      {
        id: "ms3",
        title: "Classic Men Native Set",
        tag: "Best Seller",
        image: "/images/products/classic-men-native-set.png",
      },
      {
        id: "ms4",
        title: "Royal Ceremony Edit",
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
        tag: "Featured",
        image: "/images/products/ivory-prestige-agbada.png",
      },
      {
        id: "ma2",
        title: "Ivory Occasion Agbada",
        tag: "New",
        image: "/images/products/ivory-occasion-agbada.png",
      },
      {
        id: "ma3",
        title: "Royal Ceremony Edit",
        tag: "Best Seller",
        image: "/images/products/royal-ceremony-edit.png",
      },
      {
        id: "ma4",
        title: "Modern Monarch Native Set",
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
        tag: "Featured",
        image: "/images/products/classic-senator-statement.png",
      },
      {
        id: "mx2",
        title: "Modern Monarch Men Set",
        tag: "New",
        image: "/images/products/modern-monarch-men-set.png",
      },
      {
        id: "mx3",
        title: "Ivory Prestige Agbada",
        tag: "Best Seller",
        image: "/images/products/ivory-prestige-agbada.png",
      },
      {
        id: "mx4",
        title: "Classic Men Native Set",
        tag: "Featured",
        image: "/images/products/classic-men-native-set.png",
      },
    ],
  },
};