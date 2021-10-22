import { Router } from 'express'

import userController from '../controllers/user.controller.js'
import validateRequest from '../middlewares/validate-request.js'
import userValidator from '../validators/user.validator.js'
import { verifyRefreshToken } from '../middlewares/auth.js'

const router = Router()

router.post(
  '/register',
  validateRequest(userValidator.register),
  userController.register
)

router.post(
  '/login',
  validateRequest(userValidator.login),
  userController.login
)

router.delete('/logout', userController.logout)

router.post('/refresh', verifyRefreshToken, userController.regenerateToken)

export default router
