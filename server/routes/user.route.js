import { Router } from 'express'

import userController from '../controllers/user.controller.js'
import validateRequest from '../middlewares/validate-request.js'
import userValidator from '../validators/user.validator.js'
import { verifyToken, verifyRefreshToken } from '../middlewares/auth.js'

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

router.delete('/logout', verifyToken, userController.logout)

router.post('/refresh', verifyRefreshToken, userController.regenerateToken)

router.get('/secret/:id', verifyToken, userController.getSecret)

export default router
