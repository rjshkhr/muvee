import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.model.js'
import config from '../utils/config.js'

const getAllUsers = async () => await User.find()

const getUserById = async userId => await User.findById(userId)

const getUserByQuery = async query => await User.findOne(query)

const createUser = async creds => await User.create(creds)

const hashPassword = async password => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

const validatePassowrd = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

const signToken = id => {
  const options = { expiresIn: config.TOKEN_LIFE }
  return jwt.sign({ id }, config.TOKEN_SECRET, options)
}

export default {
  getAllUsers,
  getUserById,
  getUserByQuery,
  createUser,
  hashPassword,
  validatePassowrd,
  signToken
}
