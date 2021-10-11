import { Router } from 'express'

import watchlistController from '../controllers/watchlist.controller.js'
import validateRequest from '../middlewares/validate-request.js'
import watchlistValidator from '../validators/watchlist.validator.js'
import { verifyToken } from '../middlewares/auth.js'

const router = Router()

router.get('/', verifyToken, watchlistController.getAll)

router.post(
  '/',
  verifyToken,
  validateRequest(watchlistValidator.watchlist),
  watchlistController.addNew
)

router.delete('/:id', verifyToken, watchlistController.remove)

export default router
