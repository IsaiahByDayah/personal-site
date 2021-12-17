import { AppProps } from "next/app"
import Head from "next/head"
import { Toolbar, Box } from "@mui/material"
import { CacheProvider, EmotionCache } from "@emotion/react"

import createEmotionCache from "lib/createEmotionCache"

import DrawerProvider from "components/scaffold/DrawerProvider"
import ThemeSelectionProvider from "components/scaffold/ThemeSelectionProvider"
import ThemeProvider from "components/scaffold/ThemeProvider"
import CssBaselined from "components/scaffold/CssBaselined"
import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"

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

                <title>✌🏾 | Isaiah Smith</title>
              </Head>
              <Header />
              <Toolbar />
              <Component {...pageProps} />
              <Box flexGrow={1} />
              <Footer />
            </CssBaselined>
          </CacheProvider>
        </ThemeProvider>
      </ThemeSelectionProvider>
    </DrawerProvider>
  )
}

export default MyApp
