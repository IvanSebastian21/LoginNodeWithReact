import Form from 'react-bootstrap/Form'

function InputComponent(props) {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre {props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          required
          extra={props.extra}
        />
      </Form.Group>
    </>
  )
}

export default InputComponent