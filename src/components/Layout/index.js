import Head from 'next/head'
import { Sidebar } from 'components'
import { MainContent } from './styles'

export const Layout = ({ head, title, description, children }) => {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-NBRRKZ3`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-NBRRKZ3', {
                page_path: window.location.pathname,
              });
            `
          }}
        />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {head}
      </Head>
      <MainContent>
        <Sidebar />
        {children}
      </MainContent>
    </>
  )
}


