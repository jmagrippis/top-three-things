import React from 'react'
import { useQuery, useMutation } from '@apollo/client'

import { Thing } from '../Thing'
import { Committed } from '../Committed'
import { Guide } from '../Guide'
import { ADD_COMMITMENT, COMMITMENTS } from '../../../../lib/apollo/queries'
import { getDateHash } from '../../../../lib/getDateHash'

type Props = {
  userId: string | null
}

export const Commitments = ({ userId }: Props) => {
  const dateHash = getDateHash()
  const [addCommitment] = useMutation(ADD_COMMITMENT, {
    refetchQueries: ['Commitments'],
    variables: {
      dateHash,
      userId,
    },
  })

  const { loading, error, data } = useQuery(COMMITMENTS, {
    variables: { userId, dateHash },
    onCompleted({ commitments }) {
      if (!commitments.length) {
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
    commitments: [todaysCommitment],
  } = data

  return todaysCommitment ? (
    <>
      {todaysCommitment.reward ? (
        <Committed
          things={todaysCommitment.things}
          reward={todaysCommitment.reward}
        />
      ) : (
        <>
          <ul className="m-auto p-2" style={{ maxWidth: '60ch' }}>
            {todaysCommitment.things.map(({ id, name }) => (
              <Thing key={id} name={name} />
            ))}
          </ul>
          <Guide
            things={todaysCommitment.things}
            commitmentId={todaysCommitment.id}
            userId={userId}
          />
        </>
      )}
    </>
  ) : (
    <p>Loading...</p>
  )
}
