import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"
import Link from "next/link"
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
          <p className="text-xl font-black text-(--service-color)">
            {project.data.title}
          </p>
          <p className="mt-2">{project.data.summary}</p>
          <Link
            className="btn btn-outline btn--jet mt-4 inline-flex flex-row items-center gap-1"
            href={`/project/${project.uid}`}
          >
            Read More <HiArrowSmallRight className="stroke-[0.5]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
