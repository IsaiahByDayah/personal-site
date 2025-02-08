// REF: https://prismic.io/docs/technologies/nextjs#3.2.-prismic-helpers

import { Box, Link, Stack, Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import * as prismic from "@prismicio/client"
import * as prismicNext from "@prismicio/next"
import { JSXMapSerializer, SliceZoneComponents } from "@prismicio/react"
import {
  LinkField,
  LinkType,
  PrismicDocument,
  RichTextField,
} from "@prismicio/types"
import dayjs from "dayjs"
import NextLink from "next/link"
import sm from "sm.json"

import { BlogrollItemProps } from "components/common/BlogrollItem"
import Quote from "slices/Quote"
import RichText from "slices/RichText"
import Slices from "slices/slice-types"

export const MAX_PAGE_SIZE = 100
export const BLOG_POST_PAGE_SIZE = 20
export const PROJECT_PAGE_SIZE = 20

///////////////////////////
///////////////////////////
// Setup Helpers & Modules
///////////////////////////
///////////////////////////

////////////////////////////
// REF: https://prismic.io/docs/core-concepts/link-resolver-route-resolver
// TODO: Look into proper typing for this function :/ - IS 12/28/2022
////////////////////////////
export const linkResolver = (doc: any) => {
  switch (doc.link_type) {
    case LinkType.Web:
      if (doc.url) return doc.url
      break
    case LinkType.Document:
      if (doc.url) return doc.url
      // MARK: Handle custom client side paths here
      break
    case LinkType.Media:
      if (doc.url) return doc.url
      break
  }

  if (doc.url) return doc.url
  return "/"
}

export type DocumentLinkField<T extends PrismicDocument> = LinkField<
  T["type"],
  T["lang"],
  T["data"]
>

export const richTextComponents = (
  getSx?: (type: keyof JSXMapSerializer) => SystemStyleObject<Theme>,
): JSXMapSerializer => ({
  paragraph: ({ children, key, type }) => (
    <Typography key={key} sx={getSx?.(type)}>
      {children}
    </Typography>
  ),
  hyperlink: ({ children, node, key, type }) => {
    return (
      // TODO: check the final href and if internal, use next/link, else use a tag (see PrismicLink component)
      <Link
        key={key}
        sx={getSx?.(type)}
        rel="none"
        target={(node.data as any).target}
        component={NextLink}
        href={linkResolver(node.data)}
      >
        {children}
      </Link>
    )
  },
  image: ({ node, key, type }) => (
    <Box
      key={key}
      sx={getSx?.(type)}
      maxWidth={1}
      component="img"
      src={node.url}
      alt={node.alt ?? undefined}
    />
  ),
})

export const sliceZoneComponents: SliceZoneComponents<Slices> = {
  rich_text: (props) => (
    <Stack key={`${props.slice.slice_type}-${props.index}`} spacing={2}>
      <RichText {...props} />
    </Stack>
  ),
  quote: Quote,
}

///////////////////////////
///////////////////////////
// API Helpers and FUnctions
///////////////////////////
///////////////////////////

export const PRISMIC_REPO_NAME = prismic.getRepositoryName(sm.apiEndpoint)

const routes = [
  {
    type: "homepage",
    path: "/",
  },
  {
    type: "about-page",
    path: "/about",
  },
  {
    type: "blog-post",
    path: "/blog/post/:uid",
  },
  {
    type: "tag",
    path: "/tag/:uid/1",
  },
  {
    type: "project",
    path: "/project/:uid",
  },
]

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient<prismic.Content.AllDocumentTypes>(
    sm.apiEndpoint,
    {
      routes,
      ...config,
    },
  )

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}

///////////////////////////
// Blog Posts
///////////////////////////

export const BASE_BLOG_POSTS_PREDICATES = [
  prismic.predicate.has("my.blog-post.uid"),
]

export const BASE_BLOG_POSTS_FETCH_FIELDS = [
  "blog-post.uid",
  "blog-post.title",
  "blog-post.thumbnail",
  "blog-post.excerpt",
  "blog-post.tags",
]

