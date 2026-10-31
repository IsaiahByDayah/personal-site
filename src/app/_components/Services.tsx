import { KeyTextField, RichTextField } from "@prismicio/client"
import { ServiceDocument } from "prismicio-types"

import { HomepageSection } from "@/app/_components/HomepageSection"
import { ServiceCard } from "@/app/_components/ServiceCard"
import { ContactMe } from "@/components/ContactMe"

interface ServicesProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  services?: ServiceDocument[]
  isContactEnabled?: boolean
}

export const Services = ({
  className,
  title,
  description,
  services,
  isContactEnabled,
}: ServicesProps) => (
  <HomepageSection
    id="services"
    className={className}
    title={title}
    description={description}
  >
    <div className="mt-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
      {services?.map((service) => (
        <ServiceCard
          key={service.uid}
          className="sm:max-w-sm md:grow md:basis-1/3 lg:basis-1/4"
          service={service}
        />
      ))}
    </div>
    {isContactEnabled ? (
      <div className="mt-10 text-center">
        <p>Ready to start your next project?</p>
        <ContactMe className="mt-2 inline-block" variant="full">
          Get In Touch
        </ContactMe>
      </div>
    ) : null}
  </HomepageSection>
)
