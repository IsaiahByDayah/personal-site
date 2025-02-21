import path from "path"
import { fileURLToPath } from "url"

import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { resendAdapter } from "@payloadcms/email-resend"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Users } from "payload/collections/users"
import { migrations } from "payload/migrations"

if (!process.env.PAYLOAD_SECRET) {
  throw new Error("PAYLOAD_SECRET missing from env.")
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL missing from env.")
}

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },

  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Users],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET,

  // Whichever Database Adapter you're using should go here
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL,
    },
    migrationDir: path.resolve(dirname, "migrations"),
    prodMigrations: migrations,
  }),

  // For image manipulation
  sharp,

  // Update generated TS types output path
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  // Update default payload routes
  routes: {
    api: "/payload-api",
  },

  graphQL: {
    disable: true,
  },

  email: resendAdapter({
    defaultFromAddress: "noreply@smaaws.com",
    defaultFromName: "Personal Site",
    apiKey: process.env.RESEND_API_KEY || "",
  }),
})
