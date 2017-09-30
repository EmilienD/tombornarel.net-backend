import express from 'express'

import specificGallery from './specificGallery'
import galleries from './galleriesController'

const router = express.Router()

router.use(':galleryName', specificGallery)
router.use('/', galleries)

export default router
