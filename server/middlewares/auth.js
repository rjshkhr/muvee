import jwt from 'jsonwebtoken'

import config from '../utils/config.js'
import HttpError from '../utils/http-error.js'

const verifyToken = async (req, _res, next) => {
  const authorization = req.get('authorization')

  try {
    if (!authorization) throw new HttpError(403, 'token missing')

    const token = authorization.substring(7)
    req.token = token

    const { id } = jwt.verify(token, config.TOKEN_SECRET)
    req.id = id

    next()
  } catch (err) {
    next(err)
  }
}

export { verifyToken }
