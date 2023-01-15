import dotenv from 'dotenv'
import axios from 'axios'
import boom from '@hapi/boom'
import fetch from 'node-fetch'
import userServices from './user/userServices.js'

dotenv.config()

const URL_USER = process.env.BASE_URL_USER

const userController = {
  // AGREGAR USUARIO
  postAddUser: (req, res) => {
    const body = req.body
    // const newUser = userSerices.create(body)
    // return newUser
    fetch(URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  // MODIFICAR UN USUARIO  
  patchUpDateUser: (req, res) => {
    const { id } = req.params
    const { body } = req.body

    axios.put(URL_USER, {
      id,
      ...body
    })
      .then(response => {
        res.send(response.data)
      })
      .catch(error => {
        throw boom.badData(error)
      })
  },
  // BUSCAR UN USUARIO
  getFindUserById: (req, res) => {
    const { id } = req.params
    userServices.getFindUserById(id)
      .then(data => res.status(200).json({ message: 'Acá tenes la data mi cielo', data }))
      .catch(err => boom.badRequest(err))
  },
  //TRAER TODOS LOS USUARIOS 
  getAllUser: (req, res) => {
    userServices.getAllUser()
      .then(data => res.status(200).json({ message: 'Respuesta recibida mi rey!!', data }))
      .catch(err => boom.badRequest(err))
  },
  //ELIMINAR UN USUARIO
  deleteUser: (req, res) => {

    const { id } = req.params

    axios.delete(`${URL_USER}/${id}`)
      .then(response => {
        res.send(response.data)
      })
      .catch(error => {
        throw boom.badData(error)
      })
    res.send("No se inunda más")
  },
}

//--------------------------------EXPORT--------------------------------//

export default userController