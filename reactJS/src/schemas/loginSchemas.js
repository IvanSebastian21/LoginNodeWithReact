import * as yup from 'yup'

// VALIDACIÓN DE EMAIL GENÉRICO
const email = yup
  .string('Ingrese su email')
  .email('Debe ser un correo electrónico válido')
  .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Carácteres inválidos")
  .required("Campo email es requerido")

// VALIDACIÓN DE CONTRASEÑA GENÉRICA
const password = yup
  .string('Ingrese su email')
  .min(8, 'La contraseña debe contener 8 o más caracteres con al menos uno de cada uno: mayúscula, minúscula, número y especial')
  .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial")
  .required("Campo password es requerido")

// VALIDACIÓN DE NOMBRE Y APELLIDO GENÉRICO
// const nombreYApellido = yup.string()
//   .min(3, "Se necesita un minimo de 3 (tres) carácteres")
//   .max(15, "Se alcanzo el máximo de 15 (diez) carácteres permitidos")
//   .matches(/^[a-zA-Z]+$/, "Nombre. Se permiten únicamente carácteres alfabéticos")

const loginSchema = () => yup.object({
  email: email,
  password: password,
  remember: yup.boolean()
})


export default loginSchema