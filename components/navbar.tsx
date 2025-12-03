"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Search } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface NavbarProps {
  cartCount: number
}

export function Navbar({ cartCount }: NavbarProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => {
    return pathname === path ? "font-semibold" : ""
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/ga-logo.png"
              alt="GenAlpha"
              width={80}
              height={32}
              className="object-contain w-16 md:w-20"
            />
          </Link>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center text-sm">
            <Link href="/" className={`hover:text-gray-600 transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-gray-600 transition-colors ${isActive("/about")}`}>
              About
            </Link>
            <Link href="/contact" className={`hover:text-gray-600 transition-colors ${isActive("/contact")}`}>
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-gray-700 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/"
                className={`hover:text-gray-600 transition-colors ${isActive("/")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-gray-600 transition-colors ${isActive("/about")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`hover:text-gray-600 transition-colors ${isActive("/contact")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
