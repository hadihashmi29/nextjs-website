// // app/api/send-order-email/route.ts
// import { NextResponse, type NextRequest } from "next/server"
// import { transporter } from "@/lib/mailer"

// const SHOP_OWNER_EMAIL = process.env.SHOP_OWNER_EMAIL || "owner@stylehub.pk"

// export async function POST(request: NextRequest) {
//   try {
//     const orderData = await request.json()
//     const { customer, items, total, paymentMethod, timestamp, transactionFile } = orderData

//     if (!customer || !items || !Array.isArray(items) || !total) {
//       return NextResponse.json(
//         { error: "Invalid order data" },
//         { status: 400 },
//       )
//     }

//     const ownerEmailHtml = `
//       <h2>New Order Received!</h2>
//       <p><strong>Order Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
      
//       <h3>Customer Information:</h3>
//       <ul>
//         <li><strong>Name:</strong> ${customer.fullName}</li>
//         <li><strong>Email:</strong> ${customer.email}</li>
//         <li><strong>Phone:</strong> ${customer.phone}</li>
//         <li><strong>Address:</strong> ${customer.address}</li>
//         <li><strong>City:</strong> ${customer.city}</li>
//       </ul>

//       <h3>Order Items:</h3>
//       <table style="border-collapse: collapse; width: 100%;">
//         <tr style="border: 1px solid #ddd;">
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Product</th>
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Quantity</th>
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Price (PKR)</th>
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total (PKR)</th>
//         </tr>
//         ${items
//           .map(
//             (item: any) => `
//           <tr style="border: 1px solid #ddd;">
//             <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
//             <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${item.quantity}</td>
//             <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${item.discountedPrice.toLocaleString()}</td>
//             <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${(item.discountedPrice * item.quantity).toLocaleString()}</td>
//           </tr>
//         `,
//           )
//           .join("")}
//       </table>

//       <h3>Order Summary:</h3>
//       <ul>
//         <li><strong>Subtotal:</strong> PKR ${total.toLocaleString()}</li>
//         <li><strong>Shipping:</strong> FREE</li>
//         <li><strong>Total:</strong> PKR ${total.toLocaleString()}</li>
//       </ul>

//       <h3>Payment Method:</h3>
//       <p>${paymentMethod === "nayapay" ? "NayaPay" : paymentMethod === "cash" ? "Cash on Delivery" : "Bank Transfer"}</p>
//       <p><strong>Note:</strong> Transaction screenshot is attached to this email.</p>
//     `

//     const customerEmailHtml = `
//       <h2>Order Confirmation</h2>
//       <p>Thank you for your order! We're excited to process it.</p>

//       <h3>Order Details:</h3>
//       <ul>
//         <li><strong>Order Date:</strong> ${new Date(timestamp).toLocaleString()}</li>
//         <li><strong>Customer Name:</strong> ${customer.fullName}</li>
//         <li><strong>Delivery Address:</strong> ${customer.address}, ${customer.city}</li>
//       </ul>

//       <h3>Items Ordered:</h3>
//       <table style="border-collapse: collapse; width: 100%;">
//         <tr style="border: 1px solid #ddd;">
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Product</th>
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Quantity</th>
//           <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total (PKR)</th>
//         </tr>
//         ${items
//           .map(
//             (item: any) => `
//           <tr style="border: 1px solid #ddd;">
//             <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
//             <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${item.quantity}</td>
//             <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">PKR ${(item.discountedPrice * item.quantity).toLocaleString()}</td>
//           </tr>
//         `,
//           )
//           .join("")}
//       </table>

//       <h3>Payment Total: <span style="color: #d97706;">PKR ${total.toLocaleString()}</span></h3>

//       ${
//         paymentMethod === "nayapay"
//           ? `
//         <h3>Payment Instructions:</h3>
//         <p>We have received your payment screenshot. Our team will verify it within 24 hours.</p>
//       `
//           : ""
//       }

//       <h3>Next Steps:</h3>
//       <ol>
//         <li>We'll confirm your payment within 24 hours</li>
//         <li>We'll prepare your order for shipping</li>
//         <li>You'll receive tracking information via email</li>
//       </ol>

//       <h3>Contact Us:</h3>
//       <ul>
//         <li><strong>WhatsApp:</strong> +92 300 1234567</li>
//         <li><strong>Instagram:</strong> @yourstorename</li>
//         <li><strong>Email:</strong> ${SHOP_OWNER_EMAIL}</li>
//       </ul>

//       <p>Thank you for choosing StyleHub!</p>
//     `

//     const attachments: any[] = []
//     if (transactionFile?.data && transactionFile?.name) {
//       const base64Data = transactionFile.data.split(",")[1]
//       attachments.push({
//         filename: transactionFile.name,
//         content: base64Data,
//         encoding: "base64",
//       })
//     }

//     // Email to shop owner
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: SHOP_OWNER_EMAIL,
//       subject: `New Order - ${customer.fullName}`,
//       html: ownerEmailHtml,
//       attachments,
//     })

//     // Email to customer
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: customer.email,
//       subject: "Your Order Confirmation - StyleHub",
//       html: customerEmailHtml,
//     })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Email error (order):", error)
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 },
//     )
//   }
// }
