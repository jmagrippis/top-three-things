import { gql } from '@apollo/client'

export const ANONYMOUS_USER_ID = gql`
  query AnonymousUserId {
    anonymousUserId @client
  }
`

export const ANONYMOUS_COMMITMENTS = gql`
  query AnonymousCommitments($anonymousUserId: uuid!, $dateHash: String!) {
    anonymous_commitments(
      where: {
        anonymous_user_id: { _eq: $anonymousUserId }
        date_hash: { _eq: $dateHash }
      }
    ) {
      id
      reward_id
      anonymous_things {
        id
        name
      }
    }
  }
`

export const ADD_ANONYMOUS_COMMITMENT = gql`
  mutation AddAnonymousCommitment($anonymousUserId: uuid!, $dateHash: String!) {
    insert_anonymous_commitments(
      objects: { anonymous_user_id: $anonymousUserId, date_hash: $dateHash }
    ) {
      returning {
        id
      }
    }
  }
`
