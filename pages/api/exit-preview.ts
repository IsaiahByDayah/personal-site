import { exitPreview } from "@prismicio/next"
import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  await exitPreview({ req, res })
}

export default handler
