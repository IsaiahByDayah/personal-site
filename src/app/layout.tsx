import { PrismicPreview } from "@prismicio/next"
import { Metadata } from "next"
import PlausibleProvider from "next-plausible"
import { Nunito_Sans } from "next/font/google"
import { type ReactNode } from "react"

import { Footer } from "@/app/_components/Footer"
import { Header } from "@/app/_components/Header"
import { TanstackProvider } from "@/app/_components/TanstackProvider"
import { CUSTOM_DOMAIN, DOMAIN } from "@/lib/plausible"
import { repositoryName } from "@/lib/prismicio"

import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-nunito-sans",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Isaiah Smith",
    default: "✌🏾 | Isaiah Smith",
  },
  description:
    "Los Angeles based software engineer specialized in building simple modular apps and web solutions using modern technologies.",
}

interface RootLayoutProps {
  children?: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="text-jet-700">
        <TanstackProvider>
          <PlausibleProvider
            customDomain={CUSTOM_DOMAIN}
            domain={DOMAIN}
            trackOutboundLinks
            selfHosted
          >
            <div className="px-2">
              <Header className="border-b-jet-500/50 m-auto w-full max-w-5xl border-b py-2" />
            </div>
            {children}
            <div className="bg-jet-500 light-on-dark px-2">
              <Footer className="m-auto w-full max-w-5xl py-2" />
            </div>
          </PlausibleProvider>
          <PrismicPreview repositoryName={repositoryName} />
        </TanstackProvider>
      </body>
    </html>
  )
}

export default RootLayout
