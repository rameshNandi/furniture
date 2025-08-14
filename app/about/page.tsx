"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Customers", value: "50,000+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Clock, label: "Projects Completed", value: "25,000+" },
  { icon: Heart, label: "Customer Satisfaction", value: "99%" },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "With over 20 years in furniture design, Sarah leads our vision of creating beautiful, functional spaces.",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    description: "Michael brings innovative design concepts that blend modern aesthetics with timeless functionality.",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Experience Director",
    image: "/placeholder.svg?height=300&width=300",
    description: "Emily ensures every customer receives exceptional service and finds their perfect furniture match.",
  },
]

export default function AboutPage() {
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
            About <span className="text-yellow-400">Almost We Furnish</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            For over 15 years, we've been transforming houses into homes with our carefully curated collection of
            premium furniture. Our passion for design and commitment to quality has made us a trusted name in home
            furnishing.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2009, Almost We Furnish began as a small family business with a simple mission: to make
                beautiful, quality furniture accessible to everyone. What started in a modest showroom has grown into a
                leading furniture destination.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We believe that furniture is more than just functional pieces – it's about creating spaces where
                memories are made, where families gather, and where life unfolds. Every piece in our collection is
                carefully selected for its quality, design, and ability to enhance your living experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we continue to uphold our founding values of quality, affordability, and exceptional customer
                service, helping thousands of customers create their dream homes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img src="/placeholder.svg?height=500&width=600" alt="Our showroom" className="rounded-lg shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our passionate team of designers, craftspeople, and customer service experts work together to bring you
              the best furniture experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black rounded-lg p-6 text-center group hover:bg-gray-800 transition-colors duration-300"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "We never compromise on quality. Every piece is carefully inspected and meets our high standards.",
                icon: "🏆",
              },
              {
                title: "Customer Focused",
                description:
                  "Your satisfaction is our priority. We go above and beyond to ensure you love your furniture.",
                icon: "❤️",
              },
              {
                title: "Sustainable Practices",
                description:
                  "We are committed to environmentally responsible sourcing and sustainable business practices.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
