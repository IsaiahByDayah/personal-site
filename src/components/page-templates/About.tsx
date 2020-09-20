import React, { FC } from "react"
import { makeStyles, Typography } from "@material-ui/core"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import SEO from "components/scaffold/SEO"

const useStyles = makeStyles({
  title: {
    marginTop: 0,
  },
})

const Home: FC = () => {
  const classes = useStyles()
  return (
    <TwoColumnLayout>
      <SEO title="About" />
      <h1 className={classes.title}>About</h1>

      <p>Hey there, and welcome to my site!</p>

      <p>
        My name&apos;s <strong>Isaiah Smith</strong> and I&apos;m a software developer, indie hacker, and streamer. When
        I&apos;m not working on apps at my day-job at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.ign.com">
          IGN.com
        </a>
        , I like to work on some of my side projects such as{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.movieotter.com">
          MovieOtter
        </a>
        , play around with some video game development using{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.godotengine.org">
          Godot
        </a>
        , do some streaming over on my{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/isaiahbydayah">
          Twitch channel
        </a>
        , or spend some time on this site, writing learning and teaching all sorts of new things.
      </p>

      <p>I like to play around with a lot of different technologies, but some of my favorites are: </p>
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/">
            TypeScript
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Programming Language)
          </Typography>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.reactjs.org/">
            React JS
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Frontend Library)
          </Typography>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">
            Material-UI
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (UI Library)
          </Typography>
        </li>
        <li>
          and Google&apos;s{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">
            Firebase
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Hosting Solutions)
          </Typography>
        </li>
      </ul>
      <p>
        But I do want to make time to learn other tools like{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://flutter.dev/">
          Flutter
        </a>
        ,{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://dart.dev/">
          Dart
        </a>
        ,{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">
          Vue
        </a>
        , and{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://svelte.dev/">
          Svelte
        </a>{" "}
        just to name a few.
      </p>

      <p>
        Outside of coding, I also like to do design work! The tools I&apos;m most familiar with are{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/products/illustrator">
          Adobe Illustrator
        </a>{" "}
        for graphic design and{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/">
          Figma
        </a>{" "}
        for UI/UX design. However, lately, I&apos;ve picked up a few courses on{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.aseprite.org/">
          Aseprite
        </a>{" "}
        and am learning to make pixel art for games.
      </p>

      <p>
        If any of this sounds interesting to you, or if you have any questions about the stuff I do, get in touch!
        I&apos;m always available on{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/IsaiahByDayah">
          Twitter
        </a>
        , or if it&apos;s easier, come hang out during one of my{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/isaiahbydayah">
          live streams
        </a>{" "}
        every Monday, Wednesday, and Friday starting at 5:30 pm pacific time.
      </p>

      <p>Thanks for stopping by and I hope to see you around! 👋🏾</p>

      <p>- Isaiah</p>
    </TwoColumnLayout>
  )
}

export default Home
