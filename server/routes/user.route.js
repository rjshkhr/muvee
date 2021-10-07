import { Router } from 'express'

import userController from '../controllers/user.controller.js'
import validateRequest from '../middlewares/validate-request.js'
import userValidator from '../validators/user.validator.js'

const router = Router()

router.get('/', userController.getAll)

router.get('/:id', userController.getOne)

router.post(
  '/register',
  validateRequest(userValidator.regiser),
  userController.register
)

router.post(
  '/login',
  validateRequest(userValidator.login),
  userController.login
)

export default router
