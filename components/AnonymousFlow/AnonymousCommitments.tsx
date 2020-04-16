import React from 'react'
import { useQuery, useMutation } from '@apollo/client'

import { Thing } from '../Home/Thing'
import { Guide } from '../Home/Guide'
import {
  ANONYMOUS_COMMITMENTS,
  ADD_ANONYMOUS_COMMITMENT,
} from '../../lib/apollo/queries'
import { getDateHash } from '../../lib/getDateHash'

type Props = {
  anonymousUserId: string
}

export const AnonymousCommitments = ({ anonymousUserId }: Props) => {
  const [addCommitment] = useMutation(ADD_ANONYMOUS_COMMITMENT, {
    refetchQueries: ['AnonymousCommitments'],
  })

  const { loading, error, data } = useQuery(ANONYMOUS_COMMITMENTS, {
    variables: { anonymousUserId, dateHash: getDateHash() },
    onCompleted({ anonymous_commitments }) {
      if (!anonymous_commitments.length) {
        addCommitment({
          variables: { anonymousUserId, dateHash: getDateHash() },
        })
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

  return todaysCommitment ? (
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
