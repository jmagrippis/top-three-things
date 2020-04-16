import { FormEvent, useRef, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { sample } from 'lodash'

import { ANONYMOUS_THINGS } from '../../lib/apollo/queries'
import { getDateHash } from '../../lib/getDateHash'

const placeholders = [
  'nail guitar solo',
  'graph churn rate',
  'revamp about page',
  'practice handstands',
  'authentication logic',
  'interview prep',
  'record podcast',
  'record narration',
  'edit video',
  'submit pitch',
  'work the socials',
  'chase Alison',
  'meditation',
  'stock up kitchen for dinner',
  'finalize guest-list',
  'automate end-of-day report',
  'tune flux capacitor',
]

const ADD_ANONYMOUS_THING = gql`
  mutation AddAnonymousThing(
    $name: String!
    $anonymousUserId: uuid!
    $dateHash: String!
  ) {
    insert_anonymous_things(
      objects: {
        name: $name
        anonymous_user_id: $anonymousUserId
        date_hash: $dateHash
      }
    ) {
      returning {
        id
        name
        done
      }
    }
  }
`

type Props = { label: string; anonymousUserId: string }

export const AddAnonymousThing = ({ label, anonymousUserId }: Props) => {
  const [addAnonymousThing] = useMutation(ADD_ANONYMOUS_THING, {
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
      const { anonymous_things } = cache.readQuery({
        query: ANONYMOUS_THINGS,
        variables: { anonymousUserId, dateHash: getDateHash() },
      })
      cache.writeQuery({
        query: ANONYMOUS_THINGS,
        variables: { anonymousUserId, dateHash: getDateHash() },
        data: { anonymous_things: [...anonymous_things, newThing] },
      })
    },
  })
  const input = useRef<HTMLInputElement>(null)
  const [placeholder] = useState(sample(placeholders))

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {
      current: { value },
    } = input
    input.current.value = ''
    addAnonymousThing({
      variables: {
        name: value,
        dateHash: getDateHash(),
        anonymousUserId,
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
