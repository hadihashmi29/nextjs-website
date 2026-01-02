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

const orders: Order[] = [
  {
    id: "#genalpha2",
    customerName: "Sultan Salahuddin Ayubi Khan",
    email: "sultanyousafzae@gmail.com",
    phone: "+923001234567",
    address: "Tarlai kalan Near Sarfaraz Town",
    city: "Islamabad",
    items: [
      {
        productId: "hoodie-death-note",
        name: "Death Note Anime Hoodie",
        size: "L",
        quantity: 1,
        price: 3000,
      },
    ],
    total: 3000,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-01T10:00:00.000Z",
    updatedAt: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "#genalpha3",
    customerName: "Danial Muzaffar",
    email: "danialmuzaffar9@gmail.com",
    phone: "+923010100979",
    address: "House 4 Burma town",
    city: "Islamabad",
    items: [
      {
        productId: "hoodie-porsche-gt3",
        name: "Porsche 911 GT3 RS Hoodie",
        size: "S",
        quantity: 1,
        price: 3000,
      },
    ],
    total: 3000,
    paymentMethod: "NayaPay",
    status: "delivered",
    createdAt: "2025-12-06T10:00:00.000Z",
    updatedAt: "2025-12-06T10:00:00.000Z",
  },
  {
    id: "#genalpha4",
    customerName: "Irtaza Zahid",
    email: "zirataza81@gmail.com",
    phone: "+923001234567",
    address: "Hostel city street no 2 opposite Al rahman girls hostel Chatha bakhtawar Islamabad",
    city: "Islamabad",
    items: [
      {
        productId: "shirt-ferrari",
        name: "Ferrari Racer Oversized T-shirt",
        size: "M",
        quantity: 1,
        price: 2300,
      },
      {
        productId: "hoodie-batman",
        name: "Batman Comic Hoodie",
        size: "M",
        quantity: 1,
        price: 3000,
      },
    ],
    total: 5300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-08T10:00:00.000Z",
    updatedAt: "2025-12-08T10:00:00.000Z",
  },
  {
    id: "#genalpha5",
    customerName: "talha",
    email: "talhabinsajid007@gmail.com",
    phone: "+923001234567",
    address: "tarlai kalan, islamabad",
    city: "Islamabad",
    items: [
      {
        productId: "hoodie-toji",
        name: "Toji Fushiguro Anime Hoodie",
        size: "M",
        quantity: 1,
        price: 3000,
      },
    ],
    total: 3000,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-09T10:00:00.000Z",
    updatedAt: "2025-12-09T10:00:00.000Z",
  },
  {
    id: "#genalpha6",
    customerName: "Arman",
    email: "theweddinghouse136@gmail.com",
    phone: "+923001234567",
    address: "Ibrahim villas street 2 morgah",
    city: "Rawalpindi",
    items: [
      {
        productId: "shirt-vagabond",
        name: "Vagabond Oversized T-shirt",
        size: "M",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-09T10:00:00.000Z",
    updatedAt: "2025-12-09T10:00:00.000Z",
  },
  {
    id: "#genalpha7",
    customerName: "Bilal",
    email: "johnabig26@gmail.com",
    phone: "+923001234567",
    address: "Tarlai",
    city: "Islamabad",
    items: [
      {
        productId: "shirt-sharingan",
        name: "Sharingan Anime Oversized T-shirt",
        size: "L",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-10T10:00:00.000Z",
    updatedAt: "2025-12-10T10:00:00.000Z",
  },
  {
    id: "#genalpha8",
    customerName: "Abdul Jalal",
    email: "abduljalal030100@gmail.com",
    phone: "+923001234567",
    address: "New Mall jinnah Avenue",
    city: "Islamabad",
    items: [
      {
        productId: "shirt-san-andreas",
        name: "San Andreas Grove Street Oversized T-shirt",
        size: "L",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-11T10:00:00.000Z",
    updatedAt: "2025-12-11T10:00:00.000Z",
  },
  {
    id: "#genalpha9",
    customerName: "Saim",
    email: "saimsatti@gmail.com",
    phone: "+923001234567",
    address: "Satellite Town",
    city: "Rawalpindi",
    items: [
      {
        productId: "shirt-porsche-legacy",
        name: "Porsche Legacy Oversized T-shirt",
        size: "L",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-21T10:00:00.000Z",
    updatedAt: "2025-12-21T10:00:00.000Z",
  },
  {
    id: "#genalpha10",
    customerName: "Rabia arshad",
    email: "m.ahmedd2855@gmail.com",
    phone: "+923001234567",
    address: "Ibrahim villas street 1 morgah Rawalpindi",
    city: "Rawalpindi",
    items: [
      {
        productId: "shirt-mandalorian",
        name: "Mandalorian Oversized T-shirt",
        size: "S",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-22T10:00:00.000Z",
    updatedAt: "2025-12-22T10:00:00.000Z",
  },
  {
    id: "#genalpha11",
    customerName: "Abdul hannan",
    email: "abdulhannan78@gmail.com",
    phone: "+923001234567",
    address: "House no 5 street 1 chak shehzad islamabad",
    city: "Islamabad",
    items: [
      {
        productId: "shirt-porsche-legacy",
        name: "Porsche Legacy Oversized T-shirt",
        size: "M",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2300,
    paymentMethod: "COD",
    status: "delivered",
    createdAt: "2025-12-23T10:00:00.000Z",
    updatedAt: "2025-12-23T10:00:00.000Z",
  },
  {
    id: "#genalpha12",
    customerName: "Hamza",
    email: "hamzi3u77@gmail.com",
    phone: "+923010100979",
    address: "Sarai alamgir",
    city: "Sarai alamgir",
    items: [
      {
        productId: "shirt-graffiti",
        name: "Graffiti Art Oversized T-shirt",
        size: "L",
        quantity: 1,
        price: 2300,
      },
    ],
    total: 2550,
    paymentMethod: "NayaPay",
    status: "delivered",
    createdAt: "2025-12-23T10:00:00.000Z",
    updatedAt: "2025-12-23T10:00:00.000Z",
  },
]

let orderCounter = 13
let currentRevenue = 30650

// Order management and statistics for admin dashboard

export function addOrder(order: Omit<Order, "id" | "createdAt" | "updatedAt">) {
  const newOrder: Order = {
    ...order,
    id: `#genalpha${orderCounter++}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  orders.unshift(newOrder)
  return newOrder
}

export function getOrders() {
  return orders
}

export function updateOrderStatus(orderId: string, status: Order["status"], previousStatus?: Order["status"]) {
  const order = orders.find((o) => o.id === orderId)
  if (order) {
    const wasAccepted = previousStatus === "pending" && status !== "pending" && status !== "cancelled"

    if (wasAccepted && order.paymentMethod === "NayaPay") {
      currentRevenue += order.total
    }

    order.status = status
    order.updatedAt = new Date().toISOString()
    return order
  }
  return null
}

export function getOrderStats() {
  const total = orders.length
  const pending = orders.filter((o) => o.status === "pending").length
  const shipped = orders.filter((o) => o.status === "shipped").length
  const delivered = orders.filter((o) => o.status === "delivered").length
  const cancelled = orders.filter((o) => o.status === "cancelled").length

  return {
    total,
    pending,
    shipped,
    delivered,
    cancelled,
    totalRevenue: currentRevenue,
  }
}

export function removeOrder(orderId: string) {
  const index = orders.findIndex((o) => o.id === orderId)
  if (index !== -1) {
    orders.splice(index, 1)
    return true
  }
  return false
}

export function getOrdersByDate() {
  const ordersByDate: { [key: string]: number } = {}

  orders.forEach((order) => {
    const date = new Date(order.createdAt).toLocaleDateString("en-GB")
    ordersByDate[date] = (ordersByDate[date] || 0) + 1
  })

  return Object.entries(ordersByDate)
    .map(([date, count]) => ({ date, count }))
    .sort(
      (a, b) =>
        new Date(a.date.split("/").reverse().join("-")).getTime() -
        new Date(b.date.split("/").reverse().join("-")).getTime(),
    )
}
