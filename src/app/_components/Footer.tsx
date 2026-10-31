import { PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"

import { ContactMe } from "@/components/ContactMe"
import { ImageIcon } from "@/components/ImageIcon"
import { createClient } from "@/lib/prismicio"

interface FooterProps {
  className?: string
}

export const Footer = async ({ className }: FooterProps) => {
  const prismic = createClient()
  const socials = await prismic.getSingle("socials").catch(() => null)

  return (
    <footer
      className={clsx("flex flex-row items-center justify-between", className)}
    >
      <span className="text-sm">Copyright © {new Date().getFullYear()}</span>
      <div className="flex flex-row items-center gap-6">
        {socials?.data.social_links.map((socialLink) =>
          socialLink.icon.url ? (
            <PrismicNextLink
              key={`${socialLink.platform}-${socialLink.url.text}`}
              className="btn btn-icon btn-ghost"
              field={socialLink.url}
            >
              <ImageIcon data-slot="icon" src={socialLink.icon.url} />
            </PrismicNextLink>
          ) : null,
        )}
      </div>
      <ContactMe className="shrink-0" />
    </footer>
  )
}
