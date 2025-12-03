"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  productId: string
  name: string
  image: string
  discountedPrice: number
  quantity: number
  size: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size?: string) => void
  updateQuantity: (productId: string, quantity: number, size?: string) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      } catch (error) {
        console.error("Failed to load cart:", error)
      }
    }
    setMounted(true)
    setIsHydrated(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, isHydrated])

  const addItem = (newItem: CartItem) => {
    console.log("[v0] Cart Context - addItem called with:", JSON.stringify(newItem, null, 2))
    console.log(
      "[v0] Cart Context - Size value:",
      newItem.size,
      "Type:",
      typeof newItem.size,
      "Length:",
      newItem.size?.length,
    )

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === newItem.productId && item.size === newItem.size)
      if (existingItem) {
        console.log("[v0] Cart Context - Item already exists, updating quantity")
        return prevItems.map((item) =>
          item.productId === newItem.productId && item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        )
      }
      console.log("[v0] Cart Context - Adding new item to cart")
      return [...prevItems, newItem]
    })
  }

  const removeItem = (productId: string, size?: string) => {
    setItems((prevItems) => {
      if (size) {
        return prevItems.filter((item) => !(item.productId === productId && item.size === size))
      }
      return prevItems.filter((item) => item.productId !== productId)
    })
  }

  const updateQuantity = (productId: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeItem(productId, size)
    } else {
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (size) {
            return item.productId === productId && item.size === size ? { ...item, quantity } : item
          }
          return item.productId === productId ? { ...item, quantity } : item
        }),
      )
    }
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
