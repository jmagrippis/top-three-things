import React from 'react'
import Link from 'next/link'

import { User } from '../lib/user'

type Props = {
  user: User
}

export const Header = ({ user }: Props) => (
  <header className="w-full bg-red-200">
    <div className="m-auto container flex flex-row items-center p-4">
      <div className="flex-grow">
        <Link href="/">
          <a>^3</a>
        </Link>
      </div>
      <ul className="flex flex-row text-red-600">
        <li>
          {user ? (
            <a href="/api/logout">
              <span className="transition duration-300 hover:text-red-800">
                logout
              </span>
            </a>
          ) : (
            <a href="/api/login">
              <span className="transition duration-300 hover:text-red-800">
                login
              </span>
            </a>
          )}
        </li>
      </ul>
    </div>
  </header>
)
