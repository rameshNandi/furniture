"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, ShoppingCart, Filter, Grid, List, Heart, Plus, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { categories, allProducts, type Product } from "@/lib/products"
import { Search } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Navbar from "@/components/navbar"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (selectedSubcategory) {
      filtered = filtered.filter((product) => product.subcategory === selectedSubcategory)
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange, sortBy])

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
    setAddedItems((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-yellow-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">Products</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                <div
                  className={`cursor-pointer p-2 rounded transition-colors ${
                    !selectedCategory ? "bg-yellow-500 text-black" : "hover:bg-gray-800"
                  }`}
                  onClick={() => {
                    setSelectedCategory("")
                    setSelectedSubcategory("")
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>All Categories</span>
                    <span className="text-sm">({allProducts.length})</span>
                  </div>
                </div>
                {categories.map((category) => (
                  <div key={category.id}>
                    <div
                      className={`cursor-pointer p-2 rounded transition-colors ${
                        selectedCategory === category.id ? "bg-yellow-500 text-black" : "hover:bg-gray-800"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setSelectedSubcategory("")
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </div>
                    </div>
                    {selectedCategory === category.id && category.subcategories && (
                      <div className="ml-4 mt-2 space-y-1">
                        {category.subcategories.map((sub) => (
                          <div
                            key={sub}
                            className={`cursor-pointer p-2 rounded text-sm transition-colors ${
                              selectedSubcategory === sub ? "bg-yellow-500 text-black" : "hover:bg-gray-800"
                            }`}
                            onClick={() => setSelectedSubcategory(sub)}
                          >
                            {sub}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={3000}
                  min={0}
                  step={50}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {selectedCategory ? selectedCategoryData?.name : "All Products"}
                </h1>
                <p className="text-gray-400">{filteredProducts.length} products found</p>
              </div>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-white hover:text-yellow-400"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>

                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-yellow-500 text-black" : "text-white hover:text-yellow-400"}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-yellow-500 text-black" : "text-white hover:text-yellow-400"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  onAddToCart={handleAddToCart}
                  isAdded={addedItems.has(product.id)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("")
                    setSelectedSubcategory("")
                    setPriceRange([0, 3000])
                  }}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({
  product,
  viewMode,
  onAddToCart,
  isAdded,
}: {
  product: Product
  viewMode: "grid" | "list"
  onAddToCart: (product: Product) => void
  isAdded: boolean
}) {
  if (viewMode === "list") {
    return (
      <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300">
        <CardContent className="p-0">
          <div className="flex">
            <Link href={`/products/${product.id}`} className="w-48 h-48 relative overflow-hidden rounded-l-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-xl font-semibold text-white hover:text-yellow-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-red-400">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-gray-400 mb-3">{product.description}</p>
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-yellow-400">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <Button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className={`${
                    isAdded ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"
                  } text-black transition-all duration-300`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group">
      <CardContent className="p-0">
        <Link href={`/products/${product.id}`}>
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.originalPrice && <Badge className="absolute top-4 left-4 bg-red-500 text-white">Sale</Badge>}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
            )}
          </div>
        </Link>
        <div className="absolute top-4 right-4 space-y-2">
          <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-yellow-500 hover:text-black">
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(product)
            }}
            disabled={!product.inStock}
            className={`${
              isAdded ? "bg-green-500 text-white" : "bg-black/50 hover:bg-yellow-500 hover:text-black"
            } transition-all duration-300`}
          >
            {isAdded ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </Button>
        </div>
        <div className="p-4 space-y-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-white line-clamp-2 hover:text-yellow-400 transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-yellow-400">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
