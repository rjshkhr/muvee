import userService from '../services/user.service.js'
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

    const passwordHash = await userService.hashPassword(password)

    const createdUser = await userService.createUser({
      name,
      email,
      passwordHash
    })

    const token = userService.signToken(createdUser.id)

    res.status(201).json({
      data: { token, user: createdUser },
      message: 'user registered'
    })
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
      : await userService.validatePassowrd(password, existingUser.passwordHash)

    if (!(existingUser && passwordMatch)) {
      throw new HttpError(401, 'invalid credentials')
    }

    const token = userService.signToken(existingUser.id)

    res.json({ data: { token, user: existingUser }, message: 'user logged in' })
  } catch (err) {
    next(err)
  }
}

const getSecret = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)

    if (!user) throw new HttpError(404, 'user not found')

    if (req.params.id !== req.id) {
      throw new HttpError(403, 'token invalid or missing')
    }

    res.json({ data: 'secret route' })
  } catch (err) {
    next(err)
  }
}

export default {
  getAll,
  getOne,
  register,
  login,
  getSecret
}
