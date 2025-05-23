"use client"

import { z } from "zod"

const clientEnvSchema = z.object({
  VERBOSE_LOGGING: z
    .string()
    .toLowerCase()
    .default("false")
    .transform((x) => x === "true")
    .pipe(z.boolean()),
})

export const clientEnv = clientEnvSchema.parse({
  VERBOSE_LOGGING: process.env.NEXT_PUBLIC_VERBOSE_LOGGING,
})
