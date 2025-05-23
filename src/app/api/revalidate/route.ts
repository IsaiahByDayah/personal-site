import { type WebhookBody } from "@prismicio/client"
import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

import { verboseLog } from "@/utils/debug/server"

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WebhookBody
    const isTest = body.type === "test-trigger"
    const isValid = body.secret === process.env.PRISMIC_WEBHOOK_SECRET

    if (isTest) {
      verboseLog({
        PRISMIC_WEBHOOK_SECRET: process.env.PRISMIC_WEBHOOK_SECRET,
        prismicWebhookBody: body,
        isValid,
      })
      return NextResponse.json({ testRecieved: true, isValid })
    }

    // Check for secret to confirm this is a valid request
    if (!isValid) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    revalidateTag("prismic")

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    verboseLog("[/api/revalidate] Caught Error: ", err)
    return NextResponse.json({ message: "Invalid body" }, { status: 400 })
  }
}
