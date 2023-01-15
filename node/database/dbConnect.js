import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

// Instancia codificación UTF-8

const USER = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASS)

// Configuración inicial

const configDB = {
  host: process.env.DB_HOST,
  user: USER,
  password: PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT
}

// Conexión a la DB

export const sequelize = new Sequelize(
  configDB.database,
  configDB.user,
  configDB.password,
  {
    host: configDB.host,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialect: configDB.dialect
  }
)

export default sequelize
