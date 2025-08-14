"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Wrench, Headphones, Home, CreditCard } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on orders over $500. Fast and reliable shipping to your doorstep.",
    features: ["Same-day delivery available", "Professional handling", "Real-time tracking", "Contactless delivery"],
  },
  {
    icon: Wrench,
    title: "Assembly Service",
    description: "Professional assembly service by our trained technicians for all furniture pieces.",
    features: ["Expert assembly", "Tool-free for you", "Quality guarantee", "Clean-up included"],
  },
  {
    icon: Home,
    title: "Interior Design Consultation",
    description: "Get personalized design advice from our interior design experts.",
    features: ["Free consultation", "Custom design plans", "3D visualization", "Style recommendations"],
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Comprehensive warranty coverage for peace of mind with your furniture investment.",
    features: ["Up to 5 years coverage", "Repair or replacement", "No hidden costs", "24/7 support"],
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "Easy payment options including EMI and buy-now-pay-later schemes.",
    features: ["0% interest options", "Flexible terms", "Quick approval", "No hidden fees"],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock customer support for all your queries and concerns.",
    features: ["Live chat support", "Phone assistance", "Email support", "Quick resolution"],
  },
]

const process = [
  {
    step: "01",
    title: "Browse & Select",
    description: "Explore our extensive collection and choose your perfect furniture pieces.",
  },
  {
    step: "02",
    title: "Customize & Order",
    description: "Customize colors, sizes, and materials. Place your order with secure payment.",
  },
  {
    step: "03",
    title: "Delivery & Setup",
    description: "We deliver and professionally assemble your furniture at your convenience.",
  },
  {
    step: "04",
    title: "Enjoy & Support",
    description: "Enjoy your new furniture with ongoing support and warranty coverage.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our <span className="text-yellow-400">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We provide comprehensive furniture solutions from selection to setup, ensuring your complete satisfaction
            every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-lg group hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-yellow-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience from browsing to enjoying your new furniture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-12 rounded-lg"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Space?</h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
              Let our experts help you create the perfect living space with our premium furniture and exceptional
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Browse Furniture
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
