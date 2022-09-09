import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const USER = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASS)

// Crear la conexión a la base de datos

const configMySql = {

  host: process.env.DB_HOST,
  user: USER,
  password: PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT

}

const connection = mysql2.createConnection(configMySql)

//----------------------Agregar usuario----------------------//

const addUser = (tabla, user, cb) => {

  let sql = `INSERT INTO ${tabla} (id, name, lastname, email, rol, firmador) VALUES (null, '${user.name}', '${user.lastname}', '${user.email}', '${user.rol}', '${user.firmador}')`

  connection.query(sql, (err, res) => {

    if (err) cb(err, null)

    else cb(null, res)

  })
}

//----------------------Obtener TODOS los usuario----------------------//

const getAllUser = (tabla, cb) => {

  let sql = `SELECT * from ${tabla}`

  connection.query(sql, (err, res) => {

    if (err) cb(err, null)

    else cb(null, res)

  })
}

//----------------------Obtener UN usuario por Id----------------------//

const getUserDbById = (id, tabla, cb) => {

  let sql = `SELECT DISTINCT * FROM ${tabla} WHERE id = ${id}`

  connection.query(sql, (err, res) => {

    if (err) cb(err, null)

    else cb(null, res)
    
  })
}

//----------------------Modificar usuario por Id----------------------//

const updateUser = (id, tabla, usuario, cb) => {
  
  let sql = `UPDATE ${tabla} SET name = '${usuario.name}', lastname = '${usuario.lastname}' WHERE id = ${id}`
  
  connection.query(sql, (err, res) => {

    if (err) cb(err, null)
    
    else cb(null, res)
    
  })
}

//----------------------eliminar UN usuario por Id----------------------//

const deleteUserById = (id, tabla, cb) => {
  
  let sql = `DELETE FROM ${tabla} WHERE id = ${id}`
  
  connection.query(sql, (err, res) => {

    if (err) cb(err, null)
    
    else cb(null, res)
    
  })
}



export {
  addUser,
  getAllUser,
  getUserDbById,
  updateUser,
  deleteUserById
}

export default connection
