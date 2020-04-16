import React from 'react'
import { useQuery } from '@apollo/client'

import { LocalThing } from './LocalThing'
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
      <ul className="m-auto" style={{ maxWidth: '60ch' }}>
        {data.localThings.map(({ id, name }) => (
          <LocalThing key={id} name={name} />
        ))}
      </ul>
      <Guide things={localThings} />
    </>
  )
}
