import React from 'react'
import { useQuery } from '@apollo/client'

import { Guide } from './Guide'
import { LocalThingsQuery } from '../../lib/generated/graphql'
import { LOCAL_THINGS } from '../../lib/apollo/queries'

export const LocalThings = () => {
  const { loading, error, data } = useQuery<LocalThingsQuery>(LOCAL_THINGS)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  const { localThings } = data

  return (
    <>
      <ul>
        {data.localThings.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <Guide things={localThings} />
    </>
  )
}
