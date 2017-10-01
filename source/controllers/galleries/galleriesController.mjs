import express from 'express'

import { galleryService } from '../../services'

const router = express.Router()

router.route('/')
.get((req, res, next) => {
  res.send('all galleries')
  next()
})
.post((req, res, next) => {
  galleryService.add(req.body)
  next()
})

export default router
