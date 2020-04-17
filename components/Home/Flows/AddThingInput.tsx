import { FormEvent, useRef, useState } from 'react'
import { sample } from 'lodash'

import { placeholderThings } from './placeholderThings'

type Props = {
  label: string
  handleSubmit: (name: string) => void
}

export const AddThingInput = ({ label, handleSubmit }: Props) => {
  const input = useRef<HTMLInputElement>(null)
  const [placeholder] = useState(sample(placeholderThings))

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {
      current: { value },
    } = input
    input.current.value = ''
    handleSubmit(value)
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
