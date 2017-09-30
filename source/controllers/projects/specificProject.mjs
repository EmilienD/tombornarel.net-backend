import express from 'express'

const router = express.Router({mergeParams: true, caseSensitive: true})

router.route('/')
.get((req, res, next) => {
  res.send(`project ${req.params.projectName}`)
  next()
})
.post()
.put()
.delete()

export default router
