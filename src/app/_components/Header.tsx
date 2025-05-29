import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

import bust from "./bust.svg"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
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
      <nav className="flex flex-row gap-4">
        <Link className="link px-2" href="#">
          Home
        </Link>
        <Link className="link px-2" href="#">
          About
        </Link>
        <Link className="link px-2" href="#">
          Services
        </Link>
        <Link className="link px-2" href="#">
          Works
        </Link>
        <Link className="link px-2" href="#">
          Blog
        </Link>
      </nav>
      <button className="btn btn-fill btn--teal shrink-0">Contact Me</button>
    </header>
  )
}
