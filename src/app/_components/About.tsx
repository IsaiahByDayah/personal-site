import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import clsx from "clsx"

interface AboutProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
}

export const About = ({ className, title, description }: AboutProps) => (
  <div id="about" className={clsx("", className)}>
    <h2 className="txt-heading text-center">{title}</h2>
    <div className="prose txt-prose mt-4 max-w-none">
      <PrismicRichText field={description} />
    </div>
  </div>
)
