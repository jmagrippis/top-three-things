import React from 'react'
import { useQuery } from '@apollo/client'

import { AnonymousCommitments } from './AnonymousCommitments'
import { ANONYMOUS_USER_ID } from '../../lib/apollo/queries'

export const AnonymousFlow = () => {
  const { loading, error, data } = useQuery(ANONYMOUS_USER_ID)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  return <AnonymousCommitments anonymousUserId={data.anonymousUserId} />
}
