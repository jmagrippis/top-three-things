import { FormEvent, useRef, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { sample } from 'lodash'

import { ANONYMOUS_COMMITMENTS } from '../../../lib/apollo/queries'
import { getDateHash } from '../../../lib/getDateHash'
import { placeholderThings } from './placeholderThings'

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
  const input = useRef<HTMLInputElement>(null)
  const [placeholder] = useState(sample(placeholderThings))

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {
      current: { value },
    } = input
    input.current.value = ''
    addThing({
      variables: {
        name: value,
        commitmentId,
      },
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <label className="mb-2 block" htmlFor="thing">
        {label}
      </label>
      <input
        ref={input}
        name="thing"
        className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline sm:col-span-2 mb-4 sm:mb-0"
        placeholder={placeholder}
        required
      />
    </form>
  )
}
