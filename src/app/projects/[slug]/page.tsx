import { createClient } from "@/lib/prismicio"

const Page = async ({ params }: PageProps<"/projects/[slug]">) => {
  const { slug } = await params

  const prismic = createClient()

  const project = await prismic.getByUID("project", slug)

  return <div>{project.data.title}</div>
}

export default Page
