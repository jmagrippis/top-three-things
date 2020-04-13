import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'

const TITLE = 'Top Three Things | Get. Things. Done'
const DESCRIPTION =
  "The most effective way to get things done, is starting your day by setting three targets to achieve. Get the app and let's do this together."

const Home = () => (
  <>
    <NextSeo
      title={TITLE}
      description={TITLE}
      openGraph={{
        title: TITLE,
        description: DESCRIPTION,
      }}
    />
    <Body />
  </>
)

export default Home
