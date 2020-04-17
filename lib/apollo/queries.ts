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
      anonymous_things {
        id
        name
      }
      reward {
        id
        name
        icon
        description
      }
    }
  }
`

export const ADD_ANONYMOUS_COMMITMENT = gql`
  mutation AddAnonymousCommitment($dateHash: String!) {
    insert_anonymous_commitments(objects: { date_hash: $dateHash }) {
      returning {
        id
        anonymous_user_id
      }
    }
  }
`

export const ADD_ANONYMOUS_COMMITMENT_WITH_USER_ID = gql`
  mutation AddAnonymousCommitmentWithUserId(
    $anonymousUserId: uuid!
    $dateHash: String!
  ) {
    insert_anonymous_commitments(
      objects: { anonymous_user_id: $anonymousUserId, date_hash: $dateHash }
    ) {
      returning {
        id
      }
    }
  }
`
