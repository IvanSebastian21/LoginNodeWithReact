import { useFormik } from 'formik'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

const SearchUserById = ({ callback }) => {

  const formik = useFormik({
    initialValues: {
      id: '',
    },
    onSubmit: values => callback(values.id)
  })

  return (
    <Col lg={6} md={6} sm={12} className="p-3">
      <Form onSubmit={formik.handleSubmit}>
        <InputGroup>
          <InputGroup.Text>Ingrese ID</InputGroup.Text>
          <Form.Control
            type="text"
            name="id"
            placeholder='Buscar...'
            onChange={formik.handleChange}
            value={formik.values.id}
            required />
          <Button variant="outline-success" type="submit">Buscar</Button>
        </InputGroup>
      </Form>
    </Col>
  )
}

export default SearchUserById