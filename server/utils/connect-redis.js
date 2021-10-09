import Redis from 'ioredis'

import config from './config.js'
import logger from './logger.js'

  logger.info('Connecting to', config.REDIS_URI)

const redisClient = new Redis(config.REDIS_URI)

redisClient.connect(() => {
  logger.info('Connected to Redis')
})

export default redisClient
