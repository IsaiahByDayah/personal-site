import clsx from "clsx"
import { ServiceDocument } from "prismicio-types"
import { CSSProperties } from "react"
import { HiCheckCircle, HiOutlineXCircle } from "react-icons/hi2"

interface ServiceCardProps {
  className?: string
  service?: ServiceDocument
}

export const ServiceCard = ({ className, service }: ServiceCardProps) => {
  if (!service) {
    return null
  }

  return (
    <div
      className={clsx(
        "text-jet-500 flex flex-col gap-12 rounded-lg border-4 border-(--service-color) bg-white p-4",
        className,
      )}
      style={
        {
          "--service-color": service.data.color,
        } as CSSProperties
      }
    >
      <div>
        <p className="text-xl font-black text-(--service-color)">
          {service.data.name}
        </p>
        <p className="mt-2">{service.data.description}</p>
      </div>
      <div>
        <p className="text-3xl font-black text-(--service-color)">
          {service.data.price_amount}
          <span className="text-jet-400 ml-1 text-sm font-semibold">
            {service.data.price_label}
          </span>
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {service.data.items.map((item) => (
            <li
              key={item.description}
              className={clsx("flex flex-row items-baseline gap-2", {
                "text-jet-300": !item.is_included,
              })}
            >
              {item.is_included ? (
                <HiCheckCircle className="relative top-0.5 shrink-0 fill-(--service-color)" />
              ) : (
                <HiOutlineXCircle className="relative top-0.5 shrink-0" />
              )}
              {item.description}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-jet-400 mt-auto text-center text-sm">
        Estimated Timeline: {service.data.timeline}
      </p>
    </div>
  )
}
