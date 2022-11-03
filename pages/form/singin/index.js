import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Register from 'components/form/Register';

export default function Singin() {
  return (

    <Register>

    <Container className='d-flex flex-column justify-content-center align-content-center align-items-center' style={{height: "90vh"}} >
      
      <Form>
      <h1 className='mb-4'>Accede a Recycling</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mantener sesión iniciada" />
      </Form.Group>
      <Button style={{width: "100%"}} variant="primary" type="submit" className='mb-3'>
        Submit
      </Button>
      <Link href="./forget" style={{width: "100%"}} className='d-flex justify-content-center ' >
      Olvidé mi contraseña
      </Link>
    </Form>
      
    </Container>
    </Register>
  );
}