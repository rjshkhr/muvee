import mongoose from 'mongoose'

import config from './config.js'
import logger from './logger.js'

const connectDb = async () => {
  logger.info('Connecting to', config.MONGODB_URI)
  try {
    await mongoose.connect(config.MONGODB_URI)
    logger.info('Connected to MongoDB')
  } catch (err) {
    logger.error('Error connecting to MongoDB:', err.message)
  }
}

export default connectDb
