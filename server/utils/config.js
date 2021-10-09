import { config } from 'dotenv'

config()

const {
  PORT,
  TOKEN_SECRET,
  TOKEN_LIFE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_LIFE,
  REDIS_URI
} = process.env

const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

export default {
  PORT,
  MONGODB_URI,
  TOKEN_SECRET,
  TOKEN_LIFE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_LIFE,
  REDIS_URI
}
