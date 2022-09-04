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

  const [userState, setUserState] = useState({ name: 'Sin nombre', apellido: 'Sin apellido' })

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
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

          <Button variant="outline-primary" type="submit">Enviar</Button>

        </Form>
      </Col>
    </Row>
  </Container>

    // <div className='getUserById'>
    //   <Container>
    //     <Row xs="auto">
    //       <Col lg={6} md={6} sm={12} className="p-3">
    //         <Card>
    //           <Card.Text>Nombre: </Card.Text>
    //           <ListGroup.Item>{userState.name}</ListGroup.Item>
    //           <Card.Text>Apellido: </Card.Text>
    //           <ListGroup.Item>{userState.lastname}</ListGroup.Item>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  )
}
export default GetUserById