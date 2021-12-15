import { FC } from "react"
import { makeStyles } from "@material-ui/core"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import SEO from "components/scaffold/SEO"

const useStyles = makeStyles({
  title: {
    marginTop: 0,
  },
})

const NotFound: FC = () => {
  const classes = useStyles()
  return (
    <TwoColumnLayout>
      <SEO title="Uh Oh!" />
      <h1 className={classes.title}>Not Found</h1>

      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    </TwoColumnLayout>
  )
}

export default NotFound
