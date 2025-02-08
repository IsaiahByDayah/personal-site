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
