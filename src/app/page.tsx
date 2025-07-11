import { isFilled } from "@prismicio/client"
import { ProjectDocument, ServiceDocument } from "prismicio-types"

import { Hero } from "@/app/_components/Hero"
import { Projects } from "@/app/_components/Projects"
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
          projects {
            ...projectsFields
            project {
              ...projectFields
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
      if (
        item.service.link_type !== "Document" ||
        !isFilled.contentRelationship(item.service)
      ) {
        return null
      }

      const service = item.service as typeof item.service & ServiceDocument

      if (service.isBroken) {
        return null
      }

      return service
    })
    .filter(isNonNullable)

  const projects = home?.data.projects
    .map((item) => {
      if (
        item.project.link_type !== "Document" ||
        !isFilled.contentRelationship(item.project)
      ) {
        return null
      }

      const project = item.project as typeof item.project & ProjectDocument

      if (project.isBroken) {
        return null
      }

      return project
    })
    .filter(isNonNullable)

  return (
    <div>
      <Hero
        className="m-auto w-full max-w-5xl px-2 py-8 sm:py-16 md:px-4 md:py-24 lg:px-20"
        greeting={home?.data.greeting}
        title={home?.data.job_title}
        description={home?.data.description}
        photo={home?.data.photo}
      />

      {/* About */}

      {/* Skills */}

      {/* Projects */}
      <Projects
        className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
        title={home?.data.projects_title}
        description={home?.data.projects_blurb}
        projects={projects}
      />

      {/* Services */}
      <div className="bg-mist-50">
        <Services
          className="m-auto w-full max-w-7xl px-2 py-16 md:px-4 lg:px-20"
          title={home?.data.services_title}
          description={home?.data.services_blurb}
          services={services}
        />
      </div>

      {/* Testimonials */}

      {/* Blog */}

      {/* Contact Form */}
    </div>
  )
}

/**
 * what you do
 * how long youve been doing it
 * are you taking clients
 * how to contact you
 * examples of work
 * whats your vibe?
 *
 *
 */

export default Page
