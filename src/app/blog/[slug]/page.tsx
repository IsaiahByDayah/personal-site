import { createClient } from "@/lib/prismicio"

const Page = async () => {
  const prismic = createClient()

  return <div>Blog article!</div>
}

export default Page
