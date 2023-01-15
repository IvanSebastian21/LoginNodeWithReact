import boom from '@hapi/boom'
import dotenv from 'dotenv'
import axios from 'axios'
import fetch from 'node-fetch'

dotenv.config()

const URL_USER = process.env.BASE_URL_USER

const userServices = {
  async addUser(body) {
    const res = await fetch(URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(data => res.send(data))
      .catch(err => console.log(err))
    return res
  },
  async getAllUser() {
    const users = await axios.get(URL_USER)
      .then(response => response.data)
      .catch(error => { throw boom.badData(error) })
    console.log(users)
    return users
  },
  async getFindUserById(id) {
    const user = await axios.get(`${URL_USER}/${id}`)
      .then(response => response.data)
      .catch(error => { throw boom.badData(error) })
      console.log(user)
    return user
  }
}

export default userServices