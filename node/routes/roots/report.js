import express from 'express'
import axios from 'axios'

const report = express.Router()

report.get('/objeto', (req, res) => {
  res.json({
    name: "ivan",
    lastname: "nuñez"
  })
})

report.get('/busquedaAxios', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.data)
  .then(send => res.send(send))
})

export default report