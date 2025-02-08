import { Link, Theme } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import { InsetBox } from "components/common/Inset"

type FooterProps = {
  sx?: SystemStyleObject<Theme>
  _testYear?: number
}

export const Footer = ({ sx, _testYear }: FooterProps) => (
  <InsetBox
    sx={{
      backgroundColor: "secondary.main",
      ...sx,
    }}
    variant="vertical"
    p={2}
    component="footer"
  >
    © {_testYear ?? new Date().getFullYear()}, Made{" "}
    <Link
      href="https://www.twitch.tv/isaiahbydayah"
      target="_blank"
      rel="noopener noreferrer"
    >
      live and in the open
    </Link>{" "}
    by{" "}
    <Link
      href="https://twitter.com/IsaiahByDayah"
      target="_blank"
      rel="noopener noreferrer"
    >
      this person
    </Link>{" "}
    👋
  </InsetBox>
)

export default Footer
