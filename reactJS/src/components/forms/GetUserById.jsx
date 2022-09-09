// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Row, Container } from 'react-bootstrap'
import getUserById from '../../services/getUserById'
import { useState } from 'react'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const GetUserById = ({ userId }) => {

  const [userState, setUserState] = useState({ name: '', apellido: '' })

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      rol: '',
      firmador: ''
    },
    onSubmit: values => console.log(values)
  })

  useEffect(() => {
    getUserById(userId).then(data => setUserState(data))
  }, [userId])

  return (
    <Container className='mt-5'>
      <Row>

        <Col lg={6} md={6} sm={12} className="p-3">

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">

              {/* NOMBRE */}
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresar nombre"
                onChange={formik.handleChange}
                value={userState.name ?? formik.values.name}
                required
              />
            </Form.Group>

            {/* APELLIDO */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Ingresar apellido"
                onChange={formik.handleChange}
                value={userState.lastname ?? formik.values.lastname}
                required
              />
            </Form.Group>

            {/* EMAIL */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Ingresar email"
                onChange={formik.handleChange}
                value={userState.email ?? formik.values.email}
                required
              />
            </Form.Group>

            {/* ROL */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                type="text"
                name="rol"
                placeholder="Ingresar rol"
                onChange={formik.handleChange}
                value={userState.rol ?? formik.values.rol}
                required
              />
            </Form.Group>

            {/* FIRMADOR */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              {
                userState.firmador === 0
                  ? <Form.Label>Nota: El usuario {userState.name} {userState.lastname} cuenta con permisos de firmador</Form.Label>
                  : null
              }
            </Form.Group>

            <Button variant="outline-primary" type="submit">Enviar</Button>

          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default GetUserById