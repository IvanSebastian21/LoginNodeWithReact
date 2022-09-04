import express from 'express'
import connection, { addUser, getAllUser, getUserDbById, updateUser, deleteUserById } from '../database/db.js'

const connectionDB = express.Router()

const tablaDB = 'users'

//----------------------Insertar un Usuario---------------------- 

// connectionDB.get('/addUser', (req, res) => {

//   let user = {
//     name: "Samos",
//     lastname: "Epicuro"
//   }

//   addUser('users', user, (err, result) => {
//     if (err) throw err
//     console.log(result)
//   })

//   res.send(`${user}`)

// })

connectionDB.post('/addUser', (req, res) => {
  console.log(req.body)

  const user = {
    name: req.body.name,
    lastname: req.body.lastname
  }

  addUser(tablaDB, user, (err, result) => {
    if (err) throw err
    console.log(result)
  })

  res.send({message:'created', user})

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