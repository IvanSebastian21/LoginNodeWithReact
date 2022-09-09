import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/dbConnect.js';

class UserModel extends Model {}
UserModel.init(
  {
    name: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
  },
  {sequelize, modelName: 'user'}
)

export default UserModel
