import { NextResponse } from "next/server"

import packageJson from "../../../../package.json"

export const GET = async () => {
  return NextResponse.json(
    {
      version: packageJson.version,
      hash: process.env.SOURCE_COMMIT,
    },
    { status: 200 },
  )
}
