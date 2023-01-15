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

//-------------------------------------------------------------------------------------

import boom from '@hapi/boom'
import { employedRandom } from "../util/bbdd.js"

class ServicesUsers {

  constructor(user) {
    this.user = user
  }

  create(data) {
    this.user = employedRandom.find(user => user.id === data.id)
    const newUser = { ...data }
    if (this.user) return { message: "Usuario existente" }
    employedRandom.push(newUser)
    return newUser
  }

  find() {
    return employedRandom
  }

  findOne(id) {
    return this.user = employedRandom.find(user => user.id === id)
  }

  update(id, changes) {
    const userIndex = employedRandom.findIndex(user => user.id === id)

    if (userIndex === - 1) {
      throw new Error("Usuario no encontrado")
    }
    const userPatch = employedRandom[userIndex]
    employedRandom[userIndex] = {
      ...userPatch,
      ...changes
    }
    return employedRandom[userIndex]
  }

  delete(id) {
    const userIndex = employedRandom.findIndex(user => user.id === id)
    if (userIndex - 1) {
      boom.notFound()
    }
    employedRandom.splice(userIndex, 1)
    return { message: `Usuario ${id} eliminado correctamente` }
  }
}

export default ServicesUsers