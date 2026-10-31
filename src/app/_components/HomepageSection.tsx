import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import { type ReactNode } from "react"

interface HomepageSectionProps {
  id?: string
  className?: string
  title?: KeyTextField
  description?: RichTextField
  children?: ReactNode
}

export const HomepageSection = ({
  id,
  className,
  title,
  description,
  children,
}: HomepageSectionProps) => (
  <div id={id} className={className}>
    <h2 className="txt-heading text-center">{title}</h2>
    <div className="prose txt-prose mt-4 max-w-none text-center text-balance">
      <PrismicRichText field={description} />
    </div>
    {children}
  </div>
)
