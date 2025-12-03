"use client"

import type { Product } from "@/lib/products"
import Image from "next/image"
import { X, Ruler } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SizeChartModal } from "@/components/size-chart-modal"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  onAddToCart: (product: Product, quantity: number, size: string) => void
  onBuyNow: (product: Product, quantity: number, size: string) => void
}

export function ProductModal({ product, isOpen, onClose, onAddToCart, onBuyNow }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("S")
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setSelectedSize("S")
      setQuantity(1)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize)
    onClose()
  }

  const handleBuyNow = () => {
    onBuyNow(product, quantity, selectedSize)
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

        <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[95vh] overflow-y-auto animate-slideInUp">
          <button
            onClick={onClose}
            className="sticky top-2 right-2 ml-auto mr-2 mt-2 p-2 hover:bg-gray-100 rounded-full z-10 transition-colors bg-white shadow-sm float-right"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6">
            <div className="w-full md:w-2/5 flex items-center justify-center bg-gray-50 rounded-lg flex-shrink-0 min-h-[200px] sm:min-h-[250px] md:min-h-0">
              <Image
                src={product.image || "/placeholder.svg?height=400&width=400&query=product"}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover rounded-lg w-full h-full max-h-[250px] sm:max-h-[300px] md:max-h-[400px]"
              />
            </div>

            <div className="w-full md:w-3/5 flex flex-col justify-between pb-2">
              <div>
                <div className="inline-block mb-2 md:mb-3">
                  <span className="text-xs font-bold uppercase bg-blue-600 text-white px-2 md:px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-end gap-2 mb-2 flex-wrap">
                  <span className="text-xl sm:text-2xl font-bold text-red-600">
                    PKR {product.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                  <span className="ml-auto bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">SALE</span>
                </div>

                <p className="text-xs text-red-600 font-semibold mb-3">
                  Save PKR {(product.originalPrice - product.discountedPrice).toLocaleString()}
                </p>

                <div className="mb-3 md:mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Size: <span className="font-bold">{selectedSize}</span>
                    </span>
                    <button
                      onClick={() => setIsSizeChartOpen(true)}
                      className="flex items-center gap-1 text-xs md:text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Ruler className="w-3 h-3 md:w-4 md:h-4" />
                      Size guide
                    </button>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 md:px-4 py-2 border rounded-lg font-medium transition-all text-sm md:text-base ${
                          selectedSize === size
                            ? "bg-black text-white border-black"
                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
                  <span className="text-xs text-gray-700 font-medium">Low stock</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 sm:px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors font-semibold text-sm"
                    >
                      −
                    </button>
                    <span className="px-3 sm:px-4 py-1.5 font-bold text-gray-900 text-sm md:text-base">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 sm:px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors font-semibold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 border-2 border-black text-black bg-white hover:bg-gray-50 font-semibold py-2.5 h-auto text-sm rounded-lg transition-colors"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold py-2.5 h-auto text-sm rounded-lg transition-all"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SizeChartModal isOpen={isSizeChartOpen} onClose={() => setIsSizeChartOpen(false)} category={product.category} />
    </>
  )
}
