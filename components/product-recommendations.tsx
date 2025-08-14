"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Modern Velvet Armchair",
    price: "$299.99",
    originalPrice: "$399.99",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 124,
    discount: "25% OFF",
  },
  {
    id: 2,
    name: "Elegant Dining Table Set",
    price: "$899.99",
    originalPrice: "$1199.99",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 89,
    discount: "25% OFF",
  },
  {
    id: 3,
    name: "Executive Office Chair",
    price: "$199.99",
    originalPrice: "$299.99",
    image:
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 156,
    discount: "33% OFF",
  },
  {
    id: 4,
    name: "Luxury Sectional Sofa",
    price: "$1299.99",
    originalPrice: "$1699.99",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 203,
    discount: "23% OFF",
  },
  {
    id: 5,
    name: "Scandinavian Coffee Table",
    price: "$149.99",
    originalPrice: "$199.99",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 78,
    discount: "25% OFF",
  },
  {
    id: 6,
    name: "Modern Bookshelf Unit",
    price: "$399.99",
    originalPrice: "$549.99",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 92,
    discount: "27% OFF",
  },
]

export function ProductRecommendations() {
  return (
    <section className="bg-gray-900">
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-6 py-20">
        {/* Centered Heading + Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12 space-y-4"
        >
          <h3 className="text-4xl font-bold text-yellow-400">
  Recommendation For You
</h3>
<p className="text-gray-300 max-w-2xl text-center">
  Discover our handpicked collection of stylish, high-quality furniture and décor pieces — 
  perfect for upgrading your living space with comfort, elegance, and timeless design.
</p>


          <Link href="/products">
            <Button
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 rounded-full px-6 py-2"
            >
              See All Products →
            </Button>
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-yellow-500/20">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {/* Responsive image height: smaller on phones so content below can show */}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={800}
                      height={600}
                      className="w-full h-56 sm:h-72 md:h-[320px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.discount}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/50 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                        aria-label="Add to wishlist"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/50 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                        aria-label="Add to cart"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Card body: allow wrapping and avoid fixed heights */}
                  <div className="p-6 space-y-3">
                    <h4 className="font-bold text-white text-lg group-hover:text-yellow-400 transition-colors duration-300 whitespace-normal break-words leading-snug">
                      {product.name}
                    </h4>

                    <div className="flex items-center space-x-2 flex-wrap">
                      <div className="flex items-center -ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 min-w-0">({product.reviews} reviews)</span>
                    </div>

                    {/* Price + button: stack on small screens so nothing gets cut */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="flex items-baseline space-x-3">
                        <div className="text-2xl font-bold text-yellow-400">{product.price}</div>
                        {product.originalPrice && (
                          <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 sm:gap-0 sm:justify-end">
                        <Link href={`/products/${product.id}`}>
                          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
