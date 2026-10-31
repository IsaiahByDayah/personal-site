"use client"

import { KeyTextField, RichTextField } from "@prismicio/client"
import clsx from "clsx"

import { HomepageSection } from "@/app/_components/HomepageSection"
import { ContactForm } from "@/components/ContactForm"

interface ContactProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
}

export const Contact = ({ className, title, description }: ContactProps) => {
  return (
    <HomepageSection
      id="contact"
      className={clsx("", className)}
      title={title}
      description={description}
    >
      <ContactForm className="mx-auto mt-10" />
    </HomepageSection>
  )
}
