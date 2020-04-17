import React from 'react'

import { Thing } from './Thing'
import { SelectedReward } from './Rewards/Reward/SelectedReward'
import { Anonymous_Commitments } from '../../../lib/generated/graphql'

type Props = {
  things: Anonymous_Commitments['anonymous_things']
  reward: Anonymous_Commitments['reward']
}

export const Committed = ({ things, reward }: Props) => (
  <section className="m-auto pt-2" style={{ maxWidth: '60ch' }}>
    <ul>
      {things.map(({ id, name }) => (
        <Thing key={id} name={name} />
      ))}
    </ul>
    <div className="text-lg mb-4">
      <p className="text-lg mb-2">
        Your commitment for today is <strong>locked</strong>
      </p>
      <p>Get through one step at a time and remember your reward!</p>
    </div>
    <SelectedReward reward={reward} />
  </section>
)
