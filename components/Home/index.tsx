import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'
import { User } from '../../lib/user'

const TITLE = 'Top Three Things | Get. Things. Done'
const DESCRIPTION =
  "The most effective way to get things done, is starting your day by setting three targets to achieve. Get the app and let's do this together."

type Props = {
  user: User
  isUserLoading: boolean
}

const Home = ({ user, isUserLoading }: Props) => (
  <>
    <NextSeo
      title={TITLE}
      description={TITLE}
      openGraph={{
        title: TITLE,
        description: DESCRIPTION,
      }}
    />
    <Body user={user} isUserLoading={isUserLoading} />
  </>
)

export default Home
