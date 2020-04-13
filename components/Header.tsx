import React from 'react'
import Link from 'next/link'

export const Header = () => (
  <header className="w-full bg-red-200">
    <div className="m-auto container flex flex-row items-center p-4">
      <div className="flex-grow">
        <Link href="/">
          <a>^3</a>
        </Link>
      </div>
      <ul className="flex flex-row text-red-600">
        <li>
          <Link href="/milestones">
            <a>
              <span className="transition duration-300 hover:text-red-800">
                signup
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)
