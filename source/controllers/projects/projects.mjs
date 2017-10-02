import express from 'express'

import {projectService} from '../../services'
import notImplementedMiddleware from '../../util/notImplementedMiddleware'

const router = express.Router({mergeParams: true})

async function postProject(req, res, next) {
  const project = await projectService.create(req.body)
  res.send(project)
  next()
}

router.route('/')
.get((req, res, next) => {
  res.send(projectService.getAll())
  next()
})
.post(postProject)
.put(notImplementedMiddleware)
.delete(notImplementedMiddleware)

export default router
