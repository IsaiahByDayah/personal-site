import { ProjectDocument, ServiceDocument } from "prismicio-types"

import { About } from "@/app/_components/About"
import { Hero } from "@/app/_components/Hero"
import { Projects } from "@/app/_components/Projects"
import { Services } from "@/app/_components/Services"
import { Skills } from "@/app/_components/Skills"
import { createClient } from "@/lib/prismicio"
import { isNonNullable } from "@/utils"
import { parseDocumentFromRelationshipField } from "@/utils/prismic"

const Page = async () => {
  const prismic = createClient()
  const home = await prismic.getSingle("home").catch(() => null)

  console.log({ home })

  const services = home?.data.services
    .map((item) =>
      parseDocumentFromRelationshipField<ServiceDocument, typeof item.service>(
        item.service,
      ),
    )
    .filter(isNonNullable)

  const projects = home?.data.projects
    .map((item) =>
      parseDocumentFromRelationshipField<ProjectDocument, typeof item.project>(
        item.project,
      ),
    )
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
      <div className="bg-mist-50">
        <About
          className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
          title={home?.data.about_title}
          description={home?.data.about_blurb}
        />
      </div>

      {/* Skills */}
      <Skills
        className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
        title={home?.data.skills_title}
        description={home?.data.skills_blurb}
        skills={home?.data.skills}
      />

      {/* Projects */}
      <div className="bg-mist-50">
        <Projects
          className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
          title={home?.data.projects_title}
          description={home?.data.projects_blurb}
          projects={projects}
        />
      </div>

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
