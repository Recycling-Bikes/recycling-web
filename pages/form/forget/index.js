import Login from 'components/form/Login';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Singin() {
  return (

    <Login>
    <Container fluid className='d-flex flex-column justify-content-center align-content-center align-items-center' >
      
      <Form>
      <h1 className='mb-4'>Recupera tu contraseña</h1>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label>Correo electrónico asociado a tu cuenta</Form.Label>
        <Form.Control type="email" placeholder='nombre@email.com'/>
      </Form.Group>
      <Button style={{width: "100%"}} variant="primary" type="submit" className='mb-3'>
        Submit
      </Button>
    </Form>
      
    </Container>
    </Login>
  );
}