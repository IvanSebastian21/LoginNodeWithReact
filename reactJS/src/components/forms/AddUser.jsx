import addUser from '../../services/addUser'
import AlertComponent from './formComponents/AlertComponent'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Col, Row, Container, Button, Form } from 'react-bootstrap'

const initialValues = {
  name: '',
  lastname: '',
  rol: '',
  email: '',
  firmador: false,
}

const loginSchema = Yup.object({
  name: Yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Se permiten únicamente carácteres alfabéticos")
    .min(3, "Se necesita un minimo de 3 (tres) carácteres")
    .max(15, "Se alcanzo el máximo de 10 (diez) carácteres permitidos")
    .required("Campo nombre es requerido"),
  lastname: Yup
    .string()
    .min(3, "Se necesita un minimo de 3 (tres) carácteres")
    .max(15, "Se alcanzo el máximo de 15 (tres) carácteres permitidos")
    .required("Campo apellido es requerido"),
  rol: Yup
    .string()
    .required("Campo rol es requerido")
    .oneOf(["empleado", "empleador"]),
  firmador: Yup
    .boolean(),
  email: Yup
    .string()
    .email('Debe ser un correo electrónico válido')
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Carácteres inválidos")
    .required("Campo email es requerido"),
})

const onSubmit = (values, submitProps) => {
  addUser(values)
  console.log('Form data', values)
  console.log('submitProps', submitProps)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}

export const AddUser = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >

      {formik =>
        <Container className='mt-5'>
          <Row>
            <Col lg={6} md={6} sm={12} className="p-3">

              <Form onSubmit={formik.handleSubmit}>

                {/* NOMBRE */}
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar nombre"
                    {...formik.getFieldProps('name')}
                    required
                  />
                  {
                    formik.touched.name && formik.errors.name
                      ? <AlertComponent message={formik.errors.name} />
                      : null
                  }
                </Form.Group>

                {/* APELLIDO */}
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar apellido"
                    {...formik.getFieldProps('lastname')}
                    required
                  />
                  {
                    formik.touched.lastname && formik.errors.lastname
                      ? <AlertComponent message={formik.errors.lastname} />
                      : null
                  }
                </Form.Group>

                {/* EMAIL */}
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    {...formik.getFieldProps('email')}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  {
                    formik.touched.email && formik.errors.email
                      ? <AlertComponent message={formik.errors.email} />
                      : null
                  }
                </Form.Group>

                {/* SELECT */}
                <Form.Label>Rol</Form.Label>
                <Form.Select
                  type="text"
                  {...formik.getFieldProps('rol')}
                  required>
                  <option>Seleccione Rol</option>
                  <option value="empleado">Empleado</option>
                  <option value="empleador">Empleador</option>
                </Form.Select>
                {
                  formik.touched.rol && formik.errors.rol
                    ? <AlertComponent message={formik.errors.rol} />
                    : null
                }

                <br />

                {/* CHECKBOX */}
                <Form.Group className="mb-3">
                  <Form.Check
                    name="firmador"
                    label="¿Es ud. firmador?"
                    onChange={formik.handleChange}
                  />
                </Form.Group>

                <br />

                <Button disabled={!formik.isValid || formik.isSubmitting} variant="outline-primary" type="submit">Enviar</Button>

              </Form>

            </Col>
          </Row>
        </Container>
      }
    </Formik>
  )
}

export default AddUser;