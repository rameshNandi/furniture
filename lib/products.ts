export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  subcategory?: string
  rating: number
  reviews: number
  description: string
  features: string[]
  inStock: boolean
  colors?: string[]
  sizes?: string[]
}

export interface Category {
  id: string
  name: string
  subcategories?: string[]
  count: number
}

export const categories: Category[] = [
  { id: "bedroom", name: "Bedroom", subcategories: ["Beds", "Wardrobes", "Nightstands", "Dressers"], count: 25 },
  {
    id: "living-room",
    name: "Living Room",
    subcategories: ["Sofas", "Coffee Tables", "TV Units", "Armchairs"],
    count: 24,
  },
  {
    id: "dining-room",
    name: "Dining Room",
    subcategories: ["Dining Tables", "Dining Chairs", "Buffets", "Bar Stools"],
    count: 22,
  },
  {
    id: "office",
    name: "Office",
    subcategories: ["Office Chairs", "Desks", "Bookcases", "Filing Cabinets"],
    count: 20,
  },
  {
    id: "kitchen",
    name: "Kitchen",
    subcategories: ["Kitchen Islands", "Bar Stools", "Storage", "Accessories"],
    count: 18,
  },
  {
    id: "outdoor",
    name: "Outdoor",
    subcategories: ["Patio Sets", "Lounge Chairs", "Umbrellas", "Planters"],
    count: 15,
  },
]

