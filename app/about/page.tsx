"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const { itemCount } = useCart()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar cartCount={itemCount} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div
            className="absolute top-10 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
          <div
            className="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-300/20 rounded-lg blur-xl animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="bg-white border-2 border-gray-300 p-4 rounded-xl hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110 hover:rotate-3">
                    <Image
                      src="/images/ga-logo.png"
                      alt="GenAlpha Logo"
                      width={80}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight animate-[fadeInUp_0.6s_ease-out]">
                  About GenAlpha
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium animate-[fadeInUp_0.8s_ease-out]">
                  Four CS Students • One Vision • Infinite Possibilities
                </p>
                <div className="flex flex-wrap gap-3 pt-2 animate-[fadeInUp_1s_ease-out]">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold hover:scale-110 hover:bg-blue-200 transition-all duration-300 cursor-default">
                    Student-Founded
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-bold hover:scale-110 hover:bg-purple-200 transition-all duration-300 cursor-default">
                    Made in Pakistan
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg text-sm font-bold hover:scale-110 hover:bg-pink-200 transition-all duration-300 cursor-default">
                    2025
                  </span>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative min-h-[500px]">
                  <div className="absolute top-0 right-0 bg-white rounded-2xl p-8 shadow-2xl border-2 border-blue-200 transform rotate-6 hover:rotate-3 transition-all duration-500 hover:shadow-3xl hover:scale-110 animate-[float_6s_ease-in-out_infinite]">
                    <div className="text-6xl mb-3 animate-[wiggle_1s_ease-in-out_infinite]">💻</div>
                    <p className="text-gray-900 font-bold text-xl">Tech Students</p>
                    <p className="text-gray-500 text-sm mt-1">CS Enthusiasts</p>
                  </div>
                  <div className="absolute top-24 left-0 bg-white rounded-2xl p-8 shadow-2xl border-2 border-purple-200 transform -rotate-6 hover:-rotate-3 transition-all duration-500 hover:shadow-3xl hover:scale-110 animate-[float_6s_ease-in-out_infinite_1s]">
                    <div className="text-6xl mb-3 animate-[wiggle_1s_ease-in-out_infinite_0.3s]">👕</div>
                    <p className="text-gray-900 font-bold text-xl">Fashion Brand</p>
                    <p className="text-gray-500 text-sm mt-1">Premium Quality</p>
                  </div>
                  <div className="absolute bottom-4 right-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-3xl hover:scale-110 animate-[float_6s_ease-in-out_infinite_2s]">
                    <div className="text-6xl mb-3 animate-[wiggle_1s_ease-in-out_infinite_0.6s]">🚀</div>
                    <p className="text-white font-bold text-xl">Big Dreams</p>
                    <p className="text-white/80 text-sm mt-1">Limitless Goals</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl border-4 border-gray-900 hover:border-blue-600 transition-all duration-500 hover:scale-110 animate-[pulse_3s_ease-in-out_infinite]">
                    <div className="text-8xl mb-6 text-center animate-[spin_3s_linear_infinite]">✨</div>
                    <h3 className="text-4xl font-black text-center text-gray-900 mb-2">Our Story</h3>
                    <p className="text-center text-gray-600 text-sm">From idea to reality</p>
                  </div>
                </div>
              </div>

              <div className="lg:hidden grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-200 text-center hover:scale-110 transition-transform duration-300">
                  <p className="text-gray-900 font-bold text-sm">Tech</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-200 text-center hover:scale-110 transition-transform duration-300">
                  <p className="text-gray-900 font-bold text-sm">Fashion</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 shadow-lg text-center hover:scale-110 transition-transform duration-300">
                  <p className="text-white font-bold text-sm">Dreams</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                <span className="text-lg hidden sm:inline">👥</span>
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Building Dreams,
                <br />
                <span className="text-blue-600">One Stitch at a Time</span>
              </h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  We are four Computer Science students who decided to build our own clothing brand rather than waiting
                  for the perfect moment.
                </p>
                <p>
                  GenAlpha is our Pakistani startup that combines tech thinking with fashion, creating premium quality
                  designs at student-friendly prices.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white border-2 border-gray-900 rounded-3xl p-8 md:p-10 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="text-6xl mb-4 hidden sm:block">💡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Philosophy</h3>
                <p className="text-gray-600 text-base">
                  Quality, style, and authenticity — creating a brand that reflects who we are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About GenAlpha Brand Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <span className="text-lg hidden sm:inline">🏢</span>
                  ABOUT GENALPHA
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">More Than Just Clothing</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    GenAlpha is a Pakistani clothing brand delivering premium quality, modern designs, and affordable
                    prices to students and young professionals.
                  </p>
                  <p>
                    We believe clothing is a way to express yourself and feel confident. Our mission is to make premium
                    fashion accessible to everyone.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-6 hidden sm:block">🎨</div>
                  <h3 className="text-2xl font-bold mb-4">What We Stand For</h3>
                  <ul className="space-y-3 text-blue-50">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span>Student-founded Pakistani startup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span>Modern designs with local authenticity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span>Quality that matches big brands</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span className="text-lg hidden sm:inline">👕</span>
              OUR PRODUCTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4 hidden sm:block">👕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oversized T-Shirts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium oversized tees with unique designs. Perfect for casual wear and making a statement.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4 hidden sm:block">🎮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gaming Collection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inspired by popular games like GTA. Designs that celebrate gaming culture.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4 hidden sm:block">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automotive Designs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For car lovers featuring iconic brands like Ferrari and Porsche.
              </p>
            </div>
          </div>
        </section>

        {/* Quality & Standards Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-2.5 rounded-full text-sm font-bold mb-4">
                QUALITY & STANDARDS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                Premium Quality, <span className="text-green-600">Affordable Prices</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe quality clothing should be accessible to everyone, especially students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4 hidden sm:block">🧵</div>
                <h3 className="font-black text-xl mb-3">Premium Fabric</h3>
                <p className="text-gray-600">High-quality cotton blend for maximum comfort and durability</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4 hidden sm:block">🎨</div>
                <h3 className="font-black text-xl mb-3">Print Quality</h3>
                <p className="text-gray-600">Vibrant, long-lasting prints that don't fade after washing</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4 hidden sm:block">📏</div>
                <h3 className="font-black text-xl mb-3">Perfect Fit</h3>
                <p className="text-gray-600">Oversized design that's trendy and comfortable for all body types</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-pink-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4 hidden sm:block">✅</div>
                <h3 className="font-black text-xl mb-3">Quality Control</h3>
                <p className="text-gray-600">Each product is checked before shipping to ensure perfection</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
