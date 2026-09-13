import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { type Metadata } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Illizen Hub",
  description: "Hub to showcase all applications",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(geist.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="bg-background text-white">{children}</body>
    </html>
  )
}
