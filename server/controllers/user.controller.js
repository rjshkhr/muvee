import userService from '../services/user.service.js'
import HttpError from '../utils/http-error.js'

const getOne = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)

    if (!user) {
      throw new HttpError(404, 'user not found')
    }

    if (user.id !== req.userId) {
      throw new HttpError(403, 'token invalid')
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
    const refreshToken = await userService.signRefreshToken(createdUser.id)

    res.status(201).json({
      data: { token, refreshToken, user: createdUser },
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
    const refreshToken = await userService.signRefreshToken(existingUser.id)

    res.json({
      data: { token, refreshToken, user: existingUser },
      message: 'user logged in'
    })
  } catch (err) {
    next(err)
  }
}

const logout = async (_req, res, next) => {
  try {
    res.json({ message: 'user logged out' })
  } catch (err) {
    next(err)
  }
}

const regenerateToken = async (req, res, next) => {
  try {
    const token = userService.signToken(req.userId)
    const refreshToken = await userService.signRefreshToken(req.userId)
    res.json({ data: { token, refreshToken } })
  } catch (err) {
    next(err)
  }
}

const deleteAccount = async (req, res, next) => {
  try {
    const userToDelete = await userService.getUserById(req.params.id)

    if (!userToDelete) {
      throw new HttpError(404, 'user not found')
    }

    if (userToDelete.id !== req.userId) {
      throw new HttpError(403, 'token invalid')
    }

    userService.deleteUser(req.params.id)

    res.json({ message: 'account deleted' })
  } catch (err) {
    next(err)
  }
}

export default {
  getOne,
  register,
  login,
  logout,
  regenerateToken,
  deleteAccount
}
