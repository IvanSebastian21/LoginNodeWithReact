import express from 'express'
import connection, { getAllUser, getUserDbById, updateUser, deleteUserById } from '../../database/db.js'
import ServicesUsers from '../../services/servicesUsers.js'
import validateHelper from '../../helpers/validateHelper.js'
import validation from '../../dto/validation.js'


const connectionDB = express.Router()

const tablaDB = 'users'

const serviceUser = new ServicesUsers()

//----------------------Insertar un Usuario---------------------- 

connectionDB.post('/addUser', validateHelper(validation.createdUsersValidation), async (req, res, next) => {

  const { name, lastname, email, rol, firmador } = req.body

  const user = {
    name,
    lastname,
    email,
    rol,
    firmador
  }

  try {

    const userAdd = await serviceUser.created(user)

    return res.status(201).send({ message: 'created', userAdd })

  } catch (error) {

    next(error)

  }

})


//----------------------Obtener TODOS los usuarios---------------------- 

connectionDB.get('/getAllUser', (req, res) => {

  getAllUser(tablaDB, (err, result) => {

    if (err) throw err

    console.log(result)

    res.send(result)

  })
})

//----------------------Obtener UN usuario---------------------- 

connectionDB.get('/getOneUser/:id', (req, res) => {

  //console.log(req.params.id)

  let { id } = req.params

  getUserDbById(id, tablaDB, (err, result) => {

    if (err) throw err
    //console.log(result)

    res.send(result[0])

  })
})

//----------------------Modificar UN usuario---------------------- 

connectionDB.get('/upDateUser/:id', (req, res) => {

  let { id } = req.params

  let usuario = {
    name: 'Zenón',
    lastname: 'De Citio'
  }

  updateUser(id, tablaDB, usuario, (err, result) => {

    if (err) throw err
    console.log(result)

    res.send('Ok, usuario actualizado')

  })
})

//----------------------Eliminar UN usuario---------------------- 

connectionDB.delete('/deleteUser/:id', (req, res) => {

  let { id } = req.params

  deleteUserById(id, tablaDB, (err, result) => {

    if (err) throw err

    console.log(result)

    res.send('Usuario eliminado')

  })
})

//----------------------connection--------------------------

connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log('Conexión correcta.');
  }
})

export default connectionDB