import connectionDB from './connectionDB.js'
import accountRouter from './account.js'
import queries from './queries.js'
import report from './report.js'
import post from './post.js'

//----------------------Rutas--------------------------

function routerApp (app) {

  app.use("/acc", accountRouter)
  app.use("/consultas", queries)
  app.use("/informe", report)
  app.use("/post", post)
  app.use("/connectionDB", connectionDB)

}

export default routerApp