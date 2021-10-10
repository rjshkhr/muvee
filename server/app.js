import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import connectDb from './utils/connect-db.js'
import unknownEndpoint from './middlewares/unknown-endpoint.js'
import errorHandler from './middlewares/error-handler.js'
import userRoute from './routes/user.route.js'
import movieRoute from './routes/movie.route.js'

connectDb()

const app = express()

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

app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)

app.use(unknownEndpoint)
app.use(errorHandler)

export default app
