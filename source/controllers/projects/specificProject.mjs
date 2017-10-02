import express from 'express'

import { projectService } from '../../services'
import notImplementedMiddleware from '../../util/notImplementedMiddleware'

const router = express.Router({mergeParams: true, caseSensitive: true})

async function putProject(req, res, next) {
  const project = await projectService.update(req.params.projectName, req.body)
  res.send(project)
  next()
}

async function deleteProject(req, res, next) {
  projectService.remove(req.params.projectName)
  res.status(404).send('Could not find gallery.')
  next()
}

router.route('/')
.get((req, res, next) => {
  projectService.get({name: req.params.projectName})
  .then(project => {
    res.send(project)
  })
  next()
})
.post(notImplementedMiddleware)
.put(putProject)
.delete(deleteProject)

export default router
