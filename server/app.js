import express from 'express'
import mongoose from 'mongoose'

import config from './utils/config.js'
import logger from './utils/logger.js'

const app = express()

logger.info('Connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch(err => {
    logger.error('Error connecting to MongoDB:', err.message)
  })

app.get('/api/message', (_req, res) => {
  res.json({ message: 'Hello World' })
})

export default app
