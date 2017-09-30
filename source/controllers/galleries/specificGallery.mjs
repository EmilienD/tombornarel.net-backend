import express from 'express'

const router = express.Router({mergeParams: true, caseSensitive: true})

router.route('/')
.get((req, res, next) => {
  res.send(`gallery named ${req.params.galleryName}`)
  next()
})
.post()
.put()
.delete()

export default router
