import userService from '../services/user.service.js'
import logger from '../utils/logger.js'

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.json(users)
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: 'error' })
  }
}

export default { getAll }
