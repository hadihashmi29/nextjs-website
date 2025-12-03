"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart, itemCount } = useCart()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "nayapay",
  })

  const WHATSAPP_NUMBER = "923010100979"

  if (items.length === 0) {
    return (
      <>
        <Navbar cartCount={itemCount} />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Checkout Error</h1>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Your cart is empty. Please add items before checking out.
            </p>
            <Button onClick={() => router.push("/")} className="bg-amber-600 hover:bg-amber-700 text-sm md:text-base">
              Back to Shopping
            </Button>
          </div>
        </div>
      </>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const orderItems = items
      .map(
        (item) =>
          `${item.name} (Size: ${item.size}) x ${item.quantity} = PKR ${(item.discountedPrice * item.quantity).toLocaleString()}`,
      )
      .join("%0A")

    const whatsappMessage = `*New Order Received*%0A%0A*Customer Details:*%0AName: ${formData.fullName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0ACity: ${formData.city}%0A%0A*Order Items:*%0A${orderItems}%0A%0A*Total Amount: PKR ${total.toLocaleString()}*%0A%0APayment Method: NayaPay (03010100979)`

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank")

    clearCart()
    router.push(`/order-confirmation?email=${encodeURIComponent(formData.email)}&total=${total}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Navbar cartCount={itemCount} />
      <main className="min-h-screen bg-gray-50 py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 md:mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">Delivery Information</h2>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-black mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-black mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-sm md:text-base"
                      placeholder="youremail@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-black mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-sm md:text-base"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-black mb-1">Shipping Address *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-sm md:text-base"
                      placeholder="Address"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-black mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-sm md:text-base"
                      placeholder="City"
                    />
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold text-black mb-3">Payment Method</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">
                        N
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm md:text-base">NayaPay</p>
                        <p className="text-xs md:text-sm text-gray-600">Mobile Payment</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                      <p className="text-xs md:text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Account Number:</span> 03010100979
                      </p>
                      <p className="text-xs md:text-sm text-gray-700">
                        <span className="font-semibold">Account Name:</span> Hadi Mustafa Hashmi
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 md:p-4">
                      <div className="flex items-start gap-2">
                        <span className="text-xl md:text-2xl">💳</span>
                        <div>
                          <p className="text-xs md:text-sm font-semibold text-black mb-1">Payment Instructions:</p>
                          <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                            <li>Transfer PKR {total.toLocaleString()} to NayaPay account above</li>
                            <li>Click "Place Order" to send your order details via WhatsApp</li>
                            <li>Send payment screenshot on WhatsApp to confirm order</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 md:mt-8 bg-black hover:bg-gray-800 text-white py-2.5 md:py-3 font-semibold text-sm md:text-base"
                >
                  Place Order via WhatsApp
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow p-4 md:p-6 lg:sticky lg:top-24">
                <h2 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">Order Summary</h2>

                <div className="space-y-3 md:space-y-4 border-b pb-3 md:pb-4 mb-3 md:mb-4 max-h-72 md:max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}`} className="flex gap-2 md:gap-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover flex-shrink-0 w-16 h-16 md:w-20 md:h-20"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs md:text-sm font-semibold text-black truncate">{item.name}</h3>
                        <p className="text-xs md:text-sm text-gray-900 font-medium">
                          Size: {item.size || "Not specified"}
                        </p>
                        <p className="text-xs text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-xs md:text-sm font-bold text-red-600 mt-1">
                          PKR {(item.discountedPrice * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-3 md:mb-4 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-black">PKR {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-black">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-base md:text-lg border-t pt-3 md:pt-4">
                  <span className="font-bold text-black">Total:</span>
                  <span className="font-bold text-red-600 text-lg md:text-xl">PKR {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
