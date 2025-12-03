// Simple in-memory cart store for client-side state management
export interface CartItem {
  productId: string
  name: string
  discountedPrice: number
  quantity: number
}

// This will be used with React Context or similar on the client
export const defaultCart: CartItem[] = []
