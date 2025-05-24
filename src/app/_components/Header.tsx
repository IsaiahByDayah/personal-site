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
      <div className="flex flex-row items-center gap-2">
        <Image
          className="bg-platinum-500 size-14 rounded-full"
          src={bust}
          alt="Isaiah bust"
        />
        <span className="font-extrabold">isaiah</span>
      </div>
      <nav className="flex flex-row gap-4">
        <Link className="px-2 hover:underline" href="#">
          Home
        </Link>
        <Link className="px-2 hover:underline" href="#">
          About
        </Link>
        <Link className="px-2 hover:underline" href="#">
          Services
        </Link>
        <Link className="px-2 hover:underline" href="#">
          Works
        </Link>
        <Link className="px-2 hover:underline" href="#">
          Blog
        </Link>
      </nav>
      <button className="cursor-pointer rounded-full border px-4 py-1.5 transition-colors hover:bg-teal-500 hover:text-white">
        Contact Me
      </button>
    </header>
  )
}
