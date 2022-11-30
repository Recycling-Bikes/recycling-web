
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsPersonCircle} from 'react-icons/bs';
import {FiShoppingCart} from 'react-icons/fi';
import {BiSearchAlt} from 'react-icons/bi';
import UserContext from 'context/User/UserContext';
import React, { useState , useContext, useEffect } from 'react';
import User from './user';




 

export default function NavB({}) {

  const {getUser, user} = useContext(UserContext)
  useEffect(()=>{
    getUser()
  },[getUser])



  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className='hover-custom shadow-sm'>
      <Container>


        <Navbar.Brand href="/">
            <Image
              src="/recycling.png"
              width="60"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto flex-fill">

          </Nav>

          <Nav className="me-auto flex-fill">
            <NavDropdown title="Comprar" id="collasible-nav-dropdown">

              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Another actio</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

            </NavDropdown>


            <NavDropdown title="Vender" id="collasible-nav-dropdown">

              <NavDropdown.Item href="/vender">vender h1</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link className='' href="#features">Aparta tu bici</Nav.Link>

            <Nav.Link href="#pricing">Lista de espera</Nav.Link>

          </Nav>

          <Nav>
            <Nav.Link href="#deets" ><BiSearchAlt size={23} /> </Nav.Link>
            <Nav.Link href="#deets" ><FiShoppingCart size={22}/> </Nav.Link>
            {user ? <User /> 
            : <Nav.Link href="/form/singin" className='text-primary'><BsPersonCircle /> Acceder</Nav.Link>}
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


