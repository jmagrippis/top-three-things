import { FormEvent, useRef, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { sample } from 'lodash'

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

const ADD_LOCAL_THING = gql`
  mutation AddThing($name: String!) {
    addLocalThing(name: $name) @client {
      id
    }
  }
`

type Props = { label: string }

export const AddLocalThingForm = ({ label }: Props) => {
  const [addThing] = useMutation(ADD_LOCAL_THING)
  const input = useRef<HTMLInputElement>(null)
  const [placeholder] = useState(sample(placeholders))

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {
      current: { value },
    } = input
    input.current.value = ''
    addThing({ variables: { name: value } })
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
