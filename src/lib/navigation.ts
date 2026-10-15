export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  {
    label: "Women",
    href: "/women",
  },
  {
    label: "Men",
    href: "/men",
  },
  {
    label: "Jewelry",
    href: "https://www.divinofabstyles.us",
    external: true,
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    label: "Featured",
    href: "/featured",
  },
  {
    label: "Sale",
    href: "/sale",
  },
];

export const womenCategories = [
  {
    label: "Dresses",
    href: "/women/dresses",
  },
  {
    label: "Sets",
    href: "/women/sets",
  },
  {
    label: "Tops",
    href: "/women/tops",
  },
  {
    label: "Bottoms",
    href: "/women/bottoms",
  },
  {
    label: "Accessories",
    href: "/women/accessories",
  },
];

export const menCategories = [
  {
    label: "Native Wear",
    href: "/men/native-wear",
  },
  {
    label: "Sets",
    href: "/men/sets",
  },
  {
    label: "Tops",
    href: "/men/tops",
  },
  {
    label: "Bottoms",
    href: "/men/bottoms",
  },
  {
    label: "Accessories",
    href: "/men/accessories",
  },
];