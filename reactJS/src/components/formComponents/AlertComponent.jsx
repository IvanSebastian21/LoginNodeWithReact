import Alert from 'react-bootstrap/Alert';

function AlertComponent({ message }) {

    return (
      <Alert variant="danger">
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    );
}

export default AlertComponent