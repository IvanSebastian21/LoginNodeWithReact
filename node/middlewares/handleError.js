import { ValidationError } from 'sequelize'

export function logErrors(error, req, res, next) {
  console.log(error)
  next(error)
}

export function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

export function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  }
  next(error)
}

export function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors
    });
  }
  next(error)
}

export default {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
}