export const BASE_BLOG_POSTS_FETCH_LINKS = ["tag.name"]

export const BLOG_POSTS_DESC_UPDATED_AT_ORDERING: prismic.Ordering = {
  field: "document.last_publication_date",
  direction: "desc",
}
export const BLOG_POSTS_DEFAULT_ORDERING = BLOG_POSTS_DESC_UPDATED_AT_ORDERING

///////////////////////////
// Tags
///////////////////////////

export const BASE_TAGS_PREDICATES = [prismic.predicate.has("my.tag.uid")]

///////////////////////////
// Projects
///////////////////////////

export const BASE_PROJECTS_PREDICATES = [
  prismic.predicate.has("my.project.uid"),
]

export const BASE_PROJECTS_FETCH_FIELDS = [
  "project.uid",
  "project.title",
  "project.image",
  "project.summary",
  "project.tags",
]

export const BASE_PROJECTS_FETCH_LINKS = ["tag.name"]

export const PROJECTS_DESC_UPDATED_AT_ORDERING: prismic.Ordering = {
  field: "document.last_publication_date",
  direction: "desc",
}
export const PROJECTS_DEFAULT_ORDERING = PROJECTS_DESC_UPDATED_AT_ORDERING

///////////////////////////
///////////////////////////
// Utility Functions
///////////////////////////
///////////////////////////

export const blogPostDocumentsToBlogrollItemProps = (
  blogPostDocuments: prismic.Content.BlogPostDocument[],
): BlogrollItemProps[] =>
  blogPostDocuments.map((blogPost) => {
    let meta: string | Date = new Date(blogPost.last_publication_date)
    if (blogPost.first_publication_date !== blogPost.last_publication_date)
      meta = `Last Updated: ${dayjs(blogPost.last_publication_date).format(
        "MMMM D, YYYY",
      )}`
    return {
      href: blogPost.url ?? "/",
      meta,
      thumbnailProps: {
        src: blogPost.data.thumbnail.url ?? undefined,
        alt: blogPost.data.thumbnail.alt ?? undefined,
      },
      primary: blogPost.data.title ?? "",
      secondary: blogPost.data.excerpt ?? undefined,
      tags: blogPost.data.tags.map(
        (t) => t.tag as unknown as prismic.Content.TagDocument,
      ),
    }
  })

export const generateSimpleRichTextFieldData = (): RichTextField => [
  {
    type: "paragraph",
    text: "Architecto magni nihil accusantium.",
    spans: [],
  },
]

export const generateComplexRichTextFieldData = (): RichTextField => [
  {
    type: "paragraph",
    text: "Itaque rerum aut qui vel possimus omnis ut. Consequatur laborum tenetur. Saepe quae impedit iste asperiores aliquid tempore et. Voluptas facere laudantium eveniet et voluptatem doloremque animi placeat. Et dolores fugit. Aperiam incidunt quas eos recusandae velit in quidem sint.",
    spans: [],
  },
  {
    type: "paragraph",
    text: "Deserunt labore molestiae et harum saepe illo fuga. Natus est magni nesciunt id. Sit neque cum magni porro aspernatur omnis adipisci molestiae qui.",
    spans: [
      {
        start: 10,
        end: 22,
        type: "strong",
      },
    ],
  },
  {
    type: "paragraph",
    text: "Recusandae doloremque sed eius eos velit. Mollitia in nihil animi illum aliquam dolores laboriosam. Omnis maiores eius. In et aperiam cum omnis cum accusantium commodi perspiciatis. Repudiandae aut molestiae sunt culpa autem accusamus.",
    spans: [
      {
        start: 55,
        end: 67,
        type: "strong",
      },
      {
        start: 55,
        end: 67,
        type: "hyperlink",
        data: {
          link_type: "Web",
          url: "https://www.google.com/",
          target: "_blank",
        },
      },
    ],
  },
  {
    type: "list-item",
    text: "Et sit harum quo voluptate enim quia et pariatur",
    spans: [],
  },
  {
    type: "list-item",
    text: "Fuga voluptas voluptatem in atque iste",
    spans: [],
  },
  {
    type: "list-item",
    text: "Non accusantium eligendi",
    spans: [],
  },
]

