import { env } from "@/env"
import { db } from "@/server/db/client"
import {
  account,
  session,
  user,
  verification,
} from "@/server/db/schema/auth-schema"
import { drizzleAdapter } from "@better-auth/drizzle-adapter"
import { betterAuth } from "better-auth"
import { headers } from "next/headers"
import { cache } from "react"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { account, session, user, verification },
  }),
  secret: env.AUTH_SECRET,
  baseURL: env.AUTH_URL,
  socialProviders: {
    google: {
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      disableImplicitSignUp: env.AUTH_DISABLE_SIGN_UPS,
    },
  },
})

export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() })
)
