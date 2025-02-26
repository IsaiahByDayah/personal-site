import { createHash } from "crypto"

import { NodeHttpHandler } from "@smithy/node-http-handler"
import { type HttpRequest } from "@smithy/protocol-http"
import { type HttpHandlerOptions } from "@smithy/types"

export class B2RequestHandler extends NodeHttpHandler {
  constructor() {
    super()
  }

  async handle(request: HttpRequest, options: HttpHandlerOptions | undefined) {
    const md5Hash = createHash("md5")

    const headers = request.headers

    // Remove any checksum headers
    Object.keys(headers).forEach((header) => {
      if (
        header.toLowerCase().startsWith("x-amz-checksum-") ||
        header.toLowerCase().startsWith("x-amz-sdk-checksum-")
      ) {
        delete headers[header]
      }
    })

    // Add MD5
    if (request.body) {
      const bodyContent = Buffer.from(request.body)
      headers["Content-MD5"] = md5Hash.update(bodyContent).digest("base64")
    }

    return super.handle(request, options)
  }
}
