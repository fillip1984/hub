import { getSession } from "@/auth/server"
import { FloatingThemeToggle } from "@/components/theme/floating-theme-toggle"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { type Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import AuthForm from "./_components/auth-form"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Illizen Hub",
  description: "Hub to showcase all applications",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession()

  return (
    <html
      lang="en"
      className={cn("font-mono", jetbrainsMono.variable)}
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {session?.user ? children : <SignInView />}
          <FloatingThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}

const SignInView = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <AuthForm />
    </main>
  )
}
