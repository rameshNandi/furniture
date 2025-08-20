import { HeroSection } from "@/components/hero-section"
import { RoomCategories } from "@/components/room-categories"
import { ProductRecommendations } from "@/components/product-recommendations"
import { CategoryBrands } from "@/components/category-brands"
import { Testimonials } from "@/components/testimonials"
import Navbar from "@/components/navbar"
import FAQPage from "@/components/FAQPage"
import Footer from "@/components/Footer"

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
      <Footer />
    </div>
  )
}
