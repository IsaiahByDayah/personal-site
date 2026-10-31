import { ImageField, KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import clsx from "clsx"

interface HeroProps {
  className?: string
  greeting?: KeyTextField
  title?: KeyTextField
  description?: RichTextField
  photo?: ImageField
}

export const Hero = ({
  className,
  greeting,
  title,
  description,
  photo,
}: HeroProps) => (
  <div
    className={clsx(
      "grid grid-cols-1 grid-rows-[auto_auto_--spacing(6)_auto_auto] gap-2 md:grid-cols-[1fr_--spacing(80)] md:grid-rows-[auto_auto_auto_auto_auto] md:gap-x-10",
      className,
    )}
  >
    <PrismicNextImage
      className="border-jet-500 bg-jet-500 col-span-full row-span-1 row-start-1 m-auto max-w-xs rotate-1 rounded-lg border-4 md:col-span-1 md:col-start-2 md:row-span-full"
      field={photo}
    />
    <p className="col-span-full row-span-1 row-start-2 text-center text-lg font-semibold md:col-span-1 md:col-start-1 md:row-start-2 md:text-start">
      {greeting}
    </p>
    <h2 className="col-span-full row-span-1 row-start-4 text-center text-3xl font-black text-balance md:col-span-1 md:col-start-1 md:row-start-3 md:text-start">
      {title}
    </h2>
    <div className="prose txt-prose col-span-full row-span-1 row-start-5 m-auto text-center text-balance md:col-span-1 md:col-start-1 md:row-start-4 md:m-0 md:text-start">
      <PrismicRichText field={description} />
    </div>
  </div>
)
