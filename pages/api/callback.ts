import { NextApiRequest, NextApiResponse } from 'next'

import auth0 from '../../lib/auth0'

const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

export default callbackHandler
