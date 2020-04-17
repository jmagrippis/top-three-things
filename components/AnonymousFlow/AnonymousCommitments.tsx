import React from 'react'
import { useQuery } from '@apollo/client'

import { Thing } from '../Home/Thing'
import { Guide } from '../Home/Guide'
import { ANONYMOUS_COMMITMENTS } from '../../lib/apollo/queries'
import { getDateHash } from '../../lib/getDateHash'
import { useAddAnonymousCommitment } from './useAddAnonymousCommitment'

type Props = {
  anonymousUserId: string | null
}

export const AnonymousCommitments = ({ anonymousUserId }: Props) => {
  const addCommitment = useAddAnonymousCommitment({ anonymousUserId })

  const { loading, error, data } = useQuery(ANONYMOUS_COMMITMENTS, {
    variables: { anonymousUserId, dateHash: getDateHash() },
    onCompleted({ anonymous_commitments }) {
      if (!anonymous_commitments.length) {
        addCommitment()
      }
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }

  const {
    anonymous_commitments: [todaysCommitment],
  } = data

  return todaysCommitment && anonymousUserId ? (
    <>
      <ul className="m-auto" style={{ maxWidth: '60ch' }}>
        {todaysCommitment.anonymous_things.map(({ id, name }) => (
          <Thing key={id} name={name} />
        ))}
      </ul>
      <Guide
        things={todaysCommitment.anonymous_things}
        commitmentId={todaysCommitment.id}
        anonymousUserId={anonymousUserId}
      />
    </>
  ) : null
}
