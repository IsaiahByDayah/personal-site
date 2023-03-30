// REF: https://prismic.io/blog/nextjs-sites-on-demand-isr

import { NextApiHandler } from "next"

// Import your app's Link Resolver (if your app uses one)

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
const handler: NextApiHandler = async (req, res) => {
  console.log("[DEBUG] echo:", req)
  res.json(req.body)
}

export default handler
