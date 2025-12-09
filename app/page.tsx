"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, RefreshCw } from "lucide-react"


export default function Home() {
  const router = useRouter()
  const { addItem, itemCount } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const handleAddToCart = (product: any, quantity = 1, size: string) => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      image: product.image,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      size: size,
    }
    addItem(cartItem)
  }

  const handleBuyNow = (product: any, quantity = 1, size: string) => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      image: product.image,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      size: size,
    }
    addItem(cartItem)
    router.push("/checkout")
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedCategory("all")
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Navbar cartCount={itemCount} onSearch={handleSearch} />
      {/* Mobile: Only FREE Delivery scrolls */}
      <div className="md:hidden bg-green-600 text-white py-2.5 px-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-sm">
          <div className="flex items-center gap-2 inline-flex">
            <Truck className="w-4 h-4" />
            <span className="font-semibold">FREE Delivery in Rawalpindi & Islamabad</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <Truck className="w-4 h-4" />
            <span className="font-semibold">FREE Delivery in Rawalpindi & Islamabad</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <Truck className="w-4 h-4" />
            <span className="font-semibold">FREE Delivery in Rawalpindi & Islamabad</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <Truck className="w-4 h-4" />
            <span className="font-semibold">FREE Delivery in Rawalpindi & Islamabad</span>
          </div>
        </div>
      </div>

      {/* Desktop: All three items scroll */}
      <div className="hidden md:block bg-green-600 text-white py-2.5 px-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-base">
          <div className="flex items-center gap-2 inline-flex">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">FREE Delivery in Rawalpindi & Islamabad</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <Shield className="w-5 h-5" />
            <span>100% Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <RefreshCw className="w-5 h-5" />
            <span>Easy Returns</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-2 inline-flex">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">FREE Delivery in Rawalpindi & Islamabad</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <Shield className="w-5 h-5" />
            <span>100% Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 inline-flex">
            <RefreshCw className="w-5 h-5" />
            <span>Easy Returns</span>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50">
        <section className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-white overflow-hidden">
          <Image src="/images/hero-hoodies.png" alt="Shop Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                Premium Collection
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 drop-shadow-md">
                Discover Unique Designs for Every Style
              </p>
              <Link
                href="#products"
                className="inline-block bg-white text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm md:text-base"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {searchQuery && (
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm md:text-base text-gray-700">
                Showing results for: <span className="font-semibold">{searchQuery}</span>
                {filteredProducts.length > 0 && (
                  <span className="block mt-2 text-gray-600">
                    Found: {filteredProducts.map((p) => p.name).join(", ")}
                  </span>
                )}
                <button onClick={() => setSearchQuery("")} className="ml-4 text-blue-600 hover:text-blue-800 underline">
                  Clear search
                </button>
              </p>
            </div>
          )}

          <div className="mb-6 md:mb-8">
            <div className="flex gap-4 md:gap-6 border-b border-gray-200 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`pb-3 md:pb-4 px-2 font-medium transition-all duration-200 whitespace-nowrap text-sm md:text-base ${
                  selectedCategory === "all"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setSelectedCategory("shirt")}
                className={`pb-3 md:pb-4 px-2 font-medium transition-all duration-200 whitespace-nowrap text-sm md:text-base ${
                  selectedCategory === "shirt"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Shirts
              </button>
              <button
                onClick={() => setSelectedCategory("hoodie")}
                className={`pb-3 md:pb-4 px-2 font-medium transition-all duration-200 whitespace-nowrap text-sm md:text-base ${
                  selectedCategory === "hoodie"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Hoodies
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No products found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
