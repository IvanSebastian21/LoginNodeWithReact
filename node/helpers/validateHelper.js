import boom from '@hapi/boom'

const validateHelper = (validation, property) => {

  return (req, res, next) => {
    try {
      validation(req[property])
      next()
    } catch (error) { 
      next(boom.badRequest(error))
    }

  }
}



export default validateHelper