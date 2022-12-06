import Login from 'components/formlogin/Login';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { supabase } from 'supabase/client';
import Router from "next/router"
import UserContext from 'context/User/UserContext';
import React, {useContext} from 'react'






export default function Register({ }) {
  const {getUser} = useContext(UserContext)

  const [confirmPass, setConfirmPass] = useState(undefined)


  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setConfirmPass(undefined)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
    else {
      event.preventDefault();
      if (event.target.formPassword.value !== event.target.formConfirmPassword.value) {
        event.target.formPassword.value = ""
        event.target.formConfirmPassword.value = ""

        setConfirmPass("las contrseñas deben ser iguales")
      } else if ((event.target.formPassword.value).length < 5) {

        event.target.formPassword.value = ""
        event.target.formConfirmPassword.value = ""
        setConfirmPass("la contraseña debe tener 5 0 mas carracteres")

      } else {
        const {data, error} = await supabase.auth.signUp(
          {
            email: event.target.formEmail.value,
            password: event.target.formPassword.value,
            options: {
              data: {
                first_name: event.target.formName.value,
                last_name: event.target.formLast.value,
              }
            }
          }
        )

        if(data.user) {
          getUser()
          Router.push("./register/send")
        }
      }    
      
    }
    event.preventDefault();
    


    setValidated(true);
  };


  return (
    <Login>
      <Container fluid className='d-flex flex-column justify-content-center align-content-center align-items-center'>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className='mb-4'>Regístrate en Recycling</h1>
          <Row className=' mb-3'>

            <Form.Group as={Col} className="" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Juan" required />
              <Form.Control.Feedback type="invalid">
                Debes escribir un nombre
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="" controlId="formLast">
              <Form.Label>Appellido</Form.Label>
              <Form.Control type="text" placeholder="Ramirez" required />
              <Form.Control.Feedback type="invalid">
                Debes escribir un apellido
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="nombre@email.com" required />
            <Form.Control.Feedback type="invalid">
                Debes escribir un correo
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid">
              {confirmPass ? confirmPass : "Debes escribir una contraseña"}
            </Form.Control.Feedback>

          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label>Repite la contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Registrase
          </Button>
        </Form>

      </Container>
    </Login>
  );
}