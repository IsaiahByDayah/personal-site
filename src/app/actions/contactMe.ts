"use server"

import z from "zod"

import { addRows } from "@/lib/google/sheets"
import { serverEnv } from "@/utils/env/server"
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

  try {
    await addRows({
      spreadsheetId: serverEnv.GOOGLE_SHEETS_CONTACT_ME_SPREADSHEET_ID,
      values: [
        [
          contactFormData.name,
          contactFormData.companyOrOrganization,
          contactFormData.contact,
          contactFormData.message,
          "Unseen",
        ],
      ],
    })
  } catch (e) {
    console.log("Error appending values to sheet", e)
    return {
      success: false,
      error: "Unable to store submission",
    }
  }

  return {
    success: true,
  }
}
