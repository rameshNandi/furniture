"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

export function Navbar() {
  const { cart } = useCart()

  return (
    <nav className="border-b border-yellow-600/20 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Solusi Ferniture
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium hover:scale-105 duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium hover:scale-105 duration-300"
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium hover:scale-105 duration-300"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium hover:scale-105 duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium hover:scale-105 duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            >
              <User className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 relative hover:scale-110 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 text-black text-xs flex items-center justify-center animate-pulse">
                    {cart.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
