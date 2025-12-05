"use client"

import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const total = searchParams.get("total") || "0"
  const paymentMethod = searchParams.get("paymentMethod") || "nayapay"

  return (
    <>
      <Navbar cartCount={0} />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>

            <h1 className="text-3xl font-bold text-amber-900 mb-4">Order Confirmed!</h1>

            {paymentMethod === "nayapay" && (
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 mb-6">
                <p className="text-lg font-bold text-gray-900 mb-2">Important: Send Payment Screenshot on WhatsApp</p>
                <p className="text-gray-700">
                  Please send your transaction screenshot on WhatsApp to complete your order
                </p>
              </div>
            )}

            <p className="text-gray-600 text-lg mb-8">
              Thank you for your order. Your order has been placed successfully. You will receive a confirmation email
              soon at <span className="font-semibold text-amber-600">{email}</span>
            </p>

            <Link href="/">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
