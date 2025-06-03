import { Hero } from "@/app/_components/Hero"
import { createClient } from "@/lib/prismicio"

const Page = async () => {
  const prismic = createClient()
  const home = await prismic.getSingle("home").catch(() => null)

  console.log({ home })

  return (
    <div>
      <div className="px-2">
        <Hero
          className="m-auto w-full max-w-5xl py-8 md:px-4 lg:px-20"
          greeting={home?.data.greeting}
          title={home?.data.job_title}
          description={home?.data.description}
          photo={home?.data.photo}
        />

        {/* Services */}

        {/* Projects */}

        {/* Testimonials */}

        {/* About */}

        {/* Skills */}

        {/* Blog */}
      </div>
    </div>
  )
}

export default Page
