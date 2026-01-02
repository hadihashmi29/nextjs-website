import { type NextRequest, NextResponse } from "next/server"
import { addOrder } from "@/lib/orders-store"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const order = addOrder({
      customerName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      items: data.items.map((item: any) => ({
        productId: item.productId,
        name: item.name,
        size: item.size,
        quantity: item.quantity,
        price: item.discountedPrice,
      })),
      total: data.total,
      paymentMethod: data.paymentMethod === "cod" ? "COD" : "NayaPay",
      status: "pending",
    })

    console.log("[v0] Order submitted with payment method:", order.paymentMethod)

    return NextResponse.json({ success: true, orderId: order.id })
  } catch (error) {
    console.error("[v0] Error submitting order:", error)
    return NextResponse.json({ error: "Failed to submit order" }, { status: 500 })
  }
}
