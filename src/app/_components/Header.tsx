import { PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"
import Image from "next/image"
import { HiBars3 } from "react-icons/hi2"

import { ContactMe } from "@/components/ContactMe"
import { createClient } from "@/lib/prismicio"

import bust from "./bust.svg"

interface HeaderProps {
  className?: string
}

export const Header = async ({ className }: HeaderProps) => {
  const prismic = createClient()
  const header = await prismic.getSingle("header").catch(() => null)

  console.log({ header })

  return (
    <header
      className={clsx("flex flex-row items-center justify-between", className)}
    >
      <div className="flex shrink-0 flex-row items-center gap-2">
        <Image
          className="bg-platinum-500 size-12 rounded-full"
          src={bust}
          alt="Isaiah bust"
        />
        <span className="text-xl font-extrabold uppercase">isaiah</span>
      </div>

      <nav className="hidden flex-row gap-4 sm:flex">
        {header?.data.navigation.map((navItem) => (
          <PrismicNextLink
            key={navItem.key}
            className="link px-2"
            field={navItem}
          />
        ))}
      </nav>

      <button className="btn btn-icon btn-ghost btn--jet sm:hidden">
        <HiBars3 data-slot="icon" />
      </button>
      <ContactMe className="hidden shrink-0 sm:max-md:block" variant="icon" />
      <ContactMe className="hidden shrink-0 md:block" variant="full" />
    </header>
  )
}
