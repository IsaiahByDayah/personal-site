import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,md,mdx}"],
  theme: {},
  plugins: [typography, forms],
}

export default config
