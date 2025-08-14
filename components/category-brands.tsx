"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const brands = [
  {
    name: "IKEA",
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Swedish furniture giant",
    products: "2,500+ Products",
  },
  {
    name: "West Elm",
    logo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Modern furniture & decor",
    products: "1,800+ Products",
  },
  {
    name: "CB2",
    logo: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Contemporary design",
    products: "1,200+ Products",
  },
  {
    name: "Article",
    logo: "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Mid-century modern",
    products: "900+ Products",
  },
  {
    name: "Pottery Barn",
    logo: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Classic American style",
    products: "2,100+ Products",
  },
  {
    name: "Wayfair",
    logo: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Everything home",
    products: "3,000+ Products",
  },
]

export function CategoryBrands() {
  return (
    <section className=" bg-gray-900 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-white mb-4">Featured Brands</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover premium furniture from the world's most trusted brands, carefully curated for quality and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-yellow-500/20">
                <CardContent className="p-8 text-center">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="text-3xl font-bold text-white">{brand.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{brand.description}</p>
                  <p className="text-yellow-400 font-semibold">{brand.products}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