export const products: Product[] = [
  // Bedroom Products
  {
    id: "bed-001",
    name: "Luxury King Size Bed",
    price: 1299.99,
    originalPrice: 1599.99,
    image: "/placeholder.svg?height=300&width=300&text=Luxury+King+Bed",
    images: [
      "/placeholder.svg?height=400&width=400&text=Luxury+King+Bed+1",
      "/placeholder.svg?height=400&width=400&text=Luxury+King+Bed+2",
      "/placeholder.svg?height=400&width=400&text=Luxury+King+Bed+3",
      "/placeholder.svg?height=400&width=400&text=Luxury+King+Bed+4",
    ],
    category: "bedroom",
    subcategory: "Beds",
    rating: 4.8,
    reviews: 124,
    description: "Premium upholstered king size bed with elegant tufted headboard",
    features: ["Solid wood frame", "Premium upholstery", "Tufted headboard", "Easy assembly"],
    inStock: true,
    colors: ["Charcoal", "Beige", "Navy"],
    sizes: ["King", "Queen"],
  },
  {
    id: "bed-002",
    name: "Modern Platform Bed",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300&text=Modern+Platform+Bed",
    images: [
      "/placeholder.svg?height=400&width=400&text=Modern+Platform+Bed+1",
      "/placeholder.svg?height=400&width=400&text=Modern+Platform+Bed+2",
      "/placeholder.svg?height=400&width=400&text=Modern+Platform+Bed+3",
      "/placeholder.svg?height=400&width=400&text=Modern+Platform+Bed+4",
    ],
    category: "bedroom",
    subcategory: "Beds",
    rating: 4.6,
    reviews: 89,
    description: "Sleek platform bed with minimalist design",
    features: ["Low profile design", "No box spring needed", "Solid wood construction"],
    inStock: true,
    colors: ["Walnut", "Oak", "Black"],
    sizes: ["King", "Queen", "Full"],
  },
  {
    id: "wardrobe-001",
    name: "Executive Wardrobe",
    price: 1899.99,
    image: "/placeholder.svg?height=300&width=300&text=Executive+Wardrobe",
    images: [
      "/placeholder.svg?height=400&width=400&text=Executive+Wardrobe+1",
      "/placeholder.svg?height=400&width=400&text=Executive+Wardrobe+2",
      "/placeholder.svg?height=400&width=400&text=Executive+Wardrobe+3",
      "/placeholder.svg?height=400&width=400&text=Executive+Wardrobe+4",
    ],
    category: "bedroom",
    subcategory: "Wardrobes",
    rating: 4.9,
    reviews: 67,
    description: "Spacious wardrobe with multiple compartments and mirror",
    features: ["3 door design", "Built-in mirror", "Multiple shelves", "Hanging rod"],
    inStock: true,
    colors: ["White", "Walnut", "Black"],
  },
  // Living Room Products
  {
    id: "sofa-001",
    name: "Premium Sectional Sofa",
    price: 2299.99,
    originalPrice: 2799.99,
    image: "/placeholder.svg?height=300&width=300&text=Premium+Sectional+Sofa",
    images: [
      "/placeholder.svg?height=400&width=400&text=Premium+Sectional+Sofa+1",
      "/placeholder.svg?height=400&width=400&text=Premium+Sectional+Sofa+2",
      "/placeholder.svg?height=400&width=400&text=Premium+Sectional+Sofa+3",
      "/placeholder.svg?height=400&width=400&text=Premium+Sectional+Sofa+4",
    ],
    category: "living-room",
    subcategory: "Sofas",
    rating: 4.7,
    reviews: 156,
    description: "Comfortable L-shaped sectional sofa perfect for large families",
    features: ["L-shaped design", "Premium fabric", "Removable cushions", "Sturdy frame"],
    inStock: true,
    colors: ["Gray", "Beige", "Navy", "Brown"],
    sizes: ["Large", "Extra Large"],
  },
  {
    id: "armchair-001",
    name: "Classic Armchair",
    price: 599.99,
    image: "/placeholder.svg?height=300&width=300&text=Classic+Armchair",
    images: [
      "/placeholder.svg?height=400&width=400&text=Classic+Armchair+1",
      "/placeholder.svg?height=400&width=400&text=Classic+Armchair+2",
      "/placeholder.svg?height=400&width=400&text=Classic+Armchair+3",
      "/placeholder.svg?height=400&width=400&text=Classic+Armchair+4",
    ],
    category: "living-room",
    subcategory: "Armchairs",
    rating: 4.5,
    reviews: 92,
    description: "Elegant armchair with wooden legs and comfortable cushioning",
    features: ["Wooden legs", "Comfortable padding", "Durable fabric", "Classic design"],
    inStock: true,
    colors: ["Blue", "Green", "Gray", "Red"],
  },
  {
    id: "coffee-table-001",
    name: "Modern Coffee Table",
    price: 399.99,
    image: "/placeholder.svg?height=300&width=300&text=Modern+Coffee+Table",
    images: [
      "/placeholder.svg?height=400&width=400&text=Modern+Coffee+Table+1",
      "/placeholder.svg?height=400&width=400&text=Modern+Coffee+Table+2",
      "/placeholder.svg?height=400&width=400&text=Modern+Coffee+Table+3",
      "/placeholder.svg?height=400&width=400&text=Modern+Coffee+Table+4",
    ],
    category: "living-room",
    subcategory: "Coffee Tables",
    rating: 4.4,
    reviews: 78,
    description: "Sleek glass-top coffee table with metal frame",
    features: ["Tempered glass top", "Metal frame", "Modern design", "Easy to clean"],
    inStock: true,
    colors: ["Clear Glass", "Smoked Glass"],
  },
  // Dining Room Products
  {
    id: "dining-table-001",
    name: "Family Dining Table",
    price: 1199.99,
    image: "/placeholder.svg?height=300&width=300&text=Family+Dining+Table",
    images: [
      "/placeholder.svg?height=400&width=400&text=Family+Dining+Table+1",
      "/placeholder.svg?height=400&width=400&text=Family+Dining+Table+2",
      "/placeholder.svg?height=400&width=400&text=Family+Dining+Table+3",
      "/placeholder.svg?height=400&width=400&text=Family+Dining+Table+4",
    ],
    category: "dining-room",
    subcategory: "Dining Tables",
    rating: 4.8,
    reviews: 134,
    description: "Solid wood dining table that seats 6-8 people comfortably",
    features: ["Solid wood construction", "Seats 6-8 people", "Scratch resistant", "Easy assembly"],
    inStock: true,
    colors: ["Oak", "Walnut", "Cherry"],
    sizes: ["6-seater", "8-seater"],
  },
  {
    id: "dining-chair-001",
    name: "Upholstered Dining Chair",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300&text=Upholstered+Dining+Chair",
    images: [
      "/placeholder.svg?height=400&width=400&text=Upholstered+Dining+Chair+1",
      "/placeholder.svg?height=400&width=400&text=Upholstered+Dining+Chair+2",
      "/placeholder.svg?height=400&width=400&text=Upholstered+Dining+Chair+3",
      "/placeholder.svg?height=400&width=400&text=Upholstered+Dining+Chair+4",
    ],
    category: "dining-room",
    subcategory: "Dining Chairs",
    rating: 4.6,
    reviews: 98,
    description: "Comfortable upholstered dining chair with wooden legs",
    features: ["Upholstered seat", "Wooden legs", "Ergonomic design", "Easy to clean"],
    inStock: true,
    colors: ["Beige", "Gray", "Navy", "Brown"],
  },
  // Office Products
  {
    id: "office-chair-001",
    name: "Executive Office Chair",
    price: 799.99,
    originalPrice: 999.99,
    image: "/placeholder.svg?height=300&width=300&text=Executive+Office+Chair",
    images: [
      "/placeholder.svg?height=400&width=400&text=Executive+Office+Chair+1",
      "/placeholder.svg?height=400&width=400&text=Executive+Office+Chair+2",
      "/placeholder.svg?height=400&width=400&text=Executive+Office+Chair+3",
      "/placeholder.svg?height=400&width=400&text=Executive+Office+Chair+4",
    ],
    category: "office",
    subcategory: "Office Chairs",
    rating: 4.9,
    reviews: 187,
    description: "Ergonomic executive chair with lumbar support and premium leather",
    features: ["Lumbar support", "Premium leather", "Adjustable height", "360° swivel"],
    inStock: true,
    colors: ["Black", "Brown", "White"],
  },
  {
    id: "desk-001",
    name: "Modern Office Desk",
    price: 699.99,
    image: "/placeholder.svg?height=300&width=300&text=Modern+Office+Desk",
    images: [
      "/placeholder.svg?height=400&width=400&text=Modern+Office+Desk+1",
      "/placeholder.svg?height=400&width=400&text=Modern+Office+Desk+2",
      "/placeholder.svg?height=400&width=400&text=Modern+Office+Desk+3",
      "/placeholder.svg?height=400&width=400&text=Modern+Office+Desk+4",
    ],
    category: "office",
    subcategory: "Desks",
    rating: 4.5,
    reviews: 76,
    description: "Spacious office desk with built-in storage and cable management",
    features: ["Built-in storage", "Cable management", "Spacious surface", "Modern design"],
    inStock: true,
    colors: ["White", "Black", "Walnut"],
  },
  // Add more products for each category to reach 20-25 per category...
]

