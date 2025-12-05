"use client"

import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const total = searchParams.get("total") || "0"
  const paymentMethodParam = searchParams.get("paymentMethod") || "nayapay"
  const paymentMethod = paymentMethodParam.toLowerCase() // "cod", "nayapay" etc.

  useEffect(() => {
    console.log("[v0] Order Confirmation - Payment Method:", paymentMethod)
    console.log("[v0] Order Confirmation - All Search Params:", {
      email,
      total,
      paymentMethod,
    })
  }, [paymentMethod, email, total])

  return (
    <>
      <Navbar cartCount={0} />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>

            <h1 className="text-3xl font-bold text-amber-900 mb-4">
              Order Confirmed!
            </h1>

            {/* NayaPay ka special message */}
            {paymentMethod === "nayapay" && (
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 mb-6">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  Important: Send Payment Screenshot on WhatsApp
                </p>
                <p className="text-gray-700">
                  Please send your transaction screenshot on WhatsApp to
                  complete your order.
                </p>
              </div>
            )}

            {/* COD ka special message */}
            {paymentMethod === "cod" && (
              <div className="bg-green-100 border-2 border-green-400 rounded-lg p-6 mb-6">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  Cash on Delivery Selected
                </p>
                <p className="text-gray-700">
                  Your order will be delivered soon. Please keep{" "}
                  <span className="font-semibold">
                    Rs. {total !== "0" ? total : "cash"}
                  </span>{" "}
                  ready to pay at the time of delivery.
                </p>
              </div>
            )}

            <p className="text-gray-600 text-lg mb-8">
              Thank you for your order. Your order has been placed successfully.
              {email && (
                <>
                  {" "}
                  You will receive a confirmation email soon at{" "}
                  <span className="font-semibold text-amber-600">
                    {email}
                  </span>
                  .
                </>
              )}
            </p>

            <Link href="/">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
