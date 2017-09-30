import express from 'express'

import galleries from './galleries'
import projects from './projects'
import all from './all'

const router = express.Router()
router.use('/galleries', galleries)
router.use('/projects', projects)
router.use('/', all)

export default router
