// // app/api/send-contact-email/route.ts
// import { NextResponse, type NextRequest } from "next/server"
// import { transporter } from "@/lib/mailer"

// const SHOP_OWNER_EMAIL = process.env.SHOP_OWNER_EMAIL || "owner@stylehub.pk"

// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, message } = await request.json()

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Invalid data" },
//         { status: 400 },
//       )
//     }

//     // Email to shop owner
//     const ownerEmailHtml = `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>From:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <h3>Message:</h3>
//       <p>${message.replace(/\n/g, "<br>")}</p>
//     `

//     // Confirmation email to user
//     const userEmailHtml = `
//       <h2>We Received Your Message!</h2>
//       <p>Hi ${name},</p>
//       <p>Thank you for reaching out to StyleHub. We've received your message and will get back to you as soon as possible.</p>
//       <p>Our team typically responds within 24 hours.</p>
//       <p>In the meantime, feel free to:</p>
//       <ul>
//         <li>WhatsApp: +92 300 1234567</li>
//         <li>Instagram: @yourstorename</li>
//       </ul>
//       <p>Best regards,<br>The StyleHub Team</p>
//     `

//     // Send to shop owner
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: SHOP_OWNER_EMAIL,
//       subject: `New Contact Form - ${name}`,
//       html: ownerEmailHtml,
//     })

//     // Send confirmation to user
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: email,
//       subject: "We Received Your Message - StyleHub",
//       html: userEmailHtml,
//     })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Email error (contact):", error)
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 },
//     )
//   }
// }
