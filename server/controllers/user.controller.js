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

const getOne = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    res.json(user)
  } catch (err) {
    logger.error(err)
    res.status(500).json({ message: 'error' })
  }
}

export default {
  getAll,
  getOne
}
