import { Resolvers } from '@apollo/client'

import { addLocalThing } from './addLocalThing'

export const resolvers: Resolvers = {
  Mutation: {
    addLocalThing,
  },
}
