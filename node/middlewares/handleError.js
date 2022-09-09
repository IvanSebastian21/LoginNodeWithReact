export function logErrors(error, req, res, next) {
  console.log(error);
  next(error)
}

export function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

export function boomErrorHandler(error, req, res, next) {
  if(error.isBoom){
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  }
  next(error)
}


export default { logErrors, errorHandler, boomErrorHandler }