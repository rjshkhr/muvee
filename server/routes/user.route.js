import { Router } from 'express'

import userController from '../controllers/user.controller.js'

const router = Router()

router.get('/', userController.getAll)

router.get('/:id', userController.getOne)

router.post('/register', userController.register)

export default router
