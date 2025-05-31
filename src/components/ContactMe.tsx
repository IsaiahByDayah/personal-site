import clsx from "clsx"
import Link from "next/link"
import { HiEnvelope } from "react-icons/hi2"

import { exhaustiveGuard } from "@/utils"

interface ContactMeProps {
  className?: string
  variant?: "full" | "icon" | "responsive"
}

export const ContactMe = ({
  className,
  variant = "responsive",
}: ContactMeProps) => {
  switch (variant) {
    case "responsive":
      return (
        <>
          <ContactMe className={clsx("md:hidden", className)} variant="icon" />
          <ContactMe
            className={clsx("hidden md:block", className)}
            variant="full"
          />
        </>
      )
    case "icon":
      return (
        <Link
          className={clsx("btn btn-icon btn-fill btn--wheat", className)}
          href="/#contact-me"
        >
          <HiEnvelope data-slot="icon" />
        </Link>
      )
    case "full":
      return (
        <Link
          className={clsx("btn btn-fill btn--wheat", className)}
          href="/#contact-me"
        >
          Contact Me
        </Link>
      )
    default:
      exhaustiveGuard(variant)
  }
}
