/*
Se desacopla la lógica de Controladores y de Servicios
En esta capa los controladores implementan los distintos Servicios(casos de uso)
*/

import ServicesUsers from "../services/servicesUsers.js"

const services = new ServicesUsers()

//--------------------------------AGREGAR--------------------------------//
const userController = {
  // AGREGAR USUARIO
  postAddUser: (req, res) => {
    const body = req.body
    const newUser = services.create(body)
    res.status(201).json(newUser)
  },
  // BUSCAR UN USUARIO
  getFindOneUser: (req, res) => {
    const { id } = req.params
    const findUser = services.findOne(id)
    res.json(findUser)
  },
  // MODIFICAR UN USUARIO  
  patchUpDateUser: (req, res) => {
    const { id } = req.params
    const body = req.body
    const updateUser = services.update(id, body)
    res.send(updateUser)
  },
  //TRAER TODOS LOS USUARIOS 
  getAllUser: (req, res) => {
    const allUser = services.find()
    res.json(allUser)
  },
  //ELIMINAR UN USUARIO
  deleteUser: (req, res) => {
    const { id } = req.params
    const deleteUser = services.delete(id)
    res.send(deleteUser)
  }
}

//--------------------------------EXPORT--------------------------------//

export default userController
