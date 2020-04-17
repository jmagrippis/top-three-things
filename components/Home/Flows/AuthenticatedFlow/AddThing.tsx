import React, { useCallback } from 'react'
import { useMutation, gql } from '@apollo/client'

import { COMMITMENTS } from '../../../../lib/apollo/queries'
import { getDateHash } from '../../../../lib/getDateHash'
import { AddThingInput } from '../AddThingInput'

const ADD_THING = gql`
  mutation AddThing($name: String!, $commitmentId: uuid!) {
    insert_things(objects: { name: $name, commitment_id: $commitmentId }) {
      returning {
        id
        name
        done
      }
    }
  }
`

type Props = { label: string; commitmentId: string; userId: string }

export const AddThing = ({ label, commitmentId, userId }: Props) => {
  const [addThing] = useMutation(ADD_THING, {
    update(
      cache,
      {
        data: {
          insert_things: {
            returning: [newThing],
          },
        },
      }
    ) {
      const dateHash = getDateHash()
      const {
        commitments: [todaysCommitment],
      } = cache.readQuery({
        query: COMMITMENTS,
        variables: { userId, dateHash },
      })

      cache.writeQuery({
        query: COMMITMENTS,
        variables: { userId, dateHash },
        data: {
          commitments: [
            {
              ...todaysCommitment,
              things: [...todaysCommitment.things, newThing],
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
