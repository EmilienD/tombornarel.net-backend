import express from 'express'
import bodyParser from 'body-parser'

import controllers from './controllers'

const tommyBornyFabulousWebsitey = express()

tommyBornyFabulousWebsitey.use(
  '/',
  bodyParser.json(),
  controllers
)

tommyBornyFabulousWebsitey.listen(6666)
