import { type NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getOrderStats } from "@/lib/orders-store"
export async function GET(request: NextRequest) {
  const isAuthenticated = await isAdminAuthenticated()

  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const stats = getOrderStats()
  return NextResponse.json(stats)
}