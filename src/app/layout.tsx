import { Metadata } from "next"
import PlausibleProvider from "next-plausible"
import { type ReactNode } from "react"

import { CUSTOM_DOMAIN, DOMAIN } from "lib/plausible"

import "./main.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Isaiah Smith",
    default: "✌🏾 | Isaiah Smith",
  },
  description: "👋🏾",
}

/**
 * NOTE: ran into issue where font variable just would not load for whatever reason.
 *
 * Solution was to rm .next folder and run `pnpm dev` again.
 * REF: https://github.com/vercel/next.js/discussions/47741
 */

interface RootLayoutProps {
  children?: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <PlausibleProvider
          customDomain={CUSTOM_DOMAIN}
          domain={DOMAIN}
          trackOutboundLinks
          selfHosted
        >
          {children}
        </PlausibleProvider>
      </body>
    </html>
  )
}

export default RootLayout
