import { PrismicRichText } from "@prismicio/react"

import { ProjectCard } from "@/app/_components/ProjectCard"
import { createClient } from "@/lib/prismicio"

const Page = async () => {
  const prismic = createClient()

  const projectsGallery = await prismic
    .getSingle("projects_gallery")
    .catch(() => null)

  const projects = await prismic.getAllByType("project")

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="txt-heading text-center">
            {projectsGallery?.data.title}
          </h2>
          <div className="prose txt-prose mt-4 max-w-none text-center text-balance">
            <PrismicRichText field={projectsGallery?.data.description} />
          </div>
          <div className="mt-16 space-y-20 lg:mt-24">
            {projects.map((project) => (
              <ProjectCard key={project.uid} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
