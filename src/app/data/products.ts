export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODc2MTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium wireless headphones with noise cancellation and superior sound quality.",
    stock: 45,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODc2MTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Advanced fitness tracker with heart rate monitor and GPS tracking.",
    stock: 32,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Designer Shirt",
    price: 79.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc3ODYxNzAxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant plaid dress shirt perfect for any formal occasion.",
    stock: 67,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Casual Collection",
    price: 149.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc3ODYxNzAxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Trendy casual wear collection for everyday comfort and style.",
    stock: 54,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Luxury Armchair",
    price: 599.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc4Njg4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium leather armchair with modern design and ultimate comfort.",
    stock: 18,
    rating: 4.8,
  },
  {
    id: 6,
    name: "Modern Sofa",
    price: 899.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1559638869-39e9ef6a6dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc4Njg4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant brown leather sofa perfect for your living room.",
    stock: 12,
    rating: 4.9,
  },
  {
    id: 7,
    name: "Minimalist Chair",
    price: 349.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1509764866569-93cd1fc07dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc4Njg4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sleek gray padded armchair with minimalist design.",
    stock: 28,
    rating: 4.4,
  },
  {
    id: 8,
    name: "Premium Headset",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODc2MTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-quality gaming headset with crystal clear audio.",
    stock: 41,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Ceramic Mug Set",
    price: 39.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1567016530961-54fd42f2d51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc4Njg4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Beautiful ceramic mug collection for your kitchen.",
    stock: 89,
    rating: 4.2,
  },
  {
    id: 10,
    name: "Fashion Wardrobe",
    price: 89.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1774691799598-71e688b1bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc3ODYxNzAxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Colorful clothing collection with vibrant styles.",
    stock: 73,
    rating: 4.5,
  },
  {
    id: 11,
    name: "Modern Living Room",
    price: 1299.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1662059361834-d361807d63e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc4Njg4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete modern living room furniture set.",
    stock: 8,
    rating: 4.9,
  },
  {
    id: 12,
    name: "Circuit Board Tech",
    price: 499.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODc2MTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Advanced technology components for enthusiasts.",
    stock: 21,
    rating: 4.7,
  },
];

export const categories = [
  { name: "Electronics", count: 45, icon: "💻" },
  { name: "Fashion", count: 67, icon: "👕" },
  { name: "Furniture", count: 32, icon: "🛋️" },
  { name: "Home Decor", count: 54, icon: "🏠" },
  { name: "Sports", count: 28, icon: "⚽" },
  { name: "Books", count: 91, icon: "📚" },
];
