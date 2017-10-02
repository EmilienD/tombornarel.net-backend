export default function(req, res, next) {
  res.status(501).send('Not implemented, sorry mate.')
  next()
}
