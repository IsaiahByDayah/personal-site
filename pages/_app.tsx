import { AppProps } from "next/app"
import Head from "next/head"
// import { useScrollTrigger, Stack, Toolbar, Box, Fade } from "@mui/material"
import { Toolbar } from "@mui/material"
import { CacheProvider, EmotionCache } from "@emotion/react"

import createEmotionCache from "lib/createEmotionCache"

import DrawerProvider from "components/scaffold/DrawerProvider"
import ThemeSelectionProvider from "components/scaffold/ThemeSelectionProvider"
import ThemeProvider from "components/scaffold/ThemeProvider"
import CssBaselined from "components/scaffold/CssBaselined"
import Header from "components/scaffold/Header"
import Drawer from "components/scaffold/Drawer"
import Footer from "components/scaffold/Footer"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <DrawerProvider>
      <ThemeSelectionProvider>
        <ThemeProvider>
          <CacheProvider value={emotionCache}>
            <CssBaselined>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
              </Head>
              <Header />
              <Toolbar />
              <TwoColumnLayout sx={{ py: 2 }}>
                <Component {...pageProps} />
              </TwoColumnLayout>
              <Drawer />
              <Footer />
            </CssBaselined>
          </CacheProvider>
        </ThemeProvider>
      </ThemeSelectionProvider>
    </DrawerProvider>
  )
}

export default MyApp
