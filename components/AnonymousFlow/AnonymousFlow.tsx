import React from 'react'
import { useQuery } from '@apollo/client'

import {
  getAnonymousUserId,
  setAnonymousUserId,
} from '../../lib/anonymousUserId'
import { AnonymousThings } from './AnonymousThings'
import { ANONYMOUS_USER_ID } from '../../lib/apollo/queries'

export const AnonymousFlow = () => {
  const { loading, error, data } = useQuery(ANONYMOUS_USER_ID, {
    onCompleted: ({ anonymousUserId }) => {
      if (anonymousUserId && !getAnonymousUserId()) {
        setAnonymousUserId(anonymousUserId)
      }
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return <AnonymousThings anonymousUserId={data.anonymousUserId} />
}
