import { FloatingThemeToggle } from "@/components/theme/floating-theme-toggle"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { type Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Illizen Hub",
  description: "Hub to showcase all applications",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
