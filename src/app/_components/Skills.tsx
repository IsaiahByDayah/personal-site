import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import clsx from "clsx"
import { HomeDocumentDataSkillsItem } from "prismicio-types"
import Marquee from "react-fast-marquee"

import { SkillLink } from "@/app/_components/SkillLink"

const MARQUEE_SPEED = 20

interface SkillsProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  skills?: HomeDocumentDataSkillsItem[]
}

export const Skills = ({
  className,
  title,
  description,
  skills,
}: SkillsProps) => {
  const skillsHalfIndex = Math.floor((skills?.length ?? 0) / 2)
  const topSkills = skills?.slice(0, skillsHalfIndex)
  const bottomSkills = skills?.slice(skillsHalfIndex)

  console.log({ skillsHalfIndex, topSkills, bottomSkills })
  return (
    <div id="skills" className={clsx("", className)}>
      <h2 className="txt-heading text-center">{title}</h2>
      <div className="prose txt-prose mt-4 max-w-none text-center text-balance">
        <PrismicRichText field={description} />
      </div>
      <Marquee
        className="mt-4"
        direction="right"
        autoFill
        gradient
        speed={MARQUEE_SPEED}
      >
        {topSkills?.map((skill) => (
          <SkillLink key={skill.label} className="mx-2" skill={skill} />
        ))}
      </Marquee>
      <Marquee
        className="mt-2"
        direction="left"
        autoFill
        gradient
        speed={MARQUEE_SPEED}
      >
        {bottomSkills?.map((skill) => (
          <SkillLink key={skill.label} className="mx-2" skill={skill} />
        ))}
      </Marquee>
    </div>
  )
}
