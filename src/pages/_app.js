import { Provider } from 'contexts/AppContext'
import { GlobalStyle } from 'styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
