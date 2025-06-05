import { ServiceDocument } from "prismicio-types"

import { Hero } from "@/app/_components/Hero"
import { Services } from "@/app/_components/Services"
import { createClient } from "@/lib/prismicio"
import { isNonNullable } from "@/utils"

const Page = async () => {
  const prismic = createClient()
  const home = await prismic
    .getSingle("home", {
      graphQuery: `
      {
        home {
          ...homeFields
          services {
            ...servicesFields
            service {
              ...serviceFields
            }
          }
        }
      }
    `,
    })
    .catch(() => null)

  console.log({ home })
  const services = home?.data.services
    .map((item) => {
      if (item.service.link_type !== "Document") {
        return null
      }

      const service = item.service as typeof item.service & ServiceDocument

      if (service.isBroken) {
        return null
      }

      return service
    })
    .filter(isNonNullable)

  return (
    <div>
      <div className="">
        <Hero
          className="m-auto w-full max-w-5xl px-2 py-8 sm:py-16 md:px-4 md:py-24 lg:px-20"
          greeting={home?.data.greeting}
          title={home?.data.job_title}
          description={home?.data.description}
          photo={home?.data.photo}
        />

        {/* Services */}
        <div className="bg-mist-50">
          <Services
            className="m-auto w-full max-w-7xl py-16 md:px-4 lg:px-20"
            title={home?.data.services_title}
            description={home?.data.services_blurb}
            services={services}
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
