import UserModel from "../models/modelosUsuario.js"

//----------------------CREAR----------------------//
const postAddUser = async (req, res) => {

  try {
    const { name, lastname } = req.body
    UserModel.create(
      {
        name: name,
        lastname: lastname
      }
    ).then(user => {
      res.json({ message: "Se registro correctamente", user })
    })
  } catch (error) {
    res.send({ message: error.message })
  }
}

//----------------------TRAER TODOS LOS USUARIO----------------------//
const getAllUser = (req, res) => {

  try {
    UserModel.findAll()
      .then(result => {
        res.json({ message: "Ok", result })
      })
  } catch (error) {
    res.send({ message: error.message })
  }

}

//----------------------BUSCAR UN USUARIO----------------------//
const getFindOneUser = (req, res) => {

  try {
    UserModel.findByPk(req.params.id)
      .then(result => {
        res.json({ message: "Ok", result })
      })
  } catch (error) {
    res.send({ message: error.message })
  }

}

//----------------------BUSCAR USUARIO POR PARAMS----------------------//
const getFindAllUser = (req, res) => {
  res.send('getFindAllUser')
}

//----------------------MODIFICAR UN USUARIO----------------------//
const patchUpDateUser = (req, res) => {

  try {
    UserModel.update(
      {
        name: req.body.name,
        lastname: req.body.lastname
      },
      {
        where: { id: req.params.id }
      })
      .then(result => {
        res.json({ message: "modificado correctamente", result })
      })
  } catch (error) {
    res.json({ message: error.message })
  }
}

//----------------------ELIMINAR UN USUARIO----------------------//
const deleteUser = (req, res) => {

  try {
    UserModel.destroy(
      {
        where: { id: req.params.id }
      })
      .then(result => {
        res.json({ message: "Se elimino correctamente", result })
      })
  } catch (error) {
    res.send({ message: error.message })
  }
}

//----------------------EXPORTS----------------------//
 export default {
  postAddUser,
  getAllUser,
  getFindOneUser,
  getFindAllUser,
  patchUpDateUser,
  deleteUser
}