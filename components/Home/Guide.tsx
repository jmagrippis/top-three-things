import React from 'react'

import { AddLocalThingForm } from './AddLocalThingForm'
import { Rewards } from './Rewards/Rewards'
import { LocalThings } from '../../lib/generated/graphql'

type Props = {
  things: LocalThings[]
}

export const Guide = ({ things }: Props) => {
  switch (things.length) {
    case 0:
      return (
        <div className="text-lg m-auto" style={{ maxWidth: '60ch' }}>
          <p className="mb-2">
            All you need for a productive day, is to start it by defining the
            top three things you want to get done.
          </p>{' '}
          <p className="mb-2">We'll help.</p>
          <AddLocalThingForm label="At the end of this day, what would you absolutely want to have done?" />
        </div>
      )
    case 1:
      return (
        <div className="text-lg m-auto" style={{ maxWidth: '60ch' }}>
          <p className="mb-2">Great start. </p>
          <AddLocalThingForm label="What else do you really need to do today?" />
        </div>
      )
    case 2:
      return (
        <div className="text-lg m-auto" style={{ maxWidth: '60ch' }}>
          <p className="mb-2">Nice. Let's finish strong.</p>
          <AddLocalThingForm label="Write one last thing you want to accomplish today" />
        </div>
      )
    case 3:
      return (
        <div className="text-lg m-auto" style={{ maxWidth: '60ch' }}>
          <p className="mb-2">Great! That looks like a solid plan.</p>
          <p className="mb-6">
            Make changes now, or pick one of the rewards below to commit.
          </p>
          <Rewards />
        </div>
      )
    default:
      return null
  }
}
