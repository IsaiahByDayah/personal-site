import { FC } from "react"
import { makeStyles, Box, BoxProps } from "@material-ui/core"

const useStyles = makeStyles(({ shape, shadows }) => ({
  thumbnail: {
    position: "absolute",
    borderRadius: shape.borderRadius,
    boxShadow: shadows[3],
    top: "0px",
    left: "0px",
    bottom: "0px",
    right: "0px",
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },
}))

export interface ThumbnailProps extends BoxProps {
  className?: string
  src: string
  alt: string
  aspectRatio?: number
}

const Thumbnail: FC<ThumbnailProps> = ({
  className,
  src,
  alt,
  aspectRatio = 2,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Box
      className={className}
      minWidth={100}
      {...rest}
      position="relative"
      paddingTop={`${(1 / aspectRatio) * 100}%`}
    >
      <img className={classes.thumbnail} src={src} alt={alt} />
    </Box>
  )
}

export default Thumbnail
