import userService from '../services/user.service.js'
import { comparePassowrd, hashPassword } from '../utils/encrypt-password.js'

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

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    const existingUser = await userService.getUserByQuery({ email })

    if (existingUser) {
      return res.status(409).json({ error: 'email already in use' })
    }

    const passwordHash = await hashPassword(password)

    const createdUser = await userService.createUser({
      name,
      email,
      passwordHash
    })

    res.status(201).json(createdUser)
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const existingUser = await userService.getUserByQuery({ email })

    const passwordMatch = !existingUser
      ? false
      : await comparePassowrd(password, existingUser.passwordHash)

    if (!(existingUser && passwordMatch)) {
      return res.status(401).json({ error: 'invalid credentials' })
    }

    res.json(existingUser)
  } catch (err) {
    next(err)
  }
}

export default {
  getAll,
  getOne,
  register,
  login
}
