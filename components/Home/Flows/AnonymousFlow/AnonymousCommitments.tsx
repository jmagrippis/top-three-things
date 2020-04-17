import React from 'react'
import { useLazyQuery } from '@apollo/client'

import { Thing } from '../Thing'
import { Committed } from '../Committed'
import { Guide } from '../Guide'
import { ANONYMOUS_COMMITMENTS } from '../../../../lib/apollo/queries'
import { getDateHash } from '../../../../lib/getDateHash'
import { useAddAnonymousCommitment } from './useAddAnonymousCommitment'

type Props = {
  anonymousUserId: string | null
}

export const AnonymousCommitments = ({ anonymousUserId }: Props) => {
  const addCommitment = useAddAnonymousCommitment({ anonymousUserId })

  const [getCommitment, { loading, error, data }] = useLazyQuery(
    ANONYMOUS_COMMITMENTS,
    {
      variables: { anonymousUserId, dateHash: getDateHash() },
      onCompleted({ anonymous_commitments }) {
        if (!anonymous_commitments.length) {
          addCommitment()
        }
      },
    }
  )

  if (!anonymousUserId) {
    addCommitment()
    return <p>Loading...</p>
  }

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
  }
  if (!data) {
    getCommitment()
    return <p>Loading...</p>
  }

  const {
    anonymous_commitments: [todaysCommitment],
  } = data

  return todaysCommitment && anonymousUserId ? (
    <>
      {todaysCommitment.reward ? (
        <Committed
          things={todaysCommitment.anonymous_things}
          reward={todaysCommitment.reward}
        />
      ) : (
        <>
          <ul className="m-auto p-2" style={{ maxWidth: '60ch' }}>
            {todaysCommitment.anonymous_things.map(({ id, name }) => (
              <Thing key={id} name={name} />
            ))}
          </ul>
          <Guide
            things={todaysCommitment.anonymous_things}
            commitmentId={todaysCommitment.id}
            userId={anonymousUserId}
            isAnonymous
          />
        </>
      )}
    </>
  ) : (
    <p>Loading...</p>
  )
}
