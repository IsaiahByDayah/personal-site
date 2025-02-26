import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        "indigo-dye": "#284B63",
        "anti-flash-white": "#ECECEC",
        jet: "#2E2E2E",
        flame: "#E4572E",
      },
    },
  },
  plugins: [typography, forms],
}

export default config
