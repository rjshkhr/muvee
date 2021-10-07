import userService from '../services/user.service.js'
import { comparePassowrd, hashPassword } from '../utils/encrypt-password.js'
import HttpError from '../utils/http-error.js'

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers()
    res.json({ data: users })
  } catch (err) {
    next(err)
  }
}

const getOne = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)
    if (!user) {
      throw new HttpError(404, 'user not found')
    }
    res.json({ data: user })
  } catch (err) {
    next(err)
  }
}

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    const existingUser = await userService.getUserByQuery({ email })

    if (existingUser) {
      throw new HttpError(409, 'email already in use')
    }

    const passwordHash = await hashPassword(password)

    const createdUser = await userService.createUser({
      name,
      email,
      passwordHash
    })

    res.status(201).json({ data: createdUser, message: 'user registered' })
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
      throw new HttpError(401, 'invalid credentials')
    }

    res.json({ data: existingUser, message: 'user logged in' })
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
