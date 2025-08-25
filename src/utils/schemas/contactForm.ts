import isMobilePhone from "validator/es/lib/isMobilePhone"
import z from "zod"

export const contactFormMessageMaxLength = 500

export const contactFormDataSchema = z.object({
  name: z.string().nonempty("Name required"),
  contact: z.union([
    z.email("Invalid email or phone number (US or Canada)"),
    z.string().refine((str) => isMobilePhone(str, ["en-CA", "en-US"]), {
      error: "Invalid email or phone number (US or Canada)",
    }),
  ]),
  message: z
    .string()
    .nonempty("Message required")
    .max(
      contactFormMessageMaxLength,
      `Please keep your message below ${contactFormMessageMaxLength} characters`,
    ),
  companyOrOrganization: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormDataSchema>
