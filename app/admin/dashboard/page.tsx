"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, ShoppingCart, DollarSign, LogOut, Clock, CheckCircle2, Truck, XCircle, Trash2 } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

type Order = {
  id: string
  customerName: string
  email: string
  phone: string
  address: string
  city: string
  items: Array<{
    productId: string
    name: string
    size: string
    quantity: number
    price: number
  }>
  total: number
  paymentMethod: "COD" | "NayaPay"
  status: "pending" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  updatedAt: string
}

type Stats = {
  total: number
  pending: number
  shipped: number
  delivered: number
  cancelled: number
  totalRevenue: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [stats, setStats] = useState<Stats>({
    total: 0,
    pending: 0,
    shipped: 0,
    delivered: 0,
    cancelled: 0,
    totalRevenue: 0,
  })
  const [chartData, setChartData] = useState<{ date: string; count: number }[]>([])
  const [loading, setLoading] = useState(true)

  const orderById = useMemo(() => {
    const map = new Map<string, Order>()
    for (const o of orders) map.set(o.id, o)
    return map
  }, [orders])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])

  async function fetchData() {
    try {
      const ts = Date.now()
      const [ordersRes, statsRes] = await Promise.all([
        fetch(`/api/admin/orders?ts=${ts}`, { cache: "no-store" }),
        fetch(`/api/admin/stats?ts=${ts}`, { cache: "no-store" }),
      ])

      if (!ordersRes.ok || !statsRes.ok) {
        router.push("/admin/login")
        return
      }

      const ordersData = await ordersRes.json()
      const statsData = await statsRes.json()

      setOrders(ordersData.orders || [])
      setChartData(ordersData.chartData || [])
      setStats(statsData)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    }
  }

  async function handleStatusChange(orderId: string, newStatus: Order["status"]) {
    const order = orderById.get(orderId)
    if (!order) return

    try {
      const res = await fetch("/api/admin/orders/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: newStatus, previousStatus: order.status }),
      })

      if (res.ok) fetchData()
    } catch (error) {
      console.error("Error updating order status:", error)
    }
  }

  async function handleRemoveOrder(orderId: string) {
    const order = orderById.get(orderId)
    if (!order) return

    const ok = confirm(
      `Are you sure you want to delete this order?\n\nOrder ID: ${order.id}\nAmount: Rs. ${order.total.toLocaleString()}\n\nThis action cannot be undone.`,
    )
    if (!ok) return

    // ✅ Optimistic UI (instant remove)
    setOrders((prev) => prev.filter((o) => o.id !== orderId))

    try {
      const res = await fetch("/api/admin/orders/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.ok) {
        alert(data?.message || "Failed to delete order")
        fetchData()
        return
      }

      // ✅ refresh (server is source of truth)
      fetchData()
    } catch (error) {
      console.error("Error removing order:", error)
      fetchData()
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
  }

  async function handleAcceptOrder(orderId: string) {
    try {
      const res = await fetch("/api/admin/orders/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      })
      if (res.ok) fetchData()
    } catch (error) {
      console.error("Error accepting order:", error)
    }
  }

  function getStatusColor(status: Order["status"]) {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "shipped":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "delivered":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/20"
    }
  }

  function getStatusIcon(status: Order["status"]) {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "delivered":
        return <CheckCircle2 className="h-4 w-4" />
      case "cancelled":
        return <XCircle className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto" />
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-sm text-gray-400">GenAlpha Wear Management</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2 bg-white text-gray-900 hover:bg-gray-100">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">All time orders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending}</div>
              <p className="text-xs text-muted-foreground">Awaiting processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs. {stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total earnings</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Orders by Date</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Orders
              <Badge variant="secondary" className="ml-auto">
                Live Updates
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No orders yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 relative">
                    <button
                      onClick={() => handleRemoveOrder(order.id)}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      title="Delete order"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pr-10">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{order.customerName}</h3>
                          <Badge variant="outline" className={getStatusColor(order.status)}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(order.status)}
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Order ID:</span> {order.id}
                          </div>
                          <div>
                            <span className="font-medium">Email:</span> {order.email}
                          </div>
                          <div>
                            <span className="font-medium">City:</span> {order.city}
                          </div>
                        </div>

                        <div className="text-sm">
                          <span className="font-medium">Address:</span> {order.address}
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-sm font-medium mb-1">Items:</p>
                          <div className="space-y-1">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="text-sm text-gray-600">
                                {item.name} (Size: {item.size}) × {item.quantity}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t">
                          <span className="font-semibold">Total: Rs. {order.total.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="lg:w-48 space-y-2">
                        {order.status === "pending" && (
                          <Button
                            onClick={() => handleAcceptOrder(order.id)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            Accept Order
                          </Button>
                        )}

                        <Select
                          value={order.status}
                          onValueChange={(value) => handleStatusChange(order.id, value as Order["status"])}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="shipped">Shipped</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
