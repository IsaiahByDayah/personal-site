import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"
import Link from "next/link"

import { MobileNav } from "@/app/_components/MobileNav"
import { ContactMe } from "@/components/ContactMe"
import { createClient } from "@/lib/prismicio"

interface HeaderProps {
  className?: string
}

export const Header = async ({ className }: HeaderProps) => {
  const prismic = createClient()
  const header = await prismic.getSingle("header").catch(() => null)

  return (
    <header
      className={clsx("flex flex-row items-center justify-between", className)}
    >
      <Link className="flex shrink-0 flex-row items-center gap-2" href="/">
        <PrismicNextImage
          className="bg-platinum-500 size-12 rounded-full"
          field={header?.data.logo}
          priority
        />
        <span className="text-xl font-extrabold uppercase">isaiah</span>
      </Link>

      <nav className="hidden flex-row gap-4 sm:flex">
        {header?.data.navigation.map((navItem) => (
          <PrismicNextLink
            key={navItem.key}
            className="link px-2"
            field={navItem}
          />
        ))}
      </nav>

      <MobileNav className="sm:hidden" navItems={header?.data.navigation} />

      <ContactMe className="hidden shrink-0 sm:max-md:block" variant="icon" />
      <ContactMe className="hidden shrink-0 md:block" variant="full" />
    </header>
  )
}
