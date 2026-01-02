import { type NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { updateOrderStatus } from "@/lib/orders-store"

export async function POST(request: NextRequest) {
  const isAuthenticated = await isAdminAuthenticated()

  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { orderId, status, previousStatus } = await request.json()
  const updatedOrder = updateOrderStatus(orderId, status, previousStatus)

  if (!updatedOrder) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 })
  }

  return NextResponse.json({ success: true, order: updatedOrder })
}
