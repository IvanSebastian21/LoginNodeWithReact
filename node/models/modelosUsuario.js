import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/dbConnect.js';

class UserModel extends Model { }
UserModel.init(
  {
    name: {
      type:
        DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "El campo no debe ser nulo"
        },
        is: {
          args: /^[a-z]+$/i,
          msg: "Los carácteres deben ser en minúscula"
        },
        isAlpha: {
          args: true,
          msg: "No se permiten carácteres númericos"
        },
        len: {
          args: [3, 15],
          msg: "El nombre tiene que ser entre 3 (tres) y 15 (quince) carácteres"
        }
      }
    },
    lastname: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: 'user' }
)

export default UserModel
