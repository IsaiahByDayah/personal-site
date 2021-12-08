import { FC } from "react"
import { makeStyles, Theme, Box, IconButton } from "@material-ui/core"
import { YouTube, GitHub } from "@material-ui/icons"
import Icon from "@mdi/react"
import { mdiTwitter, mdiTwitch, mdiPatreon } from "@mdi/js"

type StyleProps = {
  size: number
}
const useStyles = makeStyles<Theme, StyleProps>(({ spacing, palette }) => ({
  link: {
    textDecoration: "none",

    color: palette.secondary.contrastText,

    "&:link": {
      color: palette.secondary.contrastText,
    },

    "&:visited": {
      color: palette.secondary.contrastText,
    },
  },
  icon: ({ size }) => ({
    height: spacing(size),
    width: spacing(size),
  }),
}))

export type SocialsProps = {
  className?: string
  size?: number
}

const Socials: FC<SocialsProps> = ({ className, size = 3 }) => {
  const classes = useStyles({ size })
  return (
    <Box className={className}>
      <IconButton
        className={classes.link}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://twitter.com/IsaiahByDayah"
      >
        <Icon className={classes.icon} path={mdiTwitter} />
      </IconButton>
      <IconButton
        className={classes.link}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://www.twitch.tv/isaiahbydayah"
      >
        <Icon className={classes.icon} path={mdiTwitch} />
      </IconButton>
      <IconButton
        className={classes.link}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://www.youtube.com/isaiahsmith"
      >
        <YouTube className={classes.icon} />
      </IconButton>
      <IconButton
        className={classes.link}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://www.patreon.com/isaiahbydayah"
      >
        <Icon className={classes.icon} path={mdiPatreon} />
      </IconButton>
      {/* <IconButton
        className={classes.link}
        component="a"
        target="_blank"
        rel="noopener"
        href="https://github.com/IsaiahByDayah"
      >
        <GitHub className={classes.icon} />
      </IconButton> */}
    </Box>
  )
}

export default Socials
