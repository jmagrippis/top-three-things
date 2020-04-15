import { Resolver } from '@apollo/client'

import { LOCAL_THINGS } from '../queries'

let nextThingId = 0

export const addLocalThing: Resolver = (_, { name }, { cache }) => {
  const previous = cache.readQuery({ query: LOCAL_THINGS })

  const thing = {
    name,
    id: nextThingId++,
    done: false,
    description: null,
    __typename: 'LocalThings',
  }
  const data = {
    localThings: [...previous.localThings, thing],
  }
  cache.writeQuery({ query: LOCAL_THINGS, data })

  return thing
}
