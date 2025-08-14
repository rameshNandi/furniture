import { HeroSection } from "@/components/hero-section"
import { RoomCategories } from "@/components/room-categories"
import { ProductRecommendations } from "@/components/product-recommendations"
import { CategoryBrands } from "@/components/category-brands"
import { Testimonials } from "@/components/testimonials"
import { Navbar } from "@/components/navbar"
import FAQPage from "@/components/FAQPage"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <RoomCategories />
      <ProductRecommendations />
      <CategoryBrands />
      <Testimonials />
      <FAQPage />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Almost We Furnish
              </h4>
              <p className="text-gray-400">
                Transform your space with premium furniture that combines comfort, style, and quality.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Quick Links</h5>
              <div className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-yellow-400">Home</a>
                <a href="/about" className="block text-gray-400 hover:text-yellow-400">About</a>
                <a href="/products" className="block text-gray-400 hover:text-yellow-400">Products</a>
                <a href="/contact" className="block text-gray-400 hover:text-yellow-400">Contact</a>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Categories</h5>
              <div className="space-y-2">
                <a href="/products" className="block text-gray-400 hover:text-yellow-400">Bedroom</a>
                <a href="/products" className="block text-gray-400 hover:text-yellow-400">Living Room</a>
                <a href="/products" className="block text-gray-400 hover:text-yellow-400">Dining Room</a>
                <a href="/products" className="block text-gray-400 hover:text-yellow-400">Office</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p>123 Furniture Street</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@almostwe.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Almost We Furnish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
