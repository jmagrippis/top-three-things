import { gql } from '@apollo/client'

export const ANONYMOUS_USER_ID = gql`
  query AnonymousUserId {
    anonymousUserId @client
  }
`

export const ANONYMOUS_THINGS = gql`
  query AnonymousThings($anonymousUserId: uuid!) {
    anonymous_things(where: { anonymous_user_id: { _eq: $anonymousUserId } }) {
      id
      name
      done
    }
  }
`
