import Link from 'next/link';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Register from 'components/formlogin/Register';
import { useState } from 'react';
import { supabase } from 'supabase/client';
import Router from "next/router"
import UserContext from 'context/User/UserContext';
import React, {useContext} from 'react'


export default function Singin() {

  

  const {getUser} = useContext(UserContext)

  const [confirmPass, setConfirmPass] = useState(null)

  const [validated, setValidated] = useState(false);

  

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    

    if (form.checkValidity() === false) {
      event.preventDefault();

    }
    
    else {
      
      const reset = (error) =>{

        if (error.indexOf("credentials") != -1) {
          setConfirmPass("Contraseña o usuario incorrectos") 
          console.log("2dfsasdfasdf")
        }
        if(error.indexOf("Email") != -1) {
          setConfirmPass("No se a confirmado el correo")
          console.log("confirmPass")

        }
        formPassword.value = ""
        console.log(confirmPass)
      }

      event.preventDefault();

      const {data:{user}, error}= await supabase.auth.signInWithPassword(
          {
            email: formEmail.value,
            password: formPassword.value
          }
        )
        
        user ? (getUser(), Router.push("/"))
        : (reset(error.message), console.log(error.message));
        };

        

    setValidated(true);
  };


  return (

    <Register>

      <Container className='d-flex flex-column justify-content-center align-content-center align-items-center' style={{ height: "90vh" }} >

        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <h1 className='mb-4'>Accede a Recycling</h1>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantener sesión iniciada" />
          </Form.Group>
          <Button style={{ width: "100%" }} variant="primary" type="submit" className='mb-3'>
            Submit
          </Button>
          <Link href="./forget" style={{ width: "100%" }} className='d-flex justify-content-center ' >
            Olvidé mi contraseña
          </Link>
        </Form>

      </Container>
    </Register>
  );
}