import isMobilePhone from "validator/es/lib/isMobilePhone"
import z from "zod"

export const contactFormDataSchema = z.object({
  name: z.string().min(1, "Name required"),
  contact: z.union([
    z.email("Invalid email or phone number (US or Canada)"),
    z.string().refine((str) => isMobilePhone(str, ["en-CA", "en-US"]), {
      error: "Invalid email or phone number (US or Canada)",
    }),
  ]),
  message: z.string().min(1, "Message required"),
  companyOrOrganization: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormDataSchema>
