import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import clsx from "clsx"
import Link from "next/link"
import { ProjectDocument } from "prismicio-types"
import { HiArrowSmallRight } from "react-icons/hi2"

import { ProjectCard } from "@/app/_components/ProjectCard"

interface ProjectsProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  projects?: ProjectDocument[]
}

export const Projects = ({
  className,
  title,
  description,
  projects,
}: ProjectsProps) => (
  <div id="projects" className={clsx("", className)}>
    <h2 className="txt-heading text-center">{title}</h2>
    <div className="prose txt-prose mt-4 max-w-none text-center text-balance">
      <PrismicRichText field={description} />
    </div>
    <div className="mt-10 flex flex-col gap-4">
      {projects?.map((project, idx) => (
        <ProjectCard key={project.uid} project={project} flip={idx % 2 === 1} />
      ))}
    </div>
    <div className="mt-10 text-center">
      <Link
        className="btn btn-ghost btn--mist inline-flex flex-row items-center gap-1"
        href="/projects"
      >
        View All Projects
        <HiArrowSmallRight className="stroke-[0.5]" />
      </Link>
    </div>
  </div>
)
