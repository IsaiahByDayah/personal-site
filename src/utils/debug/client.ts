"use client"

import { clientEnv } from "@/utils/env/client"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verboseLog = (...data: any[]) => {
  if (clientEnv.VERBOSE_LOGGING) {
    console.log(...data)
  }
}

export const verboseThrow = (error: Error) => {
  if (clientEnv.VERBOSE_LOGGING) {
    throw error
  }
}
