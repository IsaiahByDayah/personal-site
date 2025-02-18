import { withPayload } from "@payloadcms/next/withPayload"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/bluesky",
      destination: "https://bsky.app/profile/isaiahsmith.dev",
      permanent: false,
    },
    {
      source: "/twitter",
      destination: "https://twitter.com/IsaiahByDayah",
      permanent: false,
    },
    {
      source: "/twitch",
      destination: "https://www.twitch.tv/isaiahbydayah",
      permanent: false,
    },
    {
      source: "/youtube",
      destination: "https://www.youtube.com/isaiahsmith",
      permanent: false,
    },
    {
      source: "/patreon",
      destination: "https://www.patreon.com/isaiahbydayah",
      permanent: false,
    },
    {
      source: "/github",
      destination: "https://github.com/IsaiahByDayah",
      permanent: false,
    },
  ],
}

export default withPayload(nextConfig)
