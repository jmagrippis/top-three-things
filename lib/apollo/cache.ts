import { InMemoryCache } from '@apollo/client'
import store from 'store2'
import { v4 } from 'uuid'

import { ANONYMOUS_USER_ID } from './queries'

export const ANONYMOUS_USER_ID_KEY = 'anonymousUserId'

export const cache = new InMemoryCache()

cache.writeQuery({
  query: ANONYMOUS_USER_ID,
  data: {
    anonymousUserId: store.get(ANONYMOUS_USER_ID_KEY, v4()),
  },
})
