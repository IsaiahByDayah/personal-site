import { KeyTextField, RichTextField } from "@prismicio/client"
import clsx from "clsx"
import { HomeDocumentDataSkillsItem } from "prismicio-types"
import Marquee from "react-fast-marquee"

import { HomepageSection } from "@/app/_components/HomepageSection"
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

  return (
    <HomepageSection
      id="skills"
      className={clsx("", className)}
      title={title}
      description={description}
    >
      <Marquee
        className="mt-10"
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
    </HomepageSection>
  )
}
