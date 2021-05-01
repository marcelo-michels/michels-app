import { NextApiRequest, NextApiResponse } from 'next'

const index = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ name: 'API Works' })
}

export default index
