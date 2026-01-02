"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Search, X, Moon, Sun, User } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface NavbarProps {
  cartCount: number
  onSearch?: (query: string) => void
}

export function Navbar({ cartCount, onSearch }: NavbarProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim())
      setSearchOpen(false)
    }
  }

  const isActive = (path: string) => {
    return pathname === path ? "font-semibold" : ""
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/ga-logo.png"
              alt="GenAlpha"
              width={112}
              height={45}
              className="object-contain w-20 md:w-28"
            />
          </Link>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center text-sm">
            <Link
              href="/"
              className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/")}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/about")}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/contact")}`}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/admin/login"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              title="Admin Login"
            >
              <User className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
            </Link>

           
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="py-4 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top duration-200">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 text-sm md:text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 md:px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm md:text-base font-medium"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false)
                  setSearchQuery("")
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </form>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/"
                className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/about")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/contact")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/admin/login"
                className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-gray-100 ${isActive("/admin/login")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
