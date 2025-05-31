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
}: HeroProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-2 md:grid-cols-[1fr_--spacing(80)] md:grid-rows-[auto_auto_auto_auto_auto] md:gap-x-10",
        className,
      )}
    >
      <PrismicNextImage
        className="border-jet-500 bg-jet-500 col-span-full row-span-1 row-start-1 m-auto max-w-xs rounded-lg border-4 md:col-span-1 md:col-start-2 md:row-span-full"
        field={photo}
      />
      <p className="col-span-full row-span-1 row-start-2 text-lg font-semibold md:col-span-1 md:col-start-1 md:row-start-2">
        {greeting}
      </p>
      <p className="col-span-full row-span-1 row-start-3 text-3xl font-black md:col-span-1 md:col-start-1 md:row-start-3">
        {title}
      </p>
      <div className="prose prose-jet col-span-full row-span-1 row-start-4 max-w-none leading-snug text-balance md:col-span-1 md:col-start-1 md:row-start-4">
        <PrismicRichText field={description} />
      </div>
    </div>
  )
}
