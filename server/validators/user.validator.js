import Joi from 'joi'

const name = Joi.string().min(3).max(30).required()

const email = Joi.string().email().min(5).max(200).required()

const password = Joi.string().min(8).max(50).required()

const userValidator = {
  register: Joi.object({ name, email, password }),
  login: Joi.object({ email, password })
}

export default userValidator
