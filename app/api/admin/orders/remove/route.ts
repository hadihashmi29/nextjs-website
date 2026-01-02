import { NextResponse } from "next/server"
import { removeOrder } from "@/lib/orders-store"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { orderId } = await request.json()
    const success = removeOrder(orderId)

    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }
  } catch (error) {
    console.error("[v0] Error removing order:", error)
    return NextResponse.json({ error: "Failed to remove order" }, { status: 500 })
  }
}
