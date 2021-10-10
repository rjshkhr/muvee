import { Router } from 'express'

import movieController from '../controllers/movie.controller.js'

const router = Router()

router.get('/popular', movieController.getPopular)

router.get('/toprated', movieController.getTopRated)

router.get('/nowplaying', movieController.getNowPlaying)

router.get('/upcoming', movieController.getUpcoming)

export default router
