import Login from 'components/formlogin/Login';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
  return (
    <Login>
      <Container fluid className='d-flex flex-column justify-content-center align-content-center align-items-center'>

        <Form>
          <h1 className='mb-4'>Regístrate en Recycling</h1>
          <div className='d-flex flex-row mb-3'>
            <Form.Group className="mb-3 mx-1" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Juan" />
            </Form.Group>
            <Form.Group className="mb-3 mx-1" controlId="formBasicEmail">
              <Form.Label>Appellido</Form.Label>
              <Form.Control type="text" placeholder="Ramirez" />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="nombre@email.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </Container>
    </Login>
  );
}