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
    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
      <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial.uid}
            className="pt-8 sm:inline-block sm:w-full sm:px-4"
          >
            <TestimonialCard key={testimonial.uid} testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  </HomepageSection>
)
