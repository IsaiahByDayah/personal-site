"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import clsx from "clsx"
import { useForm } from "react-hook-form"

import { contactMe } from "@/app/actions/contactMe"
import {
  contactFormDataSchema,
  contactFormMessageMaxLength,
  type ContactFormData,
} from "@/utils/schemas/contactForm"

interface ContactFormProps {
  className?: string
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (contactFormData: ContactFormData) => {
      const contactMeRes = await contactMe(contactFormData)

      if (!contactMeRes.success) {
        throw new Error(
          contactMeRes.error ?? "Unable to handle form submission.",
        )
      }
    },
  })

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: "onTouched",
    resolver: zodResolver(contactFormDataSchema),
  })

  const messageLength = watch("message")?.length ?? 0

  if (isSuccess) {
    return (
      <div
        className={clsx(
          "max-w-lg text-center font-bold text-balance italic",
          className,
        )}
      >
        Thanks for reaching out! I’ve received your message and will get back to
        you as soon as possible.
      </div>
    )
  }

  return (
    <form
      className={clsx(
        "grid max-w-lg grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
        className,
      )}
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      <div className="col-span-full">
        <label className="block font-medium" htmlFor="name">
          Name
        </label>
        <div className="mt-2">
          <input
            className="outline-platinum-300 placeholder:text-jet-400 sm: focus:outline-mist-600 block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2"
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
          />
        </div>
        {errors.name ? (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="col-span-full">
        <label className="block font-medium" htmlFor="companyOrOrganization">
          Company or Organization{" "}
          <span className="text-jet-300 text-sm font-normal">(optional)</span>
        </label>
        <div className="mt-2">
          <input
            className="outline-platinum-300 placeholder:text-jet-400 sm: focus:outline-mist-600 block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2"
            id="companyOrOrganization"
            type="text"
            {...register("companyOrOrganization")}
          />
        </div>
      </div>

      <div className="col-span-full">
        <label className="block font-medium" htmlFor="contact">
          Email or Phone Number
        </label>
        <div className="mt-2">
          <input
            className="outline-platinum-300 placeholder:text-jet-400 sm: focus:outline-mist-600 block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2"
            id="contact"
            type="text"
            autoComplete="email"
            {...register("contact")}
          />
        </div>
        {errors.contact ? (
          <p className="mt-2 text-sm text-red-500">{errors.contact.message}</p>
        ) : null}
      </div>

      <div className="col-span-full">
        <label className="block font-medium" htmlFor="message">
          Message
        </label>
        <p className="text-jet-300 mt-3 text-sm">
          What can I help you build? Share any details that would be useful.
        </p>
        <div className="mt-2">
          <textarea
            className="outline-platinum-300 placeholder:text-jet-400 sm: focus:outline-mist-600 block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2"
            id="message"
            rows={3}
            {...register("message")}
          />
        </div>
        <div className="mt-2 flex flex-row-reverse justify-between gap-4 text-sm">
          <p className="text-jet-300 shrink-0">
            {messageLength}/{contactFormMessageMaxLength}
          </p>
          {errors.message ? (
            <p className="grow text-red-500">{errors.message.message}</p>
          ) : null}
        </div>
      </div>

      <div className="col-span-full">
        <button
          className="btn btn-fill btn--jet disabled"
          type="submit"
          disabled={isPending || !isValid}
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>

      {error ? (
        <div className="col-span-full">
          <p className="text-center text-sm text-red-500">{error.message}</p>
        </div>
      ) : null}
    </form>
  )
}
