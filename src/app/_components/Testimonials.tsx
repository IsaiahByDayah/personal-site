import { KeyTextField, RichTextField } from "@prismicio/client"
import clsx from "clsx"
import { TestimonialDocument } from "prismicio-types"

import { HomepageSection } from "@/app/_components/HomepageSection"
import { TestimonialCard } from "@/app/_components/TestimonialCard"

interface TestimonialsProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  testimonials?: TestimonialDocument[]
}

export const Testimonials = ({
  className,
  title,
  description,
  testimonials,
}: TestimonialsProps) => (
  <HomepageSection
    id="testimonials"
    className={clsx("", className)}
    title={title}
    description={description}
  >
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {testimonials?.map((testimonial) => (
        <TestimonialCard
          key={testimonial.uid}
          className="lg:px-4"
          testimonial={testimonial}
        />
      ))}
    </div>
  </HomepageSection>
)
