export type StoreProduct = {
  id: string;
  title: string;
  price?: string;
  sizes?: string[];
  tag: string;
  image: string;
};

const ML = ["M", "L"];
const ONE_SIZE = ["One Size"];

export const allNewArrivalItems: StoreProduct[] = [
  {
    id: "na44",
    title: "Mini Electrifying Party Dress",
    price: "$55",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_044.jpeg",
  },
  {
    id: "na45",
    title: "Mini Electrifying Party Dress",
    price: "$55",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_045.jpeg",
  },
  {
    id: "na46",
    title: "Frontal Slit Casual Dress",
    price: "$45",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_046.jpeg",
  },
  {
    id: "na50",
    title: "2 Color Open Jacket",
    price: "$40",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_050.jpeg",
  },
  {
    id: "na51",
    title: "Frontal Slit Casual Dress",
    price: "$45",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_051.jpeg",
  },
  {
    id: "na57",
    title: "African Black/Gold Dress",
    price: "$80",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_057.jpeg",
  },
  {
    id: "na59",
    title: "2 Side Pocket Red African Dress",
    price: "$80",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_059.jpeg",
  },
  {
    id: "na60",
    title: "2 Side Pocket Yellow African Dress",
    price: "$80",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_060.jpeg",
  },
  {
    id: "na61",
    title: "2 Side Pocket Multicolor African Dress",
    price: "$80",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_061.jpeg",
  },
  {
    id: "na62",
    title: "2 Side Pocket Multicolor African Dress",
    price: "$80",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_062.jpeg",
  },
  {
    id: "na63",
    title: "Beaded Black Hoodie Shirt",
    price: "$65",
    sizes: ["M"],
    tag: "New",
    image: "/images/products/Outfit_Styles_063.jpeg",
  },
  {
    id: "na64",
    title: "African Embroidered Jacket",
    price: "$110",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_064.jpeg",
  },
  {
    id: "na65",
    title: "2 Set Top/Short Casual",
    price: "$55",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_065.jpeg",
  },
  {
    id: "na66",
    title: "African Embroidered Jacket",
    price: "$110",
    sizes: ONE_SIZE,
    tag: "New",
    image: "/images/products/Outfit_Styles_066.jpeg",
  },
  {
    id: "na67",
    title: "Men Outfit Style 067",
    price: "$130",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_067.jpeg",
  },
  {
    id: "na68",
    title: "Men Outfit Style 068",
    price: "$98",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_068.jpeg",
  },
  {
    id: "na69",
    title: "Men Outfit Style 069",
    price: "$145",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_069.jpeg",
  },
  {
    id: "na70",
    title: "Men Outfit Style 070",
    price: "$180",
    sizes: ML,
    tag: "New",
    image: "/images/products/Outfit_Styles_070.jpeg",
  },
];

export const newArrivals: StoreProduct[] =
  allNewArrivalItems.slice(0, 6);

export const featuredProducts: StoreProduct[] =
  allNewArrivalItems.filter((item) =>
    [
      "na44",
      "na57",
      "na64",
      "na67",
      "na69",
      "na70",
    ].includes(item.id)
  );

export const featuredStyles = [
  {
    id: "1",
    title: "Birthday Edit",
    copy: "Sequin sets, statement dresses, and standout looks built for celebration.",
    href: "/featured",
    tone: "from-[#f7f2fb] to-[#fff7ec]",
    image:
      "/images/products/its-my-birthday-sequin-tshirt-dress.jpeg",
  },
  {
    id: "2",
    title: "Women Occasion Wear",
    copy: "Elegant silhouettes, strong detail, and looks made to command attention.",
    href: "/women",
    tone: "from-[#fff3e7] to-[#f8e8f7]",
    image:
      "/images/products/the-spotlight-rhinestone-mesh-gown-teal.jpeg",
  },
  {
    id: "3",
    title: "Statement Sets",
    copy: "Coordinated looks with texture, shine, and a confident fashion presence.",
    href: "/featured",
    tone: "from-[#ede7ff] to-[#f8f4ff]",
    image:
      "/images/products/metallic-one-shoulder-2-piece-legging-set.jpeg",
  },
];