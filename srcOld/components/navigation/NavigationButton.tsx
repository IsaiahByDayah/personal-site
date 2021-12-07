import React, { FC } from "react"
import { makeStyles, Button } from "@material-ui/core"
import { ChevronRightRounded } from "@material-ui/icons"
import { Link } from "gatsby"
import cx from "classnames"

const useStyles = makeStyles(({ palette }) => ({
  root: {
    textDecoration: "none",
  },
  button: {
    textTransform: "none",
    color: palette.primary.main,

    backgroundColor: palette.secondary.main,
    "&:hover": {
      backgroundColor: palette.secondary.dark,
    },
  },

  label: {
    display: "flex",
    textAlign: "left",
  },
  content: {
    flexGrow: 1,
  },
}))

export type NavigationButtonProps = {
  className?: string
  to: string
  onClick?: () => void
}

const NavigationButton: FC<NavigationButtonProps> = ({ children, className, to, onClick }) => {
  const classes = useStyles()

  return (
    <Link className={cx(classes.root, className)} to={to}>
      <Button
        className={classes.button}
        classes={{
          label: classes.label,
        }}
        fullWidth
        endIcon={<ChevronRightRounded />}
        onClick={onClick}
      >
        <span className={classes.content}>{children}</span>
      </Button>
    </Link>
  )
}

export default NavigationButton
