import { google } from "googleapis"

import "server-only"

import { serverEnv } from "@/utils/env/server"

const auth = new google.auth.GoogleAuth({
  scopes: "https://www.googleapis.com/auth/spreadsheets",
  credentials: {
    client_email: serverEnv.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: serverEnv.GOOGLE_SHEETS_PRIVATE_KEY,
  },
})

const sheets = google.sheets({
  version: "v4",
  auth,
})

interface AddRowsOptions {
  spreadsheetId: string
  values: any[][]
  range?: string
  valueInputOption?: string
}
export const addRows = async ({
  spreadsheetId,
  values,
  range = "Sheet1!A2",
  valueInputOption = "USER_ENTERED",
}: AddRowsOptions) =>
  sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption,
    requestBody: {
      values,
    },
  })
