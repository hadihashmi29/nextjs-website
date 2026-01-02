import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

export default function ExchangePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Exchange Policy</h1>
          <p className="text-gray-600 text-lg">7-Day hassle-free exchange on all products</p>
        </div>

        {/* Policy Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Exchange</h2>
              <p className="text-gray-700 leading-relaxed">
                You can exchange your product within <span className="font-semibold text-blue-600">7 days</span> of
                delivery. Product must be unused, unworn, and with original tags attached.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Send Product Image</p>
                <p className="text-sm">WhatsApp us the image of the product you want to exchange at +92 301 0100979</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Select New Product</p>
                <p className="text-sm">Send us the image/name of the product you want instead</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Exchange Confirmed</p>
                <p className="text-sm">We'll arrange pickup and send your new product</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-red-600">Note:</span> Exchange not available for worn, washed, or
              damaged products. Tags must be intact.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200 p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Help?</h3>
          <p className="text-gray-700 mb-4">Contact us on WhatsApp for exchange</p>
          <a
            href="https://wa.me/923010100979"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
