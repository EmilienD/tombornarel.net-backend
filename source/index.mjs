import express from 'express'
import bodyParser from 'body-parser'

import controllers from './controllers'

const tommyBornyFabulousWebsitey = express()

tommyBornyFabulousWebsitey.use(
  (req, res, next) => {
    try {
      next()
    } catch(e) {
      if (e.satus && e.httpMessage) {
        res.status(e.status).send('Sorry, an error happened:', e.httpMessage)
      } else {
        res.status(500).send('Aaah! Caffeine overdose!')
      }
    }
  },
  bodyParser.json({type: 'application/json'}),
  controllers
)

tommyBornyFabulousWebsitey.listen(6666)
