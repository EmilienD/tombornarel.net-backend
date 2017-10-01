import express from 'express'

import { galleryService } from '../../services'

const router = express.Router()

async function addGalleryMidleware(req, res, next) {
  res.send(await galleryService.add(req.body))
  next()
}

router.route('/')
.get((req, res, next) => {
  const galleries = galleryService.getAll()
  res.send(galleries)
  next()
})
.post(addGalleryMidleware)

export default router
