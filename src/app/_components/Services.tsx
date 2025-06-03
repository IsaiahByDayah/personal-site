import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import clsx from "clsx"
import { HomeDocumentDataServicesItem } from "prismicio-types"

interface ServicesProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  services?: HomeDocumentDataServicesItem[]
}

export const Services = ({
  className,
  title,
  description,
  services,
}: ServicesProps) => (
  <div className={clsx("", className)}>
    <h2 className="txt-heading text-center">{title}</h2>
    <div className="prose txt-prose mt-4 max-w-none text-center text-balance">
      <PrismicRichText field={description} />
    </div>
  </div>
)
