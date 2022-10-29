import Image from 'next/image';
import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MDBIcon } from 'mdb-react-ui-kit';

function NavB() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='hover-custom sticky-top'>
      
      <Container >


        <Navbar.Brand href="#home">
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

              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link className='' href="#features">Aparta tu bici</Nav.Link>

            <Nav.Link href="#pricing">Lista de espera</Nav.Link>

          </Nav>

          <Nav>
            <Nav.Link href="#deets" ><MDBIcon fas icon="search" /></Nav.Link>
            <Nav.Link href="#deets" ><MDBIcon fas icon="shopping-cart" /></Nav.Link>
            <Nav.Link href="#deets" className='text-primary'><MDBIcon far icon="user-circle" /> Acceder</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;