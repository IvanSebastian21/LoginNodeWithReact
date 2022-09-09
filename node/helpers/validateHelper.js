import boom from '@hapi/boom'

const validateHelper = (validation) => {
  
  return (req, res, next) => {
    try {
      validation(req.body)
      next()
    } catch (error) {
      next(boom.badRequest(error))
    }
  }
}

export default validateHelper