// import { Sequelize, DataTypes } from 'sequelize'

// const USER = encodeURIComponent(process.env.DB_USER)
// const PASSWORD = encodeURIComponent(process.env.DB_PASS)

// const configDB = {
//   host: process.env.DB_HOST,
//   user: USER,
//   password: PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
//   dialect: process.env.DIALECT
// }

// export const sequelize = new Sequelize(
//   configDB.database,
//   configDB.user,
//   configDB.password,
//   {
//     host: configDB.host,
//     dialect: configDB.dialect
//   }
// )

// sequelize.authenticate().then(() => {
//   console.log('La conexión se ha establecido con éxito.');
// }).catch((error) => {
//   console.error('No se puede conectar a la base de datos: ', error);
// });

// export const ModeloDeUsuario = sequelize.define('user', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: { type: DataTypes.STRING, allowNull: false },
//   lastname: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, allowNull: false },
//   rol: { type: DataTypes.STRING, allowNull: false },
//   firmador: { type: DataTypes.BOOLEAN, allowNull: false },
// })

// sequelize.sync({ force: false })
//   .then(() => {
//     console.log("tabla creada!!");
//   })

// export default ModeloDeUsuario
