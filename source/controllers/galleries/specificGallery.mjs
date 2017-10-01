import express from 'express'

import { galleryService } from '../../services'

const router = express.Router({mergeParams: true, caseSensitive: true})

router.route('/')
.get((req, res, next) => {
  const gallery = galleryService.get({name: req.params.galleryName})

  !gallery ?
  res.status(404).send('Could not find gallery.')
  : res.send(gallery)

  next()
})
.put(async (req, res, next) => {
  const updatedGallery = await galleryService.update(req.params.galleryName, req.body)
  res.send(updatedGallery)
  next()
})
.delete((req, res, next) => {
  galleryService.remove({name: req.params.galleryName})
  res.status(404).send('Could not find gallery.')
  next()
})

export default router
