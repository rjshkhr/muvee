import User from '../models/user.model.js'

const getAllUsers = async () => await User.find()

const getUserById = async userId => await User.findById(userId)

export default {
  getAllUsers,
  getUserById
}
