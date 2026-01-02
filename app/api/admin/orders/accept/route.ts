import { type NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { updateOrderStatus } from "@/lib/orders-store"

export async function POST(request: NextRequest) {
  const isAuthenticated = await isAdminAuthenticated()
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { orderId } = await request.json()

  console.log("[v0] Accept order API called for order:", orderId)

  const order = updateOrderStatus(orderId, "shipped", "pending")

  if (order) {
    console.log("[v0] Order accepted successfully:", order.id, "New status:", order.status)
    return NextResponse.json({ success: true, order })
  }

  return NextResponse.json({ error: "Order not found" }, { status: 404 })
}
