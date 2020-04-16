import { ApolloClient, HttpLink, concat } from '@apollo/client'
import getConfig from 'next/config'

import { authLink } from './authLink'
import { cache } from './cache'

const { publicRuntimeConfig } = getConfig()

const httpLink = new HttpLink({
  uri: publicRuntimeConfig.graphqlEndpoint,
})

export const apolloClient = new ApolloClient({
  cache,
  link: concat(authLink, httpLink),
})
