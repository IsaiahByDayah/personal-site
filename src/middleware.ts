// REF: https://www.58bits.com/blog/chaining-or-combining-nextjs-middleware

import { chainMiddleware } from "@/utils/middleware"

export const middleware = chainMiddleware([
  // withAuth,
  // withRedirects,
  // ...
])

// Configure paths that trigger the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
