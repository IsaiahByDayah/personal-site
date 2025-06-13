import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import { ServiceDocument } from "prismicio-types"

import { ServiceCard } from "@/app/_components/ServiceCard"

interface ServicesProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  services?: ServiceDocument[]
}

export const Services = ({
  className,
  title,
  description,
  services,
}: ServicesProps) => (
  <div id="services" className={className}>
    <h2 className="txt-heading text-center">{title}</h2>
    <div className="prose txt-prose mt-4 max-w-none text-center text-balance">
      <PrismicRichText field={description} />
    </div>
    <div className="mt-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
      {services?.map((service) => (
        <ServiceCard
          key={service.uid}
          className="sm:max-w-sm md:grow md:basis-1/3 lg:basis-1/4"
          service={service}
        />
      ))}
    </div>
  </div>
)
