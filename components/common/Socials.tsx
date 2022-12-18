import { GitHub, MoreVertRounded, Twitter, YouTube } from "@mui/icons-material"
import { Grid, IconButton, Popover, Stack, Theme, Tooltip } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { FC, useState } from "react"
import { BiHive } from "react-icons/bi"
import { SiMastodon, SiPatreon, SiTwitch } from "react-icons/si"

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

const mobileOnlySx: SystemStyleObject = {
  display: {
    sm: "none",
  },
}
const mobileHiddenSx: SystemStyleObject = {
  display: {
    xs: "none",
    sm: "flex",
  },
}

export interface SocialsProps {
  sx?: SystemStyleObject<Theme>
}

const Socials: FC<SocialsProps> = ({ sx }) => {
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLElement | null>(null)

  const open = Boolean(moreAnchorEl)
  const onClose = () => setMoreAnchorEl(null)

  return (
    <Stack sx={sx} direction="row" spacing={1}>
      <Tooltip title="Twitter">
        <IconButton
          sx={linkSx}
          component="a"
          target="_blank"
          rel="noopener"
          href="https://twitter.com/IsaiahByDayah"
        >
          <Twitter />
        </IconButton>
      </Tooltip>
      <Tooltip title="Hive">
        <IconButton
          sx={linkSx}
          component="a"
          target="_blank"
          rel="noopener"
          href="https://hive.page.link/JgiH"
        >
          <BiHive />
        </IconButton>
      </Tooltip>
      <Tooltip title="Mastodon">
        <IconButton
          sx={linkSx}
          component="a"
          target="_blank"
          rel="me"
          href="https://techhub.social/@IsaiahByDayah"
        >
          <SiMastodon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Twitch">
        <IconButton
          sx={{ ...linkSx, ...mobileHiddenSx }}
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.twitch.tv/isaiahbydayah"
        >
          <SiTwitch />
        </IconButton>
      </Tooltip>
      <Tooltip title="YouTube">
        <IconButton
          sx={{ ...linkSx, ...mobileHiddenSx }}
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.youtube.com/isaiahsmith"
        >
          <YouTube />
        </IconButton>
      </Tooltip>
      <Tooltip title="Patreon">
        <IconButton
          sx={{ ...linkSx, ...mobileHiddenSx }}
          component="a"
          target="_blank"
          rel="noopener"
          href="https://www.patreon.com/isaiahbydayah"
        >
          <SiPatreon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          sx={{ ...linkSx, ...mobileHiddenSx }}
          component="a"
          target="_blank"
          rel="noopener"
          href="https://github.com/IsaiahByDayah"
        >
          <GitHub />
        </IconButton>
      </Tooltip>

      <IconButton
        sx={{ ...linkSx, ...mobileOnlySx }}
        onClick={(e) => setMoreAnchorEl(e.currentTarget)}
      >
        <MoreVertRounded />
      </IconButton>

      <Popover
        sx={mobileOnlySx}
        open={open}
        anchorEl={moreAnchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Grid p={1} container>
          <Grid item xs={4}>
            <Tooltip title="Twitch">
              <IconButton
                sx={linkSx}
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.twitch.tv/isaiahbydayah"
              >
                <SiTwitch />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="YouTube">
              <IconButton
                sx={linkSx}
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/isaiahsmith"
              >
                <YouTube />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="Patreon">
              <IconButton
                sx={linkSx}
                component="a"
                target="_blank"
                rel="noopener"
                href="https://www.patreon.com/isaiahbydayah"
              >
                <SiPatreon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="GitHub">
              <IconButton
                sx={linkSx}
                component="a"
                target="_blank"
                rel="noopener"
                href="https://github.com/IsaiahByDayah"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Popover>
    </Stack>
  )
}

export default Socials
