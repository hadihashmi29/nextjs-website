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

export default function Home() {
  const router = useRouter()
  const { addItem, itemCount } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleAddToCart = (product: any, quantity = 1, size: string) => {
    console.log("[v0] Home Page - handleAddToCart called")
    console.log("[v0] Home Page - Product:", product.name)
    console.log("[v0] Home Page - Quantity:", quantity)
    console.log("[v0] Home Page - Size:", size, "Type:", typeof size, "Length:", size?.length)

    const cartItem = {
      productId: product.id,
      name: product.name,
      image: product.image,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      size: size,
    }

    console.log("[v0] Home Page - Cart item created:", JSON.stringify(cartItem, null, 2))
    addItem(cartItem)
  }

  const handleBuyNow = (product: any, quantity = 1, size: string) => {
    console.log("[v0] Home Page - handleBuyNow called")
    console.log("[v0] Home Page - Product:", product.name)
    console.log("[v0] Home Page - Quantity:", quantity)
    console.log("[v0] Home Page - Size:", size, "Type:", typeof size, "Length:", size?.length)

    const cartItem = {
      productId: product.id,
      name: product.name,
      image: product.image,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      size: size,
    }

    console.log("[v0] Home Page - Cart item created:", JSON.stringify(cartItem, null, 2))
    addItem(cartItem)
    router.push("/checkout")
  }

  const filteredProducts = products.filter((product) => {
    return selectedCategory === "all" || product.category === selectedCategory
  })

  return (
    <>
      <Navbar cartCount={itemCount} />
      <main className="min-h-screen bg-gray-50">
        <section className="relative w-full h-[300px] md:h-[400px] bg-white overflow-hidden">
          <Image src="/images/hero-hoodies.png" alt="Shop Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Premium Collection</h1>
              <p className="text-lg md:text-xl mb-6 drop-shadow-md">Discover Unique Designs for Every Style</p>
              <Link
                href="#products"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex gap-6 border-b border-gray-200">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`pb-4 px-2 font-medium transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setSelectedCategory("shirt")}
                className={`pb-4 px-2 font-medium transition-all duration-200 ${
                  selectedCategory === "shirt"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Shirts
              </button>
              <button
                onClick={() => setSelectedCategory("hoodie")}
                className={`pb-4 px-2 font-medium transition-all duration-200 ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
