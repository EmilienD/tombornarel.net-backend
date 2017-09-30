import express from 'express'

import specificProject from './specificProject'
import projects from './projects'

const router = express.Router()

router.use('/:projectName', specificProject)
router.use('/', projects)

export default router
