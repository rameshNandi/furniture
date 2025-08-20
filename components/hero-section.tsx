"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatedBackground } from "@/components/animated-background"

// Stats
const stats = [
  { value: 128000, label: "Happy Customers", suffix: "k+" },
  { value: 20000, label: "Products Sold", suffix: "k+" },
  { value: 456, label: "5-Star Reviews", suffix: "+" },
]

// Slider images with their own overlay text
const sliderItems = [
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: ["Feel the Comfort of", "Resting Comfortably", "using Almost We Furnish"],
    description: "Transform your bedroom with our luxurious furniture collection.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: ["Experience Elegance", "in Every Corner", "with Our Furniture"],
    description: "Make your living room a masterpiece. Explore our modern, stylish.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: ["Design Your Space", "with Style & Comfort", "Almost We Furnish"],
    description: "Premium furniture for your office or lounge. Bring sophistication and comfort together.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: ["Luxury Living", "Redefined for You", "by Almost We Furnish"],
    description: "Our collection blends comfort and elegance. Upgrade your interiors effortlessly.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: ["Make Every Moment", "Beautiful & Comfortable", "with Our Furniture"],
    description: "Stylish furniture for your home. Experience the perfect combination of luxury and comfort.",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [counters, setCounters] = useState(stats.map(() => 0))

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Counter animation
  useEffect(() => {
    const increments = stats.map((stat) => Math.ceil(stat.value / 100))
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, i) => {
          if (count < stats[i].value) {
            const next = count + increments[i]
            return next > stats[i].value ? stats[i].value : next
          }
          return count
        }),
      )
    }, 20)
    return () => clearInterval(interval)
  }, [])

  const currentSlide = sliderItems[currentIndex]

  return (
    <section className="relative overflow-hidden bg-black pt-24 lg:pt-32">
      <AnimatedBackground />
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-6 py-10 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[450px] sm:h-[500px] lg:h-[500px]">
              <Image
                src={currentSlide.image || "/placeholder.svg"}
                alt="Luxury Bedroom"
                fill
                className="object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Overlay text only on mobile/tablet */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:hidden">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-[#d4af37]">
                  {currentSlide.title[0]} {currentSlide.title[1]} {currentSlide.title[2]}
                </h1>
                <p className="text-gray-200 mt-4 text-base sm:text-lg">{currentSlide.description}</p>
                <div className="flex gap-3 mt-6">
                  <Link href="/products">
                    <Button className="bg-[#d4af37] hover:bg-yellow-600 text-black font-semibold px-6 py-2 text-base">
                      Shop Now
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-2 text-base bg-transparent"
                    >
                      View Collection
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-6 mt-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-[#d4af37]">
                        {Math.floor(counters[i] / (stat.suffix.includes("k") ? 1000 : 1))}
                        {stat.suffix}
                      </div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 hidden lg:block"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#d4af37]">
                {currentSlide.title[0]} {currentSlide.title[1]} {currentSlide.title[2]}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">{currentSlide.description}</p>
            </div>
            <div className="flex gap-4">
              <Link href="/products">
                <Button className="bg-[#d4af37] hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="border-yellow-500 text-white hover:bg-yellow-500 hover:text-black px-8 py-3 text-lg bg-transparent"
                >
                  View Collection
                </Button>
              </Link>
            </div>
            <div className="flex gap-8 pt-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">
                    {Math.floor(counters[i] / (stat.suffix.includes("k") ? 1000 : 1))}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
