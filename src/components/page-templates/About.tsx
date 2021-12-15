import React, { FC } from "react"
import { makeStyles, Typography } from "@material-ui/core"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import SEO from "components/scaffold/SEO"

const useStyles = makeStyles({
  title: {
    marginTop: 0,
  },
  special: {
    fontWeight: "bold",
  },
})

const Home: FC = () => {
  const classes = useStyles()
  return (
    <TwoColumnLayout>
      <SEO title="About" />
      <h1 className={classes.title}>About</h1>

      <p>Hey there, and welcome 👋🏾!</p>

      <p>
        My name&apos;s <strong>Isaiah Smith</strong> and I&apos;m a developer, designer, and streamer.
      </p>

      <p>
        I&apos;m an indiependent creator working on projects such as{" "}
        <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://www.photomode.io">
          Photomode.io
        </a>
        , a small social media platform for gamers to share photos they&apos;ve captured in games,{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/IsaiahByDayah/hosted-overlay"
        >
          Hosted Overlay
        </a>
        , a small open-source stream overlay tool built using web technology, and{" "}
        <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://www.movieotter.com">
          MovieOtter
        </a>
        , a site for logging and recommending movies and tv shows to friends.
      </p>

      <p>
        Most recently, I&apos;ve began working on my own indie game about expanding and managing various campgrounds in
        a nature park. I build and talk through a lot of the game design and development while livestreaming over on my{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitch.tv/isaiahbydayah"
        >
          Twitch channel
        </a>
        . I also post devlog videos to my{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/isaiahsmith"
        >
          YouTube channel
        </a>{" "}
        and provide behind-the-scene looks at things on my{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.patreon.com/isaiahbydayah"
        >
          Patreon
        </a>
        .
      </p>

      <p>
        If you&apos;ve ever wondered what it takes to build web apps and video games, I recommend checking out the above
        mentioned channels, as well as consider following me on{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/isaiahsmith"
        >
          Twitter
        </a>
        , which is where I tend to share most of what I&apos;m working on.
      </p>

      <p>I like to explore a bunch of different tools and technologies, but the things I use most often are: </p>
      <ul>
        <li>
          <a
            className={classes.special}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org/"
          >
            TypeScript
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Web Programming Language)
          </Typography>
        </li>
        <li>
          <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://www.reactjs.org/">
            React JS
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Frontend Library)
          </Typography>
        </li>
        <li>
          <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">
            Material-UI
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (UI Library)
          </Typography>
        </li>
        <li>
          <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">
            Google&apos;s Firebase
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Web Hosting Solutions)
          </Typography>
        </li>
        <li>
          <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">
            Figma
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (UI/UX Design Tool)
          </Typography>
        </li>
        <li>
          <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://www.aseprite.org/">
            Aseprite
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Pixel Art Drawing & Animations)
          </Typography>
        </li>
        <li>
          and{" "}
          <a className={classes.special} target="_blank" rel="noopener noreferrer" href="https://www.godotengine.org">
            Godot Engine
          </a>{" "}
          <Typography variant="caption" color="textSecondary">
            (Game Engine)
          </Typography>
        </li>
      </ul>

      <p>
        If any of this sounds interesting to you, or if you have any questions about the stuff I do, get in touch!
        I&apos;m always available on{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/IsaiahByDayah"
        >
          Twitter
        </a>
        , or if it&apos;s easier, come hang out during one of my{" "}
        <a
          className={classes.special}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitch.tv/isaiahbydayah"
        >
          live streams
        </a>{" "}
        every <strong>Monday and Wednesday starting at 3:00 pm pacific time</strong>.
      </p>

      <p>
        {" "}
        If you can,{" "}
        <strong>
          consider supporting me on{" "}
          <a
            className={classes.special}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/isaiahbydayah"
          >
            Patreon
          </a>
        </strong>
        . Not only does it help me, as an indiependent creator, continue to make my projects and videos, but I also try
        to give back by providing cool looks into the design and development process, and often ask my patrons for ideas
        of things we can add into the projects.
      </p>

      <p>Thanks for stopping by and I hope to see you online! ✌🏾</p>

      <p>- Isaiah</p>
    </TwoColumnLayout>
  )
}

export default Home
