import { NextApiRequest, NextApiResponse } from 'next'

import auth0 from '../../lib/auth0'

const logoutHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleLogout(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

export default logoutHandler
