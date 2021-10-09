import { config } from 'dotenv'

config()

const { PORT, TOKEN_SECRET, TOKEN_LIFE } = process.env

const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

export default {
  PORT,
  MONGODB_URI,
  TOKEN_SECRET,
  TOKEN_LIFE
}
