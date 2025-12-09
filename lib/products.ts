export interface Product {
  id: string
  name: string
  category: "shirt" | "hoodie"
  originalPrice: number
  discountedPrice: number
  image: string
  colors: string[]
  sizes: string[]
  soldOut?: boolean // Added soldOut property
}

export const products: Product[] = [
  // Shirts
  {
    id: "shirt-1",
    name: "Vagabond Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/vagabond-new-shirt.png",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
    soldOut: true, // Marked Vagabond shirt as sold out
  },
  {
    id: "shirt-2",
    name: "Ferrari Racer Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/ferrari-oversized-shirt.png",
    colors: ["#000000", "#DC143C"],
    sizes: ["S", "M", "L", "XL"],
    soldOut: true, // Marked as sold out
  },
  {
    id: "shirt-3",
    name: "San Andreas Grove Street Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/san-andreas-oversized-shirt.png",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "shirt-4",
    name: "Porsche Legacy Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/porsche-legacy-shirt.png",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "shirt-5",
    name: "Sharingan Anime Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/sharingan-anime-shirt.png",
    colors: ["#000000", "#8B0000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "shirt-6",
    name: "Mandalorian Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/mandalorian-olive-shirt.png",
    colors: ["#556B2F"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "shirt-8",
    name: "Graffiti Art Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/graffiti-oversized-shirt.png",
    colors: ["#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    soldOut: true, // Marked as sold out
  },
  {
    id: "shirt-9",
    name: "Arctic Monkeys Oversized T-shirt",
    category: "shirt",
    originalPrice: 2800,
    discountedPrice: 2300,
    image: "/images/arctic-monkeys-shirt.png",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
  },
  // Hoodies
  {
    id: "hoodie-1",
    name: "Porsche 911 GT3 RS Hoodie",
    category: "hoodie",
    originalPrice: 3800,
    discountedPrice: 3000,
    image: "/images/porsche-gt3-hoodie.png",
    colors: ["#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "hoodie-2",
    name: "Batman Comic Hoodie",
    category: "hoodie",
    originalPrice: 3800,
    discountedPrice: 3000,
    image: "/images/batman-comic-hoodie-new.png",
    colors: ["#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    soldOut: true, // Marked as sold out
  },
  {
    id: "hoodie-3",
    name: "Toji Fushiguro Anime Hoodie",
    category: "hoodie",
    originalPrice: 3800,
    discountedPrice: 3000,
    image: "/images/toji-fushiguro-hoodie.png",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
    soldOut: true, // Marked as sold out
  },
  {
    id: "hoodie-4",
    name: "Death Note Anime Hoodie",
    category: "hoodie",
    originalPrice: 3800,
    discountedPrice: 3000,
    image: "/images/death-note-hoodie.png",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
    soldOut: true, 
  },
]
