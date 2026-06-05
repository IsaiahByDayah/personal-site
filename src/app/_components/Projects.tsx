import { KeyTextField, RichTextField } from "@prismicio/client"
import clsx from "clsx"
import Link from "next/link"
import { ProjectDocument } from "prismicio-types"
import { Fragment } from "react"
import { HiArrowSmallRight } from "react-icons/hi2"

import { HomepageSection } from "@/app/_components/HomepageSection"
import { ProjectCard } from "@/app/_components/ProjectCard"

interface ProjectsProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  projects?: ProjectDocument[]
  linkToAll?: boolean
}

export const Projects = ({
  className,
  title,
  description,
  projects,
  linkToAll,
}: ProjectsProps) => (
  <HomepageSection
    id="projects"
    className={clsx("", className)}
    title={title}
    description={description}
  >
    <div className="mt-10 flex flex-col gap-10">
      {projects?.map((project, idx) => (
        <Fragment key={project.uid}>
          {idx !== 0 && <hr className="m-auto w-1/3" />}
          <ProjectCard project={project} flip={idx % 2 === 1} />
        </Fragment>
      ))}
    </div>
    {linkToAll && (
      <div className="mt-10 text-center">
        <Link
          className="btn btn-ghost btn--mist inline-flex flex-row items-center gap-1"
          href="/projects"
        >
          View All Projects
          <HiArrowSmallRight className="stroke-[0.5]" />
        </Link>
      </div>
    )}
  </HomepageSection>
)
