export type LandingProduct = {
  id: string;
  title: string;
  price?: string;
  tag: string;
  image: string;
};

export type LandingCategory = {
  slug: string;
  title: string;
  copy: string;
  image: string;
};

export type LandingStyleBlock = {
  title: string;
  copy: string;
  tone: string;
  image: string;
};

export type LandingPageData = {
  key: "women" | "men";
  eyebrow: string;
  title: string;
  intro: string;
  heroTone: string;
  heroPanelTone: string;
  heroImage: string;
  categories: LandingCategory[];
  featured: LandingProduct[];
  styleBlocks: LandingStyleBlock[];
  editorialTitle: string;
  editorialCopy: string;
  editorialTone: string;
  editorialImages: {
    image: string;
    alt: string;
  }[];
};

export const womenPageData: LandingPageData = {
  key: "women",
  eyebrow: "Women",
  title: "Elegance with shape, color, and cultural presence.",
  intro:
    "Discover dresses, sets, and occasion pieces designed to feel graceful, bold, and unforgettable.",
  heroTone: "from-[#fff4ef] via-[#f8eef9] to-[#f7f2fb]",
  heroPanelTone: "from-[#f5ddea] via-[#f8eef9] to-[#fff6eb]",
  heroImage: "/images/home/women-cover.png",
  categories: [
    {
      slug: "dresses",
      title: "Dresses",
      copy: "Elegant silhouettes for celebrations, worship, events, and standout entrances.",
      image: "/images/women/dresses.png",
    },
    {
      slug: "sets",
      title: "Sets",
      copy: "Coordinated looks with polish, structure, and modern African styling.",
      image: "/images/women/sets.png",
    },
    {
      slug: "occasion-wear",
      title: "Occasion Wear",
      copy: "Pieces made for weddings, parties, and moments that deserve attention.",
      image: "/images/women/occasion-wear.png",
    },
    {
      slug: "accessories",
      title: "Accessories",
      copy: "Finishing touches that complete the look without losing elegance.",
      image: "/images/products/w-set-1.jpeg",
    },
  ],
  featured: [
    {
      id: "w1",
      title: "Royal Bloom Occasion Dress",
      tag: "Featured",
      image: "/images/products/royal-bloom-occasion-dress.png",
    },
    {
      id: "w2",
      title: "Golden Grace Women Set",
      tag: "New",
      image: "/images/products/golden-grace-women-set.png",
    },
    {
      id: "w3",
      title: "Signature Celebration Look",
      tag: "Best Seller",
      image: "/images/products/signature-celebration-look.png",
    },
    {
      id: "w4",
      title: "Ivory Luxe Evening Edit",
      tag: "New",
      image: "/images/products/ivory-luxe-evening-edit.png",
    },
  ],
  styleBlocks: [
    {
      title: "Wedding Guest Edit",
      copy: "Elegant looks that arrive with beauty, presence, and quiet authority.",
      tone: "from-[#fff2e9] to-[#f8eaf7]",
      image: "/images/products/the-spotlight-rhinestone-mesh-gown-teal.jpeg",
    },
    {
      title: "Sunday Best",
      copy: "Polished fashion for worship, events, and moments that carry meaning.",
      tone: "from-[#f6edff] to-[#f1e7ff]",
      image: "/images/products/plus-stripe-cross-shoulder-band-maxi-dress.jpeg",
    },
    {
      title: "Soft Statement",
      copy: "Graceful styling with color, movement, and strong feminine structure.",
      tone: "from-[#fdeef3] to-[#fff7ed]",
      image: "/images/products/merlin-mesh-cowl-neck-romper-slate-blue.jpeg",
    },
  ],
  editorialTitle: "Style that moves with grace.",
  editorialCopy:
    "Women’s looks should feel intentional, flattering, and memorable. This lane is built for occasion dressing, refined statement pieces, and everyday elegance with cultural beauty.",
  editorialTone: "from-[#6b3f97] via-[#7c4bb0] to-[#c8a64d]",
  editorialImages: [
    {
      image: "/images/products/the-spotlight-rhinestone-mesh-gown-teal.jpeg",
      alt: "Women editorial spotlight gown",
    },
    {
      image: "/images/products/w-set-1.jpeg",
      alt: "Women editorial jewelry set",
    },
  ],
};

export const menPageData: LandingPageData = {
  key: "men",
  eyebrow: "Men",
  title: "Structure, confidence, and culture in every look.",
  intro:
    "Explore native wear, occasion sets, and modern pieces designed for clean presence and strong identity.",
  heroTone: "from-[#f7f2fb] via-[#f4f0ff] to-[#fdf7ee]",
  heroPanelTone: "from-[#e9e1ff] via-[#f5f0ff] to-[#f9efe2]",
  heroImage: "/images/home/men-cover.png",
  categories: [
    {
      slug: "native-wear",
      title: "Native Wear",
      copy: "Sharp traditional looks with refined tailoring and commanding presence.",
      image: "/images/men/native-wear.png",
    },
    {
      slug: "senator-sets",
      title: "Senator Sets",
      copy: "Modern structure, clean lines, and elevated everyday confidence.",
      image: "/images/men/senator-sets.png",
    },
    {
      slug: "agbada",
      title: "Agbada",
      copy: "Grand occasion dressing with elegance, dignity, and visual power.",
      image: "/images/men/agbada.png",
    },
    {
      slug: "accessories",
      title: "Accessories",
      copy: "Details that sharpen the entire look without forcing attention.",
      image: "/images/products/m-hat-1.jpeg",
    },
  ],
  featured: [
    {
      id: "m1",
      title: "Modern Monarch Native Set",
      tag: "Featured",
      image: "/images/products/modern-monarch-native-set.png",
    },
    {
      id: "m2",
      title: "Ivory Prestige Agbada",
      tag: "New",
      image: "/images/products/ivory-prestige-agbada.png",
    },
    {
      id: "m3",
      title: "Classic Senator Statement",
      tag: "Best Seller",
      image: "/images/products/classic-senator-statement.png",
    },
    {
      id: "m4",
      title: "Royal Ceremony Edit",
      tag: "New",
      image: "/images/products/royal-ceremony-edit.png",
    },
  ],
  styleBlocks: [
    {
      title: "Ceremony Looks",
      copy: "Clean, elevated styles built for weddings, celebrations, and grand entries.",
      tone: "from-[#eee7ff] to-[#f7f1ff]",
      image: "/images/products/ivory-prestige-agbada.png",
    },
    {
      title: "Refined Traditional",
      copy: "Classic African menswear with stronger structure and premium finish.",
      tone: "from-[#fff3e6] to-[#f6eadb]",
      image: "/images/products/modern-monarch-native-set.png",
    },
    {
      title: "Modern Presence",
      copy: "Looks that feel current without losing their cultural authority.",
      tone: "from-[#f6f0ff] to-[#ece4ff]",
      image: "/images/products/classic-senator-statement.png",
    },
  ],
  editorialTitle: "Menswear with quiet authority.",
  editorialCopy:
    "The men’s lane is built for native elegance, clean tailoring, and confident presentation. From modern sets to ceremony-ready looks, every piece should feel grounded, sharp, and memorable.",
  editorialTone: "from-[#4f2d77] via-[#69419a] to-[#c8a64d]",
  editorialImages: [
    {
      image: "/images/products/pearl-trim-off-shoulder-top-and-pants-2-piece-set.jpeg",
      alt: "Men editorial native set",
    },
    {
      image: "/images/products/m-hat-1.jpeg",
      alt: "Men editorial hat accessory",
    },
  ],
};