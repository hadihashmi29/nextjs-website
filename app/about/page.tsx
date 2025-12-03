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
                  <div className="text-4xl mb-1 animate-bounce">💻</div>
                  <p className="text-gray-900 font-bold text-sm">Tech</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-200 text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-1 animate-bounce" style={{ animationDelay: "0.2s" }}>
                    👕
                  </div>
                  <p className="text-gray-900 font-bold text-sm">Fashion</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 shadow-lg text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-1 animate-bounce" style={{ animationDelay: "0.4s" }}>
                    🚀
                  </div>
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
                <span className="text-lg">👥</span>
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Building Dreams,
                <br />
                <span className="text-blue-600">One Stitch at a Time</span>
              </h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  We are <strong className="text-gray-900">four Computer Science students</strong>, currently studying
                  in our 5th semester, who decided to build something of our own rather than waiting for "the right
                  time."
                </p>
                <p>
                  What started as a simple idea during class discussions slowly turned into a passion — and today it
                  stands as our own clothing startup, <strong className="text-gray-900">proudly Pakistani.</strong>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">Modern</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">Clean</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">Premium</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white border-2 border-gray-900 rounded-3xl p-8 md:p-10 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Philosophy</h3>
                <p className="text-gray-600 text-base">
                  Creating a brand that reflects who we are and what we believe in — quality, style, and authenticity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Started Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <span className="text-lg">🚀</span>
                OUR JOURNEY
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Started</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From classroom discussions to building a real business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  💻
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Idea</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We were always building digital projects, but one day we thought: "Why not build something in real
                  life too?"
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Team</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Four friends with different skills came together - design, operations, marketing, and development.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Dream</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Create something people could physically wear, feel, and love — not just lines of code on a screen.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-4xl mb-4 animate-bounce">💭</div>
                <p className="text-xl md:text-2xl font-bold mb-3 text-balance">
                  "Why not build something in real life too?"
                </p>
                <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
                  And that's when the idea of starting a clothing brand was born.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clothing Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span className="text-lg">👕</span>
              WHY CLOTHING?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Expression. Identity. Confidence.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clothing isn't just fashion — it's how you express yourself to the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-green-500 rounded-2xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">✓</div>
              <h3 className="text-xl font-bold mb-2">Comfortable</h3>
              <p className="text-green-50 text-sm">Premium fabrics that feel amazing</p>
            </div>

            <div className="group bg-blue-500 rounded-2xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">✓</div>
              <h3 className="text-xl font-bold mb-2">Modern</h3>
              <p className="text-blue-50 text-sm">Contemporary designs for today's youth</p>
            </div>

            <div className="group bg-purple-500 rounded-2xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">✓</div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-purple-50 text-sm">Quality that matches big brands</p>
            </div>

            <div className="group bg-pink-500 rounded-2xl p-6 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">✓</div>
              <h3 className="text-xl font-bold mb-2">Affordable</h3>
              <p className="text-pink-50 text-sm">Great prices for students</p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="bg-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6">
                  <span className="text-lg">💡</span>
                  OUR VISION
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Building for
                  <br />
                  <span className="text-blue-400">Tomorrow</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Our aim is simple: <strong className="text-white">Build a brand that grows with us</strong> —
                    semester by semester, year by year.
                  </p>
                  <p>
                    We want to prove that students can build real businesses, not just submit projects. We want to
                    inspire others to take the first step.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">📚</div>
                    <div>
                      <h3 className="font-black text-xl mb-2">Learning & Growing</h3>
                      <p className="text-gray-400">Building skills beyond the classroom</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🎯</div>
                    <div>
                      <h3 className="font-black text-xl mb-2">Real Impact</h3>
                      <p className="text-gray-400">Creating something people actually use</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🚀</div>
                    <div>
                      <h3 className="font-black text-xl mb-2">Long-term Vision</h3>
                      <p className="text-gray-400">Building a lasting brand identity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6">
              <span className="text-lg">❤️</span>
              OUR PROMISE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">When You Buy From Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You're not just getting great products — you're joining our journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">📦</div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-2">Handcrafted with Care</h3>
                  <p className="text-gray-600">We handle everything ourselves — from designs to packing</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">💪</div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-2">Supporting Our Dream</h3>
                  <p className="text-gray-600">Every order helps us build our future</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">🎓</div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-2">Funding Our Education</h3>
                  <p className="text-gray-600">Balancing studies with entrepreneurship</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">🌟</div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-2">Building Together</h3>
                  <p className="text-gray-600">You become part of our startup journey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden group hover:shadow-3xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all"></div>
            <div className="relative">
              <p className="text-2xl md:text-4xl font-black mb-4 animate-[fadeInUp_1s_ease-out]">
                You're not just buying a product
              </p>
              <p className="text-xl md:text-2xl text-gray-300 animate-[fadeInUp_1.2s_ease-out]">
                You're supporting four students building their future 🚀
              </p>
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
