import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Login from 'components/form/Login';

export default function Singin() {
  return (
    <Login>

    <Container fluid className='d-flex flex-column justify-content-center align-content-center align-items-center' >
      
      <Form>
      <h1 className='mb-4'>Elige una nueva <br/> contraseña</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nueva contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button style={{width: "100%"}} variant="primary" type="submit" className='mb-3'>
      Recuperar contraseña
      </Button>
    </Form>
      
    </Container>
    </Login>
  );
}