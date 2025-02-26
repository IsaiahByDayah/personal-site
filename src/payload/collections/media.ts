import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  fields: [
    {
      type: "text",
      name: "alt",
      required: true,
    },
    {
      type: "richText",
      name: "caption",
    },
  ],
  upload: {
    adminThumbnail: "thumbnail",
    focalPoint: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
      },
      {
        name: "square",
        width: 500,
        height: 500,
      },
      {
        name: "small",
        width: 600,
      },
      {
        name: "medium",
        width: 900,
      },
      {
        name: "large",
        width: 1400,
      },
      {
        name: "xlarge",
        width: 1920,
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        crop: "center",
      },
    ],
  },
}
