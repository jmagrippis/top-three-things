import React, { useCallback } from 'react'
import { useMutation, gql } from '@apollo/client'

import { ANONYMOUS_COMMITMENTS } from '../../../../lib/apollo/queries'
import { getDateHash } from '../../../../lib/getDateHash'
import { AddThingInput } from '../AddThingInput'

const ADD_ANONYMOUS_THING = gql`
  mutation AddAnonymousThing($name: String!, $commitmentId: uuid!) {
    insert_anonymous_things(
      objects: { name: $name, anonymous_commitment_id: $commitmentId }
    ) {
      returning {
        id
        name
        done
      }
    }
  }
`

type Props = { label: string; commitmentId: string; anonymousUserId: string }

export const AddAnonymousThing = ({
  label,
  commitmentId,
  anonymousUserId,
}: Props) => {
  const [addThing] = useMutation(ADD_ANONYMOUS_THING, {
    update(
      cache,
      {
        data: {
          insert_anonymous_things: {
            returning: [newThing],
          },
        },
      }
    ) {
      const dateHash = getDateHash()
      const {
        anonymous_commitments: [todaysCommitment],
      } = cache.readQuery({
        query: ANONYMOUS_COMMITMENTS,
        variables: { anonymousUserId, dateHash },
      })

      cache.writeQuery({
        query: ANONYMOUS_COMMITMENTS,
        variables: { anonymousUserId, dateHash },
        data: {
          anonymous_commitments: [
            {
              ...todaysCommitment,
              anonymous_things: [
                ...todaysCommitment.anonymous_things,
                newThing,
              ],
            },
          ],
        },
      })
    },
  })

  const handleSubmit = useCallback(
    (name: string) => {
      addThing({
        variables: {
          name,
          commitmentId,
        },
      })
    },
    [addThing, commitmentId]
  )

  return <AddThingInput label={label} handleSubmit={handleSubmit} />
}
