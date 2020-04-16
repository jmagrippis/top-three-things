import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { ThingsQuery } from '../../lib/generated/graphql'

const THINGS = gql`
  query Things {
    things {
      id
      name
    }
  }
`

export const Things = () => {
  const { loading, error, data } = useQuery<ThingsQuery>(THINGS)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return (
    <ul>
      {data.things.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}
