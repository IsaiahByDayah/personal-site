import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"
import { HomeDocumentDataSkillsItem } from "prismicio-types"

interface SkillLinkProps {
  className?: string
  skill: HomeDocumentDataSkillsItem
}

export const SkillLink = ({ className, skill }: SkillLinkProps) => (
  <PrismicNextLink
    className={clsx(
      "btn btn-outline btn--jet inline-flex items-center gap-1",
      className,
    )}
    field={skill.url}
  >
    <PrismicNextImage className="size-6" field={skill.image} />
    {skill.label}
  </PrismicNextLink>
)
