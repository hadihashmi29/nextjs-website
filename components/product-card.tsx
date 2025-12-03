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

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden" onClick={() => setIsModalOpen(true)}>
          <Image
            src={product.image || "/placeholder.svg?height=300&width=300&query=product"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-gray-900">PKR {product.discountedPrice.toFixed(2)}</p>
            <p className="text-sm text-gray-500 line-through">PKR {product.originalPrice.toFixed(2)}</p>
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

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
      />
    </>
  )
}
