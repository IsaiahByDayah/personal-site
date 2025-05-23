import "server-only"

import { serverEnv } from "@/utils/env/server"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verboseLog = (...data: any[]) => {
  if (serverEnv.VERBOSE_LOGGING) {
    console.log(...data)
  }
}

export const verboseThrow = (error: Error) => {
  if (serverEnv.VERBOSE_LOGGING) {
    throw error
  }
}
