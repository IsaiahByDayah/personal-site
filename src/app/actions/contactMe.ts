"use server"

import z from "zod"

import { wait } from "@/utils"
import {
  contactFormDataSchema,
  type ContactFormData,
} from "@/utils/schemas/contactForm"

interface ContactMeError {
  success: false
  error?: string
}
interface ContactMeSuccess {
  success: true
}

type ContactMeResponse = ContactMeSuccess | ContactMeError

export const contactMe = async (
  contactFormData: ContactFormData,
): Promise<ContactMeResponse> => {
  const parseRes = contactFormDataSchema.safeParse(contactFormData)

  if (!parseRes.success) {
    return {
      success: false,
      error: z.prettifyError(parseRes.error),
    }
  }

  // TODO: submit to google sheets api
  await wait(1000)

  return {
    success: false,
    error: "TODO",
  }
}
