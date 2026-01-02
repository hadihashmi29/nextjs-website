"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Image
                src="/images/ga-logo.png"
                alt="GenAlpha"
                width={50}
                height={20}
                className="object-contain w-12 md:w-[50px]"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Premium quality shirts and hoodies for every style and occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Policies</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li>
                <Link href="/exchange-policy" className="hover:text-cyan-400 transition-colors">
                  Exchange Policy
                </Link>
              </li>
              <li>
                <span className="text-gray-500">7 Days Exchange</span>
              </li>
              <li>
                <span className="text-green-400">15% OFF on 4+ Products</span>
              </li>
              <li>
                <span className="text-green-400">10% OFF on 3 Products</span>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Connect With Us</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://wa.me/923010100979"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://instagram.com/genalpha.wear"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <p className="text-center text-gray-400 text-xs md:text-sm">© 2025 GenAlpha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
