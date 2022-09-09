import express from 'express'
import dotenv from 'dotenv'
// import routerApp from './routes/indexRouters.js'
import cors from 'cors'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/handleError.js'
// import { sequelize } from '../node/database/dbSequelize.js'
import sequelize from './database/dbConnect.js'
import UserModel from './models/modelosUsuario.js'


dotenv.config()

const PORT = process.env.PORT

//------------------------Inicializar servidor como funcion()-----------------------//

const app = express()

//------------------------Parseo de datos-----------------------//

app.use(cors())
app.use(express.json())
app.use(express.text())

//------------------------Importamos las rutas-------------------------------//

// routerApp(app)
app.get('/', (req, res) => {
  UserModel.create({
    name: 'Sir',
    lastname:'Jonas',
  }).then(user => {
    res.json(user)
  })

})
//------------------------Middlewares-------------------------------// (Importante: El orden Si importa)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

//------------------------Ruta por Default-------------------------------//

app.all("*", (req, res) => {
  res.send({ message: 'Ruta por default si hay un error' })
})

//-----------------------SV-----------------------//

try {
  sequelize.sync({ force: false })

  console.log('La conexión se ha establecido con éxito.')

  app.listen(PORT, () => {
    console.log(`Estas en el servidor: ${PORT}`)
  })

} catch (error) {

  console.error('No se puede conectar a la base de datos: ', error)

}
