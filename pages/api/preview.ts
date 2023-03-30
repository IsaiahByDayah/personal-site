import { redirectToPreviewURL, setPreviewData } from "@prismicio/next"
import { NextApiHandler } from "next"

import { createClient } from "lib/prismic/util"

const handler: NextApiHandler = async (req, res) => {
  const client = createClient({ req })

  await setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client })
}

export default handler
