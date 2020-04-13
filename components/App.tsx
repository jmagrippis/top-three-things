import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import logo from './logo.png'
import { Header } from './Header'
import { Footer } from './Footer'

const rootUrl = 'https://topthreethings.com'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_UK',
        url: rootUrl,
        site_name: 'Top Three Things',
        images: [
          {
            url: `${rootUrl}${logo}`,
            width: 512,
            height: 512,
            alt: 'the logo of Top Three Things',
          },
        ],
      }}
      twitter={{
        cardType: 'summary',
      }}
    />
    <div className="w-full flex flex-grow flex-col items-center justify-between">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
)
