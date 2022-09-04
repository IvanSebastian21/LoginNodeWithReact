import express from 'express'
import dotenv from 'dotenv'
import routerApp from './routes/indexRouters.js'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT

//-----------------------Inicializar servidor como funcion()-----------------------

const app = express()

app.use(cors())
//-----------------------Parseo de datos-----------------------

app.use(express.json())
app.use(express.text())

//------------------------Exportamos las rutas-------------------------------

routerApp(app)

//------------------------Default-------------------------------

app.all("*", (req, res) => {
  console.trace()
  res.send({message: 'Si hay un error esta es la ruta por default'})
})

//-----------------------SV-----------------------

app.listen(PORT, () => {
  console.log(`Estas en el servidor: ${PORT}`)
}) 
