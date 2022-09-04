//import addUser from '../../services/addUser'
import AlertComponent from './formComponents/AlertComponent'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Col, Row, Container, Button, Form } from 'react-bootstrap'

const initialValues = {
  name: '',
  lastname: ''
}

const loginSchema = Yup.object({
  name: Yup
    .string()
    .min(3, "Se necesita un minimo de 3 (tres) carácteres")
    .max(15, "Se alcanzo el máximo de 15 (tres) carácteres permitidos")
    .required("Campo nombre es requerido")
})

const onSubmit = (values, submitProps) => {
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
                    name="lastname"
                    placeholder="Ingresar apellido"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    required
                  />
                </Form.Group>

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