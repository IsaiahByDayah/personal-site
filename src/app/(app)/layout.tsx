import { Metadata } from "next"
import PlausibleProvider from "next-plausible"
import { Nunito } from "next/font/google"
import { type ReactNode } from "react"

import { CUSTOM_DOMAIN, DOMAIN } from "@/lib/plausible"

import "./main.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Isaiah Smith",
    default: "✌🏾 | Isaiah Smith",
  },
  description: "👋🏾",
}

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-nunito",
})

interface RootLayoutProps {
  children?: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={nunito.variable}>
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
