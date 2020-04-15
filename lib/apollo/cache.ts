import { InMemoryCache } from '@apollo/client'

import { LOCAL_THINGS } from './queries'

export const cache = new InMemoryCache()

cache.writeQuery({
  query: LOCAL_THINGS,
  data: {
    localThings: [],
  },
})
