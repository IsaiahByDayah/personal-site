import { PrismicPreview } from "@prismicio/next"
import { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import { type ReactNode } from "react"

import { UmamiAnalytics } from "@/app/UmamiAnalytics"
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
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
      <UmamiAnalytics disabled={process.env.NODE_ENV === "development"} />
    </html>
  )
}

export default RootLayout
