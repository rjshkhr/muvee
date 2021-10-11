import { Router } from 'express'

import movieController from '../controllers/movie.controller.js'

const router = Router()

router.get('/popular', movieController.getPopular)

router.get('/toprated', movieController.getTopRated)

router.get('/nowplaying', movieController.getNowPlaying)

router.get('/upcoming', movieController.getUpcoming)

router.get('/:id/recommended', movieController.getRecommended)

router.get('/:id/similar', movieController.getSimilar)

router.get('/:id/reviews', movieController.getReviews)

router.get('/:id/details', movieController.getDetails)

export default router
