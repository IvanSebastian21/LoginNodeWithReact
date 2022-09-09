import connectionDB from './roots/connectionDB.js'
import accountRouter from './roots/account.js'
import queries from './roots/queries.js'
import report from './roots/report.js'
import post from './roots/post.js'
//------------------------V2-----------------------------
import modelsUser from './v2/modelsUser.js'

//-----------------------------------------------------
import express from 'express'

//----------------------Rutas--------------------------

function routerApp(app) {

  const route = express.Router()
  app.use('/api/v1', route)

  route.use("/acc", accountRouter)
  route.use("/consultas", queries)
  route.use("/informe", report)
  route.use("/post", post)
  route.use("/connectionDB", connectionDB)

  const routev2 = express.Router()
  app.use('/api/v2', routev2)

  routev2.use('/users', modelsUser)

}

export default routerApp