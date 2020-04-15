import React from 'react'

import { User } from '../../lib/user'
import { Things } from './Things'

type Props = {
  user: User
  isUserLoading: boolean
}

export const Body = ({ user, isUserLoading }: Props) => (
  <main className="w-full flex-grow container p-4">
    <p>
      Write down the top three things you would like to achieve in the day. Get.
      Things. Done.
    </p>
    <p>
      We’ll be helping you get things done soon. In the meantime, feel free to
      play with the login / logout functionality.
    </p>
    {isUserLoading && <p>Checking whether you are logged-in already...</p>}
    {!isUserLoading && user ? (
      <p>Hey, you’re logged in as {user.given_name}!</p>
    ) : (
      <p>You are not logged-in.</p>
    )}
    <Things />
  </main>
)
