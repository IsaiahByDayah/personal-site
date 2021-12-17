import { FC } from "react"
import { Theme, Stack, IconButton } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { YouTube, GitHub, Twitter } from "@mui/icons-material"
import { SiTwitch, SiPatreon } from "react-icons/si"

export interface SocialsProps {
  sx?: SystemStyleObject<Theme>
}

const Socials: FC<SocialsProps> = ({ sx }) => {
  const linkSx: SystemStyleObject = {
    textDecoration: "none",

    color: "secondary.contrastText",

    "&:link": {
      color: "secondary.contrastText",
    },

    "&:visited": {
      color: "secondary.contrastText",
    },
  }

  return (
    <Stack sx={sx} direction="row" spacing={1}>
      <IconButton
        sx={linkSx}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://twitter.com/IsaiahByDayah"
      >
        <Twitter />
      </IconButton>
      <IconButton
        sx={linkSx}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://www.twitch.tv/isaiahbydayah"
      >
        <SiTwitch />
      </IconButton>
      <IconButton
        sx={linkSx}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://www.youtube.com/isaiahsmith"
      >
        <YouTube />
      </IconButton>
      <IconButton
        sx={linkSx}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://www.patreon.com/isaiahbydayah"
      >
        <SiPatreon />
      </IconButton>
      <IconButton
        sx={linkSx}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://github.com/IsaiahByDayah"
      >
        <GitHub />
      </IconButton>
    </Stack>
  )
}

export default Socials
