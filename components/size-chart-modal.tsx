"use client"

import { X } from "lucide-react"

interface SizeChartModalProps {
  isOpen: boolean
  onClose: () => void
  category: "shirt" | "hoodie"
}

export function SizeChartModal({ isOpen, onClose, category }: SizeChartModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-6 overflow-y-auto max-h-[90vh]">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {category === "shirt" ? "T-Shirt" : "Hoodie"} Size Chart
          </h2>

          {category === "shirt" ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">SIZE</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">CHEST</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">S</td>
                    <td className="border border-gray-300 px-4 py-3">20</td>
                    <td className="border border-gray-300 px-4 py-3">27</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">M</td>
                    <td className="border border-gray-300 px-4 py-3">21</td>
                    <td className="border border-gray-300 px-4 py-3">28</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">L</td>
                    <td className="border border-gray-300 px-4 py-3">22</td>
                    <td className="border border-gray-300 px-4 py-3">29</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">XL</td>
                    <td className="border border-gray-300 px-4 py-3">23</td>
                    <td className="border border-gray-300 px-4 py-3">30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <div className="flex gap-2 mb-6">
                <button className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium">SIZE</button>
                <button className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium">CHEST</button>
                <button className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium">LENGTH</button>
                <button className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium">SHOULDER</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-4 font-medium">SMALL</td>
                      <td className="px-4 py-4">22 IN</td>
                      <td className="px-4 py-4">26 IN</td>
                      <td className="px-4 py-4">24 IN</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-4 font-medium">MEDIUM</td>
                      <td className="px-4 py-4">23 IN</td>
                      <td className="px-4 py-4">27 IN</td>
                      <td className="px-4 py-4">25 IN</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-4 font-medium">LARGE</td>
                      <td className="px-4 py-4">24 IN</td>
                      <td className="px-4 py-4">28 IN</td>
                      <td className="px-4 py-4">26 IN</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium">XLARGE</td>
                      <td className="px-4 py-4">25 IN</td>
                      <td className="px-4 py-4">29 IN</td>
                      <td className="px-4 py-4">27 IN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-600 mt-6">
            All measurements are in inches. For best fit, please measure your clothing and compare with the size chart.
          </p>
        </div>
      </div>
    </div>
  )
}
