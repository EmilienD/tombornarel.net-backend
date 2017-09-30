import express from 'express'

import controllers from './controllers'

const tommyBornyFabulousWebsitey = express()

tommyBornyFabulousWebsitey.use('/',
controllers)

tommyBornyFabulousWebsitey.listen(6666)
