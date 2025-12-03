"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const { itemCount } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const WHATSAPP_NUMBER = "923010100979" // Updated WhatsApp number

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create contact message for WhatsApp
    const whatsappMessage = `*New Contact Message*%0A%0A*From:*%0AName: ${formData.name}%0AEmail: ${formData.email}%0A%0A*Message:*%0A${formData.message}`

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank")

    // Clear form and show success
    setFormData({ name: "", email: "", message: "" })
    alert("Redirecting to WhatsApp...")
  }

  return (
    <>
      <Navbar cartCount={itemCount} />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-black mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>

              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                Fill the form and click send - we'll receive your message on WhatsApp
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-3 font-semibold">
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-black">Phone</p>
                      <p className="text-gray-600">+92 3010100979</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-black">Email</p>
                      <p className="text-gray-600">info@stylehub.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-black">Location</p>
                      <p className="text-gray-600">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Connect With Us</h2>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20GenAlpha!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition"
                  >
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-black">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us on WhatsApp</p>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/genalpha.wear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition"
                  >
                    <Instagram className="w-6 h-6 text-pink-600" />
                    <div>
                      <p className="font-semibold text-black">Instagram</p>
                      <p className="text-sm text-gray-600">@genalpha.wear</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
