import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"
import { ProjectDocument } from "prismicio-types"
import { HiArrowSmallRight } from "react-icons/hi2"

interface ProjectCardProps {
  className?: string
  project?: ProjectDocument
  flip?: boolean
}

export const ProjectCard = ({
  className,
  project,
  flip = false,
}: ProjectCardProps) => {
  if (!project) {
    return null
  }

  console.log(project)

  return (
    <div className={clsx("@container", className)}>
      <div
        className={clsx("flex flex-col items-center gap-4", {
          "@xl:flex-row": !flip,
          "@xl:flex-row-reverse": flip,
        })}
      >
        <PrismicNextImage
          className="border-jet-500 bg-jet-500 min-w-0 basis-1/2 self-start rounded-lg border-4"
          field={project.data.thumbnail}
        />
        <div className="basis-1/2">
          <p className="text-xl font-black">{project.data.title}</p>
          <p className="mt-2">{project.data.summary}</p>
          {project.data.primary_link && (
            <PrismicNextLink
              className="btn btn-outline btn--jet mt-4 inline-flex flex-row items-center gap-1"
              field={project.data.primary_link}
            >
              View Project <HiArrowSmallRight className="stroke-[0.5]" />
            </PrismicNextLink>
          )}
        </div>
      </div>
    </div>
  )
}
