export default function errorHandler(error, req, res, next) {
  if (error.type === "bad_request") res.status(422).send(error.message)
  if (error.type === "unauthorized") res.status(401).send(error.message)
  if (error.type === "conflict") res.status(409).send(error.message)

  return res.sendStatus(500)
}
