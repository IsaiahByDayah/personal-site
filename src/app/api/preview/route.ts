import { redirectToPreviewURL } from "@prismicio/next"
import { NextRequest } from "next/server"

import { createClient } from "@/lib/prismicio"

export async function GET(request: NextRequest) {
  const client = createClient()

  return await redirectToPreviewURL({ client, request })
}
