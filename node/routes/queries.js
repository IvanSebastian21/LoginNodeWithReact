import express from 'express'

const queries = express.Router()

//----------------------FUNCIONES----------------------

var CB0 = (req, res, next) => {
  console.log('CB0')
  next()
}

var CB1 = (req, res, next) => {
  console.log('CB1')
  next()
}

var CB2 = (req, res, next) => {
  console.log('CB2 finish')
  res.send('CB2 finish')
}

queries.get('', [CB0, CB1, CB2])

export default queries