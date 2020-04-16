import React from 'react'
import { useQuery } from '@apollo/client'

import { Thing } from '../Home/Thing'
import { Guide } from '../Home/Guide'
import { ANONYMOUS_THINGS } from '../../lib/apollo/queries'

type Props = {
  anonymousUserId: string
}

export const AnonymousThings = ({ anonymousUserId }: Props) => {
  const { loading, error, data } = useQuery(ANONYMOUS_THINGS, {
    variables: { anonymousUserId },
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  const { anonymous_things } = data

  return (
    <>
      <ul className="m-auto" style={{ maxWidth: '60ch' }}>
        {data.anonymous_things.map(({ id, name }) => (
          <Thing key={id} name={name} />
        ))}
      </ul>
      <Guide things={anonymous_things} anonymousUserId={anonymousUserId} />
    </>
  )
}
