/* eslint-disable @next/next/no-sync-scripts */
import { Provider } from 'contexts/AppContext'
import { GlobalStyle } from 'styles/global'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" /> */}
      </Head>
      <Provider>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
