import express from 'express'

import { projectService } from '../../services'

const router = express.Router({mergeParams: true, caseSensitive: true})

router.route('/')
.get((req, res, next) => {
  projectService.get({name: req.params.projectName})
  .then(project => {
    res.send(project)
  })
  next()
})
.post()
.put()
.delete()

export default router
