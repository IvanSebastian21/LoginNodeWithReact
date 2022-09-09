import yup from 'yup'

const nameAndLastname = yup
  .string()
  .min(3, "Se necesita un minimo de 3 (tres) carácteres")
  .max(15, "Se alcanzo el máximo de 15 (diez) carácteres permitidos")
  .matches(/^[a-zA-Z]+$/, "Nombre. Se permiten únicamente carácteres alfabéticos")

  const createdUsersValidation= (data) => {

  const schema = yup.object().shape(
    {
      name: nameAndLastname.required("Campo nombre es requerido"),
      
      lastname: nameAndLastname.required("Campo apellido es requerido"),

      // email: yup
      //   .string()
      //   .email('Debe ser un correo electrónico válido')
      //   .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Carácteres inválidos")
      //   .required("Campo email es requerido"),

      // rol: yup
      //   .string()
      //   .required("Campo rol es requerido")
      //   .oneOf(["empleado", "empleador"]),

      // firmador: yup
      //   .boolean(),
    }
  )
  
  schema.validateSync(data)
}

export default {
  createdUsersValidation
}