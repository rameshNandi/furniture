"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Home, Info, Briefcase, FolderOpen, Sofa, Mail, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollDirection } from "@/hooks/useScrollDirection"
import { useCart } from "@/contexts/cart-context"

const navItems = [
  { name: "Home", href: "/", icon: Home, ariaLabel: "Navigate to Home" },
  { name: "Products", href: "/products", icon: FolderOpen, ariaLabel: "View our Products" },
  { name: "About Us", href: "/about", icon: Info, ariaLabel: "Learn more About Us" },
  { name: "Services", href: "/services", icon: Briefcase, ariaLabel: "Explore our Services" },
  // { name: "Contact", href: "/contact", icon: Mail, ariaLabel: "Contact Us" },
]

const mobileNavItems = [
  { name: "Projects", href: "/projects", icon: FolderOpen, ariaLabel: "Go to Projects" },
  { name: "Services", href: "/services", icon: Briefcase, ariaLabel: "View Services" },
  { name: "Home", href: "/", icon: Home, ariaLabel: "Go to Home" },
  // { name: "Blog", href: "/blog", icon: BookOpen, ariaLabel: "Read the Blog" },
  {
    name: "Solusi Decor",
    href: "https://decor.solusidesigns.com/",
    icon: Sofa,
    ariaLabel: "View Home Interior designs",
  },
  { name: "Contact", href: "/contact", icon: Mail, ariaLabel: "Contact Us" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeIcon, setActiveIcon] = useState<string>("Home")
  const pathname = usePathname()
  const scrollDirection = useScrollDirection()
  const { itemCount } = useCart()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.position = ""
    }
  }, [isOpen])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleIconClick = (name: string) => {
    setActiveIcon(name)
  }

  const renderMobileIcon = (item: (typeof mobileNavItems)[0]) => (
    <motion.div
      key={item.name}
      className="flex flex-col items-center relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={item.href} onClick={() => handleIconClick(item.name)} className="flex flex-col items-center">
        {activeIcon === item.name && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute -top-9 text-xs font-semibold px-2 py-1 rounded bg-[#d4af37] text-black shadow-md whitespace-nowrap"
          >
            {item.name}
          </motion.div>
        )}
        <motion.div
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-full transition-all",
            activeIcon === item.name || (item.name === "Home" && pathname === "/")
              ? "bg-gradient-to-br from-[#d4af37] to-[#c39f2b] shadow-[0_0_20px_rgba(212,175,55,0.6)]"
              : "bg-white/20 hover:bg-[#d4af37]",
          )}
        >
          <item.icon
            className={cn(
              "w-6 h-6",
              activeIcon === item.name || (item.name === "Home" && pathname === "/") ? "text-black" : "text-[#d4af37]",
              "hover:text-black transition-colors",
            )}
          />
        </motion.div>
      </Link>
    </motion.div>
  )

  return (
    <>
      <header
        className={cn(
          "fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl ",
          "transition-all duration-300 py-3 rounded-full",
          scrolled
            ? "bg-gradient-to-br from-black/90 to-gray-800/50 backdrop-blur-lg shadow-2xl"
            : "bg-gradient-to-br from-black/80 to-gray-700/50 backdrop-blur-md shadow-lg",
        )}
      >
        <div className="w-full px-4 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="top-4 left-4 w-[90px] sm:w-[100px] md:w-[130px] pointer-events-auto"
            >
              <Image
                src="/solusi.webp"
                alt="Solusi Furniture"
                width={140}
                height={70}
                priority
                className="object-contain w-full h-auto drop-shadow-[0_0_12px_rgba(234,179,8,0.5)]"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 200px"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center px-4 py-2 text-sm font-medium",
                    pathname === item.href ? "text-[#d4af37]" : "text-gray-300 hover:text-[#d4af37]",
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4 text-[#d4af37]/80" />
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="ml-4"
            >
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-[#d4af37] relative hover:scale-110 transition-all duration-300"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-[#d4af37] text-black text-xs flex items-center justify-center animate-pulse">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <Link href="/contact">
  <Button
    variant="golden"
    size="sm"
    className="ml-2 rounded-full group relative overflow-hidden transition-all bg-[#d4af37] text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
  >
    <span className="relative z-10 font-medium">Get in Touch</span>
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 2.5, opacity: 0.3 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 rounded-full z-0 origin-center bg-[#d4af37]"
    />
  </Button>
</Link>

            </motion.div>
          </nav>
        </div>
      </header>

      {/* Bottom Mobile Nav */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: scrollDirection === "down" ? 100 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, bounce: 0.25 }}
        className="fixed z-[999] bottom-4 inset-x-4 sm:inset-x-6 max-w-md mx-auto
                   bg-white/10 backdrop-blur-md border border-white/20
                   rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                   grid grid-cols-5 items-center justify-items-center py-3 px-2 lg:hidden"
      >
        {mobileNavItems.map((item) => renderMobileIcon(item))}
      </motion.nav>
    </>
  )
}
