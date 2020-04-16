import React from 'react'

type Props = {
  name: string
}

export const Thing = ({ name }: Props) => (
  <li className="bg-white p-4 rounded shadow mb-4">{name}</li>
)
