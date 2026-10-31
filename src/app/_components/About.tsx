import { KeyTextField, RichTextField } from "@prismicio/client"
import clsx from "clsx"

import { HomepageSection } from "@/app/_components/HomepageSection"

interface AboutProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
}

export const About = ({ className, title, description }: AboutProps) => (
  <HomepageSection
    id="about"
    className={clsx("", className)}
    title={title}
    description={description}
  />
)
