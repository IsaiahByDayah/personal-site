import { CacheProvider, EmotionCache } from "@emotion/react"
import { Box, Toolbar } from "@mui/material"
import { getRepositoryName } from "@prismicio/client"
import { PrismicPreview } from "@prismicio/next"
import { AppProps } from "next/app"
import Head from "next/head"

import sm from "sm.json"

import CssBaselined from "components/scaffold/CssBaselined"
import DrawerProvider from "components/scaffold/DrawerProvider"
import Footer from "components/scaffold/Footer"
import Header from "components/scaffold/Header"
import ThemeProvider from "components/scaffold/ThemeProvider"
import ThemeSelectionProvider from "components/scaffold/ThemeSelectionProvider"
import createEmotionCache from "lib/createEmotionCache"

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
    <PrismicPreview repositoryName={getRepositoryName(sm.apiEndpoint)}>
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
    </PrismicPreview>
  )
}

export default MyApp
