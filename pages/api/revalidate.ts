// REF: https://prismic.io/blog/nextjs-sites-on-demand-isr

import * as prismicH from "@prismicio/helpers"
import { NextApiHandler } from "next"

// Import your app's Link Resolver (if your app uses one)
import { createClient, linkResolver } from "lib/prismic/util"

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
const handler: NextApiHandler = async (req, res) => {
  console.log("[DEBUG]:", req)
  if (req.body.type === "api-update" && req.body.documents.length > 0) {
    // Check for secret to confirm this is a valid request
    if (req.body.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
      res.status(401).json({ message: "Invalid token" })
      return
    }

    // If you have a `createClient()` function defined elsewhere in
    // your app, use that instead
    const client = createClient()

    // Get a list of URLs for any new, updated, or deleted documents
    const documents = await client.getAllByIDs(req.body.documents)
    const urls = documents.map((doc) => prismicH.asLink(doc, linkResolver))

    console.log("[DEBUG]:", { urls })

    try {
      // Revalidate the URLs for those documents
      await Promise.all(urls.map(async (url) => await res.revalidate(url)))

      res.json({ revalidated: true })
      return
    } catch (err) {
      // If there was an error, Next.js will continue to show
      // the last successfully generated page
      res.status(500).send("Error revalidating")
      return
    }
  }

  // If the request's body is unknown, tell the requester
  res.status(400).json({ message: "Invalid body" })
}

export default handler
