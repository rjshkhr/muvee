import User from '../models/user.model.js'

const getAllUsers = async () => await User.find()

const getUserById = async userId => await User.findById(userId)

const getUserByQuery = async query => await User.findOne(query)

const createUser = async creds => await User.create(creds)

export default {
  getAllUsers,
  getUserById,
  getUserByQuery,
  createUser
}
