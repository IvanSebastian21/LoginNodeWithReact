import express from 'express'
import validateHelper from '../../helpers/validateHelper.js'
import validation from '../../dto/validation.js'
import userReportController from '../../controllers/userReportController.js'

const userReport = express.Router()

userReport
  .post('/addUser', validateHelper(validation.createdUsersValidation), userReportController.postAddUser)
  .get('/allUser', userReportController.getAllUser)
  .get('/findOneUser/:id', userReportController.getFindOneUser)
  .get('/findAllUser', userReportController.getFindAllUser)
  .patch('/updateUser/:id', validateHelper(validation.createdUsersValidation), userReportController.patchUpDateUser)
  .delete('/deleteUser/:id', userReportController.deleteUser)
  
export default userReport