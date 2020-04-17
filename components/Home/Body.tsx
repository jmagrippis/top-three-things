import React from 'react'

import { User } from '../../lib/user'
import { AuthenticatedFlow } from './Flows/AuthenticatedFlow/AuthenticatedFlow'
import { AnonymousFlow } from './Flows/AnonymousFlow/AnonymousFlow'

type Props = {
  user: User
  isUserLoading: boolean
}

export const Body = ({ user, isUserLoading }: Props) => (
  <main className="w-full flex-grow container p-4 text-center">
    <h2 className="text-2xl font-semibold mb-2">Get. Things. Done.</h2>

    {isUserLoading && <p>Checking whether you are logged-in already...</p>}
    {!isUserLoading && user ? (
      <AuthenticatedFlow userId={user.sub} />
    ) : (
      <AnonymousFlow />
    )}
  </main>
)