// Generate additional products for each category
const generateMoreProducts = () => {
  const additionalProducts: Product[] = []

  categories.forEach((category) => {
    const existingCount = products.filter((p) => p.category === category.id).length
    const needed = Math.max(0, 20 - existingCount)

    for (let i = 0; i < needed; i++) {
      const productId = `${category.id}-${String(existingCount + i + 1).padStart(3, "0")}`
      additionalProducts.push({
        id: productId,
        name: `${category.name} Item ${existingCount + i + 1}`,
        price: Math.floor(Math.random() * 2000) + 100,
        image: `/placeholder.svg?height=300&width=300&text=${category.name}+Item+${existingCount + i + 1}`,
        images: Array.from(
          { length: 4 },
          (_, idx) =>
            `/placeholder.svg?height=400&width=400&text=${category.name}+Item+${existingCount + i + 1}+${idx + 1}`,
        ),
        category: category.id,
        subcategory: category.subcategories?.[i % (category.subcategories?.length || 1)],
        rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
        reviews: Math.floor(Math.random() * 200) + 10,
        description: `High-quality ${category.name.toLowerCase()} furniture piece with premium materials and craftsmanship`,
        features: ["Premium materials", "Expert craftsmanship", "Modern design", "Easy assembly"],
        inStock: Math.random() > 0.1,
        colors: ["Black", "White", "Brown", "Gray"].slice(0, Math.floor(Math.random() * 3) + 1),
      })
    }
  })

  return additionalProducts
}

export const allProducts = [...products, ...generateMoreProducts()]
