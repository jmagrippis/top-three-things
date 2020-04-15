import { ApolloClient, HttpLink, InMemoryCache, concat } from '@apollo/client'
import getConfig from 'next/config'

import { authLink } from './authLink'

const { publicRuntimeConfig } = getConfig()

const httpLink = new HttpLink({
  uri: publicRuntimeConfig.graphqlEndpoint,
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authLink, httpLink),
})
