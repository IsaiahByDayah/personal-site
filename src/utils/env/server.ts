import "server-only"

import { z } from "zod"

const envSchema = z.object({
  SOURCE_COMMIT: z.string().nonempty(),
  VERBOSE_LOGGING: z
    .string()
    .toLowerCase()
    .default("false")
    .transform((x) => x === "true")
    .pipe(z.boolean()),

  RESEND_API_KEY: z.string().nonempty(),
  GOOGLE_SHEETS_CLIENT_EMAIL: z.string().nonempty(),
  GOOGLE_SHEETS_PRIVATE_KEY: z.string().nonempty(),
  GOOGLE_SHEETS_CONTACT_ME_SPREADSHEET_ID: z.string().nonempty(),
})

export const serverEnv = envSchema.parse(process.env)
