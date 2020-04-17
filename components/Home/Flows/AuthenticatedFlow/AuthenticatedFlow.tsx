import React from 'react'

import { Commitments } from './Commitments'

type Props = {
  userId: string
}

export const AuthenticatedFlow = ({ userId }: Props) => (
  <Commitments userId={userId} />
)
