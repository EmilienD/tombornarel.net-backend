import express from 'express'

const router = express.Router()

router.route('/')
.get((req, res, next) => {
  res.send('all galleries')
  next()
})
.post()
.put()
.delete()

export default router
