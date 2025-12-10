"use client"

import { Navbar } from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { products } from "@/lib/products"

export default function CartPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, total, clearCart, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <>
        <Navbar cartCount={itemCount} />
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div className="max-w-md mx-auto text-center">
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Your Cart is Empty</h1>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Looks like you haven't added anything to your cart yet. Browse our collection and find something you
                love!
              </p>
              <Link href="/">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar cartCount={itemCount} />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                {items.map((item) => {
                  const product = products.find((p) => p.id === item.productId)

                  return (
                    <div key={`${item.productId}-${item.size}`} className="p-4 md:p-6 border-b last:border-b-0">
                      <div className="flex gap-3 md:gap-4">
                        {product && (
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={item.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2 truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 mb-1">Size: {item.size}</p>
                          <p className="text-base md:text-lg text-gray-900 font-bold">
                            PKR {item.discountedPrice.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 gap-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 border rounded">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1, item.size)}
                            className="p-1.5 md:p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                          <span className="px-2 md:px-4 py-1 md:py-2 min-w-8 md:min-w-12 text-center font-medium text-sm md:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1, item.size)}
                            className="p-1.5 md:p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        </div>

                        {/* Subtotal & Remove */}
                        <div className="text-right">
                          <p className="text-sm md:text-base text-gray-900 font-semibold mb-1 md:mb-2">
                            PKR {(item.discountedPrice * item.quantity).toLocaleString()}
                          </p>
                          <button
                            onClick={() => removeItem(item.productId, item.size)}
                            className="text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors text-xs md:text-sm"
                          >
                            <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Cart Summary */}
            <div>
              <div className="bg-white rounded-lg shadow p-4 md:p-6 lg:sticky lg:top-24">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Order Summary</h2>

                <div className="space-y-2 md:space-y-3 border-b pb-3 md:pb-4 mb-3 md:mb-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-gray-900">PKR {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium text-gray-900">Calculated at checkout</span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-xs md:text-sm text-green-700 font-semibold mb-1">
                    FREE Delivery in Rawalpindi & Islamabad
                  </p>
                  <p className="text-xs text-green-600">PKR 250 delivery charge for other cities</p>
                </div>

                <div className="flex justify-between items-center mb-4 md:mb-6 text-base md:text-lg">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="font-bold text-gray-900 text-lg md:text-xl">PKR {total.toLocaleString()}</span>
                </div>

                <Button
                  onClick={() => router.push("/checkout")}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 md:py-3 mb-2 md:mb-3 transition-colors text-sm md:text-base"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 transition-colors text-sm md:text-base"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
