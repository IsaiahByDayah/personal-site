import { createClient } from "@/lib/prismicio"

const Page = async ({ params }: PageProps<"/blog/[slug]">) => {
  const { slug } = await params

  const prismic = createClient()

  const blog = await prismic.getByUID("blog_post", slug)

  return <div>{blog.data.title}</div>
}

export default Page
