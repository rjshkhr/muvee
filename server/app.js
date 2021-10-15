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
import watchlistRoute from './routes/watchlist.route.js'

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(helmet())

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/watchlist', watchlistRoute)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, '../client/build')))

if (process.env.NODE_ENV === 'production') {
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })
}

app.use(unknownEndpoint)
app.use(errorHandler)

export default app
