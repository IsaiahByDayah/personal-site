import type { CollectionConfig } from "payload"

export const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      type: "upload",
      name: "heroImage",
      relationTo: "media",
    },
    {
      type: "text",
      name: "title",
      required: true,
    },
    {
      type: "richText",
      name: "content",
      required: true,
    },
    {
      type: "date",
      name: "publishedAt",
    },
  ],
}
