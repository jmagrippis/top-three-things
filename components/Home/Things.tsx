import React from 'react'
import { useQuery, gql } from '@apollo/client'

const THINGS = gql`
  {
    things {
      id
      name
    }
  }
`

export const Things = () => {
  const { loading, error, data } = useQuery(THINGS)

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
