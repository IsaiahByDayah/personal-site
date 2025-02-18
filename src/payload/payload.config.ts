import path from "path"
import { fileURLToPath } from "url"

import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

if (!process.env.PAYLOAD_SECRET) {
  throw new Error("PAYLOAD_SECRET missing from env.")
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL missing from env.")
}

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET,

  // Whichever Database Adapter you're using should go here
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL,
    },
  }),

  // For image manipulation
  sharp,

  // Update generated TS types output path
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
