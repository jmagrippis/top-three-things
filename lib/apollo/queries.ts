import { gql } from '@apollo/client'

export const LOCAL_THINGS = gql`
  query LocalThings {
    localThings @client {
      id
      name
      description
      done
    }
  }
`
