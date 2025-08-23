import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"
import { TestimonialDocument } from "prismicio-types"

interface TestimonialCardProps {
  className?: string
  testimonial?: TestimonialDocument
}

export const TestimonialCard = ({
  className,
  testimonial,
}: TestimonialCardProps) => {
  if (!testimonial) {
    return null
  }

  return (
    <figure
      className={clsx(
        "border-jet-500 rounded-lg border-4 bg-white p-8 text-sm/6",
        className,
      )}
    >
      <blockquote>
        <p>{`“${testimonial.data.content}”`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <PrismicNextImage
          className="bg-mist-50 size-10 rounded-full"
          field={testimonial.data.photo}
        />
        <div>
          <div className="font-semibold">{testimonial.data.name}</div>
          <div className="text-jet-400 text-sm">{testimonial.data.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}
