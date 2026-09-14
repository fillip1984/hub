"use client"

import { authClient } from "@/auth/client"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"

export default function AuthForm() {
  // const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="bg-card flex w-full max-w-sm flex-col gap-4 rounded-xl border p-6">
      <div>
        <h1 className="text-2xl font-bold">hub</h1>
        <p className="text-muted-foreground text-sm">
          hub is by invitation only
        </p>
      </div>

      <Button
        size="lg"
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
            fetchOptions: {
              onRequest: () => {
                setIsLoading(true)
                setError("")
              },
              onError: () => {
                setIsLoading(false)
                setError("An error occurred during sign-in.")
              },
            },
          })
        }
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : "Sign in"}
      </Button>

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  )
}
