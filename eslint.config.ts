import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    settings: {
      // temporary fix for https://github.com/jsx-eslint/eslint-plugin-react/issues/3977, see also: https://github.com/jsx-eslint/eslint-plugin-react/issues/4018
      react: { version: "19.3" }, // Avoids auto-detection crash
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    ".open-next/**",
    ".sst/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "sst-env.d.ts",
  ]),
])

export default eslintConfig
