import { addUser } from '../database/db.js'
import boom from '@hapi/boom'

const tablaDB = 'users'

class ServicesUsers {

  constructor(user) {
    this.user = user
  }

  async created(user) {

    if (!user)
      throw boom.badData('Error en {class: ServicesUsers, método created}')

    if (user) {
      addUser(tablaDB, user, (err, result) => {
        if (err) throw boom.badData(err)
        console.log('Resultado: ', result)
      })
    }

    return user
  }

  find() { }
  findOne() { }
  update() { }
  delete() { }
}

export default ServicesUsers