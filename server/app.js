import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import config from './utils/config.js'
import logger from './utils/logger.js'
import unknownEndpoint from './middlewares/unknown-endpoint.js'

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

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(helmet())

app.use(express.static(path.join(__dirname, '../client/build')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.use(unknownEndpoint)

export default app
