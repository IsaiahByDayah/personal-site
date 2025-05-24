import clsx from "clsx"
import Link from "next/link"

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={clsx("flex flex-row items-center justify-between", className)}
    >
      <span>Copyright © {new Date().getFullYear()}</span>
      <div className="flex flex-row gap-4">
        <Link
          className="hover:bg-jet-500 rounded-full border px-4 py-1.5 transition-colors hover:text-white"
          href="#"
        >
          LinkedIn
        </Link>
        <Link
          className="hover:bg-jet-500 rounded-full border px-4 py-1.5 transition-colors hover:text-white"
          href="#"
        >
          GitHub
        </Link>
        <Link
          className="hover:bg-jet-500 rounded-full border px-4 py-1.5 transition-colors hover:text-white"
          href="#"
        >
          BlueSky
        </Link>
      </div>
      <button className="cursor-pointer rounded-full border px-4 py-1.5 transition-colors hover:bg-teal-500 hover:text-white">
        Contact Me
      </button>
    </footer>
  )
}
