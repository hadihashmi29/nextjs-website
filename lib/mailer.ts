// // lib/mailer.ts
// import nodemailer from "nodemailer"

// const smtpHost = process.env.SMTP_HOST
// const smtpPort = Number(process.env.SMTP_PORT || 587)
// const smtpUser = process.env.SMTP_USER
// const smtpPass = process.env.SMTP_PASS

// if (!smtpHost || !smtpUser || !smtpPass) {
//   console.warn("⚠️ SMTP env vars missing. Check .env.local")
// }

// export const transporter = nodemailer.createTransport({
//   host: smtpHost,
//   port: smtpPort,
//   secure: false, // 587 ke liye false
//   auth: {
//     user: smtpUser,
//     pass: smtpPass,
//   },
// })
