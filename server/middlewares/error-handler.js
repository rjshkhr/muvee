import logger from '../utils/logger.js'

const getErrorResponse = err => {
  const types = {
    CastError: {
      statusCode: 400,
      message: 'malformatted id'
    },
    ValidationError: {
      statusCode: 422,
      message: err.isJoi ? err.details[0].message : 'validation failed'
    },
    default: {
      statusCode: err.statusCode || 500,
      message: err.message || 'error'
    }
  }
  return types[err.name] || types['default']
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, next) => {
  logger.error(err.message)
  const { statusCode, message } = getErrorResponse(err)
  return res.status(statusCode).json({ message })
}

export default errorHandler
