import { Hero } from "@/app/_components/Hero"
import { Services } from "@/app/_components/Services"
import { createClient } from "@/lib/prismicio"

const Page = async () => {
  const prismic = createClient()
  const home = await prismic.getSingle("home").catch(() => null)

  console.log({ home })

  return (
    <div>
      <div className="">
        <Hero
          className="m-auto w-full max-w-5xl px-2 pt-8 pb-16 md:px-4 lg:px-20"
          greeting={home?.data.greeting}
          title={home?.data.job_title}
          description={home?.data.description}
          photo={home?.data.photo}
        />

        {/* Services */}
        <div className="bg-mist-500 light-on-dark">
          <Services
            className="m-auto w-full max-w-5xl py-16 md:px-4 lg:px-20"
            title={home?.data.services_title}
            description={home?.data.services_blurb}
            services={home?.data.services}
          />
        </div>

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
