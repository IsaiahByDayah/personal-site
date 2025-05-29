import clsx from "clsx"
import Link from "next/link"
import { SiBluesky, SiGithub, SiLinkedin } from "react-icons/si"

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={clsx("flex flex-row items-center justify-between", className)}
    >
      <span>Copyright © {new Date().getFullYear()}</span>
      <div className="flex flex-row items-center gap-6">
        <Link className="btn btn-icon btn-ghost btn--jet" href="#">
          <SiLinkedin data-role="icon" />
        </Link>
        <Link className="btn btn-icon btn-ghost btn--jet" href="#">
          <SiGithub data-role="icon" />
        </Link>
        <Link className="btn btn-icon btn-ghost btn--jet" href="#">
          <SiBluesky data-role="icon" />
        </Link>
      </div>
      <button className="btn btn-fill btn--teal">Contact Me</button>
    </footer>
  )
}
