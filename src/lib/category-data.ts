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
      { id: "wd1", title: "Outfit Styles 002", tag: "Dress", image: "/images/products/Outfit_Styles_002.jpeg" },
      { id: "wd2", title: "Outfit Styles 004", tag: "Dress", image: "/images/products/Outfit_Styles_004.jpeg" },
      { id: "wd3", title: "Outfit Styles 005", tag: "Dress", image: "/images/products/Outfit_Styles_005.jpeg" },
      { id: "wd4", title: "Outfit Styles 006", tag: "Dress", image: "/images/products/Outfit_Styles_006.jpeg" },
      { id: "wd5", title: "Outfit Styles 007", tag: "Dress", image: "/images/products/Outfit_Styles_007.jpeg" },
      { id: "wd6", title: "Outfit Styles 008", tag: "Dress", image: "/images/products/Outfit_Styles_008.jpeg" },
      { id: "wd7", title: "Outfit Styles 009", tag: "Dress", image: "/images/products/Outfit_Styles_009.jpeg" },
      { id: "wd8", title: "Outfit Styles 012", tag: "Dress", image: "/images/products/Outfit_Styles_012.jpeg" },
      { id: "wd9", title: "Outfit Styles 018", tag: "Dress", image: "/images/products/Outfit_Styles_018.jpeg" },
      { id: "wd10", title: "Outfit Styles 019", tag: "Dress", image: "/images/products/Outfit_Styles_019.jpeg" },
      { id: "wd11", title: "Outfit Styles 020", tag: "Dress", image: "/images/products/Outfit_Styles_020.jpeg" },
      { id: "wd12", title: "Outfit Styles 021", tag: "Dress", image: "/images/products/Outfit_Styles_021.jpeg" },
      { id: "wd13", title: "Outfit Styles 024", tag: "Dress", image: "/images/products/Outfit_Styles_024.jpeg" },
      { id: "wd14", title: "Outfit Styles 025", tag: "Dress", image: "/images/products/Outfit_Styles_025.jpeg" },
      { id: "wd15", title: "Outfit Styles 026", tag: "Dress", image: "/images/products/Outfit_Styles_026.jpeg" },
      { id: "wd16", title: "Outfit Styles 027", tag: "Dress", image: "/images/products/Outfit_Styles_027.jpeg" },
      { id: "wd17", title: "Outfit Styles 028", tag: "Dress", image: "/images/products/Outfit_Styles_028.jpeg" },
      { id: "wd18", title: "Outfit Styles 034", tag: "Dress", image: "/images/products/Outfit_Styles_034.jpeg" },
      { id: "wd19", title: "Outfit Styles 035", tag: "Dress", image: "/images/products/Outfit_Styles_035.jpeg" },
      { id: "wd20", title: "Outfit Styles 036", tag: "Dress", image: "/images/products/Outfit_Styles_036.jpeg" },
      { id: "wd21", title: "Outfit Styles 043", tag: "Dress", image: "/images/products/Outfit_Styles_043.jpeg" },
      { id: "wd22", title: "Outfit Styles 044", tag: "Dress", image: "/images/products/Outfit_Styles_044.jpeg" },
      { id: "wd23", title: "Outfit Styles 045", tag: "Dress", image: "/images/products/Outfit_Styles_045.jpeg" },
      { id: "wd24", title: "Outfit Styles 046", tag: "Dress", image: "/images/products/Outfit_Styles_046.jpeg" },
      { id: "wd25", title: "Outfit Styles 050", tag: "Dress", image: "/images/products/Outfit_Styles_050.jpeg" },
      { id: "wd26", title: "Outfit Styles 051", tag: "Dress", image: "/images/products/Outfit_Styles_051.jpeg" },
      { id: "wd27", title: "Outfit Styles 057", tag: "Dress", image: "/images/products/Outfit_Styles_057.jpeg" },
      { id: "wd28", title: "Outfit Styles 059", tag: "Dress", image: "/images/products/Outfit_Styles_059.jpeg" },
      { id: "wd29", title: "Outfit Styles 060", tag: "Dress", image: "/images/products/Outfit_Styles_060.jpeg" },
      { id: "wd30", title: "Outfit Styles 061", tag: "Dress", image: "/images/products/Outfit_Styles_061.jpeg" },
      { id: "wd31", title: "Outfit Styles 062", tag: "Dress", image: "/images/products/Outfit_Styles_062.jpeg" },
      { id: "wd32", title: "Outfit Styles 065", tag: "Dress", image: "/images/products/Outfit_Styles_065.jpeg" },
      { id: "wd33", title: "Outfit Styles 066", tag: "Dress", image: "/images/products/Outfit_Styles_066.jpeg" },
    ],
  },

  sets: {
    title: "Sets",
    intro: "Polished coordinated looks with modern elegance and strong structure.",
    heroImage: "/images/women/sets.png",
    products: [
      { id: "ws1", title: "Outfit Styles 001", tag: "Set", image: "/images/products/Outfit_Styles_001.jpeg" },
      { id: "ws2", title: "Outfit Styles 010", tag: "Set", image: "/images/products/Outfit_Styles_010.jpeg" },
      { id: "ws3", title: "Outfit Styles 014", tag: "Set", image: "/images/products/Outfit_Styles_014.jpeg" },
      { id: "ws4", title: "Outfit Styles 015", tag: "Set", image: "/images/products/Outfit_Styles_015.jpeg" },
      { id: "ws5", title: "Outfit Styles 016", tag: "Set", image: "/images/products/Outfit_Styles_016.jpeg" },
      { id: "ws6", title: "Outfit Styles 017", tag: "Set", image: "/images/products/Outfit_Styles_017.jpeg" },
      { id: "ws7", title: "Outfit Styles 022", tag: "Set", image: "/images/products/Outfit_Styles_022.jpeg" },
      { id: "ws8", title: "Outfit Styles 023", tag: "Set", image: "/images/products/Outfit_Styles_023.jpeg" },
      { id: "ws9", title: "Outfit Styles 037", tag: "Set", image: "/images/products/Outfit_Styles_037.jpeg" },
      { id: "ws10", title: "Outfit Styles 038", tag: "Set", image: "/images/products/Outfit_Styles_038.jpeg" },
      { id: "ws11", title: "Outfit Styles 041", tag: "Set", image: "/images/products/Outfit_Styles_041.jpeg" },
      { id: "ws12", title: "Outfit Styles 042", tag: "Set", image: "/images/products/Outfit_Styles_042.jpeg" },
      { id: "ws13", title: "Outfit Styles 047", tag: "Set", image: "/images/products/Outfit_Styles_047.jpeg" },
      { id: "ws14", title: "Outfit Styles 048", tag: "Set", image: "/images/products/Outfit_Styles_048.jpeg" },
      { id: "ws15", title: "Outfit Styles 049", tag: "Set", image: "/images/products/Outfit_Styles_049.jpeg" },
      { id: "ws16", title: "Outfit Styles 063", tag: "Set", image: "/images/products/Outfit_Styles_063.jpeg" },
    ],
  },

  "occasion-wear": {
    title: "Occasion Wear",
    intro: "Statement pieces designed for weddings, celebrations, and grand entrances.",
    heroImage: "/images/women/occasion-wear.png",
    products: [
      { id: "wo1", title: "Outfit Styles 003", tag: "Occasion", image: "/images/products/Outfit_Styles_003.jpeg" },
      { id: "wo2", title: "Outfit Styles 011", tag: "Occasion", image: "/images/products/Outfit_Styles_011.jpeg" },
      { id: "wo3", title: "Outfit Styles 013", tag: "Occasion", image: "/images/products/Outfit_Styles_013.jpeg" },
      { id: "wo4", title: "Outfit Styles 039", tag: "Occasion", image: "/images/products/Outfit_Styles_039.jpeg" },
      { id: "wo5", title: "Outfit Styles 040", tag: "Occasion", image: "/images/products/Outfit_Styles_040.jpeg" },
      { id: "wo6", title: "Outfit Styles 052", tag: "Occasion", image: "/images/products/Outfit_Styles_052.jpeg" },
      { id: "wo7", title: "Outfit Styles 053", tag: "Occasion", image: "/images/products/Outfit_Styles_053.jpeg" },
      { id: "wo8", title: "Outfit Styles 054", tag: "Occasion", image: "/images/products/Outfit_Styles_054.jpeg" },
      { id: "wo9", title: "Outfit Styles 055", tag: "Occasion", image: "/images/products/Outfit_Styles_055.jpeg" },
      { id: "wo10", title: "Outfit Styles 056", tag: "Occasion", image: "/images/products/Outfit_Styles_056.jpeg" },
      { id: "wo11", title: "Outfit Styles 058", tag: "Occasion", image: "/images/products/Outfit_Styles_058.jpeg" },
      { id: "wo12", title: "Outfit Styles 064", tag: "Occasion", image: "/images/products/Outfit_Styles_064.jpeg" },
    ],
  },

  accessories: {
    title: "Accessories",
    intro: "Elegant finishing details that sharpen and complete the full look.",
    heroImage: "/images/products/handfan-1.jpeg",
    products: [
      { id: "wa1", title: "Hand Fan 1", tag: "Hand Fan", image: "/images/products/handfan-1.jpeg" },
      { id: "wa2", title: "Women Hat 1", tag: "Hat", image: "/images/products/w-hat-1.png" },
      { id: "wa3", title: "Jewelry Set 1", tag: "Jewelry", image: "/images/products/w-set-1.jpeg" },
      { id: "wa4", title: "Women Bracelet 1", tag: "Bracelet", image: "/images/products/w-brac-1.jpeg" },
      { id: "wa5", title: "Unisex Bracelet 11", tag: "Unisex", image: "/images/products/u-brac-11.jpeg" },
    ],
  },
};

