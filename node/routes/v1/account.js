import express from 'express'
import { USERS_BBDD } from '../../bbdd.js'

const accountRouter = express.Router()

//-----------------------Metodos: Inicia con All----------------------- All

accountRouter.all('', (req, res, next) => {

console.log('Bienvenido. Estas en all')

next()

})

//-----------------------MIDDLEWARE-----------------------//

accountRouter.all('', (req, res, next) => {

console.log('La IP del usuario es: ', req.ip)

next()

})

//-----------------------Obtener detalles acc----------------------- GET

accountRouter.get('/:guid', (req, res) => {

  const {guid} = req.params

  const user = USERS_BBDD.find(user => user.guid === guid)

  if(!user) return res.status(404).send()

  return res.send(user)

})

//-----------------------Crear nueva acc----------------------- POST

accountRouter.post('', (req, res) => {

  const {guid, name} = req.body

  if(!name && !guid) return res.status(400).send()

  const user = USERS_BBDD.find(user => user.guid === guid)

  if(user) return res.status(409).send()

  console.log({guid, name})

  USERS_BBDD.push({
    guid,
    name
  })

  return res.send()

})

//-----------------------Actualizar un acc---------------------- PATCH

accountRouter.patch('/:guid', (req, res) => {

  const {guid} = req.params

  const {name} = req.body

  if(!name) return res.status(400).send()

  const user = USERS_BBDD.find(user => user.guid === guid)

  if(!user) return res.status(404).send()

  user.name = name

  return res.send()

})

//-----------------------Eliminar una acc----------------------- DELETE

accountRouter.delete('/:guid', (req, res) => {

  const {guid} = req.params

  const userIndex = USERS_BBDD.findIndex(user => user.guid === guid)

  if(!userIndex === -1) return res.status(404).send()

  USERS_BBDD.splice(userIndex, 1)

  return res.send()

})


export default accountRouter