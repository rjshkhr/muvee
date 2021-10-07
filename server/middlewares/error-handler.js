import logger from '../utils/logger.js'

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, next) => {
  logger.error(err.message)

  switch (err.name) {
    case 'CastError':
      return res.status(400).json({ error: 'malformatted id' })
    default:
      return res.status(err.status || 500).json({ error: 'error' })
  }
}

export default errorHandler