export const menCategoryPages: Record<string, CategoryPage> = {
  "native-wear": {
    title: "Native Wear",
    intro: "Traditional looks with refined tailoring and strong presence.",
    heroImage: "/images/men/native-wear.png",
    products: [
      { id: "mn1", title: "Modern Monarch Native Set", tag: "Featured", image: "/images/products/modern-monarch-native-set.png" },
      { id: "mn2", title: "Classic Men Native Set", tag: "New", image: "/images/products/classic-men-native-set.png" },
      { id: "mn3", title: "Outfit Styles 032", tag: "Native", image: "/images/products/Outfit_Styles_032.jpeg" },
      { id: "mn4", title: "Outfit Styles 067", tag: "Native", image: "/images/products/Outfit_Styles_067.jpeg" },
      { id: "mn5", title: "Outfit Styles 070", tag: "Native", image: "/images/products/Outfit_Styles_070.jpeg" },
    ],
  },

  "senator-sets": {
    title: "Senator Sets",
    intro: "Modern, clean lines with premium structure for everyday confidence.",
    heroImage: "/images/men/senator-sets.png",
    products: [
      { id: "ms1", title: "Classic Senator Statement", tag: "Featured", image: "/images/products/classic-senator-statement.png" },
      { id: "ms2", title: "Modern Monarch Men Set", tag: "New", image: "/images/products/modern-monarch-men-set.png" },
      { id: "ms3", title: "Outfit Styles 031", tag: "Set", image: "/images/products/Outfit_Styles_031.jpeg" },
      { id: "ms4", title: "Outfit Styles 033", tag: "Set", image: "/images/products/Outfit_Styles_033.jpeg" },
      { id: "ms5", title: "Outfit Styles 068", tag: "Set", image: "/images/products/Outfit_Styles_068.jpeg" },
      { id: "ms6", title: "Outfit Styles 069", tag: "Set", image: "/images/products/Outfit_Styles_069.jpeg" },
    ],
  },

  agbada: {
    title: "Agbada",
    intro: "Grand occasion dressing with elegance, dignity, and visual power.",
    heroImage: "/images/men/agbada.png",
    products: [
      { id: "ma1", title: "Ivory Prestige Agbada", tag: "Featured", image: "/images/products/ivory-prestige-agbada.png" },
      { id: "ma2", title: "Ivory Occasion Agbada", tag: "New", image: "/images/products/ivory-occasion-agbada.png" },
      { id: "ma3", title: "Outfit Styles 029", tag: "Agbada", image: "/images/products/Outfit_Styles_029.jpeg" },
      { id: "ma4", title: "Outfit Styles 030", tag: "Agbada", image: "/images/products/Outfit_Styles_030.jpeg" },
    ],
  },

  accessories: {
    title: "Accessories",
    intro: "Sharp details that complete the full look without excess.",
    heroImage: "/images/men/accessories.jpeg",
    products: [
      { id: "mx1", title: "Men Hat 1", tag: "Hat", image: "/images/products/m-hat-1.jpeg" },
      { id: "mx2", title: "Men Ring 1", tag: "Ring", image: "/images/products/m-ring-1.jpeg" },
      { id: "mx3", title: "Men Bracelet 1", tag: "Bracelet", image: "/images/products/m-brac-1.jpeg" },
      { id: "mx4", title: "Unisex Bracelet 1", tag: "Unisex", image: "/images/products/u-brac-1.jpeg" },
    ],
  },
};