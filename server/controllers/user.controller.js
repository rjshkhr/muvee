import userService from '../services/user.service.js'

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

const getOne = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
}

export default {
  getAll,
  getOne
}
