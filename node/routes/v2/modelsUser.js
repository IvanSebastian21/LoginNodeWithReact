import UserModel from '../../models/modelosUsuario.js'
import express from 'express'
import validateHelper from '../../helpers/validateHelper.js'
import validation from '../../dto/validation.js'

const modelsUser = express.Router()

modelsUser.get('/createdUser', validateHelper(validation.createdUsersValidation), async (req, res) => {

  const { name, lastname } = req.body

  UserModel.create({
    name: name,
    lastname: lastname
  }).then(user => {
    res.json(user)
  })  
})

export default modelsUser