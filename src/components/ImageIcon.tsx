import { IconBase, IconBaseProps } from "react-icons"

// REF: https://stackoverflow.com/questions/41157135/is-it-possible-to-change-color-of-a-black-png-image-using-css-only

interface ImageIconProps extends IconBaseProps {
  src?: string
}

export const ImageIcon = ({ src, ...rest }: ImageIconProps) => (
  <IconBase {...rest}>
    <defs>
      <filter id="colorMask">
        <feFlood floodColor="currentColor" result="flood" />
        <feColorMatrix
          result="inv"
          in="SourceGraphic"
          type="matrix"
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
        />
        <feComposite
          in="inv"
          in2="flood"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
        />
      </filter>
    </defs>

    <image className="size-full" filter="url(#colorMask)" xlinkHref={src} />
  </IconBase>
)
