"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dining Room",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Guest Room",
    image: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bathroom",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
]

export function RoomCategories() {
  return (
    <section className="bg-gray-900">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center text-center mb-8">
  <h3 className="text-4xl font-bold text-white mb-4">
    Room Categories
  </h3>
  <p className="text-gray-300 max-w-2xl">
    Explore our diverse range of room categories, each thoughtfully designed to suit your style, 
    comfort, and budget — from cozy retreats to luxurious suites.
  </p>
</div>

          {/* <Link href="/products">
            <Button
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 rounded-full px-6 py-2"
            >
              See All →
            </Button>
          </Link> */}
        </motion.div>

        {/* Layout: Left 3 - Big Center - Right 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            {categories.slice(0, 3).map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg h-[180px]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-xl font-bold text-white">{category.name}</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Center Big Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-lg h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Promo Room"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Discover Your Perfect Space
              </h3>
              <p className="text-white mb-6 max-w-md">
                Explore our curated collection of stunning interiors and find
                the inspiration you need.
              </p>
              <Link href="/products">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                Start Exploring
              </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {categories.slice(3, 6).map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg h-[180px]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-xl font-bold text-white">{category.name}</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
