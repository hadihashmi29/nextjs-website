"use client"

import type { Product } from "@/lib/products"
import Image from "next/image"
import { useState } from "react"
import { ProductModal } from "@/components/product-modal"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product, quantity: number, size: string) => void
  onBuyNow: (product: Product, quantity: number, size: string) => void
}

export function ProductCard({ product, onAddToCart, onBuyNow }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    if (!product.soldOut) {
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group ${
          product.soldOut ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <div
          className="relative w-full aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden"
          onClick={handleClick}
        >
          <Image
            src={product.image || "/placeholder.svg?height=300&width=300&query=product"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-300 ${
              product.soldOut ? "opacity-60" : "group-hover:scale-105"
            }`}
          />
          {product.soldOut && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm text-center leading-tight">
                  SOLD
                  <br />
                  OUT
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
              PKR {product.discountedPrice.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
              PKR {product.originalPrice.toFixed(2)}
            </p>
          </div>

          {/* Color Dots */}
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{
                  backgroundColor: color,
                  border: color === "#FFFFFF" ? "1px solid #d1d5db" : "1px solid #9ca3af",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {!product.soldOut && (
        <ProductModal
          product={product}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
        />
      )}
    </>
  )
}
