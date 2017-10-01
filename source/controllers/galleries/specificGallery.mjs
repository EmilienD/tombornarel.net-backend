import express from 'express'

import { galleryService } from '../../services'

const router = express.Router({mergeParams: true, caseSensitive: true})

router.route('/')
.get((req, res, next) => {
  galleryService.get({name: req.params.galleryName})
  .then(gallery => {
    res.send(gallery)
    next()
  })
})
.put((req, res, next) => {
  const gallery = Object.assign({originalName: req.params.galleryName}, req.body)
  galleryService.update(gallery)
  .then(updatedGallery => {
    res.send(updatedGallery)
    next()
  })
})
.delete()

export default router
