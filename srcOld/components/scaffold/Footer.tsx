import { FC } from "react"

import InsetBox from "components/common/InsetBox"

type FooterProps = {
  className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => (
  <InsetBox className={className} variant="vertical" p={2} component="footer">
    © {new Date().getFullYear()}, Made{" "}
    <a
      href="https://www.twitch.tv/isaiahbydayah"
      target="_blank"
      rel="noopener noreferrer"
    >
      live and in the open
    </a>{" "}
    by{" "}
    <a
      href="https://twitter.com/IsaiahByDayah"
      target="_blank"
      rel="noopener noreferrer"
    >
      this person
    </a>{" "}
    👋
  </InsetBox>
)

export default Footer
