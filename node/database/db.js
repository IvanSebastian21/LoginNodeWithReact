import mysql2 from 'mysql2'

// Crear la conexión a la base de datos

const configMySql = {

  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_app',
  port: 3306

}

const connection = mysql2.createConnection(configMySql)

//----------------------Agregar usuario----------------------//

const addUser = (tabla, user, cb) => {

  let sql = `INSERT INTO ${tabla} (id, name, lastname) VALUES (null, '${user.name}', '${user.lastname}')`

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
