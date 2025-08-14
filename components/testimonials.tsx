"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Almost We Furnish transformed my living space completely. The quality is exceptional and the customer service is outstanding. I've recommended them to all my clients!",
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "The furniture arrived exactly as described and the assembly service was professional. My home office has never looked better. Worth every penny!",
  },
  {
    name: "Emily Rodriguez",
    role: "Real Estate Agent",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "I've furnished multiple properties with Almost We Furnish. Their modern designs and competitive prices make them my go-to choice for staging homes.",
  },
  {
    name: "David Park",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Furnished our entire office space with their help. The team was professional, delivery was on time, and the furniture quality exceeded our expectations.",
  },
  {
    name: "Lisa Thompson",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "The attention to detail and craftsmanship is remarkable. I regularly specify their pieces for my residential projects. Clients are always thrilled with the results.",
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "They helped create the perfect ambiance for our restaurant. The commercial-grade furniture is both stylish and durable. Highly recommend for any business!",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Auto change every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h3>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full hover:border-yellow-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-yellow-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-yellow-400 mr-3" />
                    <div className="flex">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonials[current].review}"
                  </p>

                  <div className="flex items-center">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonials[current].name}</h4>
                      <p className="text-yellow-400 text-sm">{testimonials[current].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
