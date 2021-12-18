// REF: https://prismic.io/docs/technologies/nextjs#3.2.-prismic-helpers

import { Theme, Typography, Box, Link, Stack } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import Prismic from "@prismicio/client"
import { JSXMapSerializer, SliceZoneComponents } from "@prismicio/react"
import { RichTextField, LinkType } from "@prismicio/types"
import NextLink from "next/link"
import dayjs from "dayjs"

import {
  apiEndpoint,
  accessToken,
  linkResolver,
  Router,
} from "prismicConfiguration"

import {
  AboutPageDocument,
  BlogPostDocument,
  TagDocument,
  ProjectDocument,
} from "lib/prismic/types"

import Slices from "slices/slice-types"
import RichText, { RichTextSlice } from "slices/RichText"
import Quote from "slices/Quote"

import { BlogrollItemProps } from "components/common/BlogrollItem"

export const MAX_PAGE_SIZE = 100
export const BLOG_POST_PAGE_SIZE = 20
export const PROJECT_PAGE_SIZE = 20

///////////////////////////
///////////////////////////
// Setup Helpers & Modules
///////////////////////////
///////////////////////////

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

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken, Router))

// Options to be passed to the Client
const createClientOptions = (
  req = null,
  prismicAccessToken: string | null | undefined = null,
  routes: any = null
) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  const routesOption = routes ? { routes: Router.routes } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  }
}

export const getAboutPage = async () => {
  const document = await Client().getSingle("about-page", {})
  return document as AboutPageDocument
}

export const getBlogPage = async (page: number = 1) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
    ],
    {
      fetch: [
        "blog-post.uid",
        "blog-post.title",
        "blog-post.thumbnail",
        "blog-post.excerpt",
        "blog-post.tags",
      ],
      fetchLinks: ["tag.name"],
      orderings: `[last_publication_date]`,
      page,
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )

  return response.results as BlogPostDocument[]
}

export const getTotalBlogPages = async () => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
    ],
    {
      fetch: ["blog-post.uid"],
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )
  return response.total_pages
}

export const getBlogSlugs = async () => {
  const slugs: string[] = []

  let response:
    | Awaited<ReturnType<ReturnType<typeof Client>["query"]>>
    | undefined = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "blog-post"),
        Prismic.Predicates.has("my.blog-post.uid"),
      ],
      {
        fetch: "blog-post.uid",
        pageSize: MAX_PAGE_SIZE,
        page,
      }
    )

    const responseSlugs = response.results.map((blogPost) => blogPost.uid!)
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}

export const getBlogBySlug = async (slug: string) => {
  const document = await Client().getByUID("blog-post", slug, {
    fetchLinks: ["tag.name"],
  })
  return document as BlogPostDocument
}

export const getSurroundingBlogPosts = async (blogId: string) => {
  const previous = (
    await Client().query(Prismic.Predicates.at("document.type", "blog-post"), {
      pageSize: 1,
      after: blogId,
      orderings: "[document.last_publication_date desc]",
    })
  ).results[0] as BlogPostDocument | undefined

  const next = (
    await Client().query(Prismic.Predicates.at("document.type", "blog-post"), {
      pageSize: 1,
      after: blogId,
      orderings: "[document.last_publication_date]",
    })
  ).results[0] as BlogPostDocument | undefined

  return {
    previous: previous ?? null,
    next: next ?? null,
  }
}

export const getTagPage = async (tagId: string, page: number = 1) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
      Prismic.Predicates.at("my.blog-post.tags.tag", tagId),
    ],
    {
      fetch: [
        "blog-post.uid",
        "blog-post.title",
        "blog-post.thumbnail",
        "blog-post.excerpt",
        "blog-post.tags",
      ],
      fetchLinks: ["tag.name"],
      orderings: `[last_publication_date]`,
      page,
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )

  return response.results as BlogPostDocument[]
}

export const getTotalTagPages = async (tagId: string) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
      Prismic.Predicates.at("my.blog-post.tags.tag", tagId),
    ],
    {
      fetch: ["blog-post.uid"],
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )
  return response.total_pages
}

export const getAllTags = async () => {
  const tags: TagDocument[] = []

  let response:
    | Awaited<ReturnType<ReturnType<typeof Client>["query"]>>
    | undefined = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "tag"),
        Prismic.Predicates.has("my.tag.uid"),
      ],
      {
        pageSize: MAX_PAGE_SIZE,
        page,
      }
    )

    tags.push(...(response.results as TagDocument[]))
  } while (tags.length < response.total_results_size)

  return tags
}

export const getTagByUID = async (uid: string) => {
  const tag = await Client().getByUID("tag", uid, {})
  return tag as TagDocument
}

export const getProjectsPage = async (page: number = 1) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "project"),
      Prismic.Predicates.has("my.project.uid"),
    ],
    {
      fetch: [
        "project.uid",
        "project.title",
        "project.image",
        "project.summary",
        "project.tags",
      ],
      fetchLinks: ["tag.name"],
      orderings: `[last_publication_date]`,
      page,
      pageSize: PROJECT_PAGE_SIZE,
    }
  )

  return response.results as ProjectDocument[]
}

export const getTotalProjectsPages = async () => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "project"),
      Prismic.Predicates.has("my.project.uid"),
    ],
    {
      fetch: ["project.uid"],
      pageSize: PROJECT_PAGE_SIZE,
    }
  )
  return response.total_pages
}

export const getProjectSlugs = async () => {
  const slugs: string[] = []

  let response:
    | Awaited<ReturnType<ReturnType<typeof Client>["query"]>>
    | undefined = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "project"),
        Prismic.Predicates.has("my.project.uid"),
      ],
      {
        fetch: "project.uid",
        pageSize: MAX_PAGE_SIZE,
        page,
      }
    )

    const responseSlugs = response.results.map((blogPost) => blogPost.uid!)
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}

export const getProjectBySlug = async (slug: string) => {
  const document = await Client().getByUID("project", slug, {
    fetchLinks: ["tag.name"],
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
