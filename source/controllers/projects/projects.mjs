import express from 'express'

const router = express.Router({mergeParams: true})

router.route('/')
.get((req, res, next) => {
  res.send('all projects')
  next()
})
.post()
.put()
.delete()

export default router
