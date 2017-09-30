import express from 'express'

const router = express.Router()

router.route('/')
.get((req, res, next) => {
  res.send({state: 'haha'})
  next()
})
.post()
.put()
.delete()

export default router
