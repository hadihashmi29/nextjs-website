"use server"

import { cookies } from "next/headers"

const ADMIN_CREDENTIALS = {
  email: "admin@genalphawear.com",
  password: "GenAlphaRecord2025",
}

export async function loginAdmin(email: string, password: string) {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    const cookieStore = await cookies()
    cookieStore.set("admin-session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return { success: true }
  }
  return { success: false, error: "Invalid credentials" }
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-session")
  return { success: true }
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin-session")
  return session?.value === "authenticated"
}
