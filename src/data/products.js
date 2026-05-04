export const categories = ["All", "Essentials", "Accessories", "Workspace", "Lifestyle"];

export const products = [
  {
    slug: "core-hoodie",
    name: "Core Hoodie",
    category: "Essentials",
    price: "$84",
    oldPrice: "$108",
    tag: "Best seller",
    status: "Active",
    stock: 184,
    sales: "$12.4k",
    description: "Heavy cotton fleece with a relaxed daily fit.",
    details: "A clean everyday layer with soft structure, deep pockets, and a washed finish.",
    rating: "4.9",
    reviews: "128"
  },
  {
    slug: "desk-mat-pro",
    name: "Desk Mat Pro",
    category: "Workspace",
    price: "$38",
    oldPrice: "$52",
    tag: "New",
    status: "Active",
    stock: 241,
    sales: "$7.1k",
    description: "Soft desk surface for focused work and clean setups.",
    details: "A low-profile mat that anchors your workspace and gives keyboards, mice, and notebooks a smooth base.",
    rating: "4.8",
    reviews: "91"
  },
  {
    slug: "everyday-tote",
    name: "Everyday Tote",
    category: "Lifestyle",
    price: "$52",
    oldPrice: "$68",
    tag: "Limited",
    status: "Low stock",
    stock: 96,
    sales: "$5.4k",
    description: "Structured carry-all with interior storage pockets.",
    details: "A minimal tote with a sturdy base, laptop-friendly sleeve, and room for daily essentials.",
    rating: "4.7",
    reviews: "74"
  },
  {
    slug: "travel-pouch",
    name: "Travel Pouch",
    category: "Accessories",
    price: "$46",
    oldPrice: "$60",
    tag: "Restocked",
    status: "Draft",
    stock: 118,
    sales: "$4.9k",
    description: "Compact pouch for chargers, keys, cards, and cables.",
    details: "A small organizer with divided pockets that keeps loose essentials easy to find.",
    rating: "4.9",
    reviews: "112"
  },
  {
    slug: "studio-bottle",
    name: "Studio Bottle",
    category: "Lifestyle",
    price: "$32",
    oldPrice: "$44",
    tag: "Popular",
    status: "Active",
    stock: 64,
    sales: "$3.2k",
    description: "Matte steel bottle made for long work sessions.",
    details: "A vacuum-insulated bottle with a slim profile and a leak-resistant cap.",
    rating: "4.8",
    reviews: "63"
  },
  {
    slug: "cable-dock",
    name: "Cable Dock",
    category: "Workspace",
    price: "$28",
    oldPrice: "$36",
    tag: "Clean setup",
    status: "Active",
    stock: 152,
    sales: "$2.8k",
    description: "A small organizer that keeps your desk lines tidy.",
    details: "A weighted cable dock that keeps charging cables ready without clutter.",
    rating: "4.6",
    reviews: "47"
  }
];

export function findProduct(slug) {
  return products.find((product) => product.slug === slug) || products[0];
}
