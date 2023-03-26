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

import {
  AboutPageDocument,
  BlogPostDocument,
  ProjectDocument,
  TagDocument,
} from "lib/prismic/types"

import Quote from "slices/Quote"
import RichText, { RichTextSlice } from "slices/RichText"
import Slices from "slices/slice-types"

import { BlogrollItemProps } from "components/common/BlogrollItem"

type AllDocumentTypes =
  | AboutPageDocument
  | BlogPostDocument
  | ProjectDocument
  | TagDocument

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
      if (doc.type === "article") {
        if (Boolean(doc.data?.type)) return `/${doc.data.type}/${doc.uid}`
        return `/article/${doc.uid}`
      }
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
  getSx?: (type: keyof JSXMapSerializer) => SystemStyleObject<Theme>
): JSXMapSerializer => ({
  paragraph: ({ children, key, type }) => (
    <Typography key={key} sx={getSx?.(type)}>
      {children}
    </Typography>
  ),
  hyperlink: ({ children, node, key, type }) => {
    return (
      // TODO: check the final href and if internal, use next/link, else use a tag (see PrismicLink compoennt)
      <NextLink key={key} href={linkResolver(node.data)} passHref>
        <Link sx={getSx?.(type)} rel="none" target={(node.data as any).target}>
          {children}
        </Link>
      </NextLink>
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
  // const client = prismic.createClient<prismic.Content.AllDocumentTypes>(
  const client = prismic.createClient<AllDocumentTypes>(sm.apiEndpoint, {
    routes,
    ...config,
  })

  // prismicNext.enableAutoPreviews({
  //   client,
  //   previewData: config.previewData,
  //   req: config.req,
  // })

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

export const getAboutPage = async () => {
  const client = createClient()
  const document = await client.getSingle("about-page", {})
  return document as AboutPageDocument
}

export const getBlogPage = async (page: number = 1) => {
  const client = createClient()
  const response = await client.getByType("blog-post", {
    predicates: BASE_BLOG_POSTS_PREDICATES,
    fetch: BASE_BLOG_POSTS_FETCH_FIELDS,
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
    orderings: BLOG_POSTS_DEFAULT_ORDERING,
    page,
    pageSize: BLOG_POST_PAGE_SIZE,
  })

  return response.results as BlogPostDocument[]
}

export const getTotalBlogPages = async () => {
  const client = createClient()
  const response = await client.getByType("blog-post", {
    predicates: BASE_BLOG_POSTS_PREDICATES,
    fetch: ["blog-post.uid"],
    pageSize: BLOG_POST_PAGE_SIZE,
  })
  return response.total_pages
}

export const getBlogSlugs = async () => {
  const client = createClient()

  const slugs: string[] = []

  let response: any = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await client.getByType("blog-post", {
      predicates: BASE_BLOG_POSTS_PREDICATES,
      fetch: "blog-post.uid",
      pageSize: MAX_PAGE_SIZE,
      page,
    })

    const responseSlugs = response.results.map(
      (blogPost: BlogPostDocument) => blogPost.uid!
    )
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}

export const getBlogBySlug = async (slug: string) => {
  const client = createClient()
  const document = await client.getByUID("blog-post", slug, {
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
  })
  return document as BlogPostDocument
}

export const getSurroundingBlogPosts = async (blogId: string) => {
  const client = createClient()
  const previous = (
    await client.getByType("blog-post", {
      pageSize: 1,
      after: blogId,
      orderings: {
        field: "document.last_publication_date",
        direction: "desc",
      },
    })
  ).results[0] as BlogPostDocument | undefined

  const next = (
    await client.getByType("blog-post", {
      pageSize: 1,
      after: blogId,
      orderings: {
        field: "document.last_publication_date",
        direction: "asc",
      },
    })
  ).results[0] as BlogPostDocument | undefined

  return {
    previous: previous ?? null,
    next: next ?? null,
  }
}

export const getTagPage = async (tagId: string, page: number = 1) => {
  const client = createClient()
  const response = await client.getByType("blog-post", {
    predicates: [
      ...BASE_BLOG_POSTS_PREDICATES,
      prismic.predicate.at("my.blog-post.tags.tag", tagId),
    ],
    fetch: BASE_BLOG_POSTS_FETCH_FIELDS,
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
    orderings: BLOG_POSTS_DEFAULT_ORDERING,
    page,
    pageSize: BLOG_POST_PAGE_SIZE,
  })

  return response.results as BlogPostDocument[]
}

export const getTotalTagPages = async (tagId: string) => {
  const client = createClient()
  const response = await client.getByType("blog-post", {
    predicates: [
      ...BASE_BLOG_POSTS_PREDICATES,
      prismic.predicate.at("my.blog-post.tags.tag", tagId),
    ],
    fetch: ["blog-post.uid"],
    pageSize: BLOG_POST_PAGE_SIZE,
  })
  return response.total_pages
}

export const getAllTags = async () => {
  const client = createClient()
  const tags: TagDocument[] = []

  let response: any = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await client.getByType("tag", {
      predicates: BASE_TAGS_PREDICATES,
      pageSize: MAX_PAGE_SIZE,
      page,
    })

    tags.push(...(response.results as TagDocument[]))
  } while (tags.length < response.total_results_size)

  return tags
}

export const getTagByUID = async (uid: string) => {
  const client = createClient()
  const tag = await client.getByUID("tag", uid, {
    predicates: BASE_TAGS_PREDICATES,
  })
  return tag as TagDocument
}

export const getProjectsPage = async (page: number = 1) => {
  const client = createClient()
  const response = await client.getByType("project", {
    predicates: BASE_PROJECTS_PREDICATES,
    fetch: BASE_PROJECTS_FETCH_FIELDS,
    fetchLinks: BASE_PROJECTS_FETCH_LINKS,
    orderings: PROJECTS_DEFAULT_ORDERING,
    page,
    pageSize: PROJECT_PAGE_SIZE,
  })

  return response.results as ProjectDocument[]
}

export const getTotalProjectsPages = async () => {
  const client = createClient()
  const response = await client.getByType("project", {
    predicates: BASE_PROJECTS_PREDICATES,
    fetch: ["project.uid"],
    pageSize: PROJECT_PAGE_SIZE,
  })
  return response.total_pages
}

export const getProjectSlugs = async () => {
  const client = createClient()
  const slugs: string[] = []

  let response: any = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await client.getByType("project", {
      predicates: BASE_PROJECTS_PREDICATES,
      fetch: ["project.uid"],
      pageSize: MAX_PAGE_SIZE,
      page,
    })

    const responseSlugs = response.results.map(
      (project: ProjectDocument) => project.uid!
    )
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}

export const getProjectBySlug = async (slug: string) => {
  const client = createClient()
  const document = await client.getByUID("project", slug, {
    fetchLinks: BASE_PROJECTS_FETCH_LINKS,
  })
  return document as ProjectDocument
}

///////////////////////////
///////////////////////////
// Utility Functions
///////////////////////////
///////////////////////////

export const blogPostDocumentsToBlogrollItemProps = (
  blogPostDocuments: BlogPostDocument[]
): BlogrollItemProps[] =>
  blogPostDocuments.map((blogPost) => {
    let meta: string | Date = new Date(blogPost.last_publication_date)
    if (blogPost.first_publication_date !== blogPost.last_publication_date)
      meta = `Last Updated: ${dayjs(blogPost.last_publication_date).format(
        "MMMM D, YYYY"
      )}`
    return {
      href: blogPost.url ?? "/",
      meta,
      thumbnailProps: {
        src: blogPost.data.thumbnail.url,
        alt: blogPost.data.thumbnail.alt,
      },
      primary: blogPost.data.title,
      secondary: blogPost.data.excerpt,
      tags: blogPost.data.tags.map((t) => t.tag as unknown as TagDocument),
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

export const generateRichTextSliceData = (): RichTextSlice =>
  ({
    slice_type: "rich_text",
    slice_label: null,
    version: "ameteumblanditiis",
    variation: "default-slice",
    primary: {
      content: generateComplexRichTextFieldData(),
    },
    items: [{}],
  } as RichTextSlice)

export const generateBlogPostDocument = (
  overrides?: Partial<BlogPostDocument>
): BlogPostDocument =>
  ({
    uid: "vel-aut-sit",
    first_publication_date: new Date("6/13/1993").toISOString(),
    last_publication_date: new Date("6/13/1993").toISOString(),
    url: "/blog/post/vel-aut-sit",
    ...overrides,
    data: {
      slices: [generateRichTextSliceData()],
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
      tags: [
        {
          tag: {
            id: "id-corporis",
            uid: "corporis",
            data: { name: "corporis" },
            url: "/tag/corporis/1",
          },
        },
      ] as any,
      ...overrides?.data,
    },
  } as BlogPostDocument)

export const generateProjectDocument = (
  overrides?: Partial<ProjectDocument>
): ProjectDocument =>
  ({
    uid: "vel-aut-sit",
    first_publication_date: new Date("6/13/1993").toISOString(),
    last_publication_date: new Date("6/13/1993").toISOString(),
    url: "/blog/post/vel-aut-sit",
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
      tags: [
        {
          tag: {
            id: "id-corporis",
            uid: "corporis",
            data: { name: "corporis" },
            url: "/tag/corporis/1",
          },
        },
      ] as any,
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
      ...overrides?.data,
    },
  } as ProjectDocument)
