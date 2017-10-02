import express from 'express'

import {projectService, galleryService} from '../services'
import notImplementedMiddleware from '../util/notImplementedMiddleware'

const router = express.Router()

router.route('/')
.get((req, res, next) => {
  const everything = {
    galleries: galleryService.getAll(),
    projects: projectService.getAll(),
  }
  res.send(everything)
  next()
})
.post(notImplementedMiddleware)
.put(notImplementedMiddleware)
.delete(notImplementedMiddleware)

export default router
