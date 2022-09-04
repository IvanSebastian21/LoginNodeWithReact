import express from "express"
import axios from "axios"

const post = express.Router()

const miFuncion = (req, res, next) =>{
  console.log('Soy una funcion')
  next()
}

post.get('/:id/:name', miFuncion, (req, res) => {
  console.log(req.params)
  let { id } = req.params
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data)
    .then(info => res.send(info))
})

export default post