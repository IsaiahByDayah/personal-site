"use client"

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"
import { LinkField, Repeatable } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"
import { useState } from "react"
import { FaXmark } from "react-icons/fa6"
import { HiBars3 } from "react-icons/hi2"

interface MobileNavProps {
  className?: string
  navItems?: Repeatable<LinkField>
}

export const MobileNav = ({ className, navItems }: MobileNavProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className={clsx("btn btn-icon btn-ghost btn--jet", className)}
        onClick={() => setOpen(true)}
        type="button"
      >
        <HiBars3 data-slot="icon" />
      </button>

      <Dialog
        open={open}
        onClose={setOpen}
        className={clsx("relative z-10", className)}
      >
        <DialogBackdrop
          transition
          className="bg-jet-500/75 fixed inset-0 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-center justify-between gap-3">
                      <DialogTitle className="text-lg font-semibold">
                        Navigation
                      </DialogTitle>
                      <button
                        className="btn btn-icon btn-ghost btn--jet"
                        onClick={() => setOpen(false)}
                        type="button"
                      >
                        <FaXmark data-slot="icon" />
                      </button>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 space-y-1">
                        {navItems?.map((navItem) => (
                          <li key={navItem.key}>
                            <PrismicNextLink
                              onClick={() => setOpen(false)}
                              className="group text-jet-700 hover:bg-jet-50 flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold"
                              field={navItem}
                            />
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
