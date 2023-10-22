import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      info: "hsla(206, 100%, 60%, 1)",
      warn: "hsla(77, 92%, 60%,1)",
      danger: "hsla(0, 99%, 64%, 1)",
      success: "hsla(126, 83%, 68%, 1)",
      white: "hsla(23, 39%, 85%, 1)",
      black: "hsla(197, 7%, 21%, 1)",
      grey: "hsla(197, 7%, 60%, 1)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
