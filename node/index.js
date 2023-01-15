import sequelize from './database/dbConnect.js'
import routerApp from './routes/indexRouters.js'
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } from './middlewares/handleError.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()

const PORT = process.env.PORT

//------------------------Inicializar servidor como funcion()-----------------------//

const app = express()

//------------------------Parseo de datos y Middlewares-----------------------//

app.use(cors())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(morgan('tiny'))
app.disable('x-powered-by')

//------------------------Importamos las rutas-------------------------------//

routerApp(app)

//------------------------Middlewares de Error-------------------------------// (Importante: El orden Si importa)

app.use(logErrors)  
app.use(ormErrorHandler)
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
