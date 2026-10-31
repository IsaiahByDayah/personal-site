import Script from "next/script"

import { SCRIPT_SRC, WEBSITE_ID } from "@/lib/umami"

export interface UmamiAnalyticsProps {
  disabled?: boolean
}

export const UmamiAnalytics = ({ disabled }: UmamiAnalyticsProps) => {
  if (disabled) {
    console.warn("Umami Analytics Disabled")
    return null
  }

  return <Script defer src={SCRIPT_SRC} data-website-id={WEBSITE_ID} />
}