export const generateRichTextSlice = (): prismic.Content.RichTextSlice => ({
  slice_type: "rich_text",
  slice_label: null,
  version: "ameteumblanditiis",
  variation: "default-slice",
  primary: {
    content: generateComplexRichTextFieldData(),
  },
  items: [],
})

export const generateBlogPostDocument = (
  overrides?: Partial<prismic.Content.BlogPostDocument>,
): prismic.Content.BlogPostDocument => ({
  id: "vel-aut-sit",
  uid: "vel-aut-sit",
  type: "blog-post",
  href: "",
  alternate_languages: [],
  lang: "",
  tags: [],
  linked_documents: [],
  first_publication_date: new Date("6/13/1993").toISOString(),
  last_publication_date: new Date("6/13/1993").toISOString(),
  url: "/blog/post/vel-aut-sit",
  slugs: [],
  ...overrides,
  data: {
    slices: [generateRichTextSlice()],
    title: "Libero est voluptatem eligendi voluptatibus a et.",
    thumbnail: {
      alt: "random alt text",
      url: "https://picsum.photos/1920/1080",
      copyright: null,
      dimensions: {
        height: 1080,
        width: 1920,
      },
    },
    excerpt:
      "Et perferendis facere dignissimos ullam. Aut molestiae cum minima sequi soluta occaecati voluptas nesciunt.",
    tags: [],
    projects: [],
    ...overrides?.data,
  },
})

export const generateProjectDocument = (
  overrides?: Partial<prismic.Content.ProjectDocument>,
): prismic.Content.ProjectDocument => ({
  id: "vel-aut-sit",
  uid: "vel-aut-sit",
  type: "project",
  href: "",
  alternate_languages: [],
  lang: "",
  tags: [],
  linked_documents: [],
  first_publication_date: new Date("6/13/1993").toISOString(),
  last_publication_date: new Date("6/13/1993").toISOString(),
  url: "/blog/post/vel-aut-sit",
  slugs: [],
  ...overrides,
  data: {
    title: "Granite Tuna JS",
    image: {
      alt: "random alt text",
      url: "https://picsum.photos/1920/1080",
      copyright: null,
      dimensions: {
        height: 1080,
        width: 1920,
      },
    },
    summary:
      "Et perferendis facere dignissimos ullam. Aut molestiae cum minima sequi soluta occaecati voluptas nesciunt.",
    tags: [],
    description: generateComplexRichTextFieldData(),
    highlights: [
      { highlight: generateSimpleRichTextFieldData() },
      { highlight: generateSimpleRichTextFieldData() },
      { highlight: generateSimpleRichTextFieldData() },
    ],
    client: [
      {
        name: "Cremin, Grant and Kutch",
        site: {
          link_type: LinkType.Web,
          url: "http://example.com",
        },
        bio: generateSimpleRichTextFieldData(),
        photo: {
          alt: "random alt text",
          url: "https://picsum.photos/1920/1080",
          copyright: null,
          dimensions: {
            height: 1080,
            width: 1920,
          },
        },
      },
    ],
    url: {
      link_type: "ExternalLink",
    },
    ...overrides?.data,
  },
})

export const generateTagDocument = (
  overrides?: Partial<prismic.Content.TagDocument>,
): prismic.Content.TagDocument => ({
  id: "quas-fugit-atque",
  uid: "quas-fugit-atque",
  type: "tag",
  href: "",
  alternate_languages: [],
  lang: "",
  tags: [],
  linked_documents: [],
  first_publication_date: new Date("6/13/1993").toISOString(),
  last_publication_date: new Date("6/13/1993").toISOString(),
  url: "/blog/post/quas-fugit-atque",
  slugs: [], // @deprecated
  ...overrides,
  data: {
    name: "explicabo",
    description: [
      {
        type: "paragraph",
        text: "Assumenda voluptatem optio sapiente sunt enim praesentium nihil ea tempora",
        spans: [],
      },
    ],
    ...overrides?.data,
  },
})
